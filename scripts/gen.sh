#!/bin/sh

set -e

export PATH="${PATH}:./node_modules/.bin"
export TARGET="${TARGET:-./index}"

mkdir -p "$(dirname "${TARGET}")"

pbjs \
    --force-number \
    --force-message \
    -t static-module \
    -w default \
    -o "${TARGET}.js" \
    --root "${TARGET}" \
    "$@"

./tools/jsdoc.js <"${TARGET}.js" >"${TARGET}.tmp.js"

mv "${TARGET}.tmp.js" "${TARGET}.js"

pbts -o "${TARGET}.d.ts" "${TARGET}.js"

sed -i.bak 's/constructor(/private constructor(/' "${TARGET}.d.ts"

rm -f "${TARGET}.d.ts.bak"
flowgen \
    --interface-records \
    --no-inexact \
    --add-flow-header \
    --output-file "${TARGET}.js.flow" "${TARGET}.d.ts"

sed -i.bak 's/declare var api: typeof npm\$namespace\$api;/export var api = npm$namespace$api;/' "${TARGET}.js.flow"
rm -f "${TARGET}.js.flow.bak"
