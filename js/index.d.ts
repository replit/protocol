import * as $protobuf from "protobufjs";
/** Namespace replitproto. */
export namespace replitproto {

    /** Properties of a Command. */
    interface ICommand {

        /** Command channel */
        channel?: (number|null);

        /** Command session */
        session?: (number|null);

        /** Command openChan */
        openChan?: (replitproto.IOpenChannel|null);

        /** Command openChanRes */
        openChanRes?: (replitproto.IOpenChannelRes|null);

        /** Command closeChan */
        closeChan?: (replitproto.ICloseChannel|null);

        /** Command closeChanRes */
        closeChanRes?: (replitproto.ICloseChannelRes|null);

        /** Command containerState */
        containerState?: (replitproto.IContainerState|null);

        /** Command portOpen */
        portOpen?: (replitproto.IPortOpen|null);

        /** Command toast */
        toast?: (replitproto.IToast|null);

        /** Command runMain */
        runMain?: (replitproto.IRunMain|null);

        /** Command clear */
        clear?: (replitproto.IClear|null);

        /** Command eval */
        "eval"?: (string|null);

        /** Command result */
        result?: (string|null);

        /** Command input */
        input?: (string|null);

        /** Command output */
        output?: (string|null);

        /** Command error */
        error?: (string|null);

        /** Command saneTerm */
        saneTerm?: (replitproto.ISaneTerm|null);

        /** Command resizeTerm */
        resizeTerm?: (replitproto.IResizeTerm|null);

        /** Command state */
        state?: (replitproto.State|null);

        /** Command ok */
        ok?: (replitproto.IOK|null);

        /** Command persist */
        persist?: (replitproto.IFile|null);

        /** Command write */
        write?: (replitproto.IFile|null);

        /** Command remove */
        remove?: (replitproto.IFile|null);

        /** Command move */
        move?: (replitproto.IMove|null);

        /** Command mkdir */
        mkdir?: (replitproto.IFile|null);

        /** Command read */
        read?: (replitproto.IFile|null);

        /** Command readdir */
        readdir?: (replitproto.IFile|null);

        /** Command files */
        files?: (replitproto.IFiles|null);

        /** Command file */
        file?: (replitproto.IFile|null);

        /** Command checkChanges */
        checkChanges?: (replitproto.ICheckChanges|null);

        /** Command changedFiles */
        changedFiles?: (replitproto.IFiles|null);

        /** Command lintResults */
        lintResults?: (replitproto.ILintResults|null);

        /** Command runContainedTest */
        runContainedTest?: (replitproto.IContainedTest|null);

        /** Command testResult */
        testResult?: (replitproto.ITestResult|null);

        /** Command debuggerStart */
        debuggerStart?: (string|null);

        /** Command debuggerStep */
        debuggerStep?: (replitproto.IRunMain|null);

        /** Command debuggerStatus */
        debuggerStatus?: (replitproto.IDebugStatus|null);

        /** Command ensurePackages */
        ensurePackages?: (replitproto.IEnsurePackages|null);

        /** Command ping */
        ping?: (replitproto.IPing|null);

        /** Command pong */
        pong?: (replitproto.IPong|null);

        /** Command hello */
        hello?: (replitproto.IHello|null);

        /** Command goodbye */
        goodbye?: (replitproto.IGoodbye|null);

        /** Command hint */
        hint?: (replitproto.IHint|null);

        /** Command connect */
        connect?: (replitproto.IConnect|null);

        /** Command send */
        send?: (replitproto.ISend|null);

        /** Command recv */
        recv?: (replitproto.IRecv|null);

        /** Command disconnect */
        disconnect?: (replitproto.IDisconnect|null);

        /** Command fileAuthReq */
        fileAuthReq?: (replitproto.IFileAuthReq|null);

        /** Command fileAuthRes */
        fileAuthRes?: (replitproto.IFileAuthRes|null);

        /** Command mutliFileAuthRes */
        mutliFileAuthRes?: (replitproto.IMultiFileAuthRes|null);

        /** Command ot */
        ot?: (replitproto.IOTPacket|null);

        /** Command otstatus */
        otstatus?: (replitproto.IOTStatus|null);

        /** Command otLinkFile */
        otLinkFile?: (replitproto.IOTLinkFile|null);

        /** Command otNewCursor */
        otNewCursor?: (replitproto.IOTCursor|null);

        /** Command otDeleteCursor */
        otDeleteCursor?: (replitproto.IOTCursor|null);

        /** Command flush */
        flush?: (replitproto.IFlush|null);

        /** Command debug */
        debug?: (replitproto.IDebug|null);

        /** Command startVCR */
        startVCR?: (replitproto.IStartVCR|null);

        /** Command readVCR */
        readVCR?: (replitproto.IReadVCR|null);

        /** Command VCRLog */
        VCRLog?: (replitproto.IVCRLog|null);

        /** Command auth */
        auth?: (replitproto.IAuth|null);

        /** Command execInfo */
        execInfo?: (replitproto.IExecInfo|null);

        /** Command subscribe */
        subscribe?: (replitproto.IFile|null);

        /** Command eventCreated */
        eventCreated?: (replitproto.IFile|null);

        /** Command eventModified */
        eventModified?: (replitproto.IFile|null);

        /** Command eventDeleted */
        eventDeleted?: (replitproto.IFile|null);

        /** Command eventMoved */
        eventMoved?: (replitproto.IMove|null);

        /** Command subscribeFile */
        subscribeFile?: (replitproto.ISubscribeFile|null);

        /** Command fileEvent */
        fileEvent?: (replitproto.IFileEvent|null);

        /** Command roster */
        roster?: (replitproto.IRoster|null);

        /** Command join */
        join?: (replitproto.IUser|null);

        /** Command part */
        part?: (replitproto.IUser|null);

        /** Command exec */
        exec?: (replitproto.IExec|null);

        /** Command packageSearch */
        packageSearch?: (replitproto.IPackageSearch|null);

        /** Command packageSearchResp */
        packageSearchResp?: (replitproto.IPackageSearchResp|null);

        /** Command packageInfo */
        packageInfo?: (replitproto.IPackageInfo|null);

        /** Command packageInfoResp */
        packageInfoResp?: (replitproto.IPackageInfoResp|null);

        /** Command packageAdd */
        packageAdd?: (replitproto.IPackageAdd|null);

        /** Command packageRemove */
        packageRemove?: (replitproto.IPackageRemove|null);

        /** Command packageInstall */
        packageInstall?: (replitproto.IPackageInstall|null);

        /** Command packageListSpecfile */
        packageListSpecfile?: (replitproto.IPackageListSpecfile|null);

        /** Command packageListSpecfileResp */
        packageListSpecfileResp?: (replitproto.IPackageListSpecfileResp|null);

        /** Command packageCacheSave */
        packageCacheSave?: (replitproto.IPackageCacheSave|null);

        /** Command chatMessage */
        chatMessage?: (replitproto.IChatMessage|null);

        /** Command chatTyping */
        chatTyping?: (replitproto.IChatTyping|null);

        /** Command chatScrollback */
        chatScrollback?: (replitproto.IChatScrollback|null);

        /** Command ref */
        ref?: (string|null);
    }

    /** Represents a Command. */
    class Command implements ICommand {

        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ICommand);

        /** Command channel. */
        public channel: number;

        /** Command session. */
        public session: number;

        /** Command openChan. */
        public openChan?: (replitproto.IOpenChannel|null);

        /** Command openChanRes. */
        public openChanRes?: (replitproto.IOpenChannelRes|null);

        /** Command closeChan. */
        public closeChan?: (replitproto.ICloseChannel|null);

        /** Command closeChanRes. */
        public closeChanRes?: (replitproto.ICloseChannelRes|null);

        /** Command containerState. */
        public containerState?: (replitproto.IContainerState|null);

        /** Command portOpen. */
        public portOpen?: (replitproto.IPortOpen|null);

        /** Command toast. */
        public toast?: (replitproto.IToast|null);

        /** Command runMain. */
        public runMain?: (replitproto.IRunMain|null);

        /** Command clear. */
        public clear?: (replitproto.IClear|null);

        /** Command eval. */
        public eval: string;

        /** Command result. */
        public result: string;

        /** Command input. */
        public input: string;

        /** Command output. */
        public output: string;

        /** Command error. */
        public error: string;

        /** Command saneTerm. */
        public saneTerm?: (replitproto.ISaneTerm|null);

        /** Command resizeTerm. */
        public resizeTerm?: (replitproto.IResizeTerm|null);

        /** Command state. */
        public state: replitproto.State;

        /** Command ok. */
        public ok?: (replitproto.IOK|null);

        /** Command persist. */
        public persist?: (replitproto.IFile|null);

        /** Command write. */
        public write?: (replitproto.IFile|null);

        /** Command remove. */
        public remove?: (replitproto.IFile|null);

        /** Command move. */
        public move?: (replitproto.IMove|null);

        /** Command mkdir. */
        public mkdir?: (replitproto.IFile|null);

        /** Command read. */
        public read?: (replitproto.IFile|null);

        /** Command readdir. */
        public readdir?: (replitproto.IFile|null);

        /** Command files. */
        public files?: (replitproto.IFiles|null);

        /** Command file. */
        public file?: (replitproto.IFile|null);

        /** Command checkChanges. */
        public checkChanges?: (replitproto.ICheckChanges|null);

        /** Command changedFiles. */
        public changedFiles?: (replitproto.IFiles|null);

        /** Command lintResults. */
        public lintResults?: (replitproto.ILintResults|null);

        /** Command runContainedTest. */
        public runContainedTest?: (replitproto.IContainedTest|null);

        /** Command testResult. */
        public testResult?: (replitproto.ITestResult|null);

        /** Command debuggerStart. */
        public debuggerStart: string;

        /** Command debuggerStep. */
        public debuggerStep?: (replitproto.IRunMain|null);

        /** Command debuggerStatus. */
        public debuggerStatus?: (replitproto.IDebugStatus|null);

        /** Command ensurePackages. */
        public ensurePackages?: (replitproto.IEnsurePackages|null);

        /** Command ping. */
        public ping?: (replitproto.IPing|null);

        /** Command pong. */
        public pong?: (replitproto.IPong|null);

        /** Command hello. */
        public hello?: (replitproto.IHello|null);

        /** Command goodbye. */
        public goodbye?: (replitproto.IGoodbye|null);

        /** Command hint. */
        public hint?: (replitproto.IHint|null);

        /** Command connect. */
        public connect?: (replitproto.IConnect|null);

        /** Command send. */
        public send?: (replitproto.ISend|null);

        /** Command recv. */
        public recv?: (replitproto.IRecv|null);

        /** Command disconnect. */
        public disconnect?: (replitproto.IDisconnect|null);

        /** Command fileAuthReq. */
        public fileAuthReq?: (replitproto.IFileAuthReq|null);

        /** Command fileAuthRes. */
        public fileAuthRes?: (replitproto.IFileAuthRes|null);

        /** Command mutliFileAuthRes. */
        public mutliFileAuthRes?: (replitproto.IMultiFileAuthRes|null);

        /** Command ot. */
        public ot?: (replitproto.IOTPacket|null);

        /** Command otstatus. */
        public otstatus?: (replitproto.IOTStatus|null);

        /** Command otLinkFile. */
        public otLinkFile?: (replitproto.IOTLinkFile|null);

        /** Command otNewCursor. */
        public otNewCursor?: (replitproto.IOTCursor|null);

        /** Command otDeleteCursor. */
        public otDeleteCursor?: (replitproto.IOTCursor|null);

        /** Command flush. */
        public flush?: (replitproto.IFlush|null);

        /** Command debug. */
        public debug?: (replitproto.IDebug|null);

        /** Command startVCR. */
        public startVCR?: (replitproto.IStartVCR|null);

        /** Command readVCR. */
        public readVCR?: (replitproto.IReadVCR|null);

        /** Command VCRLog. */
        public VCRLog?: (replitproto.IVCRLog|null);

        /** Command auth. */
        public auth?: (replitproto.IAuth|null);

        /** Command execInfo. */
        public execInfo?: (replitproto.IExecInfo|null);

        /** Command subscribe. */
        public subscribe?: (replitproto.IFile|null);

        /** Command eventCreated. */
        public eventCreated?: (replitproto.IFile|null);

        /** Command eventModified. */
        public eventModified?: (replitproto.IFile|null);

        /** Command eventDeleted. */
        public eventDeleted?: (replitproto.IFile|null);

        /** Command eventMoved. */
        public eventMoved?: (replitproto.IMove|null);

        /** Command subscribeFile. */
        public subscribeFile?: (replitproto.ISubscribeFile|null);

        /** Command fileEvent. */
        public fileEvent?: (replitproto.IFileEvent|null);

        /** Command roster. */
        public roster?: (replitproto.IRoster|null);

        /** Command join. */
        public join?: (replitproto.IUser|null);

        /** Command part. */
        public part?: (replitproto.IUser|null);

        /** Command exec. */
        public exec?: (replitproto.IExec|null);

        /** Command packageSearch. */
        public packageSearch?: (replitproto.IPackageSearch|null);

        /** Command packageSearchResp. */
        public packageSearchResp?: (replitproto.IPackageSearchResp|null);

        /** Command packageInfo. */
        public packageInfo?: (replitproto.IPackageInfo|null);

        /** Command packageInfoResp. */
        public packageInfoResp?: (replitproto.IPackageInfoResp|null);

        /** Command packageAdd. */
        public packageAdd?: (replitproto.IPackageAdd|null);

        /** Command packageRemove. */
        public packageRemove?: (replitproto.IPackageRemove|null);

        /** Command packageInstall. */
        public packageInstall?: (replitproto.IPackageInstall|null);

        /** Command packageListSpecfile. */
        public packageListSpecfile?: (replitproto.IPackageListSpecfile|null);

        /** Command packageListSpecfileResp. */
        public packageListSpecfileResp?: (replitproto.IPackageListSpecfileResp|null);

        /** Command packageCacheSave. */
        public packageCacheSave?: (replitproto.IPackageCacheSave|null);

        /** Command chatMessage. */
        public chatMessage?: (replitproto.IChatMessage|null);

        /** Command chatTyping. */
        public chatTyping?: (replitproto.IChatTyping|null);

        /** Command chatScrollback. */
        public chatScrollback?: (replitproto.IChatScrollback|null);

        /** Command ref. */
        public ref: string;

        /** Command body. */
        public body?: ("openChan"|"openChanRes"|"closeChan"|"closeChanRes"|"containerState"|"portOpen"|"toast"|"runMain"|"clear"|"eval"|"result"|"input"|"output"|"error"|"saneTerm"|"resizeTerm"|"state"|"ok"|"persist"|"write"|"remove"|"move"|"mkdir"|"read"|"readdir"|"files"|"file"|"checkChanges"|"changedFiles"|"lintResults"|"runContainedTest"|"testResult"|"debuggerStart"|"debuggerStep"|"debuggerStatus"|"ensurePackages"|"ping"|"pong"|"hello"|"goodbye"|"hint"|"connect"|"send"|"recv"|"disconnect"|"fileAuthReq"|"fileAuthRes"|"mutliFileAuthRes"|"ot"|"otstatus"|"otLinkFile"|"otNewCursor"|"otDeleteCursor"|"flush"|"debug"|"startVCR"|"readVCR"|"VCRLog"|"auth"|"execInfo"|"subscribe"|"eventCreated"|"eventModified"|"eventDeleted"|"eventMoved"|"subscribeFile"|"fileEvent"|"roster"|"join"|"part"|"exec"|"packageSearch"|"packageSearchResp"|"packageInfo"|"packageInfoResp"|"packageAdd"|"packageRemove"|"packageInstall"|"packageListSpecfile"|"packageListSpecfileResp"|"packageCacheSave"|"chatMessage"|"chatTyping"|"chatScrollback");

        /**
         * Creates a new Command instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Command instance
         */
        public static create(properties?: replitproto.ICommand): replitproto.Command;

        /**
         * Encodes the specified Command message. Does not implicitly {@link replitproto.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link replitproto.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Command;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Command;

        /**
         * Verifies a Command message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Command
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubscribeFile. */
    interface ISubscribeFile {

        /** SubscribeFile files */
        files?: (replitproto.IFile[]|null);
    }

    /** Represents a SubscribeFile. */
    class SubscribeFile implements ISubscribeFile {

        /**
         * Constructs a new SubscribeFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ISubscribeFile);

        /** SubscribeFile files. */
        public files: replitproto.IFile[];

        /**
         * Creates a new SubscribeFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeFile instance
         */
        public static create(properties?: replitproto.ISubscribeFile): replitproto.SubscribeFile;

        /**
         * Encodes the specified SubscribeFile message. Does not implicitly {@link replitproto.SubscribeFile.verify|verify} messages.
         * @param message SubscribeFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ISubscribeFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeFile message, length delimited. Does not implicitly {@link replitproto.SubscribeFile.verify|verify} messages.
         * @param message SubscribeFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ISubscribeFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.SubscribeFile;

        /**
         * Decodes a SubscribeFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.SubscribeFile;

        /**
         * Verifies a SubscribeFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeFile
         */
        public static fromObject(object: { [k: string]: any }): replitproto.SubscribeFile;

        /**
         * Creates a plain object from a SubscribeFile message. Also converts values to other types if specified.
         * @param message SubscribeFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.SubscribeFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileEvent. */
    interface IFileEvent {

        /** FileEvent file */
        file?: (replitproto.IFile|null);

        /** FileEvent dest */
        dest?: (replitproto.IFile|null);

        /** FileEvent op */
        op?: (replitproto.FileEvent.Op|null);
    }

    /** Represents a FileEvent. */
    class FileEvent implements IFileEvent {

        /**
         * Constructs a new FileEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IFileEvent);

        /** FileEvent file. */
        public file?: (replitproto.IFile|null);

        /** FileEvent dest. */
        public dest?: (replitproto.IFile|null);

        /** FileEvent op. */
        public op: replitproto.FileEvent.Op;

        /**
         * Creates a new FileEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileEvent instance
         */
        public static create(properties?: replitproto.IFileEvent): replitproto.FileEvent;

        /**
         * Encodes the specified FileEvent message. Does not implicitly {@link replitproto.FileEvent.verify|verify} messages.
         * @param message FileEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IFileEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileEvent message, length delimited. Does not implicitly {@link replitproto.FileEvent.verify|verify} messages.
         * @param message FileEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IFileEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.FileEvent;

        /**
         * Decodes a FileEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.FileEvent;

        /**
         * Verifies a FileEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileEvent
         */
        public static fromObject(object: { [k: string]: any }): replitproto.FileEvent;

        /**
         * Creates a plain object from a FileEvent message. Also converts values to other types if specified.
         * @param message FileEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.FileEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace FileEvent {

        /** Op enum. */
        enum Op {
            Create = 0,
            Move = 1,
            Remove = 2,
            Modify = 3
        }
    }

    /** Properties of a Flush. */
    interface IFlush {
    }

    /** Represents a Flush. */
    class Flush implements IFlush {

        /**
         * Constructs a new Flush.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IFlush);

        /**
         * Creates a new Flush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Flush instance
         */
        public static create(properties?: replitproto.IFlush): replitproto.Flush;

        /**
         * Encodes the specified Flush message. Does not implicitly {@link replitproto.Flush.verify|verify} messages.
         * @param message Flush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IFlush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Flush message, length delimited. Does not implicitly {@link replitproto.Flush.verify|verify} messages.
         * @param message Flush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IFlush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Flush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Flush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Flush;

        /**
         * Decodes a Flush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Flush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Flush;

        /**
         * Verifies a Flush message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Flush message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Flush
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Flush;

        /**
         * Creates a plain object from a Flush message. Also converts values to other types if specified.
         * @param message Flush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Flush, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Flush to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTLinkFile. */
    interface IOTLinkFile {

        /** OTLinkFile file */
        file?: (replitproto.IFile|null);
    }

    /** Represents a OTLinkFile. */
    class OTLinkFile implements IOTLinkFile {

        /**
         * Constructs a new OTLinkFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IOTLinkFile);

        /** OTLinkFile file. */
        public file?: (replitproto.IFile|null);

        /**
         * Creates a new OTLinkFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTLinkFile instance
         */
        public static create(properties?: replitproto.IOTLinkFile): replitproto.OTLinkFile;

        /**
         * Encodes the specified OTLinkFile message. Does not implicitly {@link replitproto.OTLinkFile.verify|verify} messages.
         * @param message OTLinkFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IOTLinkFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTLinkFile message, length delimited. Does not implicitly {@link replitproto.OTLinkFile.verify|verify} messages.
         * @param message OTLinkFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IOTLinkFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTLinkFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTLinkFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.OTLinkFile;

        /**
         * Decodes a OTLinkFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTLinkFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.OTLinkFile;

        /**
         * Verifies a OTLinkFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTLinkFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTLinkFile
         */
        public static fromObject(object: { [k: string]: any }): replitproto.OTLinkFile;

        /**
         * Creates a plain object from a OTLinkFile message. Also converts values to other types if specified.
         * @param message OTLinkFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.OTLinkFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTLinkFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Auth. */
    interface IAuth {

        /** Auth token */
        token?: (string|null);

        /** Auth containerID */
        containerID?: (string|null);
    }

    /** Represents an Auth. */
    class Auth implements IAuth {

        /**
         * Constructs a new Auth.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IAuth);

        /** Auth token. */
        public token: string;

        /** Auth containerID. */
        public containerID: string;

        /**
         * Creates a new Auth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Auth instance
         */
        public static create(properties?: replitproto.IAuth): replitproto.Auth;

        /**
         * Encodes the specified Auth message. Does not implicitly {@link replitproto.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Auth message, length delimited. Does not implicitly {@link replitproto.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Auth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Auth;

        /**
         * Decodes an Auth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Auth;

        /**
         * Verifies an Auth message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Auth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Auth
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Auth;

        /**
         * Creates a plain object from an Auth message. Also converts values to other types if specified.
         * @param message Auth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Auth, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Auth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VCREntry. */
    interface IVCREntry {

        /** VCREntry timestamp */
        timestamp?: (number|Long|null);

        /** VCREntry direction */
        direction?: (replitproto.VCREntry.Direction|null);

        /** VCREntry command */
        command?: (replitproto.ICommand|null);

        /** VCREntry uid */
        uid?: (string|null);
    }

    /** Represents a VCREntry. */
    class VCREntry implements IVCREntry {

        /**
         * Constructs a new VCREntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IVCREntry);

        /** VCREntry timestamp. */
        public timestamp: (number|Long);

        /** VCREntry direction. */
        public direction: replitproto.VCREntry.Direction;

        /** VCREntry command. */
        public command?: (replitproto.ICommand|null);

        /** VCREntry uid. */
        public uid: string;

        /**
         * Creates a new VCREntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VCREntry instance
         */
        public static create(properties?: replitproto.IVCREntry): replitproto.VCREntry;

        /**
         * Encodes the specified VCREntry message. Does not implicitly {@link replitproto.VCREntry.verify|verify} messages.
         * @param message VCREntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IVCREntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VCREntry message, length delimited. Does not implicitly {@link replitproto.VCREntry.verify|verify} messages.
         * @param message VCREntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IVCREntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VCREntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VCREntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.VCREntry;

        /**
         * Decodes a VCREntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VCREntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.VCREntry;

        /**
         * Verifies a VCREntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VCREntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VCREntry
         */
        public static fromObject(object: { [k: string]: any }): replitproto.VCREntry;

        /**
         * Creates a plain object from a VCREntry message. Also converts values to other types if specified.
         * @param message VCREntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.VCREntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VCREntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace VCREntry {

        /** Direction enum. */
        enum Direction {
            IN = 0,
            OUT = 1
        }
    }

    /** Properties of a StartVCR. */
    interface IStartVCR {
    }

    /** Represents a StartVCR. */
    class StartVCR implements IStartVCR {

        /**
         * Constructs a new StartVCR.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IStartVCR);

        /**
         * Creates a new StartVCR instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartVCR instance
         */
        public static create(properties?: replitproto.IStartVCR): replitproto.StartVCR;

        /**
         * Encodes the specified StartVCR message. Does not implicitly {@link replitproto.StartVCR.verify|verify} messages.
         * @param message StartVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IStartVCR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartVCR message, length delimited. Does not implicitly {@link replitproto.StartVCR.verify|verify} messages.
         * @param message StartVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IStartVCR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartVCR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.StartVCR;

        /**
         * Decodes a StartVCR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.StartVCR;

        /**
         * Verifies a StartVCR message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartVCR message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartVCR
         */
        public static fromObject(object: { [k: string]: any }): replitproto.StartVCR;

        /**
         * Creates a plain object from a StartVCR message. Also converts values to other types if specified.
         * @param message StartVCR
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.StartVCR, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartVCR to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadVCR. */
    interface IReadVCR {
    }

    /** Represents a ReadVCR. */
    class ReadVCR implements IReadVCR {

        /**
         * Constructs a new ReadVCR.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IReadVCR);

        /**
         * Creates a new ReadVCR instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadVCR instance
         */
        public static create(properties?: replitproto.IReadVCR): replitproto.ReadVCR;

        /**
         * Encodes the specified ReadVCR message. Does not implicitly {@link replitproto.ReadVCR.verify|verify} messages.
         * @param message ReadVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IReadVCR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadVCR message, length delimited. Does not implicitly {@link replitproto.ReadVCR.verify|verify} messages.
         * @param message ReadVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IReadVCR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadVCR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.ReadVCR;

        /**
         * Decodes a ReadVCR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.ReadVCR;

        /**
         * Verifies a ReadVCR message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadVCR message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadVCR
         */
        public static fromObject(object: { [k: string]: any }): replitproto.ReadVCR;

        /**
         * Creates a plain object from a ReadVCR message. Also converts values to other types if specified.
         * @param message ReadVCR
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.ReadVCR, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadVCR to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VCRLog. */
    interface IVCRLog {

        /** VCRLog log */
        log?: (replitproto.IVCREntry[]|null);

        /** VCRLog logfile */
        logfile?: (replitproto.IFile|null);
    }

    /** Represents a VCRLog. */
    class VCRLog implements IVCRLog {

        /**
         * Constructs a new VCRLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IVCRLog);

        /** VCRLog log. */
        public log: replitproto.IVCREntry[];

        /** VCRLog logfile. */
        public logfile?: (replitproto.IFile|null);

        /**
         * Creates a new VCRLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VCRLog instance
         */
        public static create(properties?: replitproto.IVCRLog): replitproto.VCRLog;

        /**
         * Encodes the specified VCRLog message. Does not implicitly {@link replitproto.VCRLog.verify|verify} messages.
         * @param message VCRLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IVCRLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VCRLog message, length delimited. Does not implicitly {@link replitproto.VCRLog.verify|verify} messages.
         * @param message VCRLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IVCRLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VCRLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VCRLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.VCRLog;

        /**
         * Decodes a VCRLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VCRLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.VCRLog;

        /**
         * Verifies a VCRLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VCRLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VCRLog
         */
        public static fromObject(object: { [k: string]: any }): replitproto.VCRLog;

        /**
         * Creates a plain object from a VCRLog message. Also converts values to other types if specified.
         * @param message VCRLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.VCRLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VCRLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExecInfo. */
    interface IExecInfo {

        /** ExecInfo command */
        command?: (string[]|null);

        /** ExecInfo reason */
        reason?: (string|null);
    }

    /** Represents an ExecInfo. */
    class ExecInfo implements IExecInfo {

        /**
         * Constructs a new ExecInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IExecInfo);

        /** ExecInfo command. */
        public command: string[];

        /** ExecInfo reason. */
        public reason: string;

        /**
         * Creates a new ExecInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecInfo instance
         */
        public static create(properties?: replitproto.IExecInfo): replitproto.ExecInfo;

        /**
         * Encodes the specified ExecInfo message. Does not implicitly {@link replitproto.ExecInfo.verify|verify} messages.
         * @param message ExecInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IExecInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecInfo message, length delimited. Does not implicitly {@link replitproto.ExecInfo.verify|verify} messages.
         * @param message ExecInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IExecInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.ExecInfo;

        /**
         * Decodes an ExecInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExecInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.ExecInfo;

        /**
         * Verifies an ExecInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExecInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExecInfo
         */
        public static fromObject(object: { [k: string]: any }): replitproto.ExecInfo;

        /**
         * Creates a plain object from an ExecInfo message. Also converts values to other types if specified.
         * @param message ExecInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.ExecInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExecInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Debug. */
    interface IDebug {

        /** Debug text */
        text?: (string|null);
    }

    /** Represents a Debug. */
    class Debug implements IDebug {

        /**
         * Constructs a new Debug.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IDebug);

        /** Debug text. */
        public text: string;

        /**
         * Creates a new Debug instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Debug instance
         */
        public static create(properties?: replitproto.IDebug): replitproto.Debug;

        /**
         * Encodes the specified Debug message. Does not implicitly {@link replitproto.Debug.verify|verify} messages.
         * @param message Debug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Debug message, length delimited. Does not implicitly {@link replitproto.Debug.verify|verify} messages.
         * @param message Debug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Debug message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Debug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Debug;

        /**
         * Decodes a Debug message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Debug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Debug;

        /**
         * Verifies a Debug message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Debug message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Debug
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Debug;

        /**
         * Creates a plain object from a Debug message. Also converts values to other types if specified.
         * @param message Debug
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Debug, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Debug to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** FileAuthMethod enum. */
    enum FileAuthMethod {
        GET = 0,
        HEAD = 1,
        PUT = 2,
        DELETE = 3
    }

    /** Properties of a FileAuthReq. */
    interface IFileAuthReq {

        /** FileAuthReq file */
        file?: (replitproto.IFile|null);

        /** FileAuthReq method */
        method?: (replitproto.FileAuthMethod|null);
    }

    /** Represents a FileAuthReq. */
    class FileAuthReq implements IFileAuthReq {

        /**
         * Constructs a new FileAuthReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IFileAuthReq);

        /** FileAuthReq file. */
        public file?: (replitproto.IFile|null);

        /** FileAuthReq method. */
        public method: replitproto.FileAuthMethod;

        /**
         * Creates a new FileAuthReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileAuthReq instance
         */
        public static create(properties?: replitproto.IFileAuthReq): replitproto.FileAuthReq;

        /**
         * Encodes the specified FileAuthReq message. Does not implicitly {@link replitproto.FileAuthReq.verify|verify} messages.
         * @param message FileAuthReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IFileAuthReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileAuthReq message, length delimited. Does not implicitly {@link replitproto.FileAuthReq.verify|verify} messages.
         * @param message FileAuthReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IFileAuthReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileAuthReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileAuthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.FileAuthReq;

        /**
         * Decodes a FileAuthReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileAuthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.FileAuthReq;

        /**
         * Verifies a FileAuthReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileAuthReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileAuthReq
         */
        public static fromObject(object: { [k: string]: any }): replitproto.FileAuthReq;

        /**
         * Creates a plain object from a FileAuthReq message. Also converts values to other types if specified.
         * @param message FileAuthReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.FileAuthReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileAuthReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MultiFileAuthRes. */
    interface IMultiFileAuthRes {

        /** MultiFileAuthRes put */
        put?: (replitproto.IFileAuthRes|null);

        /** MultiFileAuthRes del */
        del?: (replitproto.IFileAuthRes|null);
    }

    /** Represents a MultiFileAuthRes. */
    class MultiFileAuthRes implements IMultiFileAuthRes {

        /**
         * Constructs a new MultiFileAuthRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IMultiFileAuthRes);

        /** MultiFileAuthRes put. */
        public put?: (replitproto.IFileAuthRes|null);

        /** MultiFileAuthRes del. */
        public del?: (replitproto.IFileAuthRes|null);

        /**
         * Creates a new MultiFileAuthRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiFileAuthRes instance
         */
        public static create(properties?: replitproto.IMultiFileAuthRes): replitproto.MultiFileAuthRes;

        /**
         * Encodes the specified MultiFileAuthRes message. Does not implicitly {@link replitproto.MultiFileAuthRes.verify|verify} messages.
         * @param message MultiFileAuthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IMultiFileAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MultiFileAuthRes message, length delimited. Does not implicitly {@link replitproto.MultiFileAuthRes.verify|verify} messages.
         * @param message MultiFileAuthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IMultiFileAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MultiFileAuthRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultiFileAuthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.MultiFileAuthRes;

        /**
         * Decodes a MultiFileAuthRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MultiFileAuthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.MultiFileAuthRes;

        /**
         * Verifies a MultiFileAuthRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MultiFileAuthRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MultiFileAuthRes
         */
        public static fromObject(object: { [k: string]: any }): replitproto.MultiFileAuthRes;

        /**
         * Creates a plain object from a MultiFileAuthRes message. Also converts values to other types if specified.
         * @param message MultiFileAuthRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.MultiFileAuthRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MultiFileAuthRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileAuthRes. */
    interface IFileAuthRes {

        /** FileAuthRes file */
        file?: (replitproto.IFile|null);

        /** FileAuthRes url */
        url?: (string|null);

        /** FileAuthRes method */
        method?: (replitproto.FileAuthMethod|null);

        /** FileAuthRes expire */
        expire?: (number|Long|null);

        /** FileAuthRes error */
        error?: (string|null);
    }

    /** Represents a FileAuthRes. */
    class FileAuthRes implements IFileAuthRes {

        /**
         * Constructs a new FileAuthRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IFileAuthRes);

        /** FileAuthRes file. */
        public file?: (replitproto.IFile|null);

        /** FileAuthRes url. */
        public url: string;

        /** FileAuthRes method. */
        public method: replitproto.FileAuthMethod;

        /** FileAuthRes expire. */
        public expire: (number|Long);

        /** FileAuthRes error. */
        public error: string;

        /**
         * Creates a new FileAuthRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileAuthRes instance
         */
        public static create(properties?: replitproto.IFileAuthRes): replitproto.FileAuthRes;

        /**
         * Encodes the specified FileAuthRes message. Does not implicitly {@link replitproto.FileAuthRes.verify|verify} messages.
         * @param message FileAuthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IFileAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileAuthRes message, length delimited. Does not implicitly {@link replitproto.FileAuthRes.verify|verify} messages.
         * @param message FileAuthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IFileAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileAuthRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileAuthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.FileAuthRes;

        /**
         * Decodes a FileAuthRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileAuthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.FileAuthRes;

        /**
         * Verifies a FileAuthRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileAuthRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileAuthRes
         */
        public static fromObject(object: { [k: string]: any }): replitproto.FileAuthRes;

        /**
         * Creates a plain object from a FileAuthRes message. Also converts values to other types if specified.
         * @param message FileAuthRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.FileAuthRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileAuthRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Disconnect. */
    interface IDisconnect {

        /** Disconnect error */
        error?: (string|null);
    }

    /** Represents a Disconnect. */
    class Disconnect implements IDisconnect {

        /**
         * Constructs a new Disconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IDisconnect);

        /** Disconnect error. */
        public error: string;

        /**
         * Creates a new Disconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Disconnect instance
         */
        public static create(properties?: replitproto.IDisconnect): replitproto.Disconnect;

        /**
         * Encodes the specified Disconnect message. Does not implicitly {@link replitproto.Disconnect.verify|verify} messages.
         * @param message Disconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Disconnect message, length delimited. Does not implicitly {@link replitproto.Disconnect.verify|verify} messages.
         * @param message Disconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Disconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Disconnect;

        /**
         * Decodes a Disconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Disconnect;

        /**
         * Verifies a Disconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Disconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Disconnect
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Disconnect;

        /**
         * Creates a plain object from a Disconnect message. Also converts values to other types if specified.
         * @param message Disconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Disconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Disconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Send. */
    interface ISend {

        /** Send buff */
        buff?: (Uint8Array|null);
    }

    /** Represents a Send. */
    class Send implements ISend {

        /**
         * Constructs a new Send.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ISend);

        /** Send buff. */
        public buff: Uint8Array;

        /**
         * Creates a new Send instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Send instance
         */
        public static create(properties?: replitproto.ISend): replitproto.Send;

        /**
         * Encodes the specified Send message. Does not implicitly {@link replitproto.Send.verify|verify} messages.
         * @param message Send message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ISend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Send message, length delimited. Does not implicitly {@link replitproto.Send.verify|verify} messages.
         * @param message Send message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ISend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Send message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Send;

        /**
         * Decodes a Send message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Send;

        /**
         * Verifies a Send message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Send message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Send
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Send;

        /**
         * Creates a plain object from a Send message. Also converts values to other types if specified.
         * @param message Send
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Send, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Send to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Recv. */
    interface IRecv {

        /** Recv buff */
        buff?: (Uint8Array|null);
    }

    /** Represents a Recv. */
    class Recv implements IRecv {

        /**
         * Constructs a new Recv.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IRecv);

        /** Recv buff. */
        public buff: Uint8Array;

        /**
         * Creates a new Recv instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Recv instance
         */
        public static create(properties?: replitproto.IRecv): replitproto.Recv;

        /**
         * Encodes the specified Recv message. Does not implicitly {@link replitproto.Recv.verify|verify} messages.
         * @param message Recv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IRecv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Recv message, length delimited. Does not implicitly {@link replitproto.Recv.verify|verify} messages.
         * @param message Recv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IRecv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Recv message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Recv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Recv;

        /**
         * Decodes a Recv message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Recv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Recv;

        /**
         * Verifies a Recv message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Recv message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Recv
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Recv;

        /**
         * Creates a plain object from a Recv message. Also converts values to other types if specified.
         * @param message Recv
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Recv, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Recv to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Connect. */
    interface IConnect {

        /** Connect proto */
        proto?: (string|null);

        /** Connect addr */
        addr?: (string|null);
    }

    /** Represents a Connect. */
    class Connect implements IConnect {

        /**
         * Constructs a new Connect.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IConnect);

        /** Connect proto. */
        public proto: string;

        /** Connect addr. */
        public addr: string;

        /**
         * Creates a new Connect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Connect instance
         */
        public static create(properties?: replitproto.IConnect): replitproto.Connect;

        /**
         * Encodes the specified Connect message. Does not implicitly {@link replitproto.Connect.verify|verify} messages.
         * @param message Connect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IConnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Connect message, length delimited. Does not implicitly {@link replitproto.Connect.verify|verify} messages.
         * @param message Connect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IConnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Connect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Connect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Connect;

        /**
         * Decodes a Connect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Connect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Connect;

        /**
         * Verifies a Connect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Connect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Connect
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Connect;

        /**
         * Creates a plain object from a Connect message. Also converts values to other types if specified.
         * @param message Connect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Connect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Connect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Hint. */
    interface IHint {

        /** Hint text */
        text?: (string|null);
    }

    /** Represents a Hint. */
    class Hint implements IHint {

        /**
         * Constructs a new Hint.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IHint);

        /** Hint text. */
        public text: string;

        /**
         * Creates a new Hint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hint instance
         */
        public static create(properties?: replitproto.IHint): replitproto.Hint;

        /**
         * Encodes the specified Hint message. Does not implicitly {@link replitproto.Hint.verify|verify} messages.
         * @param message Hint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IHint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hint message, length delimited. Does not implicitly {@link replitproto.Hint.verify|verify} messages.
         * @param message Hint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IHint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Hint;

        /**
         * Decodes a Hint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Hint;

        /**
         * Verifies a Hint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hint
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Hint;

        /**
         * Creates a plain object from a Hint message. Also converts values to other types if specified.
         * @param message Hint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Hint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Ping. */
    interface IPing {
    }

    /** Represents a Ping. */
    class Ping implements IPing {

        /**
         * Constructs a new Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPing);

        /**
         * Creates a new Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ping instance
         */
        public static create(properties?: replitproto.IPing): replitproto.Ping;

        /**
         * Encodes the specified Ping message. Does not implicitly {@link replitproto.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link replitproto.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Ping;

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Ping;

        /**
         * Verifies a Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ping
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Ping;

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @param message Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pong. */
    interface IPong {
    }

    /** Represents a Pong. */
    class Pong implements IPong {

        /**
         * Constructs a new Pong.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPong);

        /**
         * Creates a new Pong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pong instance
         */
        public static create(properties?: replitproto.IPong): replitproto.Pong;

        /**
         * Encodes the specified Pong message. Does not implicitly {@link replitproto.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link replitproto.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Pong;

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Pong;

        /**
         * Verifies a Pong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pong
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Pong;

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @param message Pong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Hello. */
    interface IHello {

        /** Hello userid */
        userid?: (number|null);

        /** Hello username */
        username?: (string|null);

        /** Hello token */
        token?: (string|null);
    }

    /** Represents a Hello. */
    class Hello implements IHello {

        /**
         * Constructs a new Hello.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IHello);

        /** Hello userid. */
        public userid: number;

        /** Hello username. */
        public username: string;

        /** Hello token. */
        public token: string;

        /**
         * Creates a new Hello instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hello instance
         */
        public static create(properties?: replitproto.IHello): replitproto.Hello;

        /**
         * Encodes the specified Hello message. Does not implicitly {@link replitproto.Hello.verify|verify} messages.
         * @param message Hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IHello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hello message, length delimited. Does not implicitly {@link replitproto.Hello.verify|verify} messages.
         * @param message Hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IHello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hello message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Hello;

        /**
         * Decodes a Hello message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Hello;

        /**
         * Verifies a Hello message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hello message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hello
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Hello;

        /**
         * Creates a plain object from a Hello message. Also converts values to other types if specified.
         * @param message Hello
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Hello, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hello to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Goodbye. */
    interface IGoodbye {
    }

    /** Represents a Goodbye. */
    class Goodbye implements IGoodbye {

        /**
         * Constructs a new Goodbye.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IGoodbye);

        /**
         * Creates a new Goodbye instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Goodbye instance
         */
        public static create(properties?: replitproto.IGoodbye): replitproto.Goodbye;

        /**
         * Encodes the specified Goodbye message. Does not implicitly {@link replitproto.Goodbye.verify|verify} messages.
         * @param message Goodbye message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IGoodbye, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Goodbye message, length delimited. Does not implicitly {@link replitproto.Goodbye.verify|verify} messages.
         * @param message Goodbye message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IGoodbye, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Goodbye message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Goodbye
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Goodbye;

        /**
         * Decodes a Goodbye message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Goodbye
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Goodbye;

        /**
         * Verifies a Goodbye message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Goodbye message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Goodbye
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Goodbye;

        /**
         * Creates a plain object from a Goodbye message. Also converts values to other types if specified.
         * @param message Goodbye
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Goodbye, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Goodbye to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** State enum. */
    enum State {
        Stopped = 0,
        Running = 1
    }

    /** Properties of a CheckChanges. */
    interface ICheckChanges {
    }

    /** Represents a CheckChanges. */
    class CheckChanges implements ICheckChanges {

        /**
         * Constructs a new CheckChanges.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ICheckChanges);

        /**
         * Creates a new CheckChanges instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckChanges instance
         */
        public static create(properties?: replitproto.ICheckChanges): replitproto.CheckChanges;

        /**
         * Encodes the specified CheckChanges message. Does not implicitly {@link replitproto.CheckChanges.verify|verify} messages.
         * @param message CheckChanges message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ICheckChanges, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckChanges message, length delimited. Does not implicitly {@link replitproto.CheckChanges.verify|verify} messages.
         * @param message CheckChanges message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ICheckChanges, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckChanges message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckChanges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.CheckChanges;

        /**
         * Decodes a CheckChanges message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckChanges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.CheckChanges;

        /**
         * Verifies a CheckChanges message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckChanges message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckChanges
         */
        public static fromObject(object: { [k: string]: any }): replitproto.CheckChanges;

        /**
         * Creates a plain object from a CheckChanges message. Also converts values to other types if specified.
         * @param message CheckChanges
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.CheckChanges, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckChanges to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnsurePackages. */
    interface IEnsurePackages {

        /** EnsurePackages install */
        install?: (boolean|null);

        /** EnsurePackages file */
        file?: (replitproto.IFile|null);
    }

    /** Represents an EnsurePackages. */
    class EnsurePackages implements IEnsurePackages {

        /**
         * Constructs a new EnsurePackages.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IEnsurePackages);

        /** EnsurePackages install. */
        public install: boolean;

        /** EnsurePackages file. */
        public file?: (replitproto.IFile|null);

        /**
         * Creates a new EnsurePackages instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnsurePackages instance
         */
        public static create(properties?: replitproto.IEnsurePackages): replitproto.EnsurePackages;

        /**
         * Encodes the specified EnsurePackages message. Does not implicitly {@link replitproto.EnsurePackages.verify|verify} messages.
         * @param message EnsurePackages message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IEnsurePackages, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnsurePackages message, length delimited. Does not implicitly {@link replitproto.EnsurePackages.verify|verify} messages.
         * @param message EnsurePackages message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IEnsurePackages, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnsurePackages message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnsurePackages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.EnsurePackages;

        /**
         * Decodes an EnsurePackages message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnsurePackages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.EnsurePackages;

        /**
         * Verifies an EnsurePackages message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnsurePackages message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnsurePackages
         */
        public static fromObject(object: { [k: string]: any }): replitproto.EnsurePackages;

        /**
         * Creates a plain object from an EnsurePackages message. Also converts values to other types if specified.
         * @param message EnsurePackages
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.EnsurePackages, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnsurePackages to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Start. */
    interface IStart {
    }

    /** Represents a Start. */
    class Start implements IStart {

        /**
         * Constructs a new Start.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IStart);

        /**
         * Creates a new Start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Start instance
         */
        public static create(properties?: replitproto.IStart): replitproto.Start;

        /**
         * Encodes the specified Start message. Does not implicitly {@link replitproto.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Start message, length delimited. Does not implicitly {@link replitproto.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Start;

        /**
         * Decodes a Start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Start;

        /**
         * Verifies a Start message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Start message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Start
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Start;

        /**
         * Creates a plain object from a Start message. Also converts values to other types if specified.
         * @param message Start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Start, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Start to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugStatus. */
    interface IDebugStatus {

        /** DebugStatus done */
        done?: (boolean|null);

        /** DebugStatus stack */
        stack?: (replitproto.IStackFrame[]|null);
    }

    /** Represents a DebugStatus. */
    class DebugStatus implements IDebugStatus {

        /**
         * Constructs a new DebugStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IDebugStatus);

        /** DebugStatus done. */
        public done: boolean;

        /** DebugStatus stack. */
        public stack: replitproto.IStackFrame[];

        /**
         * Creates a new DebugStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugStatus instance
         */
        public static create(properties?: replitproto.IDebugStatus): replitproto.DebugStatus;

        /**
         * Encodes the specified DebugStatus message. Does not implicitly {@link replitproto.DebugStatus.verify|verify} messages.
         * @param message DebugStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IDebugStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugStatus message, length delimited. Does not implicitly {@link replitproto.DebugStatus.verify|verify} messages.
         * @param message DebugStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IDebugStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.DebugStatus;

        /**
         * Decodes a DebugStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.DebugStatus;

        /**
         * Verifies a DebugStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugStatus
         */
        public static fromObject(object: { [k: string]: any }): replitproto.DebugStatus;

        /**
         * Creates a plain object from a DebugStatus message. Also converts values to other types if specified.
         * @param message DebugStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.DebugStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StackFrame. */
    interface IStackFrame {

        /** StackFrame function */
        "function"?: (string|null);

        /** StackFrame line */
        line?: (number|null);
    }

    /** Represents a StackFrame. */
    class StackFrame implements IStackFrame {

        /**
         * Constructs a new StackFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IStackFrame);

        /** StackFrame function. */
        public function: string;

        /** StackFrame line. */
        public line: number;

        /**
         * Creates a new StackFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StackFrame instance
         */
        public static create(properties?: replitproto.IStackFrame): replitproto.StackFrame;

        /**
         * Encodes the specified StackFrame message. Does not implicitly {@link replitproto.StackFrame.verify|verify} messages.
         * @param message StackFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IStackFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StackFrame message, length delimited. Does not implicitly {@link replitproto.StackFrame.verify|verify} messages.
         * @param message StackFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IStackFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StackFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.StackFrame;

        /**
         * Decodes a StackFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.StackFrame;

        /**
         * Verifies a StackFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StackFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StackFrame
         */
        public static fromObject(object: { [k: string]: any }): replitproto.StackFrame;

        /**
         * Creates a plain object from a StackFrame message. Also converts values to other types if specified.
         * @param message StackFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.StackFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StackFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContainedTest. */
    interface IContainedTest {

        /** ContainedTest suite */
        suite?: (replitproto.IFile|null);

        /** ContainedTest project */
        project?: (replitproto.IFile[]|null);
    }

    /** Represents a ContainedTest. */
    class ContainedTest implements IContainedTest {

        /**
         * Constructs a new ContainedTest.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IContainedTest);

        /** ContainedTest suite. */
        public suite?: (replitproto.IFile|null);

        /** ContainedTest project. */
        public project: replitproto.IFile[];

        /**
         * Creates a new ContainedTest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContainedTest instance
         */
        public static create(properties?: replitproto.IContainedTest): replitproto.ContainedTest;

        /**
         * Encodes the specified ContainedTest message. Does not implicitly {@link replitproto.ContainedTest.verify|verify} messages.
         * @param message ContainedTest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IContainedTest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContainedTest message, length delimited. Does not implicitly {@link replitproto.ContainedTest.verify|verify} messages.
         * @param message ContainedTest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IContainedTest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContainedTest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContainedTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.ContainedTest;

        /**
         * Decodes a ContainedTest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContainedTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.ContainedTest;

        /**
         * Verifies a ContainedTest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContainedTest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContainedTest
         */
        public static fromObject(object: { [k: string]: any }): replitproto.ContainedTest;

        /**
         * Creates a plain object from a ContainedTest message. Also converts values to other types if specified.
         * @param message ContainedTest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.ContainedTest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContainedTest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TestResult. */
    interface ITestResult {

        /** TestResult passed */
        passed?: (boolean|null);

        /** TestResult stderr */
        stderr?: (string|null);

        /** TestResult fails */
        fails?: (replitproto.ITestFailure[]|null);
    }

    /** Represents a TestResult. */
    class TestResult implements ITestResult {

        /**
         * Constructs a new TestResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ITestResult);

        /** TestResult passed. */
        public passed: boolean;

        /** TestResult stderr. */
        public stderr: string;

        /** TestResult fails. */
        public fails: replitproto.ITestFailure[];

        /**
         * Creates a new TestResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestResult instance
         */
        public static create(properties?: replitproto.ITestResult): replitproto.TestResult;

        /**
         * Encodes the specified TestResult message. Does not implicitly {@link replitproto.TestResult.verify|verify} messages.
         * @param message TestResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ITestResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestResult message, length delimited. Does not implicitly {@link replitproto.TestResult.verify|verify} messages.
         * @param message TestResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ITestResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.TestResult;

        /**
         * Decodes a TestResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.TestResult;

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
        public static fromObject(object: { [k: string]: any }): replitproto.TestResult;

        /**
         * Creates a plain object from a TestResult message. Also converts values to other types if specified.
         * @param message TestResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.TestResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TestFailure. */
    interface ITestFailure {

        /** TestFailure name */
        name?: (string|null);

        /** TestFailure trace */
        trace?: (string|null);
    }

    /** Represents a TestFailure. */
    class TestFailure implements ITestFailure {

        /**
         * Constructs a new TestFailure.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ITestFailure);

        /** TestFailure name. */
        public name: string;

        /** TestFailure trace. */
        public trace: string;

        /**
         * Creates a new TestFailure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestFailure instance
         */
        public static create(properties?: replitproto.ITestFailure): replitproto.TestFailure;

        /**
         * Encodes the specified TestFailure message. Does not implicitly {@link replitproto.TestFailure.verify|verify} messages.
         * @param message TestFailure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ITestFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestFailure message, length delimited. Does not implicitly {@link replitproto.TestFailure.verify|verify} messages.
         * @param message TestFailure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ITestFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestFailure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.TestFailure;

        /**
         * Decodes a TestFailure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.TestFailure;

        /**
         * Verifies a TestFailure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestFailure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestFailure
         */
        public static fromObject(object: { [k: string]: any }): replitproto.TestFailure;

        /**
         * Creates a plain object from a TestFailure message. Also converts values to other types if specified.
         * @param message TestFailure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.TestFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestFailure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResizeTerm. */
    interface IResizeTerm {

        /** ResizeTerm rows */
        rows?: (number|null);

        /** ResizeTerm cols */
        cols?: (number|null);
    }

    /** Represents a ResizeTerm. */
    class ResizeTerm implements IResizeTerm {

        /**
         * Constructs a new ResizeTerm.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IResizeTerm);

        /** ResizeTerm rows. */
        public rows: number;

        /** ResizeTerm cols. */
        public cols: number;

        /**
         * Creates a new ResizeTerm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResizeTerm instance
         */
        public static create(properties?: replitproto.IResizeTerm): replitproto.ResizeTerm;

        /**
         * Encodes the specified ResizeTerm message. Does not implicitly {@link replitproto.ResizeTerm.verify|verify} messages.
         * @param message ResizeTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IResizeTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResizeTerm message, length delimited. Does not implicitly {@link replitproto.ResizeTerm.verify|verify} messages.
         * @param message ResizeTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IResizeTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResizeTerm message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResizeTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.ResizeTerm;

        /**
         * Decodes a ResizeTerm message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResizeTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.ResizeTerm;

        /**
         * Verifies a ResizeTerm message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResizeTerm message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResizeTerm
         */
        public static fromObject(object: { [k: string]: any }): replitproto.ResizeTerm;

        /**
         * Creates a plain object from a ResizeTerm message. Also converts values to other types if specified.
         * @param message ResizeTerm
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.ResizeTerm, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResizeTerm to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SaneTerm. */
    interface ISaneTerm {
    }

    /** Represents a SaneTerm. */
    class SaneTerm implements ISaneTerm {

        /**
         * Constructs a new SaneTerm.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ISaneTerm);

        /**
         * Creates a new SaneTerm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaneTerm instance
         */
        public static create(properties?: replitproto.ISaneTerm): replitproto.SaneTerm;

        /**
         * Encodes the specified SaneTerm message. Does not implicitly {@link replitproto.SaneTerm.verify|verify} messages.
         * @param message SaneTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ISaneTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaneTerm message, length delimited. Does not implicitly {@link replitproto.SaneTerm.verify|verify} messages.
         * @param message SaneTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ISaneTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaneTerm message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaneTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.SaneTerm;

        /**
         * Decodes a SaneTerm message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaneTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.SaneTerm;

        /**
         * Verifies a SaneTerm message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaneTerm message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaneTerm
         */
        public static fromObject(object: { [k: string]: any }): replitproto.SaneTerm;

        /**
         * Creates a plain object from a SaneTerm message. Also converts values to other types if specified.
         * @param message SaneTerm
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.SaneTerm, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaneTerm to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LintResults. */
    interface ILintResults {

        /** LintResults results */
        results?: (replitproto.ILintResult[]|null);
    }

    /** Represents a LintResults. */
    class LintResults implements ILintResults {

        /**
         * Constructs a new LintResults.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ILintResults);

        /** LintResults results. */
        public results: replitproto.ILintResult[];

        /**
         * Creates a new LintResults instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LintResults instance
         */
        public static create(properties?: replitproto.ILintResults): replitproto.LintResults;

        /**
         * Encodes the specified LintResults message. Does not implicitly {@link replitproto.LintResults.verify|verify} messages.
         * @param message LintResults message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ILintResults, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LintResults message, length delimited. Does not implicitly {@link replitproto.LintResults.verify|verify} messages.
         * @param message LintResults message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ILintResults, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LintResults message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LintResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.LintResults;

        /**
         * Decodes a LintResults message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LintResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.LintResults;

        /**
         * Verifies a LintResults message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LintResults message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LintResults
         */
        public static fromObject(object: { [k: string]: any }): replitproto.LintResults;

        /**
         * Creates a plain object from a LintResults message. Also converts values to other types if specified.
         * @param message LintResults
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.LintResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LintResults to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LintResult. */
    interface ILintResult {

        /** LintResult text */
        text?: (string|null);

        /** LintResult row */
        row?: (number|null);

        /** LintResult column */
        column?: (number|null);

        /** LintResult type */
        type?: (string|null);
    }

    /** Represents a LintResult. */
    class LintResult implements ILintResult {

        /**
         * Constructs a new LintResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ILintResult);

        /** LintResult text. */
        public text: string;

        /** LintResult row. */
        public row: number;

        /** LintResult column. */
        public column: number;

        /** LintResult type. */
        public type: string;

        /**
         * Creates a new LintResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LintResult instance
         */
        public static create(properties?: replitproto.ILintResult): replitproto.LintResult;

        /**
         * Encodes the specified LintResult message. Does not implicitly {@link replitproto.LintResult.verify|verify} messages.
         * @param message LintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ILintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LintResult message, length delimited. Does not implicitly {@link replitproto.LintResult.verify|verify} messages.
         * @param message LintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ILintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LintResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.LintResult;

        /**
         * Decodes a LintResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.LintResult;

        /**
         * Verifies a LintResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LintResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LintResult
         */
        public static fromObject(object: { [k: string]: any }): replitproto.LintResult;

        /**
         * Creates a plain object from a LintResult message. Also converts values to other types if specified.
         * @param message LintResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.LintResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LintResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OK. */
    interface IOK {
    }

    /** Represents a OK. */
    class OK implements IOK {

        /**
         * Constructs a new OK.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IOK);

        /**
         * Creates a new OK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OK instance
         */
        public static create(properties?: replitproto.IOK): replitproto.OK;

        /**
         * Encodes the specified OK message. Does not implicitly {@link replitproto.OK.verify|verify} messages.
         * @param message OK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IOK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OK message, length delimited. Does not implicitly {@link replitproto.OK.verify|verify} messages.
         * @param message OK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IOK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.OK;

        /**
         * Decodes a OK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.OK;

        /**
         * Verifies a OK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OK
         */
        public static fromObject(object: { [k: string]: any }): replitproto.OK;

        /**
         * Creates a plain object from a OK message. Also converts values to other types if specified.
         * @param message OK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.OK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Move. */
    interface IMove {

        /** Move oldPath */
        oldPath?: (string|null);

        /** Move newPath */
        newPath?: (string|null);
    }

    /** Represents a Move. */
    class Move implements IMove {

        /**
         * Constructs a new Move.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IMove);

        /** Move oldPath. */
        public oldPath: string;

        /** Move newPath. */
        public newPath: string;

        /**
         * Creates a new Move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Move instance
         */
        public static create(properties?: replitproto.IMove): replitproto.Move;

        /**
         * Encodes the specified Move message. Does not implicitly {@link replitproto.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link replitproto.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Move;

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Move;

        /**
         * Verifies a Move message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Move message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Move
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Move;

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @param message Move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Files. */
    interface IFiles {

        /** Files files */
        files?: (replitproto.IFile[]|null);
    }

    /** Represents a Files. */
    class Files implements IFiles {

        /**
         * Constructs a new Files.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IFiles);

        /** Files files. */
        public files: replitproto.IFile[];

        /**
         * Creates a new Files instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Files instance
         */
        public static create(properties?: replitproto.IFiles): replitproto.Files;

        /**
         * Encodes the specified Files message. Does not implicitly {@link replitproto.Files.verify|verify} messages.
         * @param message Files message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IFiles, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Files message, length delimited. Does not implicitly {@link replitproto.Files.verify|verify} messages.
         * @param message Files message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IFiles, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Files message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Files
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Files;

        /**
         * Decodes a Files message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Files
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Files;

        /**
         * Verifies a Files message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Files message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Files
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Files;

        /**
         * Creates a plain object from a Files message. Also converts values to other types if specified.
         * @param message Files
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Files, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Files to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a File. */
    interface IFile {

        /** File path */
        path?: (string|null);

        /** File type */
        type?: (replitproto.File.Type|null);

        /** File content */
        content?: (Uint8Array|null);
    }

    /** Represents a File. */
    class File implements IFile {

        /**
         * Constructs a new File.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IFile);

        /** File path. */
        public path: string;

        /** File type. */
        public type: replitproto.File.Type;

        /** File content. */
        public content: Uint8Array;

        /**
         * Creates a new File instance using the specified properties.
         * @param [properties] Properties to set
         * @returns File instance
         */
        public static create(properties?: replitproto.IFile): replitproto.File;

        /**
         * Encodes the specified File message. Does not implicitly {@link replitproto.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link replitproto.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a File message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.File;

        /**
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.File;

        /**
         * Verifies a File message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a File message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns File
         */
        public static fromObject(object: { [k: string]: any }): replitproto.File;

        /**
         * Creates a plain object from a File message. Also converts values to other types if specified.
         * @param message File
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this File to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace File {

        /** Type enum. */
        enum Type {
            REGULAR = 0,
            DIRECTORY = 1
        }
    }

    /** Properties of a Clear. */
    interface IClear {
    }

    /** Represents a Clear. */
    class Clear implements IClear {

        /**
         * Constructs a new Clear.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IClear);

        /**
         * Creates a new Clear instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Clear instance
         */
        public static create(properties?: replitproto.IClear): replitproto.Clear;

        /**
         * Encodes the specified Clear message. Does not implicitly {@link replitproto.Clear.verify|verify} messages.
         * @param message Clear message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IClear, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Clear message, length delimited. Does not implicitly {@link replitproto.Clear.verify|verify} messages.
         * @param message Clear message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IClear, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Clear message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Clear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Clear;

        /**
         * Decodes a Clear message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Clear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Clear;

        /**
         * Verifies a Clear message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Clear message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Clear
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Clear;

        /**
         * Creates a plain object from a Clear message. Also converts values to other types if specified.
         * @param message Clear
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Clear, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Clear to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Toast. */
    interface IToast {

        /** Toast text */
        text?: (string|null);
    }

    /** Represents a Toast. */
    class Toast implements IToast {

        /**
         * Constructs a new Toast.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IToast);

        /** Toast text. */
        public text: string;

        /**
         * Creates a new Toast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Toast instance
         */
        public static create(properties?: replitproto.IToast): replitproto.Toast;

        /**
         * Encodes the specified Toast message. Does not implicitly {@link replitproto.Toast.verify|verify} messages.
         * @param message Toast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IToast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Toast message, length delimited. Does not implicitly {@link replitproto.Toast.verify|verify} messages.
         * @param message Toast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IToast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Toast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Toast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Toast;

        /**
         * Decodes a Toast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Toast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Toast;

        /**
         * Verifies a Toast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Toast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Toast
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Toast;

        /**
         * Creates a plain object from a Toast message. Also converts values to other types if specified.
         * @param message Toast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Toast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Toast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RunMain. */
    interface IRunMain {
    }

    /** Represents a RunMain. */
    class RunMain implements IRunMain {

        /**
         * Constructs a new RunMain.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IRunMain);

        /**
         * Creates a new RunMain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RunMain instance
         */
        public static create(properties?: replitproto.IRunMain): replitproto.RunMain;

        /**
         * Encodes the specified RunMain message. Does not implicitly {@link replitproto.RunMain.verify|verify} messages.
         * @param message RunMain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IRunMain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RunMain message, length delimited. Does not implicitly {@link replitproto.RunMain.verify|verify} messages.
         * @param message RunMain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IRunMain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RunMain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RunMain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.RunMain;

        /**
         * Decodes a RunMain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RunMain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.RunMain;

        /**
         * Verifies a RunMain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RunMain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RunMain
         */
        public static fromObject(object: { [k: string]: any }): replitproto.RunMain;

        /**
         * Creates a plain object from a RunMain message. Also converts values to other types if specified.
         * @param message RunMain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.RunMain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RunMain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenChannel. */
    interface IOpenChannel {

        /** OpenChannel service */
        service?: (string|null);

        /** OpenChannel name */
        name?: (string|null);

        /** OpenChannel action */
        action?: (replitproto.OpenChannel.Action|null);

        /** OpenChannel id */
        id?: (number|null);
    }

    /** Represents an OpenChannel. */
    class OpenChannel implements IOpenChannel {

        /**
         * Constructs a new OpenChannel.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IOpenChannel);

        /** OpenChannel service. */
        public service: string;

        /** OpenChannel name. */
        public name: string;

        /** OpenChannel action. */
        public action: replitproto.OpenChannel.Action;

        /** OpenChannel id. */
        public id: number;

        /**
         * Creates a new OpenChannel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenChannel instance
         */
        public static create(properties?: replitproto.IOpenChannel): replitproto.OpenChannel;

        /**
         * Encodes the specified OpenChannel message. Does not implicitly {@link replitproto.OpenChannel.verify|verify} messages.
         * @param message OpenChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IOpenChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpenChannel message, length delimited. Does not implicitly {@link replitproto.OpenChannel.verify|verify} messages.
         * @param message OpenChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IOpenChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenChannel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.OpenChannel;

        /**
         * Decodes an OpenChannel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.OpenChannel;

        /**
         * Verifies an OpenChannel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenChannel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenChannel
         */
        public static fromObject(object: { [k: string]: any }): replitproto.OpenChannel;

        /**
         * Creates a plain object from an OpenChannel message. Also converts values to other types if specified.
         * @param message OpenChannel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.OpenChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenChannel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace OpenChannel {

        /** Action enum. */
        enum Action {
            CREATE = 0,
            ATTACH = 1,
            ATTACH_OR_CREATE = 2
        }
    }

    /** Properties of an OpenChannelRes. */
    interface IOpenChannelRes {

        /** OpenChannelRes id */
        id?: (number|null);

        /** OpenChannelRes state */
        state?: (replitproto.OpenChannelRes.State|null);

        /** OpenChannelRes error */
        error?: (string|null);
    }

    /** Represents an OpenChannelRes. */
    class OpenChannelRes implements IOpenChannelRes {

        /**
         * Constructs a new OpenChannelRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IOpenChannelRes);

        /** OpenChannelRes id. */
        public id: number;

        /** OpenChannelRes state. */
        public state: replitproto.OpenChannelRes.State;

        /** OpenChannelRes error. */
        public error: string;

        /**
         * Creates a new OpenChannelRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenChannelRes instance
         */
        public static create(properties?: replitproto.IOpenChannelRes): replitproto.OpenChannelRes;

        /**
         * Encodes the specified OpenChannelRes message. Does not implicitly {@link replitproto.OpenChannelRes.verify|verify} messages.
         * @param message OpenChannelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IOpenChannelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpenChannelRes message, length delimited. Does not implicitly {@link replitproto.OpenChannelRes.verify|verify} messages.
         * @param message OpenChannelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IOpenChannelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenChannelRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenChannelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.OpenChannelRes;

        /**
         * Decodes an OpenChannelRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenChannelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.OpenChannelRes;

        /**
         * Verifies an OpenChannelRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenChannelRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenChannelRes
         */
        public static fromObject(object: { [k: string]: any }): replitproto.OpenChannelRes;

        /**
         * Creates a plain object from an OpenChannelRes message. Also converts values to other types if specified.
         * @param message OpenChannelRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.OpenChannelRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenChannelRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace OpenChannelRes {

        /** State enum. */
        enum State {
            CREATED = 0,
            ATTACHED = 1,
            ERROR = 2
        }
    }

    /** Properties of a CloseChannel. */
    interface ICloseChannel {

        /** CloseChannel id */
        id?: (number|null);

        /** CloseChannel action */
        action?: (replitproto.CloseChannel.Action|null);
    }

    /** Represents a CloseChannel. */
    class CloseChannel implements ICloseChannel {

        /**
         * Constructs a new CloseChannel.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ICloseChannel);

        /** CloseChannel id. */
        public id: number;

        /** CloseChannel action. */
        public action: replitproto.CloseChannel.Action;

        /**
         * Creates a new CloseChannel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseChannel instance
         */
        public static create(properties?: replitproto.ICloseChannel): replitproto.CloseChannel;

        /**
         * Encodes the specified CloseChannel message. Does not implicitly {@link replitproto.CloseChannel.verify|verify} messages.
         * @param message CloseChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ICloseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseChannel message, length delimited. Does not implicitly {@link replitproto.CloseChannel.verify|verify} messages.
         * @param message CloseChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ICloseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseChannel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.CloseChannel;

        /**
         * Decodes a CloseChannel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.CloseChannel;

        /**
         * Verifies a CloseChannel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseChannel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseChannel
         */
        public static fromObject(object: { [k: string]: any }): replitproto.CloseChannel;

        /**
         * Creates a plain object from a CloseChannel message. Also converts values to other types if specified.
         * @param message CloseChannel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.CloseChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseChannel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CloseChannel {

        /** Action enum. */
        enum Action {
            DISCONNECT = 0,
            TRY_CLOSE = 1,
            CLOSE = 2
        }
    }

    /** Properties of a CloseChannelRes. */
    interface ICloseChannelRes {

        /** CloseChannelRes id */
        id?: (number|null);

        /** CloseChannelRes status */
        status?: (replitproto.CloseChannelRes.Status|null);
    }

    /** Represents a CloseChannelRes. */
    class CloseChannelRes implements ICloseChannelRes {

        /**
         * Constructs a new CloseChannelRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.ICloseChannelRes);

        /** CloseChannelRes id. */
        public id: number;

        /** CloseChannelRes status. */
        public status: replitproto.CloseChannelRes.Status;

        /**
         * Creates a new CloseChannelRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseChannelRes instance
         */
        public static create(properties?: replitproto.ICloseChannelRes): replitproto.CloseChannelRes;

        /**
         * Encodes the specified CloseChannelRes message. Does not implicitly {@link replitproto.CloseChannelRes.verify|verify} messages.
         * @param message CloseChannelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.ICloseChannelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseChannelRes message, length delimited. Does not implicitly {@link replitproto.CloseChannelRes.verify|verify} messages.
         * @param message CloseChannelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.ICloseChannelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseChannelRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseChannelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.CloseChannelRes;

        /**
         * Decodes a CloseChannelRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseChannelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.CloseChannelRes;

        /**
         * Verifies a CloseChannelRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseChannelRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseChannelRes
         */
        public static fromObject(object: { [k: string]: any }): replitproto.CloseChannelRes;

        /**
         * Creates a plain object from a CloseChannelRes message. Also converts values to other types if specified.
         * @param message CloseChannelRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.CloseChannelRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseChannelRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CloseChannelRes {

        /** Status enum. */
        enum Status {
            DISCONNECT = 0,
            CLOSE = 1,
            NOTHING = 2
        }
    }

    /** Properties of a ContainerState. */
    interface IContainerState {

        /** ContainerState state */
        state?: (replitproto.ContainerState.State|null);
    }

    /** Represents a ContainerState. */
    class ContainerState implements IContainerState {

        /**
         * Constructs a new ContainerState.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IContainerState);

        /** ContainerState state. */
        public state: replitproto.ContainerState.State;

        /**
         * Creates a new ContainerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContainerState instance
         */
        public static create(properties?: replitproto.IContainerState): replitproto.ContainerState;

        /**
         * Encodes the specified ContainerState message. Does not implicitly {@link replitproto.ContainerState.verify|verify} messages.
         * @param message ContainerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IContainerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContainerState message, length delimited. Does not implicitly {@link replitproto.ContainerState.verify|verify} messages.
         * @param message ContainerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IContainerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContainerState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContainerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.ContainerState;

        /**
         * Decodes a ContainerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContainerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.ContainerState;

        /**
         * Verifies a ContainerState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContainerState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContainerState
         */
        public static fromObject(object: { [k: string]: any }): replitproto.ContainerState;

        /**
         * Creates a plain object from a ContainerState message. Also converts values to other types if specified.
         * @param message ContainerState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.ContainerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContainerState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ContainerState {

        /** State enum. */
        enum State {
            SLEEP = 0,
            READY = 1
        }
    }

    /** Properties of a PortOpen. */
    interface IPortOpen {

        /** PortOpen forwarded */
        forwarded?: (boolean|null);

        /** PortOpen port */
        port?: (number|null);

        /** PortOpen address */
        address?: (string|null);
    }

    /** Represents a PortOpen. */
    class PortOpen implements IPortOpen {

        /**
         * Constructs a new PortOpen.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPortOpen);

        /** PortOpen forwarded. */
        public forwarded: boolean;

        /** PortOpen port. */
        public port: number;

        /** PortOpen address. */
        public address: string;

        /**
         * Creates a new PortOpen instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PortOpen instance
         */
        public static create(properties?: replitproto.IPortOpen): replitproto.PortOpen;

        /**
         * Encodes the specified PortOpen message. Does not implicitly {@link replitproto.PortOpen.verify|verify} messages.
         * @param message PortOpen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPortOpen, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PortOpen message, length delimited. Does not implicitly {@link replitproto.PortOpen.verify|verify} messages.
         * @param message PortOpen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPortOpen, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PortOpen message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PortOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PortOpen;

        /**
         * Decodes a PortOpen message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PortOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PortOpen;

        /**
         * Verifies a PortOpen message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PortOpen message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PortOpen
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PortOpen;

        /**
         * Creates a plain object from a PortOpen message. Also converts values to other types if specified.
         * @param message PortOpen
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PortOpen, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PortOpen to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTPacket. */
    interface IOTPacket {

        /** OTPacket version */
        version?: (number|null);

        /** OTPacket ops */
        ops?: (replitproto.IOTRuneTransformOp[]|null);

        /** OTPacket crc32 */
        crc32?: (number|null);
    }

    /** Represents a OTPacket. */
    class OTPacket implements IOTPacket {

        /**
         * Constructs a new OTPacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IOTPacket);

        /** OTPacket version. */
        public version: number;

        /** OTPacket ops. */
        public ops: replitproto.IOTRuneTransformOp[];

        /** OTPacket crc32. */
        public crc32: number;

        /**
         * Creates a new OTPacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTPacket instance
         */
        public static create(properties?: replitproto.IOTPacket): replitproto.OTPacket;

        /**
         * Encodes the specified OTPacket message. Does not implicitly {@link replitproto.OTPacket.verify|verify} messages.
         * @param message OTPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IOTPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTPacket message, length delimited. Does not implicitly {@link replitproto.OTPacket.verify|verify} messages.
         * @param message OTPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IOTPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTPacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.OTPacket;

        /**
         * Decodes a OTPacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.OTPacket;

        /**
         * Verifies a OTPacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTPacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTPacket
         */
        public static fromObject(object: { [k: string]: any }): replitproto.OTPacket;

        /**
         * Creates a plain object from a OTPacket message. Also converts values to other types if specified.
         * @param message OTPacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.OTPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTPacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTRuneTransformOp. */
    interface IOTRuneTransformOp {

        /** OTRuneTransformOp skip */
        skip?: (number|null);

        /** OTRuneTransformOp delete */
        "delete"?: (number|null);

        /** OTRuneTransformOp insert */
        insert?: (string|null);
    }

    /** Represents a OTRuneTransformOp. */
    class OTRuneTransformOp implements IOTRuneTransformOp {

        /**
         * Constructs a new OTRuneTransformOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IOTRuneTransformOp);

        /** OTRuneTransformOp skip. */
        public skip: number;

        /** OTRuneTransformOp delete. */
        public delete: number;

        /** OTRuneTransformOp insert. */
        public insert: string;

        /** OTRuneTransformOp op. */
        public op?: ("skip"|"delete"|"insert");

        /**
         * Creates a new OTRuneTransformOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTRuneTransformOp instance
         */
        public static create(properties?: replitproto.IOTRuneTransformOp): replitproto.OTRuneTransformOp;

        /**
         * Encodes the specified OTRuneTransformOp message. Does not implicitly {@link replitproto.OTRuneTransformOp.verify|verify} messages.
         * @param message OTRuneTransformOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IOTRuneTransformOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTRuneTransformOp message, length delimited. Does not implicitly {@link replitproto.OTRuneTransformOp.verify|verify} messages.
         * @param message OTRuneTransformOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IOTRuneTransformOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTRuneTransformOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTRuneTransformOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.OTRuneTransformOp;

        /**
         * Decodes a OTRuneTransformOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTRuneTransformOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.OTRuneTransformOp;

        /**
         * Verifies a OTRuneTransformOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTRuneTransformOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTRuneTransformOp
         */
        public static fromObject(object: { [k: string]: any }): replitproto.OTRuneTransformOp;

        /**
         * Creates a plain object from a OTRuneTransformOp message. Also converts values to other types if specified.
         * @param message OTRuneTransformOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.OTRuneTransformOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTRuneTransformOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTStatus. */
    interface IOTStatus {

        /** OTStatus contents */
        contents?: (string|null);

        /** OTStatus version */
        version?: (number|null);

        /** OTStatus linkedFile */
        linkedFile?: (replitproto.IFile|null);

        /** OTStatus cursors */
        cursors?: (replitproto.IOTCursor[]|null);
    }

    /** Represents a OTStatus. */
    class OTStatus implements IOTStatus {

        /**
         * Constructs a new OTStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IOTStatus);

        /** OTStatus contents. */
        public contents: string;

        /** OTStatus version. */
        public version: number;

        /** OTStatus linkedFile. */
        public linkedFile?: (replitproto.IFile|null);

        /** OTStatus cursors. */
        public cursors: replitproto.IOTCursor[];

        /**
         * Creates a new OTStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTStatus instance
         */
        public static create(properties?: replitproto.IOTStatus): replitproto.OTStatus;

        /**
         * Encodes the specified OTStatus message. Does not implicitly {@link replitproto.OTStatus.verify|verify} messages.
         * @param message OTStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IOTStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTStatus message, length delimited. Does not implicitly {@link replitproto.OTStatus.verify|verify} messages.
         * @param message OTStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IOTStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.OTStatus;

        /**
         * Decodes a OTStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.OTStatus;

        /**
         * Verifies a OTStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTStatus
         */
        public static fromObject(object: { [k: string]: any }): replitproto.OTStatus;

        /**
         * Creates a plain object from a OTStatus message. Also converts values to other types if specified.
         * @param message OTStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.OTStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTCursor. */
    interface IOTCursor {

        /** OTCursor position */
        position?: (number|null);

        /** OTCursor selectionStart */
        selectionStart?: (number|null);

        /** OTCursor selectionEnd */
        selectionEnd?: (number|null);

        /** OTCursor user */
        user?: (replitproto.IUser|null);

        /** OTCursor id */
        id?: (string|null);
    }

    /** Represents a OTCursor. */
    class OTCursor implements IOTCursor {

        /**
         * Constructs a new OTCursor.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IOTCursor);

        /** OTCursor position. */
        public position: number;

        /** OTCursor selectionStart. */
        public selectionStart: number;

        /** OTCursor selectionEnd. */
        public selectionEnd: number;

        /** OTCursor user. */
        public user?: (replitproto.IUser|null);

        /** OTCursor id. */
        public id: string;

        /**
         * Creates a new OTCursor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTCursor instance
         */
        public static create(properties?: replitproto.IOTCursor): replitproto.OTCursor;

        /**
         * Encodes the specified OTCursor message. Does not implicitly {@link replitproto.OTCursor.verify|verify} messages.
         * @param message OTCursor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IOTCursor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTCursor message, length delimited. Does not implicitly {@link replitproto.OTCursor.verify|verify} messages.
         * @param message OTCursor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IOTCursor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTCursor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.OTCursor;

        /**
         * Decodes a OTCursor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.OTCursor;

        /**
         * Verifies a OTCursor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTCursor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTCursor
         */
        public static fromObject(object: { [k: string]: any }): replitproto.OTCursor;

        /**
         * Creates a plain object from a OTCursor message. Also converts values to other types if specified.
         * @param message OTCursor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.OTCursor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTCursor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatMessage. */
    interface IChatMessage {

        /** ChatMessage username */
        username?: (string|null);

        /** ChatMessage text */
        text?: (string|null);
    }

    /** Represents a ChatMessage. */
    class ChatMessage implements IChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IChatMessage);

        /** ChatMessage username. */
        public username: string;

        /** ChatMessage text. */
        public text: string;

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessage instance
         */
        public static create(properties?: replitproto.IChatMessage): replitproto.ChatMessage;

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link replitproto.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link replitproto.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.ChatMessage;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.ChatMessage;

        /**
         * Verifies a ChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessage
         */
        public static fromObject(object: { [k: string]: any }): replitproto.ChatMessage;

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param message ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatTyping. */
    interface IChatTyping {

        /** ChatTyping username */
        username?: (string|null);

        /** ChatTyping typing */
        typing?: (boolean|null);
    }

    /** Represents a ChatTyping. */
    class ChatTyping implements IChatTyping {

        /**
         * Constructs a new ChatTyping.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IChatTyping);

        /** ChatTyping username. */
        public username: string;

        /** ChatTyping typing. */
        public typing: boolean;

        /**
         * Creates a new ChatTyping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatTyping instance
         */
        public static create(properties?: replitproto.IChatTyping): replitproto.ChatTyping;

        /**
         * Encodes the specified ChatTyping message. Does not implicitly {@link replitproto.ChatTyping.verify|verify} messages.
         * @param message ChatTyping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IChatTyping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatTyping message, length delimited. Does not implicitly {@link replitproto.ChatTyping.verify|verify} messages.
         * @param message ChatTyping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IChatTyping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatTyping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatTyping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.ChatTyping;

        /**
         * Decodes a ChatTyping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatTyping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.ChatTyping;

        /**
         * Verifies a ChatTyping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatTyping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatTyping
         */
        public static fromObject(object: { [k: string]: any }): replitproto.ChatTyping;

        /**
         * Creates a plain object from a ChatTyping message. Also converts values to other types if specified.
         * @param message ChatTyping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.ChatTyping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatTyping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (number|null);

        /** User name */
        name?: (string|null);

        /** User roles */
        roles?: (string[]|null);

        /** User session */
        session?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IUser);

        /** User id. */
        public id: number;

        /** User name. */
        public name: string;

        /** User roles. */
        public roles: string[];

        /** User session. */
        public session: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: replitproto.IUser): replitproto.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link replitproto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link replitproto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): replitproto.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Roster. */
    interface IRoster {

        /** Roster user */
        user?: (replitproto.IUser[]|null);
    }

    /** Represents a Roster. */
    class Roster implements IRoster {

        /**
         * Constructs a new Roster.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IRoster);

        /** Roster user. */
        public user: replitproto.IUser[];

        /**
         * Creates a new Roster instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Roster instance
         */
        public static create(properties?: replitproto.IRoster): replitproto.Roster;

        /**
         * Encodes the specified Roster message. Does not implicitly {@link replitproto.Roster.verify|verify} messages.
         * @param message Roster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IRoster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Roster message, length delimited. Does not implicitly {@link replitproto.Roster.verify|verify} messages.
         * @param message Roster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IRoster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Roster message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Roster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Roster;

        /**
         * Decodes a Roster message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Roster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Roster;

        /**
         * Verifies a Roster message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Roster message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Roster
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Roster;

        /**
         * Creates a plain object from a Roster message. Also converts values to other types if specified.
         * @param message Roster
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Roster, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Roster to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Exec. */
    interface IExec {

        /** Exec args */
        args?: (string[]|null);

        /** Exec env */
        env?: ({ [k: string]: string }|null);

        /** Exec blocking */
        blocking?: (boolean|null);
    }

    /** Represents an Exec. */
    class Exec implements IExec {

        /**
         * Constructs a new Exec.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IExec);

        /** Exec args. */
        public args: string[];

        /** Exec env. */
        public env: { [k: string]: string };

        /** Exec blocking. */
        public blocking: boolean;

        /**
         * Creates a new Exec instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Exec instance
         */
        public static create(properties?: replitproto.IExec): replitproto.Exec;

        /**
         * Encodes the specified Exec message. Does not implicitly {@link replitproto.Exec.verify|verify} messages.
         * @param message Exec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IExec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Exec message, length delimited. Does not implicitly {@link replitproto.Exec.verify|verify} messages.
         * @param message Exec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IExec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Exec message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Exec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Exec;

        /**
         * Decodes an Exec message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Exec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Exec;

        /**
         * Verifies an Exec message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Exec message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Exec
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Exec;

        /**
         * Creates a plain object from an Exec message. Also converts values to other types if specified.
         * @param message Exec
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Exec, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Exec to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Package. */
    interface IPackage {

        /** Package name */
        name?: (string|null);

        /** Package spec */
        spec?: (string|null);

        /** Package description */
        description?: (string|null);

        /** Package version */
        version?: (string|null);

        /** Package homepageURL */
        homepageURL?: (string|null);

        /** Package documentationURL */
        documentationURL?: (string|null);

        /** Package sourceCodeURL */
        sourceCodeURL?: (string|null);

        /** Package bugTrackerURL */
        bugTrackerURL?: (string|null);

        /** Package author */
        author?: (string|null);

        /** Package license */
        license?: (string|null);

        /** Package dependencies */
        dependencies?: (replitproto.IPackage[]|null);
    }

    /** Represents a Package. */
    class Package implements IPackage {

        /**
         * Constructs a new Package.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackage);

        /** Package name. */
        public name: string;

        /** Package spec. */
        public spec: string;

        /** Package description. */
        public description: string;

        /** Package version. */
        public version: string;

        /** Package homepageURL. */
        public homepageURL: string;

        /** Package documentationURL. */
        public documentationURL: string;

        /** Package sourceCodeURL. */
        public sourceCodeURL: string;

        /** Package bugTrackerURL. */
        public bugTrackerURL: string;

        /** Package author. */
        public author: string;

        /** Package license. */
        public license: string;

        /** Package dependencies. */
        public dependencies: replitproto.IPackage[];

        /**
         * Creates a new Package instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Package instance
         */
        public static create(properties?: replitproto.IPackage): replitproto.Package;

        /**
         * Encodes the specified Package message. Does not implicitly {@link replitproto.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Package message, length delimited. Does not implicitly {@link replitproto.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Package message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.Package;

        /**
         * Decodes a Package message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.Package;

        /**
         * Verifies a Package message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Package message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Package
         */
        public static fromObject(object: { [k: string]: any }): replitproto.Package;

        /**
         * Creates a plain object from a Package message. Also converts values to other types if specified.
         * @param message Package
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Package to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageSearch. */
    interface IPackageSearch {

        /** PackageSearch query */
        query?: (string|null);
    }

    /** Represents a PackageSearch. */
    class PackageSearch implements IPackageSearch {

        /**
         * Constructs a new PackageSearch.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageSearch);

        /** PackageSearch query. */
        public query: string;

        /**
         * Creates a new PackageSearch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageSearch instance
         */
        public static create(properties?: replitproto.IPackageSearch): replitproto.PackageSearch;

        /**
         * Encodes the specified PackageSearch message. Does not implicitly {@link replitproto.PackageSearch.verify|verify} messages.
         * @param message PackageSearch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageSearch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageSearch message, length delimited. Does not implicitly {@link replitproto.PackageSearch.verify|verify} messages.
         * @param message PackageSearch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageSearch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageSearch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageSearch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageSearch;

        /**
         * Decodes a PackageSearch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageSearch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageSearch;

        /**
         * Verifies a PackageSearch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageSearch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageSearch
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageSearch;

        /**
         * Creates a plain object from a PackageSearch message. Also converts values to other types if specified.
         * @param message PackageSearch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageSearch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageSearch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageSearchResp. */
    interface IPackageSearchResp {

        /** PackageSearchResp results */
        results?: (replitproto.IPackage[]|null);
    }

    /** Represents a PackageSearchResp. */
    class PackageSearchResp implements IPackageSearchResp {

        /**
         * Constructs a new PackageSearchResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageSearchResp);

        /** PackageSearchResp results. */
        public results: replitproto.IPackage[];

        /**
         * Creates a new PackageSearchResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageSearchResp instance
         */
        public static create(properties?: replitproto.IPackageSearchResp): replitproto.PackageSearchResp;

        /**
         * Encodes the specified PackageSearchResp message. Does not implicitly {@link replitproto.PackageSearchResp.verify|verify} messages.
         * @param message PackageSearchResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageSearchResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageSearchResp message, length delimited. Does not implicitly {@link replitproto.PackageSearchResp.verify|verify} messages.
         * @param message PackageSearchResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageSearchResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageSearchResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageSearchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageSearchResp;

        /**
         * Decodes a PackageSearchResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageSearchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageSearchResp;

        /**
         * Verifies a PackageSearchResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageSearchResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageSearchResp
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageSearchResp;

        /**
         * Creates a plain object from a PackageSearchResp message. Also converts values to other types if specified.
         * @param message PackageSearchResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageSearchResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageSearchResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageInfo. */
    interface IPackageInfo {

        /** PackageInfo pkg */
        pkg?: (replitproto.IPackage|null);
    }

    /** Represents a PackageInfo. */
    class PackageInfo implements IPackageInfo {

        /**
         * Constructs a new PackageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageInfo);

        /** PackageInfo pkg. */
        public pkg?: (replitproto.IPackage|null);

        /**
         * Creates a new PackageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageInfo instance
         */
        public static create(properties?: replitproto.IPackageInfo): replitproto.PackageInfo;

        /**
         * Encodes the specified PackageInfo message. Does not implicitly {@link replitproto.PackageInfo.verify|verify} messages.
         * @param message PackageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageInfo message, length delimited. Does not implicitly {@link replitproto.PackageInfo.verify|verify} messages.
         * @param message PackageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageInfo;

        /**
         * Decodes a PackageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageInfo;

        /**
         * Verifies a PackageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageInfo
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageInfo;

        /**
         * Creates a plain object from a PackageInfo message. Also converts values to other types if specified.
         * @param message PackageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageInfoResp. */
    interface IPackageInfoResp {

        /** PackageInfoResp pkg */
        pkg?: (replitproto.IPackage|null);
    }

    /** Represents a PackageInfoResp. */
    class PackageInfoResp implements IPackageInfoResp {

        /**
         * Constructs a new PackageInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageInfoResp);

        /** PackageInfoResp pkg. */
        public pkg?: (replitproto.IPackage|null);

        /**
         * Creates a new PackageInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageInfoResp instance
         */
        public static create(properties?: replitproto.IPackageInfoResp): replitproto.PackageInfoResp;

        /**
         * Encodes the specified PackageInfoResp message. Does not implicitly {@link replitproto.PackageInfoResp.verify|verify} messages.
         * @param message PackageInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageInfoResp message, length delimited. Does not implicitly {@link replitproto.PackageInfoResp.verify|verify} messages.
         * @param message PackageInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageInfoResp;

        /**
         * Decodes a PackageInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageInfoResp;

        /**
         * Verifies a PackageInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageInfoResp
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageInfoResp;

        /**
         * Creates a plain object from a PackageInfoResp message. Also converts values to other types if specified.
         * @param message PackageInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageAdd. */
    interface IPackageAdd {

        /** PackageAdd pkgs */
        pkgs?: (replitproto.IPackage[]|null);
    }

    /** Represents a PackageAdd. */
    class PackageAdd implements IPackageAdd {

        /**
         * Constructs a new PackageAdd.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageAdd);

        /** PackageAdd pkgs. */
        public pkgs: replitproto.IPackage[];

        /**
         * Creates a new PackageAdd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageAdd instance
         */
        public static create(properties?: replitproto.IPackageAdd): replitproto.PackageAdd;

        /**
         * Encodes the specified PackageAdd message. Does not implicitly {@link replitproto.PackageAdd.verify|verify} messages.
         * @param message PackageAdd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageAdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageAdd message, length delimited. Does not implicitly {@link replitproto.PackageAdd.verify|verify} messages.
         * @param message PackageAdd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageAdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageAdd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageAdd;

        /**
         * Decodes a PackageAdd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageAdd;

        /**
         * Verifies a PackageAdd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageAdd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageAdd
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageAdd;

        /**
         * Creates a plain object from a PackageAdd message. Also converts values to other types if specified.
         * @param message PackageAdd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageAdd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageAdd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageRemove. */
    interface IPackageRemove {

        /** PackageRemove pkgs */
        pkgs?: (replitproto.IPackage[]|null);
    }

    /** Represents a PackageRemove. */
    class PackageRemove implements IPackageRemove {

        /**
         * Constructs a new PackageRemove.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageRemove);

        /** PackageRemove pkgs. */
        public pkgs: replitproto.IPackage[];

        /**
         * Creates a new PackageRemove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageRemove instance
         */
        public static create(properties?: replitproto.IPackageRemove): replitproto.PackageRemove;

        /**
         * Encodes the specified PackageRemove message. Does not implicitly {@link replitproto.PackageRemove.verify|verify} messages.
         * @param message PackageRemove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageRemove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageRemove message, length delimited. Does not implicitly {@link replitproto.PackageRemove.verify|verify} messages.
         * @param message PackageRemove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageRemove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageRemove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageRemove;

        /**
         * Decodes a PackageRemove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageRemove;

        /**
         * Verifies a PackageRemove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageRemove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageRemove
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageRemove;

        /**
         * Creates a plain object from a PackageRemove message. Also converts values to other types if specified.
         * @param message PackageRemove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageRemove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageRemove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageInstall. */
    interface IPackageInstall {
    }

    /** Represents a PackageInstall. */
    class PackageInstall implements IPackageInstall {

        /**
         * Constructs a new PackageInstall.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageInstall);

        /**
         * Creates a new PackageInstall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageInstall instance
         */
        public static create(properties?: replitproto.IPackageInstall): replitproto.PackageInstall;

        /**
         * Encodes the specified PackageInstall message. Does not implicitly {@link replitproto.PackageInstall.verify|verify} messages.
         * @param message PackageInstall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageInstall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageInstall message, length delimited. Does not implicitly {@link replitproto.PackageInstall.verify|verify} messages.
         * @param message PackageInstall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageInstall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageInstall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageInstall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageInstall;

        /**
         * Decodes a PackageInstall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageInstall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageInstall;

        /**
         * Verifies a PackageInstall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageInstall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageInstall
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageInstall;

        /**
         * Creates a plain object from a PackageInstall message. Also converts values to other types if specified.
         * @param message PackageInstall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageInstall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageInstall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageListSpecfile. */
    interface IPackageListSpecfile {
    }

    /** Represents a PackageListSpecfile. */
    class PackageListSpecfile implements IPackageListSpecfile {

        /**
         * Constructs a new PackageListSpecfile.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageListSpecfile);

        /**
         * Creates a new PackageListSpecfile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageListSpecfile instance
         */
        public static create(properties?: replitproto.IPackageListSpecfile): replitproto.PackageListSpecfile;

        /**
         * Encodes the specified PackageListSpecfile message. Does not implicitly {@link replitproto.PackageListSpecfile.verify|verify} messages.
         * @param message PackageListSpecfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageListSpecfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageListSpecfile message, length delimited. Does not implicitly {@link replitproto.PackageListSpecfile.verify|verify} messages.
         * @param message PackageListSpecfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageListSpecfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageListSpecfile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageListSpecfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageListSpecfile;

        /**
         * Decodes a PackageListSpecfile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageListSpecfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageListSpecfile;

        /**
         * Verifies a PackageListSpecfile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageListSpecfile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageListSpecfile
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageListSpecfile;

        /**
         * Creates a plain object from a PackageListSpecfile message. Also converts values to other types if specified.
         * @param message PackageListSpecfile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageListSpecfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageListSpecfile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageListSpecfileResp. */
    interface IPackageListSpecfileResp {

        /** PackageListSpecfileResp pkgs */
        pkgs?: (replitproto.IPackage[]|null);
    }

    /** Represents a PackageListSpecfileResp. */
    class PackageListSpecfileResp implements IPackageListSpecfileResp {

        /**
         * Constructs a new PackageListSpecfileResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageListSpecfileResp);

        /** PackageListSpecfileResp pkgs. */
        public pkgs: replitproto.IPackage[];

        /**
         * Creates a new PackageListSpecfileResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageListSpecfileResp instance
         */
        public static create(properties?: replitproto.IPackageListSpecfileResp): replitproto.PackageListSpecfileResp;

        /**
         * Encodes the specified PackageListSpecfileResp message. Does not implicitly {@link replitproto.PackageListSpecfileResp.verify|verify} messages.
         * @param message PackageListSpecfileResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageListSpecfileResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageListSpecfileResp message, length delimited. Does not implicitly {@link replitproto.PackageListSpecfileResp.verify|verify} messages.
         * @param message PackageListSpecfileResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageListSpecfileResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageListSpecfileResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageListSpecfileResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageListSpecfileResp;

        /**
         * Decodes a PackageListSpecfileResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageListSpecfileResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageListSpecfileResp;

        /**
         * Verifies a PackageListSpecfileResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageListSpecfileResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageListSpecfileResp
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageListSpecfileResp;

        /**
         * Creates a plain object from a PackageListSpecfileResp message. Also converts values to other types if specified.
         * @param message PackageListSpecfileResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageListSpecfileResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageListSpecfileResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageCacheSave. */
    interface IPackageCacheSave {
    }

    /** Represents a PackageCacheSave. */
    class PackageCacheSave implements IPackageCacheSave {

        /**
         * Constructs a new PackageCacheSave.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IPackageCacheSave);

        /**
         * Creates a new PackageCacheSave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageCacheSave instance
         */
        public static create(properties?: replitproto.IPackageCacheSave): replitproto.PackageCacheSave;

        /**
         * Encodes the specified PackageCacheSave message. Does not implicitly {@link replitproto.PackageCacheSave.verify|verify} messages.
         * @param message PackageCacheSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IPackageCacheSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageCacheSave message, length delimited. Does not implicitly {@link replitproto.PackageCacheSave.verify|verify} messages.
         * @param message PackageCacheSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IPackageCacheSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageCacheSave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageCacheSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.PackageCacheSave;

        /**
         * Decodes a PackageCacheSave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageCacheSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.PackageCacheSave;

        /**
         * Verifies a PackageCacheSave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageCacheSave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageCacheSave
         */
        public static fromObject(object: { [k: string]: any }): replitproto.PackageCacheSave;

        /**
         * Creates a plain object from a PackageCacheSave message. Also converts values to other types if specified.
         * @param message PackageCacheSave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.PackageCacheSave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageCacheSave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatScrollback. */
    interface IChatScrollback {

        /** ChatScrollback scrollback */
        scrollback?: (replitproto.IChatMessage[]|null);
    }

    /** Represents a ChatScrollback. */
    class ChatScrollback implements IChatScrollback {

        /**
         * Constructs a new ChatScrollback.
         * @param [properties] Properties to set
         */
        constructor(properties?: replitproto.IChatScrollback);

        /** ChatScrollback scrollback. */
        public scrollback: replitproto.IChatMessage[];

        /**
         * Creates a new ChatScrollback instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatScrollback instance
         */
        public static create(properties?: replitproto.IChatScrollback): replitproto.ChatScrollback;

        /**
         * Encodes the specified ChatScrollback message. Does not implicitly {@link replitproto.ChatScrollback.verify|verify} messages.
         * @param message ChatScrollback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: replitproto.IChatScrollback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatScrollback message, length delimited. Does not implicitly {@link replitproto.ChatScrollback.verify|verify} messages.
         * @param message ChatScrollback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: replitproto.IChatScrollback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatScrollback message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatScrollback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): replitproto.ChatScrollback;

        /**
         * Decodes a ChatScrollback message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatScrollback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): replitproto.ChatScrollback;

        /**
         * Verifies a ChatScrollback message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatScrollback message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatScrollback
         */
        public static fromObject(object: { [k: string]: any }): replitproto.ChatScrollback;

        /**
         * Creates a plain object from a ChatScrollback message. Also converts values to other types if specified.
         * @param message ChatScrollback
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: replitproto.ChatScrollback, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatScrollback to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
