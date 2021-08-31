⚠️ This repo is no longer up to date, the package has been moved into the goval repo. We will look into open sourcing this when we open up our protocol/API, the package will remain up to date on NPM ⚠️

###

Read the docs here http://protodoc.turbio.repl.co

This repository acts as a source of truth for the protocol definitions. Contains the npm package and JavaScript language bindings.

## Packages

Installation:

`npm install -s @replit/protocol@latest`

You probably want to use Crosis Client https://github.com/replit/crosis/

## Contributing

### Prerequisites
- `node`
- `npm`

### Updating the protos

Update `api.proto` and/or `client.proto`, then run `make clean && make build`. You can checkout the rest of the `make` commands.

To test out your changes you can build and use the packages locally. For example via `npm link`

### Publishing

Run `make all`. Make sure you have write access to the Replit npm org.

