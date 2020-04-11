Read the docs here http://protodoc.turbio.repl.co

This repository acts as a source of truth for the protocol definitions. Contains language bindings and the language packages.

## Packages

### JavaScript
Installation:

`npm install -s @replit/protocol@latest`

You probably want to use Crosis Client https://github.com/replit/crosis/

### Go
Installation:

`go get github.com/replit/protocol-go`

https://github.com/replit/protocol-go is a mirror because go requires modules to be on the root

## Contributing

### Prequisits
- `node`
- `npm`
- `go`
- `protoc`
- `protoc-gen-go`

### Updating the protos

Update the `api.proto`, then run `make clean && make build`. You can checkout the rest of the `make` commands.

To test out your changes you build the packages and use . For example using `npm link`

### Publishing

Just do `make all`. You need write access to the relative publishing repositories for each language (i.e. npm/github).


