#!/usr/bin/env node
/**
 * @file A tool that fixes the flowgen-generated Flow type annotations so that
 * all the interfaces are exact types.
 * @flow
 */
'use strict';

const fs = require('fs');

// Declaration regex.
const multiLineDeclarationRegex = new RegExp(
  '^declare type (\\S+) = \\{$(.*?)^\\}',
  'smg',
);
const singleLineDeclarationRegex = new RegExp(
  '^declare type (\\S+) = \\{\\s*\\}',
  'mg',
);

exports.main = function (args /*: string[] */) {
  const stdinBuffer = fs
    .readFileSync(0, 'utf-8')
    .replace(multiLineDeclarationRegex, (match, name, contents) => {
      return `declare type ${name} = {|${contents}|}`;
    })
    .replace(singleLineDeclarationRegex, (match, name) => {
      return `declare type ${name} = {||}`;
    });
  fs.writeSync(1, stdinBuffer);
};

exports.main(process.argv);
