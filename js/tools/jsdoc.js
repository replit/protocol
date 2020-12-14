#!/usr/bin/env node
/**
 * @file A tool that fixes the pbjs-generated JSDoc annotations so that it can
 * produce sound TypeScript and Flow type declarations.
 * @flow
 */
'use strict';

const fs = require('fs');

// The regex that matches a JSDoc comment.
const commentRegex = new RegExp('/\\*\\*([^*]|\\*[^/])*\\*/', 'smg');

// The regex that matches an `@interface` JSDoc line.
const interfaceRegex = new RegExp('@interface\\s+(\\S+)\\s*');

// The regex that matches an `@implements` JSDoc line.
const implementsRegex = new RegExp('.*@implements\\b.+\n');

// The regex that matches a `@memberof` JSDoc line.
const memberofRegex = new RegExp('@memberof\\s+(.*)\\s*');

// The regex that matches a `@property` JSDoc line.
const propertyRegex = new RegExp('@property\\s+\\{([^}]+)\\}', 'g');

// The regex that matches a proto repeated field type.
const arrayTypeRegex = new RegExp('^Array\\.<(.+)>$');

// The regex that matches a proto map field type.
const mapTypeRegex = new RegExp('^Object\\.<string,(.+)>$');

/**
 * Fixes a property type in an interface declaration.
 *
 * This does one of the following transformations:
 *
 * - For primitive types (number, boolean, etc.), it leaves the type as-is.
 * - For repeated types, it recursively fixes the type of the elements of the
 *   array.
 * - For map types, it recursively fixes the type of the values of the map.
 * - For message types, it allows both the concrete message (with all the
 *   fields filled in) as well as the abstract interface (that allows for all
 *   fields to be optional, in accordance with proto3 semantics).
 *
 * @param {string} typeName the name of the property.
 * @param {Set<string>} interfaces the declared interfaces in this file
 * @returns {string} the fixed property type.
 */
function fixPropertyType(typeName, interfaces) {
  switch (typeName) {
    case 'number':
    case 'boolean':
    case 'string':
    case 'Uint8Array':
    case 'null':
      return typeName;
  }

  // proto repeated fields.
  let match = arrayTypeRegex.exec(typeName);
  if (match !== null) {
    return `Array.<${fixPropertyType(match[1], interfaces)}>`;
  }

  // proto map fields.
  match = mapTypeRegex.exec(typeName);
  if (match !== null) {
    return `Object.<string,${fixPropertyType(match[1], interfaces)}>`;
  }

  // This is now a dot-separated fully qualified type name.
  const tokens = typeName.split('.');
  tokens[tokens.length - 1] = 'I' + tokens[tokens.length - 1];
  const interfaceName = tokens.join('.');
  if (!interfaces.has(interfaceName)) {
    return typeName;
  }
  return `${typeName}|${tokens.join('.')}`;
}

/**
 * Fixes JSDoc declarations. For concrete message declarations, it removes
 * @implements annotations that break the soundness of the type system, and for
 * interface message declarations, it allows for all message types to be either
 * the concrete message type or the abstract interface one.
 *
 * @param {string} jsDoc the contents of a JSDoc
 * @param {Set<string>} interfaces the declared interfaces in this file
 * @returns {string} the fixed JSDoc.
 */
function fixJsDoc(jsDoc, interfaces) {
  if (jsDoc.indexOf('@interface') !== -1) {
    // This is an interface declaration.
    jsDoc = jsDoc.replace(propertyRegex, (match, property) => {
      const options = property
        .split('|')
        .map((property) => fixPropertyType(property, interfaces))
        .join('|');
      return `@property {${options}}`;
    });
  } else {
    // This is a class declaration.

    // Remove any @implements annotations.
    jsDoc = jsDoc.replace(implementsRegex, '');
  }
  return jsDoc;
}

exports.main = function (args /*: string[] */) {
  const stdinBuffer = fs.readFileSync(0, 'utf-8');

  const interfaces /*: Set<string> */ = new Set();
  while (true) {
    const match = commentRegex.exec(stdinBuffer);
    if (match === null) {
      break;
    }
    const jsDoc = match[0];
    const memberofMatch = memberofRegex.exec(jsDoc);
    const interfaceMatch = interfaceRegex.exec(jsDoc);
    if (memberofMatch === null || interfaceMatch === null) {
      continue;
    }
    interfaces.add(`${memberofMatch[1]}.${interfaceMatch[1]}`);
  }

  const chunks = [];
  let lastIndex = 0;
  while (true) {
    const match = commentRegex.exec(stdinBuffer);
    if (match === null) {
      break;
    }
    chunks.push(stdinBuffer.slice(lastIndex, match.index));
    chunks.push(fixJsDoc(match[0], interfaces));
    lastIndex = match.index + match[0].length;
  }
  chunks.push(stdinBuffer.slice(lastIndex));

  // Finally, replace all `.create()` `new` invocations with a `.fromObject()`.
  // This is needed because protobufjs does not validate properties or create
  // instance objects when creating message types through `new`, but does so
  // through `.fromObject()`. Now, the downside of requiring people calling
  // `.fromObject()` is that it imposes no requirements on the type of its
  // argument (just that it's an object!), whereas `.create()` does require
  // that the argument is an interface.
  //
  // So this brings us the best of both worlds: `.create()` still has the right
  // types and creates fully reified objects, with the correct types all across
  // the board.
  const finalSource = chunks
    .join('')
    .replace(
      /(function create\(properties\)\s+{\n\s*)return new (\S+)(\(.*;\n\s*};)/gm,
      (match, prelude, className, postlude) =>
        `${prelude}return ${className}.fromObject${postlude}`,
    );

  fs.writeSync(1, finalSource);
};

exports.main(process.argv);
