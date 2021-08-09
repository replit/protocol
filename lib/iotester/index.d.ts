import * as $protobuf from "protobufjs";
/** Namespace api. */
export namespace api {

    /** Properties of a Payload. */
    interface IPayload {

        /** Payload runInfo */
        runInfo?: (api.RunInfo|api.IRunInfo|null);

        /** Payload tests */
        tests?: ((api.Test|api.ITest)[]|null);
    }

    /** Represents a Payload. */
    class Payload {

        /**
         * Constructs a new Payload.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPayload);

        /** Payload runInfo. */
        public runInfo?: (api.RunInfo|null);

        /** Payload tests. */
        public tests: api.Test[];

        /**
         * Creates a new Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payload instance
         */
        public static create(properties?: api.IPayload): api.Payload;

        /**
         * Encodes the specified Payload message. Does not implicitly {@link api.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payload message, length delimited. Does not implicitly {@link api.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Payload;

        /**
         * Decodes a Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Payload;

        /**
         * Verifies a Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payload
         */
        public static fromObject(object: { [k: string]: any }): api.Payload;

        /**
         * Creates a plain object from a Payload message. Also converts values to other types if specified.
         * @param message Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SysCommand. */
    interface ISysCommand {

        /** SysCommand args */
        args?: (string[]|null);

        /** SysCommand env */
        env?: ({ [k: string]: string }|null);
    }

    /** Represents a SysCommand. */
    class SysCommand {

        /**
         * Constructs a new SysCommand.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ISysCommand);

        /** SysCommand args. */
        public args: string[];

        /** SysCommand env. */
        public env: { [k: string]: string };

        /**
         * Creates a new SysCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SysCommand instance
         */
        public static create(properties?: api.ISysCommand): api.SysCommand;

        /**
         * Encodes the specified SysCommand message. Does not implicitly {@link api.SysCommand.verify|verify} messages.
         * @param message SysCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.SysCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SysCommand message, length delimited. Does not implicitly {@link api.SysCommand.verify|verify} messages.
         * @param message SysCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.SysCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SysCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SysCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.SysCommand;

        /**
         * Decodes a SysCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SysCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.SysCommand;

        /**
         * Verifies a SysCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SysCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SysCommand
         */
        public static fromObject(object: { [k: string]: any }): api.SysCommand;

        /**
         * Creates a plain object from a SysCommand message. Also converts values to other types if specified.
         * @param message SysCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.SysCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SysCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RunInfo. */
    interface IRunInfo {

        /** RunInfo buildCommand */
        buildCommand?: (api.SysCommand|api.ISysCommand|null);

        /** RunInfo execCommand */
        execCommand?: (api.SysCommand|api.ISysCommand|null);
    }

    /** Represents a RunInfo. */
    class RunInfo {

        /**
         * Constructs a new RunInfo.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IRunInfo);

        /** RunInfo buildCommand. */
        public buildCommand?: (api.SysCommand|null);

        /** RunInfo execCommand. */
        public execCommand?: (api.SysCommand|null);

        /**
         * Creates a new RunInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RunInfo instance
         */
        public static create(properties?: api.IRunInfo): api.RunInfo;

        /**
         * Encodes the specified RunInfo message. Does not implicitly {@link api.RunInfo.verify|verify} messages.
         * @param message RunInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.RunInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RunInfo message, length delimited. Does not implicitly {@link api.RunInfo.verify|verify} messages.
         * @param message RunInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.RunInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RunInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RunInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.RunInfo;

        /**
         * Decodes a RunInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RunInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.RunInfo;

        /**
         * Verifies a RunInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RunInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RunInfo
         */
        public static fromObject(object: { [k: string]: any }): api.RunInfo;

        /**
         * Creates a plain object from a RunInfo message. Also converts values to other types if specified.
         * @param message RunInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.RunInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RunInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Test. */
    interface ITest {

        /** Test id */
        id?: (number|null);

        /** Test instructions */
        instructions?: ((api.Instruction|api.IInstruction)[]|null);
    }

    /** Represents a Test. */
    class Test {

        /**
         * Constructs a new Test.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ITest);

        /** Test id. */
        public id: number;

        /** Test instructions. */
        public instructions: api.Instruction[];

        /**
         * Creates a new Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Test instance
         */
        public static create(properties?: api.ITest): api.Test;

        /**
         * Encodes the specified Test message. Does not implicitly {@link api.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link api.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Test;

        /**
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Test;

        /**
         * Verifies a Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Test
         */
        public static fromObject(object: { [k: string]: any }): api.Test;

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @param message Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Instruction. */
    interface IInstruction {

        /** Instruction id */
        id?: (number|null);

        /** Instruction input */
        input?: (api.InputInstruction|api.IInputInstruction|null);

        /** Instruction output */
        output?: (api.OutputInstruction|api.IOutputInstruction|null);
    }

    /** Represents an Instruction. */
    class Instruction {

        /**
         * Constructs a new Instruction.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IInstruction);

        /** Instruction id. */
        public id: number;

        /** Instruction input. */
        public input?: (api.InputInstruction|null);

        /** Instruction output. */
        public output?: (api.OutputInstruction|null);

        /** Instruction body. */
        public body?: ("input"|"output");

        /**
         * Creates a new Instruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Instruction instance
         */
        public static create(properties?: api.IInstruction): api.Instruction;

        /**
         * Encodes the specified Instruction message. Does not implicitly {@link api.Instruction.verify|verify} messages.
         * @param message Instruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Instruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Instruction message, length delimited. Does not implicitly {@link api.Instruction.verify|verify} messages.
         * @param message Instruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Instruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Instruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Instruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Instruction;

        /**
         * Decodes an Instruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Instruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Instruction;

        /**
         * Verifies an Instruction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Instruction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Instruction
         */
        public static fromObject(object: { [k: string]: any }): api.Instruction;

        /**
         * Creates a plain object from an Instruction message. Also converts values to other types if specified.
         * @param message Instruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Instruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Instruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InputInstruction. */
    interface IInputInstruction {

        /** InputInstruction input */
        input?: (string|null);
    }

    /** Represents an InputInstruction. */
    class InputInstruction {

        /**
         * Constructs a new InputInstruction.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IInputInstruction);

        /** InputInstruction input. */
        public input: string;

        /**
         * Creates a new InputInstruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputInstruction instance
         */
        public static create(properties?: api.IInputInstruction): api.InputInstruction;

        /**
         * Encodes the specified InputInstruction message. Does not implicitly {@link api.InputInstruction.verify|verify} messages.
         * @param message InputInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.InputInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InputInstruction message, length delimited. Does not implicitly {@link api.InputInstruction.verify|verify} messages.
         * @param message InputInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.InputInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputInstruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InputInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.InputInstruction;

        /**
         * Decodes an InputInstruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InputInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.InputInstruction;

        /**
         * Verifies an InputInstruction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InputInstruction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InputInstruction
         */
        public static fromObject(object: { [k: string]: any }): api.InputInstruction;

        /**
         * Creates a plain object from an InputInstruction message. Also converts values to other types if specified.
         * @param message InputInstruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.InputInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InputInstruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OutputInstruction. */
    interface IOutputInstruction {

        /** OutputInstruction timeout */
        timeout?: (google.protobuf.Duration|google.protobuf.IDuration|null);

        /** OutputInstruction regex */
        regex?: (api.RegexMatchOptions|api.IRegexMatchOptions|null);

        /** OutputInstruction exact */
        exact?: (api.ExactMatchOptions|api.IExactMatchOptions|null);

        /** OutputInstruction match */
        match?: (api.MatchMatchOptions|api.IMatchMatchOptions|null);

        /** OutputInstruction compatibility */
        compatibility?: (api.CompatibilityMatchOptions|api.ICompatibilityMatchOptions|null);
    }

    /** Represents an OutputInstruction. */
    class OutputInstruction {

        /**
         * Constructs a new OutputInstruction.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOutputInstruction);

        /** OutputInstruction timeout. */
        public timeout?: (google.protobuf.Duration|null);

        /** OutputInstruction regex. */
        public regex?: (api.RegexMatchOptions|null);

        /** OutputInstruction exact. */
        public exact?: (api.ExactMatchOptions|null);

        /** OutputInstruction match. */
        public match?: (api.MatchMatchOptions|null);

        /** OutputInstruction compatibility. */
        public compatibility?: (api.CompatibilityMatchOptions|null);

        /** OutputInstruction matchOptions. */
        public matchOptions?: ("regex"|"exact"|"match"|"compatibility");

        /**
         * Creates a new OutputInstruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputInstruction instance
         */
        public static create(properties?: api.IOutputInstruction): api.OutputInstruction;

        /**
         * Encodes the specified OutputInstruction message. Does not implicitly {@link api.OutputInstruction.verify|verify} messages.
         * @param message OutputInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OutputInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputInstruction message, length delimited. Does not implicitly {@link api.OutputInstruction.verify|verify} messages.
         * @param message OutputInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OutputInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputInstruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OutputInstruction;

        /**
         * Decodes an OutputInstruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OutputInstruction;

        /**
         * Verifies an OutputInstruction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputInstruction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputInstruction
         */
        public static fromObject(object: { [k: string]: any }): api.OutputInstruction;

        /**
         * Creates a plain object from an OutputInstruction message. Also converts values to other types if specified.
         * @param message OutputInstruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OutputInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputInstruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegexMatchOptions. */
    interface IRegexMatchOptions {

        /** RegexMatchOptions expression */
        expression?: (string|null);
    }

    /** Represents a RegexMatchOptions. */
    class RegexMatchOptions {

        /**
         * Constructs a new RegexMatchOptions.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IRegexMatchOptions);

        /** RegexMatchOptions expression. */
        public expression: string;

        /**
         * Creates a new RegexMatchOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegexMatchOptions instance
         */
        public static create(properties?: api.IRegexMatchOptions): api.RegexMatchOptions;

        /**
         * Encodes the specified RegexMatchOptions message. Does not implicitly {@link api.RegexMatchOptions.verify|verify} messages.
         * @param message RegexMatchOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.RegexMatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegexMatchOptions message, length delimited. Does not implicitly {@link api.RegexMatchOptions.verify|verify} messages.
         * @param message RegexMatchOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.RegexMatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegexMatchOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegexMatchOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.RegexMatchOptions;

        /**
         * Decodes a RegexMatchOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegexMatchOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.RegexMatchOptions;

        /**
         * Verifies a RegexMatchOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegexMatchOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegexMatchOptions
         */
        public static fromObject(object: { [k: string]: any }): api.RegexMatchOptions;

        /**
         * Creates a plain object from a RegexMatchOptions message. Also converts values to other types if specified.
         * @param message RegexMatchOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.RegexMatchOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegexMatchOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExactMatchOptions. */
    interface IExactMatchOptions {

        /** ExactMatchOptions expected */
        expected?: (string|null);
    }

    /** Represents an ExactMatchOptions. */
    class ExactMatchOptions {

        /**
         * Constructs a new ExactMatchOptions.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IExactMatchOptions);

        /** ExactMatchOptions expected. */
        public expected: string;

        /**
         * Creates a new ExactMatchOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExactMatchOptions instance
         */
        public static create(properties?: api.IExactMatchOptions): api.ExactMatchOptions;

        /**
         * Encodes the specified ExactMatchOptions message. Does not implicitly {@link api.ExactMatchOptions.verify|verify} messages.
         * @param message ExactMatchOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ExactMatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExactMatchOptions message, length delimited. Does not implicitly {@link api.ExactMatchOptions.verify|verify} messages.
         * @param message ExactMatchOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ExactMatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExactMatchOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExactMatchOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ExactMatchOptions;

        /**
         * Decodes an ExactMatchOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExactMatchOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ExactMatchOptions;

        /**
         * Verifies an ExactMatchOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExactMatchOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExactMatchOptions
         */
        public static fromObject(object: { [k: string]: any }): api.ExactMatchOptions;

        /**
         * Creates a plain object from an ExactMatchOptions message. Also converts values to other types if specified.
         * @param message ExactMatchOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ExactMatchOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExactMatchOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchMatchOptions. */
    interface IMatchMatchOptions {

        /** MatchMatchOptions expected */
        expected?: (string|null);
    }

    /** Represents a MatchMatchOptions. */
    class MatchMatchOptions {

        /**
         * Constructs a new MatchMatchOptions.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IMatchMatchOptions);

        /** MatchMatchOptions expected. */
        public expected: string;

        /**
         * Creates a new MatchMatchOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchMatchOptions instance
         */
        public static create(properties?: api.IMatchMatchOptions): api.MatchMatchOptions;

        /**
         * Encodes the specified MatchMatchOptions message. Does not implicitly {@link api.MatchMatchOptions.verify|verify} messages.
         * @param message MatchMatchOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.MatchMatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchMatchOptions message, length delimited. Does not implicitly {@link api.MatchMatchOptions.verify|verify} messages.
         * @param message MatchMatchOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.MatchMatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchMatchOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchMatchOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.MatchMatchOptions;

        /**
         * Decodes a MatchMatchOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchMatchOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.MatchMatchOptions;

        /**
         * Verifies a MatchMatchOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchMatchOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchMatchOptions
         */
        public static fromObject(object: { [k: string]: any }): api.MatchMatchOptions;

        /**
         * Creates a plain object from a MatchMatchOptions message. Also converts values to other types if specified.
         * @param message MatchMatchOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.MatchMatchOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchMatchOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CompatibilityMatchOptions. */
    interface ICompatibilityMatchOptions {

        /** CompatibilityMatchOptions expected */
        expected?: (string|null);
    }

    /** Represents a CompatibilityMatchOptions. */
    class CompatibilityMatchOptions {

        /**
         * Constructs a new CompatibilityMatchOptions.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ICompatibilityMatchOptions);

        /** CompatibilityMatchOptions expected. */
        public expected: string;

        /**
         * Creates a new CompatibilityMatchOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompatibilityMatchOptions instance
         */
        public static create(properties?: api.ICompatibilityMatchOptions): api.CompatibilityMatchOptions;

        /**
         * Encodes the specified CompatibilityMatchOptions message. Does not implicitly {@link api.CompatibilityMatchOptions.verify|verify} messages.
         * @param message CompatibilityMatchOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.CompatibilityMatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompatibilityMatchOptions message, length delimited. Does not implicitly {@link api.CompatibilityMatchOptions.verify|verify} messages.
         * @param message CompatibilityMatchOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.CompatibilityMatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompatibilityMatchOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CompatibilityMatchOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.CompatibilityMatchOptions;

        /**
         * Decodes a CompatibilityMatchOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CompatibilityMatchOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.CompatibilityMatchOptions;

        /**
         * Verifies a CompatibilityMatchOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompatibilityMatchOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompatibilityMatchOptions
         */
        public static fromObject(object: { [k: string]: any }): api.CompatibilityMatchOptions;

        /**
         * Creates a plain object from a CompatibilityMatchOptions message. Also converts values to other types if specified.
         * @param message CompatibilityMatchOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.CompatibilityMatchOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompatibilityMatchOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response error */
        error?: (api.Error|api.IError|null);

        /** Response testResult */
        testResult?: (api.TestResult|api.ITestResult|null);

        /** Response instructionResult */
        instructionResult?: (api.InstructionResult|api.IInstructionResult|null);
    }

    /** Represents a Response. */
    class Response {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IResponse);

        /** Response error. */
        public error?: (api.Error|null);

        /** Response testResult. */
        public testResult?: (api.TestResult|null);

        /** Response instructionResult. */
        public instructionResult?: (api.InstructionResult|null);

        /** Response body. */
        public body?: ("error"|"testResult"|"instructionResult");

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: api.IResponse): api.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link api.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link api.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): api.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TestResult. */
    interface ITestResult {

        /** TestResult testId */
        testId?: (number|null);

        /** TestResult didPass */
        didPass?: (boolean|null);
    }

    /** Represents a TestResult. */
    class TestResult {

        /**
         * Constructs a new TestResult.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ITestResult);

        /** TestResult testId. */
        public testId: number;

        /** TestResult didPass. */
        public didPass: boolean;

        /**
         * Creates a new TestResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestResult instance
         */
        public static create(properties?: api.ITestResult): api.TestResult;

        /**
         * Encodes the specified TestResult message. Does not implicitly {@link api.TestResult.verify|verify} messages.
         * @param message TestResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.TestResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestResult message, length delimited. Does not implicitly {@link api.TestResult.verify|verify} messages.
         * @param message TestResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.TestResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.TestResult;

        /**
         * Decodes a TestResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.TestResult;

        /**
         * Verifies a TestResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestResult
         */
        public static fromObject(object: { [k: string]: any }): api.TestResult;

        /**
         * Creates a plain object from a TestResult message. Also converts values to other types if specified.
         * @param message TestResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.TestResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InstructionResult. */
    interface IInstructionResult {

        /** InstructionResult instructionId */
        instructionId?: (number|null);

        /** InstructionResult passed */
        passed?: (api.InstructionResult.Passed|api.InstructionResult.IPassed|null);

        /** InstructionResult failed */
        failed?: (api.InstructionResult.Failed|api.InstructionResult.IFailed|null);

        /** InstructionResult timeout */
        timeout?: (api.InstructionResult.Timeout|api.InstructionResult.ITimeout|null);

        /** InstructionResult error */
        error?: (api.Error|api.IError|null);
    }

    /** Represents an InstructionResult. */
    class InstructionResult {

        /**
         * Constructs a new InstructionResult.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IInstructionResult);

        /** InstructionResult instructionId. */
        public instructionId: number;

        /** InstructionResult passed. */
        public passed?: (api.InstructionResult.Passed|null);

        /** InstructionResult failed. */
        public failed?: (api.InstructionResult.Failed|null);

        /** InstructionResult timeout. */
        public timeout?: (api.InstructionResult.Timeout|null);

        /** InstructionResult error. */
        public error?: (api.Error|null);

        /** InstructionResult body. */
        public body?: ("passed"|"failed"|"timeout"|"error");

        /**
         * Creates a new InstructionResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InstructionResult instance
         */
        public static create(properties?: api.IInstructionResult): api.InstructionResult;

        /**
         * Encodes the specified InstructionResult message. Does not implicitly {@link api.InstructionResult.verify|verify} messages.
         * @param message InstructionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.InstructionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InstructionResult message, length delimited. Does not implicitly {@link api.InstructionResult.verify|verify} messages.
         * @param message InstructionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.InstructionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InstructionResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InstructionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.InstructionResult;

        /**
         * Decodes an InstructionResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InstructionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.InstructionResult;

        /**
         * Verifies an InstructionResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InstructionResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InstructionResult
         */
        public static fromObject(object: { [k: string]: any }): api.InstructionResult;

        /**
         * Creates a plain object from an InstructionResult message. Also converts values to other types if specified.
         * @param message InstructionResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.InstructionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InstructionResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace InstructionResult {

        /** Properties of a Passed. */
        interface IPassed {

            /** Passed output */
            output?: (string|null);
        }

        /** Represents a Passed. */
        class Passed {

            /**
             * Constructs a new Passed.
             * @param [properties] Properties to set
             */
            private constructor(properties?: api.InstructionResult.IPassed);

            /** Passed output. */
            public output: string;

            /**
             * Creates a new Passed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Passed instance
             */
            public static create(properties?: api.InstructionResult.IPassed): api.InstructionResult.Passed;

            /**
             * Encodes the specified Passed message. Does not implicitly {@link api.InstructionResult.Passed.verify|verify} messages.
             * @param message Passed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.InstructionResult.Passed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Passed message, length delimited. Does not implicitly {@link api.InstructionResult.Passed.verify|verify} messages.
             * @param message Passed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.InstructionResult.Passed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Passed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Passed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.InstructionResult.Passed;

            /**
             * Decodes a Passed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Passed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.InstructionResult.Passed;

            /**
             * Verifies a Passed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Passed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Passed
             */
            public static fromObject(object: { [k: string]: any }): api.InstructionResult.Passed;

            /**
             * Creates a plain object from a Passed message. Also converts values to other types if specified.
             * @param message Passed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.InstructionResult.Passed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Passed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Failed. */
        interface IFailed {

            /** Failed output */
            output?: (string|null);
        }

        /** Represents a Failed. */
        class Failed {

            /**
             * Constructs a new Failed.
             * @param [properties] Properties to set
             */
            private constructor(properties?: api.InstructionResult.IFailed);

            /** Failed output. */
            public output: string;

            /**
             * Creates a new Failed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Failed instance
             */
            public static create(properties?: api.InstructionResult.IFailed): api.InstructionResult.Failed;

            /**
             * Encodes the specified Failed message. Does not implicitly {@link api.InstructionResult.Failed.verify|verify} messages.
             * @param message Failed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.InstructionResult.Failed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Failed message, length delimited. Does not implicitly {@link api.InstructionResult.Failed.verify|verify} messages.
             * @param message Failed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.InstructionResult.Failed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Failed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Failed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.InstructionResult.Failed;

            /**
             * Decodes a Failed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Failed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.InstructionResult.Failed;

            /**
             * Verifies a Failed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Failed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Failed
             */
            public static fromObject(object: { [k: string]: any }): api.InstructionResult.Failed;

            /**
             * Creates a plain object from a Failed message. Also converts values to other types if specified.
             * @param message Failed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.InstructionResult.Failed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Failed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timeout. */
        interface ITimeout {

            /** Timeout output */
            output?: (string|null);
        }

        /** Represents a Timeout. */
        class Timeout {

            /**
             * Constructs a new Timeout.
             * @param [properties] Properties to set
             */
            private constructor(properties?: api.InstructionResult.ITimeout);

            /** Timeout output. */
            public output: string;

            /**
             * Creates a new Timeout instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timeout instance
             */
            public static create(properties?: api.InstructionResult.ITimeout): api.InstructionResult.Timeout;

            /**
             * Encodes the specified Timeout message. Does not implicitly {@link api.InstructionResult.Timeout.verify|verify} messages.
             * @param message Timeout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.InstructionResult.Timeout, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timeout message, length delimited. Does not implicitly {@link api.InstructionResult.Timeout.verify|verify} messages.
             * @param message Timeout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.InstructionResult.Timeout, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timeout message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timeout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.InstructionResult.Timeout;

            /**
             * Decodes a Timeout message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timeout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.InstructionResult.Timeout;

            /**
             * Verifies a Timeout message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timeout message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timeout
             */
            public static fromObject(object: { [k: string]: any }): api.InstructionResult.Timeout;

            /**
             * Creates a plain object from a Timeout message. Also converts values to other types if specified.
             * @param message Timeout
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.InstructionResult.Timeout, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timeout to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an Error. */
    interface IError {

        /** Error message */
        message?: (string|null);
    }

    /** Represents an Error. */
    class Error {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IError);

        /** Error message. */
        public message: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: api.IError): api.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link api.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Error, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link api.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Error, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): api.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            private constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: number;

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.Duration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.Duration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
