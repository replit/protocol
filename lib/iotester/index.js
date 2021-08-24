/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["./iotester/index"] || ($protobuf.roots["./iotester/index"] = {});
    
    $root.api = (function() {
    
        /**
         * Namespace api.
         * @exports api
         * @namespace
         */
        var api = {};
    
        api.Payload = (function() {
    
            /**
             * Properties of a Payload.
             * @memberof api
             * @interface IPayload
             * @property {api.RunInfo|api.IRunInfo|null} [runInfo] Payload runInfo
             * @property {Array.<api.Test|api.ITest>|null} [tests] Payload tests
             */
    
            /**
             * Constructs a new Payload.
             * @memberof api
             * @classdesc Represents a Payload.
             * @constructor
             * @param {api.IPayload=} [properties] Properties to set
             */
            function Payload(properties) {
                this.tests = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Payload runInfo.
             * @member {api.RunInfo|null|undefined} runInfo
             * @memberof api.Payload
             * @instance
             */
            Payload.prototype.runInfo = null;
    
            /**
             * Payload tests.
             * @member {Array.<api.Test>} tests
             * @memberof api.Payload
             * @instance
             */
            Payload.prototype.tests = $util.emptyArray;
    
            /**
             * Creates a new Payload instance using the specified properties.
             * @function create
             * @memberof api.Payload
             * @static
             * @param {api.IPayload=} [properties] Properties to set
             * @returns {api.Payload} Payload instance
             */
            Payload.create = function create(properties) {
                return Payload.fromObject(properties);
            };
    
            /**
             * Encodes the specified Payload message. Does not implicitly {@link api.Payload.verify|verify} messages.
             * @function encode
             * @memberof api.Payload
             * @static
             * @param {api.Payload} message Payload message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Payload.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.runInfo != null && Object.hasOwnProperty.call(message, "runInfo"))
                    $root.api.RunInfo.encode(message.runInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.tests != null && message.tests.length)
                    for (var i = 0; i < message.tests.length; ++i)
                        $root.api.Test.encode(message.tests[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Payload message, length delimited. Does not implicitly {@link api.Payload.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.Payload
             * @static
             * @param {api.Payload} message Payload message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Payload.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Payload message from the specified reader or buffer.
             * @function decode
             * @memberof api.Payload
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.Payload} Payload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Payload.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Payload();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.runInfo = $root.api.RunInfo.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.tests && message.tests.length))
                            message.tests = [];
                        message.tests.push($root.api.Test.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Payload message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.Payload
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.Payload} Payload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Payload.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Payload message.
             * @function verify
             * @memberof api.Payload
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Payload.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.runInfo != null && message.hasOwnProperty("runInfo")) {
                    var error = $root.api.RunInfo.verify(message.runInfo);
                    if (error)
                        return "runInfo." + error;
                }
                if (message.tests != null && message.hasOwnProperty("tests")) {
                    if (!Array.isArray(message.tests))
                        return "tests: array expected";
                    for (var i = 0; i < message.tests.length; ++i) {
                        var error = $root.api.Test.verify(message.tests[i]);
                        if (error)
                            return "tests." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Payload message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.Payload
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.Payload} Payload
             */
            Payload.fromObject = function fromObject(object) {
                if (object instanceof $root.api.Payload)
                    return object;
                var message = new $root.api.Payload();
                if (object.runInfo != null) {
                    if (typeof object.runInfo !== "object")
                        throw TypeError(".api.Payload.runInfo: object expected");
                    message.runInfo = $root.api.RunInfo.fromObject(object.runInfo);
                }
                if (object.tests) {
                    if (!Array.isArray(object.tests))
                        throw TypeError(".api.Payload.tests: array expected");
                    message.tests = [];
                    for (var i = 0; i < object.tests.length; ++i) {
                        if (typeof object.tests[i] !== "object")
                            throw TypeError(".api.Payload.tests: object expected");
                        message.tests[i] = $root.api.Test.fromObject(object.tests[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Payload message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.Payload
             * @static
             * @param {api.Payload} message Payload
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Payload.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tests = [];
                if (options.defaults)
                    object.runInfo = null;
                if (message.runInfo != null && message.hasOwnProperty("runInfo"))
                    object.runInfo = $root.api.RunInfo.toObject(message.runInfo, options);
                if (message.tests && message.tests.length) {
                    object.tests = [];
                    for (var j = 0; j < message.tests.length; ++j)
                        object.tests[j] = $root.api.Test.toObject(message.tests[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Payload to JSON.
             * @function toJSON
             * @memberof api.Payload
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Payload.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Payload;
        })();
    
        api.SysCommand = (function() {
    
            /**
             * Properties of a SysCommand.
             * @memberof api
             * @interface ISysCommand
             * @property {Array.<string>|null} [args] SysCommand args
             * @property {Object.<string,string>|null} [env] SysCommand env
             */
    
            /**
             * Constructs a new SysCommand.
             * @memberof api
             * @classdesc Represents a SysCommand.
             * @constructor
             * @param {api.ISysCommand=} [properties] Properties to set
             */
            function SysCommand(properties) {
                this.args = [];
                this.env = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SysCommand args.
             * @member {Array.<string>} args
             * @memberof api.SysCommand
             * @instance
             */
            SysCommand.prototype.args = $util.emptyArray;
    
            /**
             * SysCommand env.
             * @member {Object.<string,string>} env
             * @memberof api.SysCommand
             * @instance
             */
            SysCommand.prototype.env = $util.emptyObject;
    
            /**
             * Creates a new SysCommand instance using the specified properties.
             * @function create
             * @memberof api.SysCommand
             * @static
             * @param {api.ISysCommand=} [properties] Properties to set
             * @returns {api.SysCommand} SysCommand instance
             */
            SysCommand.create = function create(properties) {
                return SysCommand.fromObject(properties);
            };
    
            /**
             * Encodes the specified SysCommand message. Does not implicitly {@link api.SysCommand.verify|verify} messages.
             * @function encode
             * @memberof api.SysCommand
             * @static
             * @param {api.SysCommand} message SysCommand message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SysCommand.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.args != null && message.args.length)
                    for (var i = 0; i < message.args.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.args[i]);
                if (message.env != null && Object.hasOwnProperty.call(message, "env"))
                    for (var keys = Object.keys(message.env), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.env[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified SysCommand message, length delimited. Does not implicitly {@link api.SysCommand.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.SysCommand
             * @static
             * @param {api.SysCommand} message SysCommand message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SysCommand.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SysCommand message from the specified reader or buffer.
             * @function decode
             * @memberof api.SysCommand
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.SysCommand} SysCommand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SysCommand.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.SysCommand(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.args && message.args.length))
                            message.args = [];
                        message.args.push(reader.string());
                        break;
                    case 2:
                        if (message.env === $util.emptyObject)
                            message.env = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.env[key] = value;
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SysCommand message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.SysCommand
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.SysCommand} SysCommand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SysCommand.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SysCommand message.
             * @function verify
             * @memberof api.SysCommand
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SysCommand.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.args != null && message.hasOwnProperty("args")) {
                    if (!Array.isArray(message.args))
                        return "args: array expected";
                    for (var i = 0; i < message.args.length; ++i)
                        if (!$util.isString(message.args[i]))
                            return "args: string[] expected";
                }
                if (message.env != null && message.hasOwnProperty("env")) {
                    if (!$util.isObject(message.env))
                        return "env: object expected";
                    var key = Object.keys(message.env);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.env[key[i]]))
                            return "env: string{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates a SysCommand message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.SysCommand
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.SysCommand} SysCommand
             */
            SysCommand.fromObject = function fromObject(object) {
                if (object instanceof $root.api.SysCommand)
                    return object;
                var message = new $root.api.SysCommand();
                if (object.args) {
                    if (!Array.isArray(object.args))
                        throw TypeError(".api.SysCommand.args: array expected");
                    message.args = [];
                    for (var i = 0; i < object.args.length; ++i)
                        message.args[i] = String(object.args[i]);
                }
                if (object.env) {
                    if (typeof object.env !== "object")
                        throw TypeError(".api.SysCommand.env: object expected");
                    message.env = {};
                    for (var keys = Object.keys(object.env), i = 0; i < keys.length; ++i)
                        message.env[keys[i]] = String(object.env[keys[i]]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SysCommand message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.SysCommand
             * @static
             * @param {api.SysCommand} message SysCommand
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SysCommand.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.args = [];
                if (options.objects || options.defaults)
                    object.env = {};
                if (message.args && message.args.length) {
                    object.args = [];
                    for (var j = 0; j < message.args.length; ++j)
                        object.args[j] = message.args[j];
                }
                var keys2;
                if (message.env && (keys2 = Object.keys(message.env)).length) {
                    object.env = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.env[keys2[j]] = message.env[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this SysCommand to JSON.
             * @function toJSON
             * @memberof api.SysCommand
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SysCommand.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SysCommand;
        })();
    
        api.RunInfo = (function() {
    
            /**
             * Properties of a RunInfo.
             * @memberof api
             * @interface IRunInfo
             * @property {api.SysCommand|api.ISysCommand|null} [buildCommand] RunInfo buildCommand
             * @property {api.SysCommand|api.ISysCommand|null} [execCommand] RunInfo execCommand
             */
    
            /**
             * Constructs a new RunInfo.
             * @memberof api
             * @classdesc Represents a RunInfo.
             * @constructor
             * @param {api.IRunInfo=} [properties] Properties to set
             */
            function RunInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RunInfo buildCommand.
             * @member {api.SysCommand|null|undefined} buildCommand
             * @memberof api.RunInfo
             * @instance
             */
            RunInfo.prototype.buildCommand = null;
    
            /**
             * RunInfo execCommand.
             * @member {api.SysCommand|null|undefined} execCommand
             * @memberof api.RunInfo
             * @instance
             */
            RunInfo.prototype.execCommand = null;
    
            /**
             * Creates a new RunInfo instance using the specified properties.
             * @function create
             * @memberof api.RunInfo
             * @static
             * @param {api.IRunInfo=} [properties] Properties to set
             * @returns {api.RunInfo} RunInfo instance
             */
            RunInfo.create = function create(properties) {
                return RunInfo.fromObject(properties);
            };
    
            /**
             * Encodes the specified RunInfo message. Does not implicitly {@link api.RunInfo.verify|verify} messages.
             * @function encode
             * @memberof api.RunInfo
             * @static
             * @param {api.RunInfo} message RunInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buildCommand != null && Object.hasOwnProperty.call(message, "buildCommand"))
                    $root.api.SysCommand.encode(message.buildCommand, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.execCommand != null && Object.hasOwnProperty.call(message, "execCommand"))
                    $root.api.SysCommand.encode(message.execCommand, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified RunInfo message, length delimited. Does not implicitly {@link api.RunInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.RunInfo
             * @static
             * @param {api.RunInfo} message RunInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RunInfo message from the specified reader or buffer.
             * @function decode
             * @memberof api.RunInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.RunInfo} RunInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.RunInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buildCommand = $root.api.SysCommand.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.execCommand = $root.api.SysCommand.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RunInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.RunInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.RunInfo} RunInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RunInfo message.
             * @function verify
             * @memberof api.RunInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RunInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.buildCommand != null && message.hasOwnProperty("buildCommand")) {
                    var error = $root.api.SysCommand.verify(message.buildCommand);
                    if (error)
                        return "buildCommand." + error;
                }
                if (message.execCommand != null && message.hasOwnProperty("execCommand")) {
                    var error = $root.api.SysCommand.verify(message.execCommand);
                    if (error)
                        return "execCommand." + error;
                }
                return null;
            };
    
            /**
             * Creates a RunInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.RunInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.RunInfo} RunInfo
             */
            RunInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.api.RunInfo)
                    return object;
                var message = new $root.api.RunInfo();
                if (object.buildCommand != null) {
                    if (typeof object.buildCommand !== "object")
                        throw TypeError(".api.RunInfo.buildCommand: object expected");
                    message.buildCommand = $root.api.SysCommand.fromObject(object.buildCommand);
                }
                if (object.execCommand != null) {
                    if (typeof object.execCommand !== "object")
                        throw TypeError(".api.RunInfo.execCommand: object expected");
                    message.execCommand = $root.api.SysCommand.fromObject(object.execCommand);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a RunInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.RunInfo
             * @static
             * @param {api.RunInfo} message RunInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RunInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.buildCommand = null;
                    object.execCommand = null;
                }
                if (message.buildCommand != null && message.hasOwnProperty("buildCommand"))
                    object.buildCommand = $root.api.SysCommand.toObject(message.buildCommand, options);
                if (message.execCommand != null && message.hasOwnProperty("execCommand"))
                    object.execCommand = $root.api.SysCommand.toObject(message.execCommand, options);
                return object;
            };
    
            /**
             * Converts this RunInfo to JSON.
             * @function toJSON
             * @memberof api.RunInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RunInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RunInfo;
        })();
    
        api.Test = (function() {
    
            /**
             * Properties of a Test.
             * @memberof api
             * @interface ITest
             * @property {number|null} [id] Test id
             * @property {Array.<api.Instruction|api.IInstruction>|null} [instructions] Test instructions
             */
    
            /**
             * Constructs a new Test.
             * @memberof api
             * @classdesc Represents a Test.
             * @constructor
             * @param {api.ITest=} [properties] Properties to set
             */
            function Test(properties) {
                this.instructions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Test id.
             * @member {number} id
             * @memberof api.Test
             * @instance
             */
            Test.prototype.id = 0;
    
            /**
             * Test instructions.
             * @member {Array.<api.Instruction>} instructions
             * @memberof api.Test
             * @instance
             */
            Test.prototype.instructions = $util.emptyArray;
    
            /**
             * Creates a new Test instance using the specified properties.
             * @function create
             * @memberof api.Test
             * @static
             * @param {api.ITest=} [properties] Properties to set
             * @returns {api.Test} Test instance
             */
            Test.create = function create(properties) {
                return Test.fromObject(properties);
            };
    
            /**
             * Encodes the specified Test message. Does not implicitly {@link api.Test.verify|verify} messages.
             * @function encode
             * @memberof api.Test
             * @static
             * @param {api.Test} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.instructions != null && message.instructions.length)
                    for (var i = 0; i < message.instructions.length; ++i)
                        $root.api.Instruction.encode(message.instructions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Test message, length delimited. Does not implicitly {@link api.Test.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.Test
             * @static
             * @param {api.Test} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Test message from the specified reader or buffer.
             * @function decode
             * @memberof api.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Test();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        if (!(message.instructions && message.instructions.length))
                            message.instructions = [];
                        message.instructions.push($root.api.Instruction.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Test message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Test message.
             * @function verify
             * @memberof api.Test
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Test.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.instructions != null && message.hasOwnProperty("instructions")) {
                    if (!Array.isArray(message.instructions))
                        return "instructions: array expected";
                    for (var i = 0; i < message.instructions.length; ++i) {
                        var error = $root.api.Instruction.verify(message.instructions[i]);
                        if (error)
                            return "instructions." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Test message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.Test
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.Test} Test
             */
            Test.fromObject = function fromObject(object) {
                if (object instanceof $root.api.Test)
                    return object;
                var message = new $root.api.Test();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.instructions) {
                    if (!Array.isArray(object.instructions))
                        throw TypeError(".api.Test.instructions: array expected");
                    message.instructions = [];
                    for (var i = 0; i < object.instructions.length; ++i) {
                        if (typeof object.instructions[i] !== "object")
                            throw TypeError(".api.Test.instructions: object expected");
                        message.instructions[i] = $root.api.Instruction.fromObject(object.instructions[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Test message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.Test
             * @static
             * @param {api.Test} message Test
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Test.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.instructions = [];
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.instructions && message.instructions.length) {
                    object.instructions = [];
                    for (var j = 0; j < message.instructions.length; ++j)
                        object.instructions[j] = $root.api.Instruction.toObject(message.instructions[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Test to JSON.
             * @function toJSON
             * @memberof api.Test
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Test.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Test;
        })();
    
        api.Instruction = (function() {
    
            /**
             * Properties of an Instruction.
             * @memberof api
             * @interface IInstruction
             * @property {number|null} [id] Instruction id
             * @property {api.InputInstruction|api.IInputInstruction|null} [input] Instruction input
             * @property {api.OutputInstruction|api.IOutputInstruction|null} [output] Instruction output
             */
    
            /**
             * Constructs a new Instruction.
             * @memberof api
             * @classdesc Represents an Instruction.
             * @constructor
             * @param {api.IInstruction=} [properties] Properties to set
             */
            function Instruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Instruction id.
             * @member {number} id
             * @memberof api.Instruction
             * @instance
             */
            Instruction.prototype.id = 0;
    
            /**
             * Instruction input.
             * @member {api.InputInstruction|null|undefined} input
             * @memberof api.Instruction
             * @instance
             */
            Instruction.prototype.input = null;
    
            /**
             * Instruction output.
             * @member {api.OutputInstruction|null|undefined} output
             * @memberof api.Instruction
             * @instance
             */
            Instruction.prototype.output = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Instruction body.
             * @member {"input"|"output"|undefined} body
             * @memberof api.Instruction
             * @instance
             */
            Object.defineProperty(Instruction.prototype, "body", {
                get: $util.oneOfGetter($oneOfFields = ["input", "output"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Instruction instance using the specified properties.
             * @function create
             * @memberof api.Instruction
             * @static
             * @param {api.IInstruction=} [properties] Properties to set
             * @returns {api.Instruction} Instruction instance
             */
            Instruction.create = function create(properties) {
                return Instruction.fromObject(properties);
            };
    
            /**
             * Encodes the specified Instruction message. Does not implicitly {@link api.Instruction.verify|verify} messages.
             * @function encode
             * @memberof api.Instruction
             * @static
             * @param {api.Instruction} message Instruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                    $root.api.InputInstruction.encode(message.input, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                    $root.api.OutputInstruction.encode(message.output, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Instruction message, length delimited. Does not implicitly {@link api.Instruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.Instruction
             * @static
             * @param {api.Instruction} message Instruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Instruction message from the specified reader or buffer.
             * @function decode
             * @memberof api.Instruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.Instruction} Instruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Instruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.input = $root.api.InputInstruction.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.output = $root.api.OutputInstruction.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Instruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.Instruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.Instruction} Instruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Instruction message.
             * @function verify
             * @memberof api.Instruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Instruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.input != null && message.hasOwnProperty("input")) {
                    properties.body = 1;
                    {
                        var error = $root.api.InputInstruction.verify(message.input);
                        if (error)
                            return "input." + error;
                    }
                }
                if (message.output != null && message.hasOwnProperty("output")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.api.OutputInstruction.verify(message.output);
                        if (error)
                            return "output." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates an Instruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.Instruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.Instruction} Instruction
             */
            Instruction.fromObject = function fromObject(object) {
                if (object instanceof $root.api.Instruction)
                    return object;
                var message = new $root.api.Instruction();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.input != null) {
                    if (typeof object.input !== "object")
                        throw TypeError(".api.Instruction.input: object expected");
                    message.input = $root.api.InputInstruction.fromObject(object.input);
                }
                if (object.output != null) {
                    if (typeof object.output !== "object")
                        throw TypeError(".api.Instruction.output: object expected");
                    message.output = $root.api.OutputInstruction.fromObject(object.output);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Instruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.Instruction
             * @static
             * @param {api.Instruction} message Instruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Instruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.input != null && message.hasOwnProperty("input")) {
                    object.input = $root.api.InputInstruction.toObject(message.input, options);
                    if (options.oneofs)
                        object.body = "input";
                }
                if (message.output != null && message.hasOwnProperty("output")) {
                    object.output = $root.api.OutputInstruction.toObject(message.output, options);
                    if (options.oneofs)
                        object.body = "output";
                }
                return object;
            };
    
            /**
             * Converts this Instruction to JSON.
             * @function toJSON
             * @memberof api.Instruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Instruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Instruction;
        })();
    
        api.InputInstruction = (function() {
    
            /**
             * Properties of an InputInstruction.
             * @memberof api
             * @interface IInputInstruction
             * @property {string|null} [input] InputInstruction input
             */
    
            /**
             * Constructs a new InputInstruction.
             * @memberof api
             * @classdesc Represents an InputInstruction.
             * @constructor
             * @param {api.IInputInstruction=} [properties] Properties to set
             */
            function InputInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * InputInstruction input.
             * @member {string} input
             * @memberof api.InputInstruction
             * @instance
             */
            InputInstruction.prototype.input = "";
    
            /**
             * Creates a new InputInstruction instance using the specified properties.
             * @function create
             * @memberof api.InputInstruction
             * @static
             * @param {api.IInputInstruction=} [properties] Properties to set
             * @returns {api.InputInstruction} InputInstruction instance
             */
            InputInstruction.create = function create(properties) {
                return InputInstruction.fromObject(properties);
            };
    
            /**
             * Encodes the specified InputInstruction message. Does not implicitly {@link api.InputInstruction.verify|verify} messages.
             * @function encode
             * @memberof api.InputInstruction
             * @static
             * @param {api.InputInstruction} message InputInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InputInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.input);
                return writer;
            };
    
            /**
             * Encodes the specified InputInstruction message, length delimited. Does not implicitly {@link api.InputInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.InputInstruction
             * @static
             * @param {api.InputInstruction} message InputInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InputInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an InputInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof api.InputInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.InputInstruction} InputInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InputInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.InputInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.input = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an InputInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.InputInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.InputInstruction} InputInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InputInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an InputInstruction message.
             * @function verify
             * @memberof api.InputInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InputInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.input != null && message.hasOwnProperty("input"))
                    if (!$util.isString(message.input))
                        return "input: string expected";
                return null;
            };
    
            /**
             * Creates an InputInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.InputInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.InputInstruction} InputInstruction
             */
            InputInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.api.InputInstruction)
                    return object;
                var message = new $root.api.InputInstruction();
                if (object.input != null)
                    message.input = String(object.input);
                return message;
            };
    
            /**
             * Creates a plain object from an InputInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.InputInstruction
             * @static
             * @param {api.InputInstruction} message InputInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InputInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.input = "";
                if (message.input != null && message.hasOwnProperty("input"))
                    object.input = message.input;
                return object;
            };
    
            /**
             * Converts this InputInstruction to JSON.
             * @function toJSON
             * @memberof api.InputInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InputInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return InputInstruction;
        })();
    
        api.OutputInstruction = (function() {
    
            /**
             * Properties of an OutputInstruction.
             * @memberof api
             * @interface IOutputInstruction
             * @property {google.protobuf.Duration|google.protobuf.IDuration|null} [timeout] OutputInstruction timeout
             * @property {api.RegexMatchOptions|api.IRegexMatchOptions|null} [regex] OutputInstruction regex
             * @property {api.ExactMatchOptions|api.IExactMatchOptions|null} [exact] OutputInstruction exact
             * @property {api.MatchMatchOptions|api.IMatchMatchOptions|null} [match] OutputInstruction match
             * @property {api.CompatibilityMatchOptions|api.ICompatibilityMatchOptions|null} [compatibility] OutputInstruction compatibility
             */
    
            /**
             * Constructs a new OutputInstruction.
             * @memberof api
             * @classdesc Represents an OutputInstruction.
             * @constructor
             * @param {api.IOutputInstruction=} [properties] Properties to set
             */
            function OutputInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OutputInstruction timeout.
             * @member {google.protobuf.Duration|null|undefined} timeout
             * @memberof api.OutputInstruction
             * @instance
             */
            OutputInstruction.prototype.timeout = null;
    
            /**
             * OutputInstruction regex.
             * @member {api.RegexMatchOptions|null|undefined} regex
             * @memberof api.OutputInstruction
             * @instance
             */
            OutputInstruction.prototype.regex = null;
    
            /**
             * OutputInstruction exact.
             * @member {api.ExactMatchOptions|null|undefined} exact
             * @memberof api.OutputInstruction
             * @instance
             */
            OutputInstruction.prototype.exact = null;
    
            /**
             * OutputInstruction match.
             * @member {api.MatchMatchOptions|null|undefined} match
             * @memberof api.OutputInstruction
             * @instance
             */
            OutputInstruction.prototype.match = null;
    
            /**
             * OutputInstruction compatibility.
             * @member {api.CompatibilityMatchOptions|null|undefined} compatibility
             * @memberof api.OutputInstruction
             * @instance
             */
            OutputInstruction.prototype.compatibility = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * OutputInstruction matchOptions.
             * @member {"regex"|"exact"|"match"|"compatibility"|undefined} matchOptions
             * @memberof api.OutputInstruction
             * @instance
             */
            Object.defineProperty(OutputInstruction.prototype, "matchOptions", {
                get: $util.oneOfGetter($oneOfFields = ["regex", "exact", "match", "compatibility"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new OutputInstruction instance using the specified properties.
             * @function create
             * @memberof api.OutputInstruction
             * @static
             * @param {api.IOutputInstruction=} [properties] Properties to set
             * @returns {api.OutputInstruction} OutputInstruction instance
             */
            OutputInstruction.create = function create(properties) {
                return OutputInstruction.fromObject(properties);
            };
    
            /**
             * Encodes the specified OutputInstruction message. Does not implicitly {@link api.OutputInstruction.verify|verify} messages.
             * @function encode
             * @memberof api.OutputInstruction
             * @static
             * @param {api.OutputInstruction} message OutputInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OutputInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                    $root.google.protobuf.Duration.encode(message.timeout, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.regex != null && Object.hasOwnProperty.call(message, "regex"))
                    $root.api.RegexMatchOptions.encode(message.regex, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.exact != null && Object.hasOwnProperty.call(message, "exact"))
                    $root.api.ExactMatchOptions.encode(message.exact, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.match != null && Object.hasOwnProperty.call(message, "match"))
                    $root.api.MatchMatchOptions.encode(message.match, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.compatibility != null && Object.hasOwnProperty.call(message, "compatibility"))
                    $root.api.CompatibilityMatchOptions.encode(message.compatibility, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified OutputInstruction message, length delimited. Does not implicitly {@link api.OutputInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.OutputInstruction
             * @static
             * @param {api.OutputInstruction} message OutputInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OutputInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OutputInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof api.OutputInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.OutputInstruction} OutputInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OutputInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.OutputInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.timeout = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.regex = $root.api.RegexMatchOptions.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.exact = $root.api.ExactMatchOptions.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.match = $root.api.MatchMatchOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.compatibility = $root.api.CompatibilityMatchOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OutputInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.OutputInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.OutputInstruction} OutputInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OutputInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OutputInstruction message.
             * @function verify
             * @memberof api.OutputInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OutputInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.timeout != null && message.hasOwnProperty("timeout")) {
                    var error = $root.google.protobuf.Duration.verify(message.timeout);
                    if (error)
                        return "timeout." + error;
                }
                if (message.regex != null && message.hasOwnProperty("regex")) {
                    properties.matchOptions = 1;
                    {
                        var error = $root.api.RegexMatchOptions.verify(message.regex);
                        if (error)
                            return "regex." + error;
                    }
                }
                if (message.exact != null && message.hasOwnProperty("exact")) {
                    if (properties.matchOptions === 1)
                        return "matchOptions: multiple values";
                    properties.matchOptions = 1;
                    {
                        var error = $root.api.ExactMatchOptions.verify(message.exact);
                        if (error)
                            return "exact." + error;
                    }
                }
                if (message.match != null && message.hasOwnProperty("match")) {
                    if (properties.matchOptions === 1)
                        return "matchOptions: multiple values";
                    properties.matchOptions = 1;
                    {
                        var error = $root.api.MatchMatchOptions.verify(message.match);
                        if (error)
                            return "match." + error;
                    }
                }
                if (message.compatibility != null && message.hasOwnProperty("compatibility")) {
                    if (properties.matchOptions === 1)
                        return "matchOptions: multiple values";
                    properties.matchOptions = 1;
                    {
                        var error = $root.api.CompatibilityMatchOptions.verify(message.compatibility);
                        if (error)
                            return "compatibility." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates an OutputInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.OutputInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.OutputInstruction} OutputInstruction
             */
            OutputInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.api.OutputInstruction)
                    return object;
                var message = new $root.api.OutputInstruction();
                if (object.timeout != null) {
                    if (typeof object.timeout !== "object")
                        throw TypeError(".api.OutputInstruction.timeout: object expected");
                    message.timeout = $root.google.protobuf.Duration.fromObject(object.timeout);
                }
                if (object.regex != null) {
                    if (typeof object.regex !== "object")
                        throw TypeError(".api.OutputInstruction.regex: object expected");
                    message.regex = $root.api.RegexMatchOptions.fromObject(object.regex);
                }
                if (object.exact != null) {
                    if (typeof object.exact !== "object")
                        throw TypeError(".api.OutputInstruction.exact: object expected");
                    message.exact = $root.api.ExactMatchOptions.fromObject(object.exact);
                }
                if (object.match != null) {
                    if (typeof object.match !== "object")
                        throw TypeError(".api.OutputInstruction.match: object expected");
                    message.match = $root.api.MatchMatchOptions.fromObject(object.match);
                }
                if (object.compatibility != null) {
                    if (typeof object.compatibility !== "object")
                        throw TypeError(".api.OutputInstruction.compatibility: object expected");
                    message.compatibility = $root.api.CompatibilityMatchOptions.fromObject(object.compatibility);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an OutputInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.OutputInstruction
             * @static
             * @param {api.OutputInstruction} message OutputInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OutputInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.timeout = null;
                if (message.timeout != null && message.hasOwnProperty("timeout"))
                    object.timeout = $root.google.protobuf.Duration.toObject(message.timeout, options);
                if (message.regex != null && message.hasOwnProperty("regex")) {
                    object.regex = $root.api.RegexMatchOptions.toObject(message.regex, options);
                    if (options.oneofs)
                        object.matchOptions = "regex";
                }
                if (message.exact != null && message.hasOwnProperty("exact")) {
                    object.exact = $root.api.ExactMatchOptions.toObject(message.exact, options);
                    if (options.oneofs)
                        object.matchOptions = "exact";
                }
                if (message.match != null && message.hasOwnProperty("match")) {
                    object.match = $root.api.MatchMatchOptions.toObject(message.match, options);
                    if (options.oneofs)
                        object.matchOptions = "match";
                }
                if (message.compatibility != null && message.hasOwnProperty("compatibility")) {
                    object.compatibility = $root.api.CompatibilityMatchOptions.toObject(message.compatibility, options);
                    if (options.oneofs)
                        object.matchOptions = "compatibility";
                }
                return object;
            };
    
            /**
             * Converts this OutputInstruction to JSON.
             * @function toJSON
             * @memberof api.OutputInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OutputInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OutputInstruction;
        })();
    
        api.RegexMatchOptions = (function() {
    
            /**
             * Properties of a RegexMatchOptions.
             * @memberof api
             * @interface IRegexMatchOptions
             * @property {string|null} [expression] RegexMatchOptions expression
             */
    
            /**
             * Constructs a new RegexMatchOptions.
             * @memberof api
             * @classdesc Represents a RegexMatchOptions.
             * @constructor
             * @param {api.IRegexMatchOptions=} [properties] Properties to set
             */
            function RegexMatchOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RegexMatchOptions expression.
             * @member {string} expression
             * @memberof api.RegexMatchOptions
             * @instance
             */
            RegexMatchOptions.prototype.expression = "";
    
            /**
             * Creates a new RegexMatchOptions instance using the specified properties.
             * @function create
             * @memberof api.RegexMatchOptions
             * @static
             * @param {api.IRegexMatchOptions=} [properties] Properties to set
             * @returns {api.RegexMatchOptions} RegexMatchOptions instance
             */
            RegexMatchOptions.create = function create(properties) {
                return RegexMatchOptions.fromObject(properties);
            };
    
            /**
             * Encodes the specified RegexMatchOptions message. Does not implicitly {@link api.RegexMatchOptions.verify|verify} messages.
             * @function encode
             * @memberof api.RegexMatchOptions
             * @static
             * @param {api.RegexMatchOptions} message RegexMatchOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegexMatchOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.expression != null && Object.hasOwnProperty.call(message, "expression"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.expression);
                return writer;
            };
    
            /**
             * Encodes the specified RegexMatchOptions message, length delimited. Does not implicitly {@link api.RegexMatchOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.RegexMatchOptions
             * @static
             * @param {api.RegexMatchOptions} message RegexMatchOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegexMatchOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RegexMatchOptions message from the specified reader or buffer.
             * @function decode
             * @memberof api.RegexMatchOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.RegexMatchOptions} RegexMatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegexMatchOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.RegexMatchOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.expression = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RegexMatchOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.RegexMatchOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.RegexMatchOptions} RegexMatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegexMatchOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RegexMatchOptions message.
             * @function verify
             * @memberof api.RegexMatchOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegexMatchOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.expression != null && message.hasOwnProperty("expression"))
                    if (!$util.isString(message.expression))
                        return "expression: string expected";
                return null;
            };
    
            /**
             * Creates a RegexMatchOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.RegexMatchOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.RegexMatchOptions} RegexMatchOptions
             */
            RegexMatchOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.api.RegexMatchOptions)
                    return object;
                var message = new $root.api.RegexMatchOptions();
                if (object.expression != null)
                    message.expression = String(object.expression);
                return message;
            };
    
            /**
             * Creates a plain object from a RegexMatchOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.RegexMatchOptions
             * @static
             * @param {api.RegexMatchOptions} message RegexMatchOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegexMatchOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.expression = "";
                if (message.expression != null && message.hasOwnProperty("expression"))
                    object.expression = message.expression;
                return object;
            };
    
            /**
             * Converts this RegexMatchOptions to JSON.
             * @function toJSON
             * @memberof api.RegexMatchOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegexMatchOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RegexMatchOptions;
        })();
    
        api.ExactMatchOptions = (function() {
    
            /**
             * Properties of an ExactMatchOptions.
             * @memberof api
             * @interface IExactMatchOptions
             * @property {string|null} [expected] ExactMatchOptions expected
             */
    
            /**
             * Constructs a new ExactMatchOptions.
             * @memberof api
             * @classdesc Represents an ExactMatchOptions.
             * @constructor
             * @param {api.IExactMatchOptions=} [properties] Properties to set
             */
            function ExactMatchOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExactMatchOptions expected.
             * @member {string} expected
             * @memberof api.ExactMatchOptions
             * @instance
             */
            ExactMatchOptions.prototype.expected = "";
    
            /**
             * Creates a new ExactMatchOptions instance using the specified properties.
             * @function create
             * @memberof api.ExactMatchOptions
             * @static
             * @param {api.IExactMatchOptions=} [properties] Properties to set
             * @returns {api.ExactMatchOptions} ExactMatchOptions instance
             */
            ExactMatchOptions.create = function create(properties) {
                return ExactMatchOptions.fromObject(properties);
            };
    
            /**
             * Encodes the specified ExactMatchOptions message. Does not implicitly {@link api.ExactMatchOptions.verify|verify} messages.
             * @function encode
             * @memberof api.ExactMatchOptions
             * @static
             * @param {api.ExactMatchOptions} message ExactMatchOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExactMatchOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.expected != null && Object.hasOwnProperty.call(message, "expected"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.expected);
                return writer;
            };
    
            /**
             * Encodes the specified ExactMatchOptions message, length delimited. Does not implicitly {@link api.ExactMatchOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.ExactMatchOptions
             * @static
             * @param {api.ExactMatchOptions} message ExactMatchOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExactMatchOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ExactMatchOptions message from the specified reader or buffer.
             * @function decode
             * @memberof api.ExactMatchOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.ExactMatchOptions} ExactMatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExactMatchOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ExactMatchOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.expected = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ExactMatchOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.ExactMatchOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.ExactMatchOptions} ExactMatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExactMatchOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ExactMatchOptions message.
             * @function verify
             * @memberof api.ExactMatchOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExactMatchOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.expected != null && message.hasOwnProperty("expected"))
                    if (!$util.isString(message.expected))
                        return "expected: string expected";
                return null;
            };
    
            /**
             * Creates an ExactMatchOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.ExactMatchOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.ExactMatchOptions} ExactMatchOptions
             */
            ExactMatchOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.api.ExactMatchOptions)
                    return object;
                var message = new $root.api.ExactMatchOptions();
                if (object.expected != null)
                    message.expected = String(object.expected);
                return message;
            };
    
            /**
             * Creates a plain object from an ExactMatchOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.ExactMatchOptions
             * @static
             * @param {api.ExactMatchOptions} message ExactMatchOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExactMatchOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.expected = "";
                if (message.expected != null && message.hasOwnProperty("expected"))
                    object.expected = message.expected;
                return object;
            };
    
            /**
             * Converts this ExactMatchOptions to JSON.
             * @function toJSON
             * @memberof api.ExactMatchOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExactMatchOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ExactMatchOptions;
        })();
    
        api.MatchMatchOptions = (function() {
    
            /**
             * Properties of a MatchMatchOptions.
             * @memberof api
             * @interface IMatchMatchOptions
             * @property {string|null} [expected] MatchMatchOptions expected
             */
    
            /**
             * Constructs a new MatchMatchOptions.
             * @memberof api
             * @classdesc Represents a MatchMatchOptions.
             * @constructor
             * @param {api.IMatchMatchOptions=} [properties] Properties to set
             */
            function MatchMatchOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MatchMatchOptions expected.
             * @member {string} expected
             * @memberof api.MatchMatchOptions
             * @instance
             */
            MatchMatchOptions.prototype.expected = "";
    
            /**
             * Creates a new MatchMatchOptions instance using the specified properties.
             * @function create
             * @memberof api.MatchMatchOptions
             * @static
             * @param {api.IMatchMatchOptions=} [properties] Properties to set
             * @returns {api.MatchMatchOptions} MatchMatchOptions instance
             */
            MatchMatchOptions.create = function create(properties) {
                return MatchMatchOptions.fromObject(properties);
            };
    
            /**
             * Encodes the specified MatchMatchOptions message. Does not implicitly {@link api.MatchMatchOptions.verify|verify} messages.
             * @function encode
             * @memberof api.MatchMatchOptions
             * @static
             * @param {api.MatchMatchOptions} message MatchMatchOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MatchMatchOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.expected != null && Object.hasOwnProperty.call(message, "expected"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.expected);
                return writer;
            };
    
            /**
             * Encodes the specified MatchMatchOptions message, length delimited. Does not implicitly {@link api.MatchMatchOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.MatchMatchOptions
             * @static
             * @param {api.MatchMatchOptions} message MatchMatchOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MatchMatchOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MatchMatchOptions message from the specified reader or buffer.
             * @function decode
             * @memberof api.MatchMatchOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.MatchMatchOptions} MatchMatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MatchMatchOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.MatchMatchOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.expected = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MatchMatchOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.MatchMatchOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.MatchMatchOptions} MatchMatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MatchMatchOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MatchMatchOptions message.
             * @function verify
             * @memberof api.MatchMatchOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MatchMatchOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.expected != null && message.hasOwnProperty("expected"))
                    if (!$util.isString(message.expected))
                        return "expected: string expected";
                return null;
            };
    
            /**
             * Creates a MatchMatchOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.MatchMatchOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.MatchMatchOptions} MatchMatchOptions
             */
            MatchMatchOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.api.MatchMatchOptions)
                    return object;
                var message = new $root.api.MatchMatchOptions();
                if (object.expected != null)
                    message.expected = String(object.expected);
                return message;
            };
    
            /**
             * Creates a plain object from a MatchMatchOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.MatchMatchOptions
             * @static
             * @param {api.MatchMatchOptions} message MatchMatchOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MatchMatchOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.expected = "";
                if (message.expected != null && message.hasOwnProperty("expected"))
                    object.expected = message.expected;
                return object;
            };
    
            /**
             * Converts this MatchMatchOptions to JSON.
             * @function toJSON
             * @memberof api.MatchMatchOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MatchMatchOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MatchMatchOptions;
        })();
    
        api.CompatibilityMatchOptions = (function() {
    
            /**
             * Properties of a CompatibilityMatchOptions.
             * @memberof api
             * @interface ICompatibilityMatchOptions
             * @property {string|null} [expected] CompatibilityMatchOptions expected
             */
    
            /**
             * Constructs a new CompatibilityMatchOptions.
             * @memberof api
             * @classdesc Represents a CompatibilityMatchOptions.
             * @constructor
             * @param {api.ICompatibilityMatchOptions=} [properties] Properties to set
             */
            function CompatibilityMatchOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CompatibilityMatchOptions expected.
             * @member {string} expected
             * @memberof api.CompatibilityMatchOptions
             * @instance
             */
            CompatibilityMatchOptions.prototype.expected = "";
    
            /**
             * Creates a new CompatibilityMatchOptions instance using the specified properties.
             * @function create
             * @memberof api.CompatibilityMatchOptions
             * @static
             * @param {api.ICompatibilityMatchOptions=} [properties] Properties to set
             * @returns {api.CompatibilityMatchOptions} CompatibilityMatchOptions instance
             */
            CompatibilityMatchOptions.create = function create(properties) {
                return CompatibilityMatchOptions.fromObject(properties);
            };
    
            /**
             * Encodes the specified CompatibilityMatchOptions message. Does not implicitly {@link api.CompatibilityMatchOptions.verify|verify} messages.
             * @function encode
             * @memberof api.CompatibilityMatchOptions
             * @static
             * @param {api.CompatibilityMatchOptions} message CompatibilityMatchOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompatibilityMatchOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.expected != null && Object.hasOwnProperty.call(message, "expected"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.expected);
                return writer;
            };
    
            /**
             * Encodes the specified CompatibilityMatchOptions message, length delimited. Does not implicitly {@link api.CompatibilityMatchOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.CompatibilityMatchOptions
             * @static
             * @param {api.CompatibilityMatchOptions} message CompatibilityMatchOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompatibilityMatchOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CompatibilityMatchOptions message from the specified reader or buffer.
             * @function decode
             * @memberof api.CompatibilityMatchOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.CompatibilityMatchOptions} CompatibilityMatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompatibilityMatchOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.CompatibilityMatchOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.expected = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CompatibilityMatchOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.CompatibilityMatchOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.CompatibilityMatchOptions} CompatibilityMatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompatibilityMatchOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CompatibilityMatchOptions message.
             * @function verify
             * @memberof api.CompatibilityMatchOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CompatibilityMatchOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.expected != null && message.hasOwnProperty("expected"))
                    if (!$util.isString(message.expected))
                        return "expected: string expected";
                return null;
            };
    
            /**
             * Creates a CompatibilityMatchOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.CompatibilityMatchOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.CompatibilityMatchOptions} CompatibilityMatchOptions
             */
            CompatibilityMatchOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.api.CompatibilityMatchOptions)
                    return object;
                var message = new $root.api.CompatibilityMatchOptions();
                if (object.expected != null)
                    message.expected = String(object.expected);
                return message;
            };
    
            /**
             * Creates a plain object from a CompatibilityMatchOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.CompatibilityMatchOptions
             * @static
             * @param {api.CompatibilityMatchOptions} message CompatibilityMatchOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CompatibilityMatchOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.expected = "";
                if (message.expected != null && message.hasOwnProperty("expected"))
                    object.expected = message.expected;
                return object;
            };
    
            /**
             * Converts this CompatibilityMatchOptions to JSON.
             * @function toJSON
             * @memberof api.CompatibilityMatchOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CompatibilityMatchOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CompatibilityMatchOptions;
        })();
    
        api.Response = (function() {
    
            /**
             * Properties of a Response.
             * @memberof api
             * @interface IResponse
             * @property {api.Error|api.IError|null} [error] Response error
             * @property {api.TestResult|api.ITestResult|null} [testResult] Response testResult
             * @property {api.InstructionResult|api.IInstructionResult|null} [instructionResult] Response instructionResult
             */
    
            /**
             * Constructs a new Response.
             * @memberof api
             * @classdesc Represents a Response.
             * @constructor
             * @param {api.IResponse=} [properties] Properties to set
             */
            function Response(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Response error.
             * @member {api.Error|null|undefined} error
             * @memberof api.Response
             * @instance
             */
            Response.prototype.error = null;
    
            /**
             * Response testResult.
             * @member {api.TestResult|null|undefined} testResult
             * @memberof api.Response
             * @instance
             */
            Response.prototype.testResult = null;
    
            /**
             * Response instructionResult.
             * @member {api.InstructionResult|null|undefined} instructionResult
             * @memberof api.Response
             * @instance
             */
            Response.prototype.instructionResult = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Response body.
             * @member {"error"|"testResult"|"instructionResult"|undefined} body
             * @memberof api.Response
             * @instance
             */
            Object.defineProperty(Response.prototype, "body", {
                get: $util.oneOfGetter($oneOfFields = ["error", "testResult", "instructionResult"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof api.Response
             * @static
             * @param {api.IResponse=} [properties] Properties to set
             * @returns {api.Response} Response instance
             */
            Response.create = function create(properties) {
                return Response.fromObject(properties);
            };
    
            /**
             * Encodes the specified Response message. Does not implicitly {@link api.Response.verify|verify} messages.
             * @function encode
             * @memberof api.Response
             * @static
             * @param {api.Response} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    $root.api.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.testResult != null && Object.hasOwnProperty.call(message, "testResult"))
                    $root.api.TestResult.encode(message.testResult, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.instructionResult != null && Object.hasOwnProperty.call(message, "instructionResult"))
                    $root.api.InstructionResult.encode(message.instructionResult, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link api.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.Response
             * @static
             * @param {api.Response} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof api.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Response();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.api.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.testResult = $root.api.TestResult.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.instructionResult = $root.api.InstructionResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Response message.
             * @function verify
             * @memberof api.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.error != null && message.hasOwnProperty("error")) {
                    properties.body = 1;
                    {
                        var error = $root.api.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.testResult != null && message.hasOwnProperty("testResult")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.api.TestResult.verify(message.testResult);
                        if (error)
                            return "testResult." + error;
                    }
                }
                if (message.instructionResult != null && message.hasOwnProperty("instructionResult")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.api.InstructionResult.verify(message.instructionResult);
                        if (error)
                            return "instructionResult." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.Response} Response
             */
            Response.fromObject = function fromObject(object) {
                if (object instanceof $root.api.Response)
                    return object;
                var message = new $root.api.Response();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".api.Response.error: object expected");
                    message.error = $root.api.Error.fromObject(object.error);
                }
                if (object.testResult != null) {
                    if (typeof object.testResult !== "object")
                        throw TypeError(".api.Response.testResult: object expected");
                    message.testResult = $root.api.TestResult.fromObject(object.testResult);
                }
                if (object.instructionResult != null) {
                    if (typeof object.instructionResult !== "object")
                        throw TypeError(".api.Response.instructionResult: object expected");
                    message.instructionResult = $root.api.InstructionResult.fromObject(object.instructionResult);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.Response
             * @static
             * @param {api.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.api.Error.toObject(message.error, options);
                    if (options.oneofs)
                        object.body = "error";
                }
                if (message.testResult != null && message.hasOwnProperty("testResult")) {
                    object.testResult = $root.api.TestResult.toObject(message.testResult, options);
                    if (options.oneofs)
                        object.body = "testResult";
                }
                if (message.instructionResult != null && message.hasOwnProperty("instructionResult")) {
                    object.instructionResult = $root.api.InstructionResult.toObject(message.instructionResult, options);
                    if (options.oneofs)
                        object.body = "instructionResult";
                }
                return object;
            };
    
            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof api.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Response;
        })();
    
        api.TestResult = (function() {
    
            /**
             * Properties of a TestResult.
             * @memberof api
             * @interface ITestResult
             * @property {number|null} [testId] TestResult testId
             * @property {boolean|null} [didPass] TestResult didPass
             */
    
            /**
             * Constructs a new TestResult.
             * @memberof api
             * @classdesc Represents a TestResult.
             * @constructor
             * @param {api.ITestResult=} [properties] Properties to set
             */
            function TestResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TestResult testId.
             * @member {number} testId
             * @memberof api.TestResult
             * @instance
             */
            TestResult.prototype.testId = 0;
    
            /**
             * TestResult didPass.
             * @member {boolean} didPass
             * @memberof api.TestResult
             * @instance
             */
            TestResult.prototype.didPass = false;
    
            /**
             * Creates a new TestResult instance using the specified properties.
             * @function create
             * @memberof api.TestResult
             * @static
             * @param {api.ITestResult=} [properties] Properties to set
             * @returns {api.TestResult} TestResult instance
             */
            TestResult.create = function create(properties) {
                return TestResult.fromObject(properties);
            };
    
            /**
             * Encodes the specified TestResult message. Does not implicitly {@link api.TestResult.verify|verify} messages.
             * @function encode
             * @memberof api.TestResult
             * @static
             * @param {api.TestResult} message TestResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.testId != null && Object.hasOwnProperty.call(message, "testId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.testId);
                if (message.didPass != null && Object.hasOwnProperty.call(message, "didPass"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.didPass);
                return writer;
            };
    
            /**
             * Encodes the specified TestResult message, length delimited. Does not implicitly {@link api.TestResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.TestResult
             * @static
             * @param {api.TestResult} message TestResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TestResult message from the specified reader or buffer.
             * @function decode
             * @memberof api.TestResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.TestResult} TestResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.TestResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.testId = reader.int32();
                        break;
                    case 2:
                        message.didPass = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TestResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.TestResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.TestResult} TestResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TestResult message.
             * @function verify
             * @memberof api.TestResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.testId != null && message.hasOwnProperty("testId"))
                    if (!$util.isInteger(message.testId))
                        return "testId: integer expected";
                if (message.didPass != null && message.hasOwnProperty("didPass"))
                    if (typeof message.didPass !== "boolean")
                        return "didPass: boolean expected";
                return null;
            };
    
            /**
             * Creates a TestResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.TestResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.TestResult} TestResult
             */
            TestResult.fromObject = function fromObject(object) {
                if (object instanceof $root.api.TestResult)
                    return object;
                var message = new $root.api.TestResult();
                if (object.testId != null)
                    message.testId = object.testId | 0;
                if (object.didPass != null)
                    message.didPass = Boolean(object.didPass);
                return message;
            };
    
            /**
             * Creates a plain object from a TestResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.TestResult
             * @static
             * @param {api.TestResult} message TestResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.testId = 0;
                    object.didPass = false;
                }
                if (message.testId != null && message.hasOwnProperty("testId"))
                    object.testId = message.testId;
                if (message.didPass != null && message.hasOwnProperty("didPass"))
                    object.didPass = message.didPass;
                return object;
            };
    
            /**
             * Converts this TestResult to JSON.
             * @function toJSON
             * @memberof api.TestResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TestResult;
        })();
    
        api.InstructionResult = (function() {
    
            /**
             * Properties of an InstructionResult.
             * @memberof api
             * @interface IInstructionResult
             * @property {number|null} [instructionId] InstructionResult instructionId
             * @property {api.InstructionResult.Passed|api.InstructionResult.IPassed|null} [passed] InstructionResult passed
             * @property {api.InstructionResult.Failed|api.InstructionResult.IFailed|null} [failed] InstructionResult failed
             * @property {api.InstructionResult.Timeout|api.InstructionResult.ITimeout|null} [timeout] InstructionResult timeout
             * @property {api.Error|api.IError|null} [error] InstructionResult error
             */
    
            /**
             * Constructs a new InstructionResult.
             * @memberof api
             * @classdesc Represents an InstructionResult.
             * @constructor
             * @param {api.IInstructionResult=} [properties] Properties to set
             */
            function InstructionResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * InstructionResult instructionId.
             * @member {number} instructionId
             * @memberof api.InstructionResult
             * @instance
             */
            InstructionResult.prototype.instructionId = 0;
    
            /**
             * InstructionResult passed.
             * @member {api.InstructionResult.Passed|null|undefined} passed
             * @memberof api.InstructionResult
             * @instance
             */
            InstructionResult.prototype.passed = null;
    
            /**
             * InstructionResult failed.
             * @member {api.InstructionResult.Failed|null|undefined} failed
             * @memberof api.InstructionResult
             * @instance
             */
            InstructionResult.prototype.failed = null;
    
            /**
             * InstructionResult timeout.
             * @member {api.InstructionResult.Timeout|null|undefined} timeout
             * @memberof api.InstructionResult
             * @instance
             */
            InstructionResult.prototype.timeout = null;
    
            /**
             * InstructionResult error.
             * @member {api.Error|null|undefined} error
             * @memberof api.InstructionResult
             * @instance
             */
            InstructionResult.prototype.error = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * InstructionResult body.
             * @member {"passed"|"failed"|"timeout"|"error"|undefined} body
             * @memberof api.InstructionResult
             * @instance
             */
            Object.defineProperty(InstructionResult.prototype, "body", {
                get: $util.oneOfGetter($oneOfFields = ["passed", "failed", "timeout", "error"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new InstructionResult instance using the specified properties.
             * @function create
             * @memberof api.InstructionResult
             * @static
             * @param {api.IInstructionResult=} [properties] Properties to set
             * @returns {api.InstructionResult} InstructionResult instance
             */
            InstructionResult.create = function create(properties) {
                return InstructionResult.fromObject(properties);
            };
    
            /**
             * Encodes the specified InstructionResult message. Does not implicitly {@link api.InstructionResult.verify|verify} messages.
             * @function encode
             * @memberof api.InstructionResult
             * @static
             * @param {api.InstructionResult} message InstructionResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InstructionResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.instructionId != null && Object.hasOwnProperty.call(message, "instructionId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.instructionId);
                if (message.passed != null && Object.hasOwnProperty.call(message, "passed"))
                    $root.api.InstructionResult.Passed.encode(message.passed, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.failed != null && Object.hasOwnProperty.call(message, "failed"))
                    $root.api.InstructionResult.Failed.encode(message.failed, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                    $root.api.InstructionResult.Timeout.encode(message.timeout, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    $root.api.Error.encode(message.error, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified InstructionResult message, length delimited. Does not implicitly {@link api.InstructionResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.InstructionResult
             * @static
             * @param {api.InstructionResult} message InstructionResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InstructionResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an InstructionResult message from the specified reader or buffer.
             * @function decode
             * @memberof api.InstructionResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.InstructionResult} InstructionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InstructionResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.InstructionResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.instructionId = reader.int32();
                        break;
                    case 2:
                        message.passed = $root.api.InstructionResult.Passed.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.failed = $root.api.InstructionResult.Failed.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.timeout = $root.api.InstructionResult.Timeout.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.error = $root.api.Error.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an InstructionResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.InstructionResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.InstructionResult} InstructionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InstructionResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an InstructionResult message.
             * @function verify
             * @memberof api.InstructionResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InstructionResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.instructionId != null && message.hasOwnProperty("instructionId"))
                    if (!$util.isInteger(message.instructionId))
                        return "instructionId: integer expected";
                if (message.passed != null && message.hasOwnProperty("passed")) {
                    properties.body = 1;
                    {
                        var error = $root.api.InstructionResult.Passed.verify(message.passed);
                        if (error)
                            return "passed." + error;
                    }
                }
                if (message.failed != null && message.hasOwnProperty("failed")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.api.InstructionResult.Failed.verify(message.failed);
                        if (error)
                            return "failed." + error;
                    }
                }
                if (message.timeout != null && message.hasOwnProperty("timeout")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.api.InstructionResult.Timeout.verify(message.timeout);
                        if (error)
                            return "timeout." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.api.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates an InstructionResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.InstructionResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.InstructionResult} InstructionResult
             */
            InstructionResult.fromObject = function fromObject(object) {
                if (object instanceof $root.api.InstructionResult)
                    return object;
                var message = new $root.api.InstructionResult();
                if (object.instructionId != null)
                    message.instructionId = object.instructionId | 0;
                if (object.passed != null) {
                    if (typeof object.passed !== "object")
                        throw TypeError(".api.InstructionResult.passed: object expected");
                    message.passed = $root.api.InstructionResult.Passed.fromObject(object.passed);
                }
                if (object.failed != null) {
                    if (typeof object.failed !== "object")
                        throw TypeError(".api.InstructionResult.failed: object expected");
                    message.failed = $root.api.InstructionResult.Failed.fromObject(object.failed);
                }
                if (object.timeout != null) {
                    if (typeof object.timeout !== "object")
                        throw TypeError(".api.InstructionResult.timeout: object expected");
                    message.timeout = $root.api.InstructionResult.Timeout.fromObject(object.timeout);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".api.InstructionResult.error: object expected");
                    message.error = $root.api.Error.fromObject(object.error);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an InstructionResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.InstructionResult
             * @static
             * @param {api.InstructionResult} message InstructionResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InstructionResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.instructionId = 0;
                if (message.instructionId != null && message.hasOwnProperty("instructionId"))
                    object.instructionId = message.instructionId;
                if (message.passed != null && message.hasOwnProperty("passed")) {
                    object.passed = $root.api.InstructionResult.Passed.toObject(message.passed, options);
                    if (options.oneofs)
                        object.body = "passed";
                }
                if (message.failed != null && message.hasOwnProperty("failed")) {
                    object.failed = $root.api.InstructionResult.Failed.toObject(message.failed, options);
                    if (options.oneofs)
                        object.body = "failed";
                }
                if (message.timeout != null && message.hasOwnProperty("timeout")) {
                    object.timeout = $root.api.InstructionResult.Timeout.toObject(message.timeout, options);
                    if (options.oneofs)
                        object.body = "timeout";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.api.Error.toObject(message.error, options);
                    if (options.oneofs)
                        object.body = "error";
                }
                return object;
            };
    
            /**
             * Converts this InstructionResult to JSON.
             * @function toJSON
             * @memberof api.InstructionResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InstructionResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            InstructionResult.Passed = (function() {
    
                /**
                 * Properties of a Passed.
                 * @memberof api.InstructionResult
                 * @interface IPassed
                 * @property {string|null} [output] Passed output
                 */
    
                /**
                 * Constructs a new Passed.
                 * @memberof api.InstructionResult
                 * @classdesc Represents a Passed.
                 * @constructor
                 * @param {api.InstructionResult.IPassed=} [properties] Properties to set
                 */
                function Passed(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Passed output.
                 * @member {string} output
                 * @memberof api.InstructionResult.Passed
                 * @instance
                 */
                Passed.prototype.output = "";
    
                /**
                 * Creates a new Passed instance using the specified properties.
                 * @function create
                 * @memberof api.InstructionResult.Passed
                 * @static
                 * @param {api.InstructionResult.IPassed=} [properties] Properties to set
                 * @returns {api.InstructionResult.Passed} Passed instance
                 */
                Passed.create = function create(properties) {
                    return Passed.fromObject(properties);
                };
    
                /**
                 * Encodes the specified Passed message. Does not implicitly {@link api.InstructionResult.Passed.verify|verify} messages.
                 * @function encode
                 * @memberof api.InstructionResult.Passed
                 * @static
                 * @param {api.InstructionResult.Passed} message Passed message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Passed.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.output);
                    return writer;
                };
    
                /**
                 * Encodes the specified Passed message, length delimited. Does not implicitly {@link api.InstructionResult.Passed.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.InstructionResult.Passed
                 * @static
                 * @param {api.InstructionResult.Passed} message Passed message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Passed.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Passed message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.InstructionResult.Passed
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.InstructionResult.Passed} Passed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Passed.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.InstructionResult.Passed();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.output = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Passed message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.InstructionResult.Passed
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.InstructionResult.Passed} Passed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Passed.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Passed message.
                 * @function verify
                 * @memberof api.InstructionResult.Passed
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Passed.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.output != null && message.hasOwnProperty("output"))
                        if (!$util.isString(message.output))
                            return "output: string expected";
                    return null;
                };
    
                /**
                 * Creates a Passed message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.InstructionResult.Passed
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.InstructionResult.Passed} Passed
                 */
                Passed.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.InstructionResult.Passed)
                        return object;
                    var message = new $root.api.InstructionResult.Passed();
                    if (object.output != null)
                        message.output = String(object.output);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Passed message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.InstructionResult.Passed
                 * @static
                 * @param {api.InstructionResult.Passed} message Passed
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Passed.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.output = "";
                    if (message.output != null && message.hasOwnProperty("output"))
                        object.output = message.output;
                    return object;
                };
    
                /**
                 * Converts this Passed to JSON.
                 * @function toJSON
                 * @memberof api.InstructionResult.Passed
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Passed.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Passed;
            })();
    
            InstructionResult.Failed = (function() {
    
                /**
                 * Properties of a Failed.
                 * @memberof api.InstructionResult
                 * @interface IFailed
                 * @property {string|null} [output] Failed output
                 */
    
                /**
                 * Constructs a new Failed.
                 * @memberof api.InstructionResult
                 * @classdesc Represents a Failed.
                 * @constructor
                 * @param {api.InstructionResult.IFailed=} [properties] Properties to set
                 */
                function Failed(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Failed output.
                 * @member {string} output
                 * @memberof api.InstructionResult.Failed
                 * @instance
                 */
                Failed.prototype.output = "";
    
                /**
                 * Creates a new Failed instance using the specified properties.
                 * @function create
                 * @memberof api.InstructionResult.Failed
                 * @static
                 * @param {api.InstructionResult.IFailed=} [properties] Properties to set
                 * @returns {api.InstructionResult.Failed} Failed instance
                 */
                Failed.create = function create(properties) {
                    return Failed.fromObject(properties);
                };
    
                /**
                 * Encodes the specified Failed message. Does not implicitly {@link api.InstructionResult.Failed.verify|verify} messages.
                 * @function encode
                 * @memberof api.InstructionResult.Failed
                 * @static
                 * @param {api.InstructionResult.Failed} message Failed message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Failed.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.output);
                    return writer;
                };
    
                /**
                 * Encodes the specified Failed message, length delimited. Does not implicitly {@link api.InstructionResult.Failed.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.InstructionResult.Failed
                 * @static
                 * @param {api.InstructionResult.Failed} message Failed message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Failed.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Failed message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.InstructionResult.Failed
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.InstructionResult.Failed} Failed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Failed.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.InstructionResult.Failed();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.output = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Failed message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.InstructionResult.Failed
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.InstructionResult.Failed} Failed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Failed.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Failed message.
                 * @function verify
                 * @memberof api.InstructionResult.Failed
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Failed.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.output != null && message.hasOwnProperty("output"))
                        if (!$util.isString(message.output))
                            return "output: string expected";
                    return null;
                };
    
                /**
                 * Creates a Failed message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.InstructionResult.Failed
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.InstructionResult.Failed} Failed
                 */
                Failed.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.InstructionResult.Failed)
                        return object;
                    var message = new $root.api.InstructionResult.Failed();
                    if (object.output != null)
                        message.output = String(object.output);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Failed message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.InstructionResult.Failed
                 * @static
                 * @param {api.InstructionResult.Failed} message Failed
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Failed.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.output = "";
                    if (message.output != null && message.hasOwnProperty("output"))
                        object.output = message.output;
                    return object;
                };
    
                /**
                 * Converts this Failed to JSON.
                 * @function toJSON
                 * @memberof api.InstructionResult.Failed
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Failed.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Failed;
            })();
    
            InstructionResult.Timeout = (function() {
    
                /**
                 * Properties of a Timeout.
                 * @memberof api.InstructionResult
                 * @interface ITimeout
                 * @property {string|null} [output] Timeout output
                 */
    
                /**
                 * Constructs a new Timeout.
                 * @memberof api.InstructionResult
                 * @classdesc Represents a Timeout.
                 * @constructor
                 * @param {api.InstructionResult.ITimeout=} [properties] Properties to set
                 */
                function Timeout(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timeout output.
                 * @member {string} output
                 * @memberof api.InstructionResult.Timeout
                 * @instance
                 */
                Timeout.prototype.output = "";
    
                /**
                 * Creates a new Timeout instance using the specified properties.
                 * @function create
                 * @memberof api.InstructionResult.Timeout
                 * @static
                 * @param {api.InstructionResult.ITimeout=} [properties] Properties to set
                 * @returns {api.InstructionResult.Timeout} Timeout instance
                 */
                Timeout.create = function create(properties) {
                    return Timeout.fromObject(properties);
                };
    
                /**
                 * Encodes the specified Timeout message. Does not implicitly {@link api.InstructionResult.Timeout.verify|verify} messages.
                 * @function encode
                 * @memberof api.InstructionResult.Timeout
                 * @static
                 * @param {api.InstructionResult.Timeout} message Timeout message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timeout.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.output);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timeout message, length delimited. Does not implicitly {@link api.InstructionResult.Timeout.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.InstructionResult.Timeout
                 * @static
                 * @param {api.InstructionResult.Timeout} message Timeout message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timeout.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timeout message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.InstructionResult.Timeout
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.InstructionResult.Timeout} Timeout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timeout.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.InstructionResult.Timeout();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.output = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timeout message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.InstructionResult.Timeout
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.InstructionResult.Timeout} Timeout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timeout.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timeout message.
                 * @function verify
                 * @memberof api.InstructionResult.Timeout
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timeout.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.output != null && message.hasOwnProperty("output"))
                        if (!$util.isString(message.output))
                            return "output: string expected";
                    return null;
                };
    
                /**
                 * Creates a Timeout message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.InstructionResult.Timeout
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.InstructionResult.Timeout} Timeout
                 */
                Timeout.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.InstructionResult.Timeout)
                        return object;
                    var message = new $root.api.InstructionResult.Timeout();
                    if (object.output != null)
                        message.output = String(object.output);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timeout message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.InstructionResult.Timeout
                 * @static
                 * @param {api.InstructionResult.Timeout} message Timeout
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timeout.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.output = "";
                    if (message.output != null && message.hasOwnProperty("output"))
                        object.output = message.output;
                    return object;
                };
    
                /**
                 * Converts this Timeout to JSON.
                 * @function toJSON
                 * @memberof api.InstructionResult.Timeout
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timeout.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Timeout;
            })();
    
            return InstructionResult;
        })();
    
        api.Error = (function() {
    
            /**
             * Properties of an Error.
             * @memberof api
             * @interface IError
             * @property {string|null} [message] Error message
             */
    
            /**
             * Constructs a new Error.
             * @memberof api
             * @classdesc Represents an Error.
             * @constructor
             * @param {api.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Error message.
             * @member {string} message
             * @memberof api.Error
             * @instance
             */
            Error.prototype.message = "";
    
            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof api.Error
             * @static
             * @param {api.IError=} [properties] Properties to set
             * @returns {api.Error} Error instance
             */
            Error.create = function create(properties) {
                return Error.fromObject(properties);
            };
    
            /**
             * Encodes the specified Error message. Does not implicitly {@link api.Error.verify|verify} messages.
             * @function encode
             * @memberof api.Error
             * @static
             * @param {api.Error} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link api.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.Error
             * @static
             * @param {api.Error} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof api.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Error message.
             * @function verify
             * @memberof api.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };
    
            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.api.Error)
                    return object;
                var message = new $root.api.Error();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };
    
            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.Error
             * @static
             * @param {api.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };
    
            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof api.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Error;
        })();
    
        return api;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Duration = (function() {
    
                /**
                 * Properties of a Duration.
                 * @memberof google.protobuf
                 * @interface IDuration
                 * @property {number|null} [seconds] Duration seconds
                 * @property {number|null} [nanos] Duration nanos
                 */
    
                /**
                 * Constructs a new Duration.
                 * @memberof google.protobuf
                 * @classdesc Represents a Duration.
                 * @constructor
                 * @param {google.protobuf.IDuration=} [properties] Properties to set
                 */
                function Duration(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Duration seconds.
                 * @member {number} seconds
                 * @memberof google.protobuf.Duration
                 * @instance
                 */
                Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Duration nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Duration
                 * @instance
                 */
                Duration.prototype.nanos = 0;
    
                /**
                 * Creates a new Duration instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration=} [properties] Properties to set
                 * @returns {google.protobuf.Duration} Duration instance
                 */
                Duration.create = function create(properties) {
                    return Duration.fromObject(properties);
                };
    
                /**
                 * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.Duration} message Duration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Duration.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.Duration} message Duration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Duration.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Duration message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Duration} Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Duration.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Duration message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Duration} Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Duration.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Duration message.
                 * @function verify
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Duration.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Duration message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Duration} Duration
                 */
                Duration.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Duration)
                        return object;
                    var message = new $root.google.protobuf.Duration();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Duration message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.Duration} message Duration
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Duration.toObject = function toObject(message, options) {
                    if (options && options.json) {
                      return `${message.seconds || 0}.${message.nanos || 0}s`.replace(/(0+(?=s$))/, '');
                    }

                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Duration to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Duration
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Duration.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Duration;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
