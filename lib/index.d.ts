import * as $protobuf from "protobufjs";
/** Namespace api. */
export namespace api {

    /** Properties of a Command. */
    interface ICommand {

        /** Command channel */
        channel?: (number|null);

        /** Command session */
        session?: (number|null);

        /** Command openChan */
        openChan?: (api.OpenChannel|api.IOpenChannel|null);

        /** Command openChanRes */
        openChanRes?: (api.OpenChannelRes|api.IOpenChannelRes|null);

        /** Command closeChan */
        closeChan?: (api.CloseChannel|api.ICloseChannel|null);

        /** Command closeChanRes */
        closeChanRes?: (api.CloseChannelRes|api.ICloseChannelRes|null);

        /** Command containerState */
        containerState?: (api.ContainerState|api.IContainerState|null);

        /** Command portOpen */
        portOpen?: (api.PortOpen|api.IPortOpen|null);

        /** Command toast */
        toast?: (api.Toast|api.IToast|null);

        /** Command protocolError */
        protocolError?: (api.ProtocolError|api.IProtocolError|null);

        /** Command redirect */
        redirect?: (api.Redirect|api.IRedirect|null);

        /** Command alwaysOn */
        alwaysOn?: (api.AlwaysOn|api.IAlwaysOn|null);

        /** Command runMain */
        runMain?: (api.RunMain|api.IRunMain|null);

        /** Command clear */
        clear?: (api.Clear|api.IClear|null);

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

        /** Command stderr */
        stderr?: (string|null);

        /** Command log */
        log?: (string|null);

        /** Command saneTerm */
        saneTerm?: (api.SaneTerm|api.ISaneTerm|null);

        /** Command resizeTerm */
        resizeTerm?: (api.ResizeTerm|api.IResizeTerm|null);

        /** Command state */
        state?: (api.State|null);

        /** Command ok */
        ok?: (api.OK|api.IOK|null);

        /** Command persist */
        persist?: (api.File|api.IFile|null);

        /** Command persistMirror */
        persistMirror?: (api.File|api.IFile|null);

        /** Command write */
        write?: (api.File|api.IFile|null);

        /** Command remove */
        remove?: (api.File|api.IFile|null);

        /** Command move */
        move?: (api.Move|api.IMove|null);

        /** Command tryRemove */
        tryRemove?: (api.File|api.IFile|null);

        /** Command mkdir */
        mkdir?: (api.File|api.IFile|null);

        /** Command stat */
        stat?: (api.File|api.IFile|null);

        /** Command statRes */
        statRes?: (api.StatResult|api.IStatResult|null);

        /** Command transferStart */
        transferStart?: (api.TransferStart|api.ITransferStart|null);

        /** Command transferChunk */
        transferChunk?: (api.TransferChunk|api.ITransferChunk|null);

        /** Command transferComplete */
        transferComplete?: (api.TransferComplete|api.ITransferComplete|null);

        /** Command transferCancel */
        transferCancel?: (api.Transfer|api.ITransfer|null);

        /** Command transfer */
        transfer?: (api.Transfer|api.ITransfer|null);

        /** Command read */
        read?: (api.File|api.IFile|null);

        /** Command readdir */
        readdir?: (api.File|api.IFile|null);

        /** Command files */
        files?: (api.Files|api.IFiles|null);

        /** Command file */
        file?: (api.File|api.IFile|null);

        /** Command checkChanges */
        checkChanges?: (api.CheckChanges|api.ICheckChanges|null);

        /** Command changedFiles */
        changedFiles?: (api.Files|api.IFiles|null);

        /** Command lintResults */
        lintResults?: (api.LintResults|api.ILintResults|null);

        /** Command runContainedTest */
        runContainedTest?: (api.ContainedTest|api.IContainedTest|null);

        /** Command testResult */
        testResult?: (api.TestResult|api.ITestResult|null);

        /** Command debuggerStart */
        debuggerStart?: (string|null);

        /** Command debuggerStep */
        debuggerStep?: (api.RunMain|api.IRunMain|null);

        /** Command debuggerStatus */
        debuggerStatus?: (api.DebugStatus|api.IDebugStatus|null);

        /** Command ensurePackages */
        ensurePackages?: (api.EnsurePackages|api.IEnsurePackages|null);

        /** Command ping */
        ping?: (api.Ping|api.IPing|null);

        /** Command pong */
        pong?: (api.Pong|api.IPong|null);

        /** Command hello */
        hello?: (api.Hello|api.IHello|null);

        /** Command goodbye */
        goodbye?: (api.Goodbye|api.IGoodbye|null);

        /** Command hint */
        hint?: (api.Hint|api.IHint|null);

        /** Command connect */
        connect?: (api.Connect|api.IConnect|null);

        /** Command send */
        send?: (api.Send|api.ISend|null);

        /** Command recv */
        recv?: (api.Recv|api.IRecv|null);

        /** Command disconnect */
        disconnect?: (api.Disconnect|api.IDisconnect|null);

        /** Command fileAuthReq */
        fileAuthReq?: (api.FileAuthReq|api.IFileAuthReq|null);

        /** Command fileAuthRes */
        fileAuthRes?: (api.FileAuthRes|api.IFileAuthRes|null);

        /** Command mutliFileAuthRes */
        mutliFileAuthRes?: (api.MultiFileAuthRes|api.IMultiFileAuthRes|null);

        /** Command listObjects */
        listObjects?: (api.ListObjects|api.IListObjects|null);

        /** Command listObjectsResp */
        listObjectsResp?: (api.ListObjectsResp|api.IListObjectsResp|null);

        /** Command ot */
        ot?: (api.OTPacket|api.IOTPacket|null);

        /** Command otstatus */
        otstatus?: (api.OTStatus|api.IOTStatus|null);

        /** Command otLinkFile */
        otLinkFile?: (api.OTLinkFile|api.IOTLinkFile|null);

        /** Command otLinkFileResponse */
        otLinkFileResponse?: (api.OTLinkFileResponse|api.IOTLinkFileResponse|null);

        /** Command otNewCursor */
        otNewCursor?: (api.OTCursor|api.IOTCursor|null);

        /** Command otDeleteCursor */
        otDeleteCursor?: (api.OTCursor|api.IOTCursor|null);

        /** Command otFetchRequest */
        otFetchRequest?: (api.OTFetchRequest|api.IOTFetchRequest|null);

        /** Command otFetchResponse */
        otFetchResponse?: (api.OTFetchResponse|api.IOTFetchResponse|null);

        /** Command otTransformSelectionRequest */
        otTransformSelectionRequest?: (api.OTTransformSelectionRequest|api.IOTTransformSelectionRequest|null);

        /** Command otTransformSelectionResponse */
        otTransformSelectionResponse?: (api.OTTransformSelectionResponse|api.IOTTransformSelectionResponse|null);

        /** Command flush */
        flush?: (api.Flush|api.IFlush|null);

        /** Command debug */
        debug?: (api.Debug|api.IDebug|null);

        /** Command startVCR */
        startVCR?: (api.StartVCR|api.IStartVCR|null);

        /** Command readVCR */
        readVCR?: (api.ReadVCR|api.IReadVCR|null);

        /** Command VCRLog */
        VCRLog?: (api.VCRLog|api.IVCRLog|null);

        /** Command auth */
        auth?: (api.Auth|api.IAuth|null);

        /** Command execInfo */
        execInfo?: (api.ExecInfo|api.IExecInfo|null);

        /** Command subscribeFile */
        subscribeFile?: (api.SubscribeFile|api.ISubscribeFile|null);

        /** Command fileEvent */
        fileEvent?: (api.FileEvent|api.IFileEvent|null);

        /** Command roster */
        roster?: (api.Roster|api.IRoster|null);

        /** Command join */
        join?: (api.User|api.IUser|null);

        /** Command part */
        part?: (api.User|api.IUser|null);

        /** Command openFile */
        openFile?: (api.OpenFile|api.IOpenFile|null);

        /** Command fileOpened */
        fileOpened?: (api.FileOpened|api.IFileOpened|null);

        /** Command followUser */
        followUser?: (api.FollowUser|api.IFollowUser|null);

        /** Command unfollowUser */
        unfollowUser?: (api.UnfollowUser|api.IUnfollowUser|null);

        /** Command updateSessionTimestamp */
        updateSessionTimestamp?: (api.UpdateSessionTimestamp|api.IUpdateSessionTimestamp|null);

        /** Command sessionTimestampUpdated */
        sessionTimestampUpdated?: (api.SessionTimestampUpdated|api.ISessionTimestampUpdated|null);

        /** Command exec */
        exec?: (api.Exec|api.IExec|null);

        /** Command packageSearch */
        packageSearch?: (api.PackageSearch|api.IPackageSearch|null);

        /** Command packageSearchResp */
        packageSearchResp?: (api.PackageSearchResp|api.IPackageSearchResp|null);

        /** Command packageInfo */
        packageInfo?: (api.PackageInfo|api.IPackageInfo|null);

        /** Command packageInfoResp */
        packageInfoResp?: (api.PackageInfoResp|api.IPackageInfoResp|null);

        /** Command packageAdd */
        packageAdd?: (api.PackageAdd|api.IPackageAdd|null);

        /** Command packageRemove */
        packageRemove?: (api.PackageRemove|api.IPackageRemove|null);

        /** Command packageInstall */
        packageInstall?: (api.PackageInstall|api.IPackageInstall|null);

        /** Command packageListSpecfile */
        packageListSpecfile?: (api.PackageListSpecfile|api.IPackageListSpecfile|null);

        /** Command packageListSpecfileResp */
        packageListSpecfileResp?: (api.PackageListSpecfileResp|api.IPackageListSpecfileResp|null);

        /** Command packageCacheSave */
        packageCacheSave?: (api.PackageCacheSave|api.IPackageCacheSave|null);

        /** Command chatMessage */
        chatMessage?: (api.ChatMessage|api.IChatMessage|null);

        /** Command chatTyping */
        chatTyping?: (api.ChatTyping|api.IChatTyping|null);

        /** Command chatScrollback */
        chatScrollback?: (api.ChatScrollback|api.IChatScrollback|null);

        /** Command fsSnapshot */
        fsSnapshot?: (api.FSSnapshot|api.IFSSnapshot|null);

        /** Command fsTakeLock */
        fsTakeLock?: (api.FSLock|api.IFSLock|null);

        /** Command fsReleaseLock */
        fsReleaseLock?: (api.FSLock|api.IFSLock|null);

        /** Command hasCap */
        hasCap?: (boolean|null);

        /** Command pid1Config */
        pid1Config?: (api.Pid1Config|api.IPid1Config|null);

        /** Command metrics */
        metrics?: (api.Metrics|api.IMetrics|null);

        /** Command bootStatus */
        bootStatus?: (api.BootStatus|api.IBootStatus|null);

        /** Command readMetaRequest */
        readMetaRequest?: (api.ReadMetaRequest|api.IReadMetaRequest|null);

        /** Command readMetaResponse */
        readMetaResponse?: (api.ReadMetaResponse|api.IReadMetaResponse|null);

        /** Command writeMetaRequest */
        writeMetaRequest?: (api.WriteMetaRequest|api.IWriteMetaRequest|null);

        /** Command writeMetaResponse */
        writeMetaResponse?: (api.WriteMetaResponse|api.IWriteMetaResponse|null);

        /** Command appendMetaRequest */
        appendMetaRequest?: (api.AppendMetaRequest|api.IAppendMetaRequest|null);

        /** Command appendMetaResponse */
        appendMetaResponse?: (api.AppendMetaResponse|api.IAppendMetaResponse|null);

        /** Command audio */
        audio?: (api.Audio|api.IAudio|null);

        /** Command pprofRequest */
        pprofRequest?: (api.PprofRequest|api.IPprofRequest|null);

        /** Command pprofResponse */
        pprofResponse?: (api.PprofResponse|api.IPprofResponse|null);

        /** Command audio2 */
        audio2?: (api.Audio2|api.IAudio2|null);

        /** Command PTYConfig */
        PTYConfig?: (api.PTYConfig|api.IPTYConfig|null);

        /** Command debugMain */
        debugMain?: (api.DebugMain|api.IDebugMain|null);

        /** Command debugState */
        debugState?: (api.DebugState|api.IDebugState|null);

        /** Command debugMainReply */
        debugMainReply?: (api.DebugMainReply|api.IDebugMainReply|null);

        /** Command debugInput */
        debugInput?: (api.DebugInput|api.IDebugInput|null);

        /** Command debugOutput */
        debugOutput?: (api.DebugOutput|api.IDebugOutput|null);

        /** Command debugStop */
        debugStop?: (api.DebugStop|api.IDebugStop|null);

        /** Command debugLeave */
        debugLeave?: (api.DebugLeave|api.IDebugLeave|null);

        /** Command debugSessions */
        debugSessions?: (api.DebugSessions|api.IDebugSessions|null);

        /** Command debugAddBreakpointRequest */
        debugAddBreakpointRequest?: (api.DebugAddBreakpointRequest|api.IDebugAddBreakpointRequest|null);

        /** Command debugUpdateBreakpointRequest */
        debugUpdateBreakpointRequest?: (api.DebugUpdateBreakpointRequest|api.IDebugUpdateBreakpointRequest|null);

        /** Command debugRemoveBreakpointRequest */
        debugRemoveBreakpointRequest?: (api.DebugRemoveBreakpointRequest|api.IDebugRemoveBreakpointRequest|null);

        /** Command debugBreakpointEvent */
        debugBreakpointEvent?: (api.DebugBreakpointEvent|api.IDebugBreakpointEvent|null);

        /** Command dotReplitGetRequest */
        dotReplitGetRequest?: (api.DotReplitGetRequest|api.IDotReplitGetRequest|null);

        /** Command dotReplitGetResponse */
        dotReplitGetResponse?: (api.DotReplitGetResponse|api.IDotReplitGetResponse|null);

        /** Command ref */
        ref?: (string|null);
    }

    /** Represents a Command. */
    class Command {

        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ICommand);

        /** Command channel. */
        public channel: number;

        /** Command session. */
        public session: number;

        /** Command openChan. */
        public openChan?: (api.OpenChannel|null);

        /** Command openChanRes. */
        public openChanRes?: (api.OpenChannelRes|null);

        /** Command closeChan. */
        public closeChan?: (api.CloseChannel|null);

        /** Command closeChanRes. */
        public closeChanRes?: (api.CloseChannelRes|null);

        /** Command containerState. */
        public containerState?: (api.ContainerState|null);

        /** Command portOpen. */
        public portOpen?: (api.PortOpen|null);

        /** Command toast. */
        public toast?: (api.Toast|null);

        /** Command protocolError. */
        public protocolError?: (api.ProtocolError|null);

        /** Command redirect. */
        public redirect?: (api.Redirect|null);

        /** Command alwaysOn. */
        public alwaysOn?: (api.AlwaysOn|null);

        /** Command runMain. */
        public runMain?: (api.RunMain|null);

        /** Command clear. */
        public clear?: (api.Clear|null);

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

        /** Command stderr. */
        public stderr: string;

        /** Command log. */
        public log: string;

        /** Command saneTerm. */
        public saneTerm?: (api.SaneTerm|null);

        /** Command resizeTerm. */
        public resizeTerm?: (api.ResizeTerm|null);

        /** Command state. */
        public state: api.State;

        /** Command ok. */
        public ok?: (api.OK|null);

        /** Command persist. */
        public persist?: (api.File|null);

        /** Command persistMirror. */
        public persistMirror?: (api.File|null);

        /** Command write. */
        public write?: (api.File|null);

        /** Command remove. */
        public remove?: (api.File|null);

        /** Command move. */
        public move?: (api.Move|null);

        /** Command tryRemove. */
        public tryRemove?: (api.File|null);

        /** Command mkdir. */
        public mkdir?: (api.File|null);

        /** Command stat. */
        public stat?: (api.File|null);

        /** Command statRes. */
        public statRes?: (api.StatResult|null);

        /** Command transferStart. */
        public transferStart?: (api.TransferStart|null);

        /** Command transferChunk. */
        public transferChunk?: (api.TransferChunk|null);

        /** Command transferComplete. */
        public transferComplete?: (api.TransferComplete|null);

        /** Command transferCancel. */
        public transferCancel?: (api.Transfer|null);

        /** Command transfer. */
        public transfer?: (api.Transfer|null);

        /** Command read. */
        public read?: (api.File|null);

        /** Command readdir. */
        public readdir?: (api.File|null);

        /** Command files. */
        public files?: (api.Files|null);

        /** Command file. */
        public file?: (api.File|null);

        /** Command checkChanges. */
        public checkChanges?: (api.CheckChanges|null);

        /** Command changedFiles. */
        public changedFiles?: (api.Files|null);

        /** Command lintResults. */
        public lintResults?: (api.LintResults|null);

        /** Command runContainedTest. */
        public runContainedTest?: (api.ContainedTest|null);

        /** Command testResult. */
        public testResult?: (api.TestResult|null);

        /** Command debuggerStart. */
        public debuggerStart: string;

        /** Command debuggerStep. */
        public debuggerStep?: (api.RunMain|null);

        /** Command debuggerStatus. */
        public debuggerStatus?: (api.DebugStatus|null);

        /** Command ensurePackages. */
        public ensurePackages?: (api.EnsurePackages|null);

        /** Command ping. */
        public ping?: (api.Ping|null);

        /** Command pong. */
        public pong?: (api.Pong|null);

        /** Command hello. */
        public hello?: (api.Hello|null);

        /** Command goodbye. */
        public goodbye?: (api.Goodbye|null);

        /** Command hint. */
        public hint?: (api.Hint|null);

        /** Command connect. */
        public connect?: (api.Connect|null);

        /** Command send. */
        public send?: (api.Send|null);

        /** Command recv. */
        public recv?: (api.Recv|null);

        /** Command disconnect. */
        public disconnect?: (api.Disconnect|null);

        /** Command fileAuthReq. */
        public fileAuthReq?: (api.FileAuthReq|null);

        /** Command fileAuthRes. */
        public fileAuthRes?: (api.FileAuthRes|null);

        /** Command mutliFileAuthRes. */
        public mutliFileAuthRes?: (api.MultiFileAuthRes|null);

        /** Command listObjects. */
        public listObjects?: (api.ListObjects|null);

        /** Command listObjectsResp. */
        public listObjectsResp?: (api.ListObjectsResp|null);

        /** Command ot. */
        public ot?: (api.OTPacket|null);

        /** Command otstatus. */
        public otstatus?: (api.OTStatus|null);

        /** Command otLinkFile. */
        public otLinkFile?: (api.OTLinkFile|null);

        /** Command otLinkFileResponse. */
        public otLinkFileResponse?: (api.OTLinkFileResponse|null);

        /** Command otNewCursor. */
        public otNewCursor?: (api.OTCursor|null);

        /** Command otDeleteCursor. */
        public otDeleteCursor?: (api.OTCursor|null);

        /** Command otFetchRequest. */
        public otFetchRequest?: (api.OTFetchRequest|null);

        /** Command otFetchResponse. */
        public otFetchResponse?: (api.OTFetchResponse|null);

        /** Command otTransformSelectionRequest. */
        public otTransformSelectionRequest?: (api.OTTransformSelectionRequest|null);

        /** Command otTransformSelectionResponse. */
        public otTransformSelectionResponse?: (api.OTTransformSelectionResponse|null);

        /** Command flush. */
        public flush?: (api.Flush|null);

        /** Command debug. */
        public debug?: (api.Debug|null);

        /** Command startVCR. */
        public startVCR?: (api.StartVCR|null);

        /** Command readVCR. */
        public readVCR?: (api.ReadVCR|null);

        /** Command VCRLog. */
        public VCRLog?: (api.VCRLog|null);

        /** Command auth. */
        public auth?: (api.Auth|null);

        /** Command execInfo. */
        public execInfo?: (api.ExecInfo|null);

        /** Command subscribeFile. */
        public subscribeFile?: (api.SubscribeFile|null);

        /** Command fileEvent. */
        public fileEvent?: (api.FileEvent|null);

        /** Command roster. */
        public roster?: (api.Roster|null);

        /** Command join. */
        public join?: (api.User|null);

        /** Command part. */
        public part?: (api.User|null);

        /** Command openFile. */
        public openFile?: (api.OpenFile|null);

        /** Command fileOpened. */
        public fileOpened?: (api.FileOpened|null);

        /** Command followUser. */
        public followUser?: (api.FollowUser|null);

        /** Command unfollowUser. */
        public unfollowUser?: (api.UnfollowUser|null);

        /** Command updateSessionTimestamp. */
        public updateSessionTimestamp?: (api.UpdateSessionTimestamp|null);

        /** Command sessionTimestampUpdated. */
        public sessionTimestampUpdated?: (api.SessionTimestampUpdated|null);

        /** Command exec. */
        public exec?: (api.Exec|null);

        /** Command packageSearch. */
        public packageSearch?: (api.PackageSearch|null);

        /** Command packageSearchResp. */
        public packageSearchResp?: (api.PackageSearchResp|null);

        /** Command packageInfo. */
        public packageInfo?: (api.PackageInfo|null);

        /** Command packageInfoResp. */
        public packageInfoResp?: (api.PackageInfoResp|null);

        /** Command packageAdd. */
        public packageAdd?: (api.PackageAdd|null);

        /** Command packageRemove. */
        public packageRemove?: (api.PackageRemove|null);

        /** Command packageInstall. */
        public packageInstall?: (api.PackageInstall|null);

        /** Command packageListSpecfile. */
        public packageListSpecfile?: (api.PackageListSpecfile|null);

        /** Command packageListSpecfileResp. */
        public packageListSpecfileResp?: (api.PackageListSpecfileResp|null);

        /** Command packageCacheSave. */
        public packageCacheSave?: (api.PackageCacheSave|null);

        /** Command chatMessage. */
        public chatMessage?: (api.ChatMessage|null);

        /** Command chatTyping. */
        public chatTyping?: (api.ChatTyping|null);

        /** Command chatScrollback. */
        public chatScrollback?: (api.ChatScrollback|null);

        /** Command fsSnapshot. */
        public fsSnapshot?: (api.FSSnapshot|null);

        /** Command fsTakeLock. */
        public fsTakeLock?: (api.FSLock|null);

        /** Command fsReleaseLock. */
        public fsReleaseLock?: (api.FSLock|null);

        /** Command hasCap. */
        public hasCap: boolean;

        /** Command pid1Config. */
        public pid1Config?: (api.Pid1Config|null);

        /** Command metrics. */
        public metrics?: (api.Metrics|null);

        /** Command bootStatus. */
        public bootStatus?: (api.BootStatus|null);

        /** Command readMetaRequest. */
        public readMetaRequest?: (api.ReadMetaRequest|null);

        /** Command readMetaResponse. */
        public readMetaResponse?: (api.ReadMetaResponse|null);

        /** Command writeMetaRequest. */
        public writeMetaRequest?: (api.WriteMetaRequest|null);

        /** Command writeMetaResponse. */
        public writeMetaResponse?: (api.WriteMetaResponse|null);

        /** Command appendMetaRequest. */
        public appendMetaRequest?: (api.AppendMetaRequest|null);

        /** Command appendMetaResponse. */
        public appendMetaResponse?: (api.AppendMetaResponse|null);

        /** Command audio. */
        public audio?: (api.Audio|null);

        /** Command pprofRequest. */
        public pprofRequest?: (api.PprofRequest|null);

        /** Command pprofResponse. */
        public pprofResponse?: (api.PprofResponse|null);

        /** Command audio2. */
        public audio2?: (api.Audio2|null);

        /** Command PTYConfig. */
        public PTYConfig?: (api.PTYConfig|null);

        /** Command debugMain. */
        public debugMain?: (api.DebugMain|null);

        /** Command debugState. */
        public debugState?: (api.DebugState|null);

        /** Command debugMainReply. */
        public debugMainReply?: (api.DebugMainReply|null);

        /** Command debugInput. */
        public debugInput?: (api.DebugInput|null);

        /** Command debugOutput. */
        public debugOutput?: (api.DebugOutput|null);

        /** Command debugStop. */
        public debugStop?: (api.DebugStop|null);

        /** Command debugLeave. */
        public debugLeave?: (api.DebugLeave|null);

        /** Command debugSessions. */
        public debugSessions?: (api.DebugSessions|null);

        /** Command debugAddBreakpointRequest. */
        public debugAddBreakpointRequest?: (api.DebugAddBreakpointRequest|null);

        /** Command debugUpdateBreakpointRequest. */
        public debugUpdateBreakpointRequest?: (api.DebugUpdateBreakpointRequest|null);

        /** Command debugRemoveBreakpointRequest. */
        public debugRemoveBreakpointRequest?: (api.DebugRemoveBreakpointRequest|null);

        /** Command debugBreakpointEvent. */
        public debugBreakpointEvent?: (api.DebugBreakpointEvent|null);

        /** Command dotReplitGetRequest. */
        public dotReplitGetRequest?: (api.DotReplitGetRequest|null);

        /** Command dotReplitGetResponse. */
        public dotReplitGetResponse?: (api.DotReplitGetResponse|null);

        /** Command ref. */
        public ref: string;

        /** Command body. */
        public body?: ("openChan"|"openChanRes"|"closeChan"|"closeChanRes"|"containerState"|"portOpen"|"toast"|"protocolError"|"redirect"|"alwaysOn"|"runMain"|"clear"|"eval"|"result"|"input"|"output"|"error"|"stderr"|"log"|"saneTerm"|"resizeTerm"|"state"|"ok"|"persist"|"persistMirror"|"write"|"remove"|"move"|"tryRemove"|"mkdir"|"stat"|"statRes"|"transferStart"|"transferChunk"|"transferComplete"|"transferCancel"|"transfer"|"read"|"readdir"|"files"|"file"|"checkChanges"|"changedFiles"|"lintResults"|"runContainedTest"|"testResult"|"debuggerStart"|"debuggerStep"|"debuggerStatus"|"ensurePackages"|"ping"|"pong"|"hello"|"goodbye"|"hint"|"connect"|"send"|"recv"|"disconnect"|"fileAuthReq"|"fileAuthRes"|"mutliFileAuthRes"|"listObjects"|"listObjectsResp"|"ot"|"otstatus"|"otLinkFile"|"otLinkFileResponse"|"otNewCursor"|"otDeleteCursor"|"otFetchRequest"|"otFetchResponse"|"otTransformSelectionRequest"|"otTransformSelectionResponse"|"flush"|"debug"|"startVCR"|"readVCR"|"VCRLog"|"auth"|"execInfo"|"subscribeFile"|"fileEvent"|"roster"|"join"|"part"|"openFile"|"fileOpened"|"followUser"|"unfollowUser"|"updateSessionTimestamp"|"sessionTimestampUpdated"|"exec"|"packageSearch"|"packageSearchResp"|"packageInfo"|"packageInfoResp"|"packageAdd"|"packageRemove"|"packageInstall"|"packageListSpecfile"|"packageListSpecfileResp"|"packageCacheSave"|"chatMessage"|"chatTyping"|"chatScrollback"|"fsSnapshot"|"fsTakeLock"|"fsReleaseLock"|"hasCap"|"pid1Config"|"metrics"|"bootStatus"|"readMetaRequest"|"readMetaResponse"|"writeMetaRequest"|"writeMetaResponse"|"appendMetaRequest"|"appendMetaResponse"|"audio"|"pprofRequest"|"pprofResponse"|"audio2"|"PTYConfig"|"debugMain"|"debugState"|"debugMainReply"|"debugInput"|"debugOutput"|"debugStop"|"debugLeave"|"debugSessions"|"debugAddBreakpointRequest"|"debugUpdateBreakpointRequest"|"debugRemoveBreakpointRequest"|"debugBreakpointEvent"|"dotReplitGetRequest"|"dotReplitGetResponse");

        /**
         * Creates a new Command instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Command instance
         */
        public static create(properties?: api.ICommand): api.Command;

        /**
         * Encodes the specified Command message. Does not implicitly {@link api.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Command, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link api.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Command, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Command;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Command;

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
        public static fromObject(object: { [k: string]: any }): api.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Audio. */
    interface IAudio {

        /** Audio data */
        data?: (number[]|null);
    }

    /** Represents an Audio. */
    class Audio {

        /**
         * Constructs a new Audio.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IAudio);

        /** Audio data. */
        public data: number[];

        /**
         * Creates a new Audio instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Audio instance
         */
        public static create(properties?: api.IAudio): api.Audio;

        /**
         * Encodes the specified Audio message. Does not implicitly {@link api.Audio.verify|verify} messages.
         * @param message Audio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Audio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Audio message, length delimited. Does not implicitly {@link api.Audio.verify|verify} messages.
         * @param message Audio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Audio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Audio message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Audio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Audio;

        /**
         * Decodes an Audio message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Audio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Audio;

        /**
         * Verifies an Audio message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Audio message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Audio
         */
        public static fromObject(object: { [k: string]: any }): api.Audio;

        /**
         * Creates a plain object from an Audio message. Also converts values to other types if specified.
         * @param message Audio
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Audio, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Audio to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Audio2. */
    interface IAudio2 {

        /** Audio2 data */
        data?: (number[]|null);

        /** Audio2 samples */
        samples?: (number|null);
    }

    /** Represents an Audio2. */
    class Audio2 {

        /**
         * Constructs a new Audio2.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IAudio2);

        /** Audio2 data. */
        public data: number[];

        /** Audio2 samples. */
        public samples: number;

        /**
         * Creates a new Audio2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Audio2 instance
         */
        public static create(properties?: api.IAudio2): api.Audio2;

        /**
         * Encodes the specified Audio2 message. Does not implicitly {@link api.Audio2.verify|verify} messages.
         * @param message Audio2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Audio2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Audio2 message, length delimited. Does not implicitly {@link api.Audio2.verify|verify} messages.
         * @param message Audio2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Audio2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Audio2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Audio2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Audio2;

        /**
         * Decodes an Audio2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Audio2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Audio2;

        /**
         * Verifies an Audio2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Audio2 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Audio2
         */
        public static fromObject(object: { [k: string]: any }): api.Audio2;

        /**
         * Creates a plain object from an Audio2 message. Also converts values to other types if specified.
         * @param message Audio2
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Audio2, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Audio2 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Preconditions. */
    interface IPreconditions {

        /** Preconditions generation */
        generation?: (number|null);

        /** Preconditions metageneration */
        metageneration?: (number|null);

        /** Preconditions doesNotExist */
        doesNotExist?: (boolean|null);
    }

    /** Represents a Preconditions. */
    class Preconditions {

        /**
         * Constructs a new Preconditions.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPreconditions);

        /** Preconditions generation. */
        public generation: number;

        /** Preconditions metageneration. */
        public metageneration: number;

        /** Preconditions doesNotExist. */
        public doesNotExist: boolean;

        /**
         * Creates a new Preconditions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Preconditions instance
         */
        public static create(properties?: api.IPreconditions): api.Preconditions;

        /**
         * Encodes the specified Preconditions message. Does not implicitly {@link api.Preconditions.verify|verify} messages.
         * @param message Preconditions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Preconditions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Preconditions message, length delimited. Does not implicitly {@link api.Preconditions.verify|verify} messages.
         * @param message Preconditions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Preconditions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Preconditions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Preconditions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Preconditions;

        /**
         * Decodes a Preconditions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Preconditions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Preconditions;

        /**
         * Verifies a Preconditions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Preconditions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Preconditions
         */
        public static fromObject(object: { [k: string]: any }): api.Preconditions;

        /**
         * Creates a plain object from a Preconditions message. Also converts values to other types if specified.
         * @param message Preconditions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Preconditions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Preconditions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadMetaRequest. */
    interface IReadMetaRequest {

        /** ReadMetaRequest key */
        key?: (string|null);

        /** ReadMetaRequest exists */
        exists?: (boolean|null);

        /** ReadMetaRequest data */
        data?: (Uint8Array|null);
    }

    /** Represents a ReadMetaRequest. */
    class ReadMetaRequest {

        /**
         * Constructs a new ReadMetaRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IReadMetaRequest);

        /** ReadMetaRequest key. */
        public key: string;

        /** ReadMetaRequest exists. */
        public exists: boolean;

        /** ReadMetaRequest data. */
        public data: Uint8Array;

        /**
         * Creates a new ReadMetaRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadMetaRequest instance
         */
        public static create(properties?: api.IReadMetaRequest): api.ReadMetaRequest;

        /**
         * Encodes the specified ReadMetaRequest message. Does not implicitly {@link api.ReadMetaRequest.verify|verify} messages.
         * @param message ReadMetaRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ReadMetaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadMetaRequest message, length delimited. Does not implicitly {@link api.ReadMetaRequest.verify|verify} messages.
         * @param message ReadMetaRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ReadMetaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadMetaRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadMetaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ReadMetaRequest;

        /**
         * Decodes a ReadMetaRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadMetaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ReadMetaRequest;

        /**
         * Verifies a ReadMetaRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadMetaRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadMetaRequest
         */
        public static fromObject(object: { [k: string]: any }): api.ReadMetaRequest;

        /**
         * Creates a plain object from a ReadMetaRequest message. Also converts values to other types if specified.
         * @param message ReadMetaRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ReadMetaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadMetaRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadMetaResponse. */
    interface IReadMetaResponse {

        /** ReadMetaResponse key */
        key?: (string|null);

        /** ReadMetaResponse exists */
        exists?: (boolean|null);

        /** ReadMetaResponse data */
        data?: (Uint8Array|null);

        /** ReadMetaResponse generation */
        generation?: (number|null);

        /** ReadMetaResponse metageneration */
        metageneration?: (number|null);
    }

    /** Represents a ReadMetaResponse. */
    class ReadMetaResponse {

        /**
         * Constructs a new ReadMetaResponse.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IReadMetaResponse);

        /** ReadMetaResponse key. */
        public key: string;

        /** ReadMetaResponse exists. */
        public exists: boolean;

        /** ReadMetaResponse data. */
        public data: Uint8Array;

        /** ReadMetaResponse generation. */
        public generation: number;

        /** ReadMetaResponse metageneration. */
        public metageneration: number;

        /**
         * Creates a new ReadMetaResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadMetaResponse instance
         */
        public static create(properties?: api.IReadMetaResponse): api.ReadMetaResponse;

        /**
         * Encodes the specified ReadMetaResponse message. Does not implicitly {@link api.ReadMetaResponse.verify|verify} messages.
         * @param message ReadMetaResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ReadMetaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadMetaResponse message, length delimited. Does not implicitly {@link api.ReadMetaResponse.verify|verify} messages.
         * @param message ReadMetaResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ReadMetaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadMetaResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadMetaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ReadMetaResponse;

        /**
         * Decodes a ReadMetaResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadMetaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ReadMetaResponse;

        /**
         * Verifies a ReadMetaResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadMetaResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadMetaResponse
         */
        public static fromObject(object: { [k: string]: any }): api.ReadMetaResponse;

        /**
         * Creates a plain object from a ReadMetaResponse message. Also converts values to other types if specified.
         * @param message ReadMetaResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ReadMetaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadMetaResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WriteMetaRequest. */
    interface IWriteMetaRequest {

        /** WriteMetaRequest key */
        key?: (string|null);

        /** WriteMetaRequest data */
        data?: (Uint8Array|null);

        /** WriteMetaRequest preconditions */
        preconditions?: (api.Preconditions|api.IPreconditions|null);
    }

    /** Represents a WriteMetaRequest. */
    class WriteMetaRequest {

        /**
         * Constructs a new WriteMetaRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IWriteMetaRequest);

        /** WriteMetaRequest key. */
        public key: string;

        /** WriteMetaRequest data. */
        public data: Uint8Array;

        /** WriteMetaRequest preconditions. */
        public preconditions?: (api.Preconditions|null);

        /**
         * Creates a new WriteMetaRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteMetaRequest instance
         */
        public static create(properties?: api.IWriteMetaRequest): api.WriteMetaRequest;

        /**
         * Encodes the specified WriteMetaRequest message. Does not implicitly {@link api.WriteMetaRequest.verify|verify} messages.
         * @param message WriteMetaRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.WriteMetaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteMetaRequest message, length delimited. Does not implicitly {@link api.WriteMetaRequest.verify|verify} messages.
         * @param message WriteMetaRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.WriteMetaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteMetaRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteMetaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.WriteMetaRequest;

        /**
         * Decodes a WriteMetaRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteMetaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.WriteMetaRequest;

        /**
         * Verifies a WriteMetaRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteMetaRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteMetaRequest
         */
        public static fromObject(object: { [k: string]: any }): api.WriteMetaRequest;

        /**
         * Creates a plain object from a WriteMetaRequest message. Also converts values to other types if specified.
         * @param message WriteMetaRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.WriteMetaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteMetaRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WriteMetaResponse. */
    interface IWriteMetaResponse {

        /** WriteMetaResponse generation */
        generation?: (number|null);

        /** WriteMetaResponse metageneration */
        metageneration?: (number|null);
    }

    /** Represents a WriteMetaResponse. */
    class WriteMetaResponse {

        /**
         * Constructs a new WriteMetaResponse.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IWriteMetaResponse);

        /** WriteMetaResponse generation. */
        public generation: number;

        /** WriteMetaResponse metageneration. */
        public metageneration: number;

        /**
         * Creates a new WriteMetaResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteMetaResponse instance
         */
        public static create(properties?: api.IWriteMetaResponse): api.WriteMetaResponse;

        /**
         * Encodes the specified WriteMetaResponse message. Does not implicitly {@link api.WriteMetaResponse.verify|verify} messages.
         * @param message WriteMetaResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.WriteMetaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteMetaResponse message, length delimited. Does not implicitly {@link api.WriteMetaResponse.verify|verify} messages.
         * @param message WriteMetaResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.WriteMetaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteMetaResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteMetaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.WriteMetaResponse;

        /**
         * Decodes a WriteMetaResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteMetaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.WriteMetaResponse;

        /**
         * Verifies a WriteMetaResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteMetaResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteMetaResponse
         */
        public static fromObject(object: { [k: string]: any }): api.WriteMetaResponse;

        /**
         * Creates a plain object from a WriteMetaResponse message. Also converts values to other types if specified.
         * @param message WriteMetaResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.WriteMetaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteMetaResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppendMetaRequest. */
    interface IAppendMetaRequest {

        /** AppendMetaRequest key */
        key?: (string|null);

        /** AppendMetaRequest data */
        data?: (Uint8Array|null);

        /** AppendMetaRequest preconditions */
        preconditions?: (api.Preconditions|api.IPreconditions|null);
    }

    /** Represents an AppendMetaRequest. */
    class AppendMetaRequest {

        /**
         * Constructs a new AppendMetaRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IAppendMetaRequest);

        /** AppendMetaRequest key. */
        public key: string;

        /** AppendMetaRequest data. */
        public data: Uint8Array;

        /** AppendMetaRequest preconditions. */
        public preconditions?: (api.Preconditions|null);

        /**
         * Creates a new AppendMetaRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppendMetaRequest instance
         */
        public static create(properties?: api.IAppendMetaRequest): api.AppendMetaRequest;

        /**
         * Encodes the specified AppendMetaRequest message. Does not implicitly {@link api.AppendMetaRequest.verify|verify} messages.
         * @param message AppendMetaRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.AppendMetaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppendMetaRequest message, length delimited. Does not implicitly {@link api.AppendMetaRequest.verify|verify} messages.
         * @param message AppendMetaRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.AppendMetaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppendMetaRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppendMetaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.AppendMetaRequest;

        /**
         * Decodes an AppendMetaRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppendMetaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.AppendMetaRequest;

        /**
         * Verifies an AppendMetaRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppendMetaRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppendMetaRequest
         */
        public static fromObject(object: { [k: string]: any }): api.AppendMetaRequest;

        /**
         * Creates a plain object from an AppendMetaRequest message. Also converts values to other types if specified.
         * @param message AppendMetaRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.AppendMetaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppendMetaRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppendMetaResponse. */
    interface IAppendMetaResponse {

        /** AppendMetaResponse generation */
        generation?: (number|null);

        /** AppendMetaResponse metageneration */
        metageneration?: (number|null);
    }

    /** Represents an AppendMetaResponse. */
    class AppendMetaResponse {

        /**
         * Constructs a new AppendMetaResponse.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IAppendMetaResponse);

        /** AppendMetaResponse generation. */
        public generation: number;

        /** AppendMetaResponse metageneration. */
        public metageneration: number;

        /**
         * Creates a new AppendMetaResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppendMetaResponse instance
         */
        public static create(properties?: api.IAppendMetaResponse): api.AppendMetaResponse;

        /**
         * Encodes the specified AppendMetaResponse message. Does not implicitly {@link api.AppendMetaResponse.verify|verify} messages.
         * @param message AppendMetaResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.AppendMetaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppendMetaResponse message, length delimited. Does not implicitly {@link api.AppendMetaResponse.verify|verify} messages.
         * @param message AppendMetaResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.AppendMetaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppendMetaResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppendMetaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.AppendMetaResponse;

        /**
         * Decodes an AppendMetaResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppendMetaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.AppendMetaResponse;

        /**
         * Verifies an AppendMetaResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppendMetaResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppendMetaResponse
         */
        public static fromObject(object: { [k: string]: any }): api.AppendMetaResponse;

        /**
         * Creates a plain object from an AppendMetaResponse message. Also converts values to other types if specified.
         * @param message AppendMetaResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.AppendMetaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppendMetaResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BootStatus. */
    interface IBootStatus {

        /** BootStatus stage */
        stage?: (api.BootStatus.Stage|null);

        /** BootStatus progress */
        progress?: (number|null);

        /** BootStatus total */
        total?: (number|null);
    }

    /** Represents a BootStatus. */
    class BootStatus {

        /**
         * Constructs a new BootStatus.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IBootStatus);

        /** BootStatus stage. */
        public stage: api.BootStatus.Stage;

        /** BootStatus progress. */
        public progress: number;

        /** BootStatus total. */
        public total: number;

        /**
         * Creates a new BootStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BootStatus instance
         */
        public static create(properties?: api.IBootStatus): api.BootStatus;

        /**
         * Encodes the specified BootStatus message. Does not implicitly {@link api.BootStatus.verify|verify} messages.
         * @param message BootStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.BootStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BootStatus message, length delimited. Does not implicitly {@link api.BootStatus.verify|verify} messages.
         * @param message BootStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.BootStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BootStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BootStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.BootStatus;

        /**
         * Decodes a BootStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BootStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.BootStatus;

        /**
         * Verifies a BootStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BootStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BootStatus
         */
        public static fromObject(object: { [k: string]: any }): api.BootStatus;

        /**
         * Creates a plain object from a BootStatus message. Also converts values to other types if specified.
         * @param message BootStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.BootStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BootStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BootStatus {

        /** Stage enum. */
        enum Stage {
            HANDSHAKE = 0,
            ACQUIRING = 3,
            COMPLETE = 4,
            PROXY = 5,
            PULL_FILES = 6,
            LOAD_BLOCK = 7,
            RETRY = 8
        }
    }

    /** Properties of a Pid1Config. */
    interface IPid1Config {

        /** Pid1Config cwd */
        cwd?: (string|null);

        /** Pid1Config language */
        language?: (string|null);

        /** Pid1Config env */
        env?: ({ [k: string]: string }|null);
    }

    /** Represents a Pid1Config. */
    class Pid1Config {

        /**
         * Constructs a new Pid1Config.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPid1Config);

        /** Pid1Config cwd. */
        public cwd: string;

        /** Pid1Config language. */
        public language: string;

        /** Pid1Config env. */
        public env: { [k: string]: string };

        /**
         * Creates a new Pid1Config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pid1Config instance
         */
        public static create(properties?: api.IPid1Config): api.Pid1Config;

        /**
         * Encodes the specified Pid1Config message. Does not implicitly {@link api.Pid1Config.verify|verify} messages.
         * @param message Pid1Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Pid1Config, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pid1Config message, length delimited. Does not implicitly {@link api.Pid1Config.verify|verify} messages.
         * @param message Pid1Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Pid1Config, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pid1Config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pid1Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Pid1Config;

        /**
         * Decodes a Pid1Config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pid1Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Pid1Config;

        /**
         * Verifies a Pid1Config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pid1Config message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pid1Config
         */
        public static fromObject(object: { [k: string]: any }): api.Pid1Config;

        /**
         * Creates a plain object from a Pid1Config message. Also converts values to other types if specified.
         * @param message Pid1Config
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Pid1Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pid1Config to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FSLock. */
    interface IFSLock {

        /** FSLock name */
        name?: (string|null);
    }

    /** Represents a FSLock. */
    class FSLock {

        /**
         * Constructs a new FSLock.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFSLock);

        /** FSLock name. */
        public name: string;

        /**
         * Creates a new FSLock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSLock instance
         */
        public static create(properties?: api.IFSLock): api.FSLock;

        /**
         * Encodes the specified FSLock message. Does not implicitly {@link api.FSLock.verify|verify} messages.
         * @param message FSLock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.FSLock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSLock message, length delimited. Does not implicitly {@link api.FSLock.verify|verify} messages.
         * @param message FSLock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.FSLock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSLock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSLock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.FSLock;

        /**
         * Decodes a FSLock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSLock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.FSLock;

        /**
         * Verifies a FSLock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSLock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSLock
         */
        public static fromObject(object: { [k: string]: any }): api.FSLock;

        /**
         * Creates a plain object from a FSLock message. Also converts values to other types if specified.
         * @param message FSLock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.FSLock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSLock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FSSnapshot. */
    interface IFSSnapshot {
    }

    /** Represents a FSSnapshot. */
    class FSSnapshot {

        /**
         * Constructs a new FSSnapshot.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFSSnapshot);

        /**
         * Creates a new FSSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSSnapshot instance
         */
        public static create(properties?: api.IFSSnapshot): api.FSSnapshot;

        /**
         * Encodes the specified FSSnapshot message. Does not implicitly {@link api.FSSnapshot.verify|verify} messages.
         * @param message FSSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.FSSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSSnapshot message, length delimited. Does not implicitly {@link api.FSSnapshot.verify|verify} messages.
         * @param message FSSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.FSSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.FSSnapshot;

        /**
         * Decodes a FSSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.FSSnapshot;

        /**
         * Verifies a FSSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSSnapshot
         */
        public static fromObject(object: { [k: string]: any }): api.FSSnapshot;

        /**
         * Creates a plain object from a FSSnapshot message. Also converts values to other types if specified.
         * @param message FSSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.FSSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSSnapshot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubscribeFile. */
    interface ISubscribeFile {

        /** SubscribeFile files */
        files?: ((api.File|api.IFile)[]|null);
    }

    /** Represents a SubscribeFile. */
    class SubscribeFile {

        /**
         * Constructs a new SubscribeFile.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ISubscribeFile);

        /** SubscribeFile files. */
        public files: api.File[];

        /**
         * Creates a new SubscribeFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeFile instance
         */
        public static create(properties?: api.ISubscribeFile): api.SubscribeFile;

        /**
         * Encodes the specified SubscribeFile message. Does not implicitly {@link api.SubscribeFile.verify|verify} messages.
         * @param message SubscribeFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.SubscribeFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeFile message, length delimited. Does not implicitly {@link api.SubscribeFile.verify|verify} messages.
         * @param message SubscribeFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.SubscribeFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.SubscribeFile;

        /**
         * Decodes a SubscribeFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.SubscribeFile;

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
        public static fromObject(object: { [k: string]: any }): api.SubscribeFile;

        /**
         * Creates a plain object from a SubscribeFile message. Also converts values to other types if specified.
         * @param message SubscribeFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.SubscribeFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileEvent. */
    interface IFileEvent {

        /** FileEvent file */
        file?: (api.File|api.IFile|null);

        /** FileEvent dest */
        dest?: (api.File|api.IFile|null);

        /** FileEvent op */
        op?: (api.FileEvent.Op|null);
    }

    /** Represents a FileEvent. */
    class FileEvent {

        /**
         * Constructs a new FileEvent.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFileEvent);

        /** FileEvent file. */
        public file?: (api.File|null);

        /** FileEvent dest. */
        public dest?: (api.File|null);

        /** FileEvent op. */
        public op: api.FileEvent.Op;

        /**
         * Creates a new FileEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileEvent instance
         */
        public static create(properties?: api.IFileEvent): api.FileEvent;

        /**
         * Encodes the specified FileEvent message. Does not implicitly {@link api.FileEvent.verify|verify} messages.
         * @param message FileEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.FileEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileEvent message, length delimited. Does not implicitly {@link api.FileEvent.verify|verify} messages.
         * @param message FileEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.FileEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.FileEvent;

        /**
         * Decodes a FileEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.FileEvent;

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
        public static fromObject(object: { [k: string]: any }): api.FileEvent;

        /**
         * Creates a plain object from a FileEvent message. Also converts values to other types if specified.
         * @param message FileEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.FileEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Flush {

        /**
         * Constructs a new Flush.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFlush);

        /**
         * Creates a new Flush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Flush instance
         */
        public static create(properties?: api.IFlush): api.Flush;

        /**
         * Encodes the specified Flush message. Does not implicitly {@link api.Flush.verify|verify} messages.
         * @param message Flush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Flush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Flush message, length delimited. Does not implicitly {@link api.Flush.verify|verify} messages.
         * @param message Flush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Flush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Flush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Flush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Flush;

        /**
         * Decodes a Flush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Flush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Flush;

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
        public static fromObject(object: { [k: string]: any }): api.Flush;

        /**
         * Creates a plain object from a Flush message. Also converts values to other types if specified.
         * @param message Flush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Flush, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Flush to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTLinkFile. */
    interface IOTLinkFile {

        /** OTLinkFile file */
        file?: (api.File|api.IFile|null);

        /** OTLinkFile highConsistency */
        highConsistency?: (boolean|null);

        /** OTLinkFile OBSOLETEUseModTime */
        OBSOLETEUseModTime?: (boolean|null);
    }

    /** Represents a OTLinkFile. */
    class OTLinkFile {

        /**
         * Constructs a new OTLinkFile.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTLinkFile);

        /** OTLinkFile file. */
        public file?: (api.File|null);

        /** OTLinkFile highConsistency. */
        public highConsistency: boolean;

        /** OTLinkFile OBSOLETEUseModTime. */
        public OBSOLETEUseModTime: boolean;

        /**
         * Creates a new OTLinkFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTLinkFile instance
         */
        public static create(properties?: api.IOTLinkFile): api.OTLinkFile;

        /**
         * Encodes the specified OTLinkFile message. Does not implicitly {@link api.OTLinkFile.verify|verify} messages.
         * @param message OTLinkFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTLinkFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTLinkFile message, length delimited. Does not implicitly {@link api.OTLinkFile.verify|verify} messages.
         * @param message OTLinkFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTLinkFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTLinkFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTLinkFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTLinkFile;

        /**
         * Decodes a OTLinkFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTLinkFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTLinkFile;

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
        public static fromObject(object: { [k: string]: any }): api.OTLinkFile;

        /**
         * Creates a plain object from a OTLinkFile message. Also converts values to other types if specified.
         * @param message OTLinkFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTLinkFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTLinkFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTLinkFileResponse. */
    interface IOTLinkFileResponse {

        /** OTLinkFileResponse version */
        version?: (number|null);

        /** OTLinkFileResponse linkedFile */
        linkedFile?: (api.File|api.IFile|null);
    }

    /** Represents a OTLinkFileResponse. */
    class OTLinkFileResponse {

        /**
         * Constructs a new OTLinkFileResponse.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTLinkFileResponse);

        /** OTLinkFileResponse version. */
        public version: number;

        /** OTLinkFileResponse linkedFile. */
        public linkedFile?: (api.File|null);

        /**
         * Creates a new OTLinkFileResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTLinkFileResponse instance
         */
        public static create(properties?: api.IOTLinkFileResponse): api.OTLinkFileResponse;

        /**
         * Encodes the specified OTLinkFileResponse message. Does not implicitly {@link api.OTLinkFileResponse.verify|verify} messages.
         * @param message OTLinkFileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTLinkFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTLinkFileResponse message, length delimited. Does not implicitly {@link api.OTLinkFileResponse.verify|verify} messages.
         * @param message OTLinkFileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTLinkFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTLinkFileResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTLinkFileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTLinkFileResponse;

        /**
         * Decodes a OTLinkFileResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTLinkFileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTLinkFileResponse;

        /**
         * Verifies a OTLinkFileResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTLinkFileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTLinkFileResponse
         */
        public static fromObject(object: { [k: string]: any }): api.OTLinkFileResponse;

        /**
         * Creates a plain object from a OTLinkFileResponse message. Also converts values to other types if specified.
         * @param message OTLinkFileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTLinkFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTLinkFileResponse to JSON.
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
    class Auth {

        /**
         * Constructs a new Auth.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IAuth);

        /** Auth token. */
        public token: string;

        /** Auth containerID. */
        public containerID: string;

        /**
         * Creates a new Auth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Auth instance
         */
        public static create(properties?: api.IAuth): api.Auth;

        /**
         * Encodes the specified Auth message. Does not implicitly {@link api.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Auth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Auth message, length delimited. Does not implicitly {@link api.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Auth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Auth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Auth;

        /**
         * Decodes an Auth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Auth;

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
        public static fromObject(object: { [k: string]: any }): api.Auth;

        /**
         * Creates a plain object from an Auth message. Also converts values to other types if specified.
         * @param message Auth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Auth, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Auth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VCREntry. */
    interface IVCREntry {

        /** VCREntry timestamp */
        timestamp?: (number|null);

        /** VCREntry direction */
        direction?: (api.VCREntry.Direction|null);

        /** VCREntry command */
        command?: (api.Command|api.ICommand|null);

        /** VCREntry uid */
        uid?: (string|null);

        /** VCREntry replid */
        replid?: (string|null);
    }

    /** Represents a VCREntry. */
    class VCREntry {

        /**
         * Constructs a new VCREntry.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IVCREntry);

        /** VCREntry timestamp. */
        public timestamp: number;

        /** VCREntry direction. */
        public direction: api.VCREntry.Direction;

        /** VCREntry command. */
        public command?: (api.Command|null);

        /** VCREntry uid. */
        public uid: string;

        /** VCREntry replid. */
        public replid: string;

        /**
         * Creates a new VCREntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VCREntry instance
         */
        public static create(properties?: api.IVCREntry): api.VCREntry;

        /**
         * Encodes the specified VCREntry message. Does not implicitly {@link api.VCREntry.verify|verify} messages.
         * @param message VCREntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.VCREntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VCREntry message, length delimited. Does not implicitly {@link api.VCREntry.verify|verify} messages.
         * @param message VCREntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.VCREntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VCREntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VCREntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.VCREntry;

        /**
         * Decodes a VCREntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VCREntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.VCREntry;

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
        public static fromObject(object: { [k: string]: any }): api.VCREntry;

        /**
         * Creates a plain object from a VCREntry message. Also converts values to other types if specified.
         * @param message VCREntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.VCREntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class StartVCR {

        /**
         * Constructs a new StartVCR.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IStartVCR);

        /**
         * Creates a new StartVCR instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartVCR instance
         */
        public static create(properties?: api.IStartVCR): api.StartVCR;

        /**
         * Encodes the specified StartVCR message. Does not implicitly {@link api.StartVCR.verify|verify} messages.
         * @param message StartVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.StartVCR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartVCR message, length delimited. Does not implicitly {@link api.StartVCR.verify|verify} messages.
         * @param message StartVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.StartVCR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartVCR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.StartVCR;

        /**
         * Decodes a StartVCR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.StartVCR;

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
        public static fromObject(object: { [k: string]: any }): api.StartVCR;

        /**
         * Creates a plain object from a StartVCR message. Also converts values to other types if specified.
         * @param message StartVCR
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.StartVCR, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class ReadVCR {

        /**
         * Constructs a new ReadVCR.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IReadVCR);

        /**
         * Creates a new ReadVCR instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadVCR instance
         */
        public static create(properties?: api.IReadVCR): api.ReadVCR;

        /**
         * Encodes the specified ReadVCR message. Does not implicitly {@link api.ReadVCR.verify|verify} messages.
         * @param message ReadVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ReadVCR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadVCR message, length delimited. Does not implicitly {@link api.ReadVCR.verify|verify} messages.
         * @param message ReadVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ReadVCR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadVCR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ReadVCR;

        /**
         * Decodes a ReadVCR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ReadVCR;

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
        public static fromObject(object: { [k: string]: any }): api.ReadVCR;

        /**
         * Creates a plain object from a ReadVCR message. Also converts values to other types if specified.
         * @param message ReadVCR
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ReadVCR, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadVCR to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VCRLog. */
    interface IVCRLog {

        /** VCRLog log */
        log?: ((api.VCREntry|api.IVCREntry)[]|null);

        /** VCRLog logfile */
        logfile?: (api.File|api.IFile|null);
    }

    /** Represents a VCRLog. */
    class VCRLog {

        /**
         * Constructs a new VCRLog.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IVCRLog);

        /** VCRLog log. */
        public log: api.VCREntry[];

        /** VCRLog logfile. */
        public logfile?: (api.File|null);

        /**
         * Creates a new VCRLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VCRLog instance
         */
        public static create(properties?: api.IVCRLog): api.VCRLog;

        /**
         * Encodes the specified VCRLog message. Does not implicitly {@link api.VCRLog.verify|verify} messages.
         * @param message VCRLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.VCRLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VCRLog message, length delimited. Does not implicitly {@link api.VCRLog.verify|verify} messages.
         * @param message VCRLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.VCRLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VCRLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VCRLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.VCRLog;

        /**
         * Decodes a VCRLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VCRLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.VCRLog;

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
        public static fromObject(object: { [k: string]: any }): api.VCRLog;

        /**
         * Creates a plain object from a VCRLog message. Also converts values to other types if specified.
         * @param message VCRLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.VCRLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class ExecInfo {

        /**
         * Constructs a new ExecInfo.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IExecInfo);

        /** ExecInfo command. */
        public command: string[];

        /** ExecInfo reason. */
        public reason: string;

        /**
         * Creates a new ExecInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecInfo instance
         */
        public static create(properties?: api.IExecInfo): api.ExecInfo;

        /**
         * Encodes the specified ExecInfo message. Does not implicitly {@link api.ExecInfo.verify|verify} messages.
         * @param message ExecInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ExecInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecInfo message, length delimited. Does not implicitly {@link api.ExecInfo.verify|verify} messages.
         * @param message ExecInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ExecInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ExecInfo;

        /**
         * Decodes an ExecInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExecInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ExecInfo;

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
        public static fromObject(object: { [k: string]: any }): api.ExecInfo;

        /**
         * Creates a plain object from an ExecInfo message. Also converts values to other types if specified.
         * @param message ExecInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ExecInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Debug {

        /**
         * Constructs a new Debug.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebug);

        /** Debug text. */
        public text: string;

        /**
         * Creates a new Debug instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Debug instance
         */
        public static create(properties?: api.IDebug): api.Debug;

        /**
         * Encodes the specified Debug message. Does not implicitly {@link api.Debug.verify|verify} messages.
         * @param message Debug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Debug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Debug message, length delimited. Does not implicitly {@link api.Debug.verify|verify} messages.
         * @param message Debug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Debug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Debug message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Debug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Debug;

        /**
         * Decodes a Debug message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Debug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Debug;

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
        public static fromObject(object: { [k: string]: any }): api.Debug;

        /**
         * Creates a plain object from a Debug message. Also converts values to other types if specified.
         * @param message Debug
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Debug, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        file?: (api.File|api.IFile|null);

        /** FileAuthReq method */
        method?: (api.FileAuthMethod|null);
    }

    /** Represents a FileAuthReq. */
    class FileAuthReq {

        /**
         * Constructs a new FileAuthReq.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFileAuthReq);

        /** FileAuthReq file. */
        public file?: (api.File|null);

        /** FileAuthReq method. */
        public method: api.FileAuthMethod;

        /**
         * Creates a new FileAuthReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileAuthReq instance
         */
        public static create(properties?: api.IFileAuthReq): api.FileAuthReq;

        /**
         * Encodes the specified FileAuthReq message. Does not implicitly {@link api.FileAuthReq.verify|verify} messages.
         * @param message FileAuthReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.FileAuthReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileAuthReq message, length delimited. Does not implicitly {@link api.FileAuthReq.verify|verify} messages.
         * @param message FileAuthReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.FileAuthReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileAuthReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileAuthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.FileAuthReq;

        /**
         * Decodes a FileAuthReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileAuthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.FileAuthReq;

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
        public static fromObject(object: { [k: string]: any }): api.FileAuthReq;

        /**
         * Creates a plain object from a FileAuthReq message. Also converts values to other types if specified.
         * @param message FileAuthReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.FileAuthReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileAuthReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MultiFileAuthRes. */
    interface IMultiFileAuthRes {

        /** MultiFileAuthRes put */
        put?: (api.FileAuthRes|api.IFileAuthRes|null);

        /** MultiFileAuthRes del */
        del?: (api.FileAuthRes|api.IFileAuthRes|null);

        /** MultiFileAuthRes get */
        get?: (api.FileAuthRes|api.IFileAuthRes|null);
    }

    /** Represents a MultiFileAuthRes. */
    class MultiFileAuthRes {

        /**
         * Constructs a new MultiFileAuthRes.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IMultiFileAuthRes);

        /** MultiFileAuthRes put. */
        public put?: (api.FileAuthRes|null);

        /** MultiFileAuthRes del. */
        public del?: (api.FileAuthRes|null);

        /** MultiFileAuthRes get. */
        public get?: (api.FileAuthRes|null);

        /**
         * Creates a new MultiFileAuthRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiFileAuthRes instance
         */
        public static create(properties?: api.IMultiFileAuthRes): api.MultiFileAuthRes;

        /**
         * Encodes the specified MultiFileAuthRes message. Does not implicitly {@link api.MultiFileAuthRes.verify|verify} messages.
         * @param message MultiFileAuthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.MultiFileAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MultiFileAuthRes message, length delimited. Does not implicitly {@link api.MultiFileAuthRes.verify|verify} messages.
         * @param message MultiFileAuthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.MultiFileAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MultiFileAuthRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultiFileAuthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.MultiFileAuthRes;

        /**
         * Decodes a MultiFileAuthRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MultiFileAuthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.MultiFileAuthRes;

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
        public static fromObject(object: { [k: string]: any }): api.MultiFileAuthRes;

        /**
         * Creates a plain object from a MultiFileAuthRes message. Also converts values to other types if specified.
         * @param message MultiFileAuthRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.MultiFileAuthRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MultiFileAuthRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileAuthRes. */
    interface IFileAuthRes {

        /** FileAuthRes file */
        file?: (api.File|api.IFile|null);

        /** FileAuthRes url */
        url?: (string|null);

        /** FileAuthRes method */
        method?: (api.FileAuthMethod|null);

        /** FileAuthRes expire */
        expire?: (number|null);

        /** FileAuthRes error */
        error?: (string|null);

        /** FileAuthRes replError */
        replError?: (boolean|null);
    }

    /** Represents a FileAuthRes. */
    class FileAuthRes {

        /**
         * Constructs a new FileAuthRes.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFileAuthRes);

        /** FileAuthRes file. */
        public file?: (api.File|null);

        /** FileAuthRes url. */
        public url: string;

        /** FileAuthRes method. */
        public method: api.FileAuthMethod;

        /** FileAuthRes expire. */
        public expire: number;

        /** FileAuthRes error. */
        public error: string;

        /** FileAuthRes replError. */
        public replError: boolean;

        /**
         * Creates a new FileAuthRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileAuthRes instance
         */
        public static create(properties?: api.IFileAuthRes): api.FileAuthRes;

        /**
         * Encodes the specified FileAuthRes message. Does not implicitly {@link api.FileAuthRes.verify|verify} messages.
         * @param message FileAuthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.FileAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileAuthRes message, length delimited. Does not implicitly {@link api.FileAuthRes.verify|verify} messages.
         * @param message FileAuthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.FileAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileAuthRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileAuthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.FileAuthRes;

        /**
         * Decodes a FileAuthRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileAuthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.FileAuthRes;

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
        public static fromObject(object: { [k: string]: any }): api.FileAuthRes;

        /**
         * Creates a plain object from a FileAuthRes message. Also converts values to other types if specified.
         * @param message FileAuthRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.FileAuthRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileAuthRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListObjects. */
    interface IListObjects {

        /** ListObjects prefix */
        prefix?: (string|null);
    }

    /** Represents a ListObjects. */
    class ListObjects {

        /**
         * Constructs a new ListObjects.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IListObjects);

        /** ListObjects prefix. */
        public prefix: string;

        /**
         * Creates a new ListObjects instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListObjects instance
         */
        public static create(properties?: api.IListObjects): api.ListObjects;

        /**
         * Encodes the specified ListObjects message. Does not implicitly {@link api.ListObjects.verify|verify} messages.
         * @param message ListObjects message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ListObjects, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListObjects message, length delimited. Does not implicitly {@link api.ListObjects.verify|verify} messages.
         * @param message ListObjects message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ListObjects, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListObjects message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListObjects
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ListObjects;

        /**
         * Decodes a ListObjects message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListObjects
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ListObjects;

        /**
         * Verifies a ListObjects message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListObjects message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListObjects
         */
        public static fromObject(object: { [k: string]: any }): api.ListObjects;

        /**
         * Creates a plain object from a ListObjects message. Also converts values to other types if specified.
         * @param message ListObjects
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ListObjects, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListObjects to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListObjectsResp. */
    interface IListObjectsResp {

        /** ListObjectsResp objects */
        objects?: (string[]|null);
    }

    /** Represents a ListObjectsResp. */
    class ListObjectsResp {

        /**
         * Constructs a new ListObjectsResp.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IListObjectsResp);

        /** ListObjectsResp objects. */
        public objects: string[];

        /**
         * Creates a new ListObjectsResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListObjectsResp instance
         */
        public static create(properties?: api.IListObjectsResp): api.ListObjectsResp;

        /**
         * Encodes the specified ListObjectsResp message. Does not implicitly {@link api.ListObjectsResp.verify|verify} messages.
         * @param message ListObjectsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ListObjectsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListObjectsResp message, length delimited. Does not implicitly {@link api.ListObjectsResp.verify|verify} messages.
         * @param message ListObjectsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ListObjectsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListObjectsResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListObjectsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ListObjectsResp;

        /**
         * Decodes a ListObjectsResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListObjectsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ListObjectsResp;

        /**
         * Verifies a ListObjectsResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListObjectsResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListObjectsResp
         */
        public static fromObject(object: { [k: string]: any }): api.ListObjectsResp;

        /**
         * Creates a plain object from a ListObjectsResp message. Also converts values to other types if specified.
         * @param message ListObjectsResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ListObjectsResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListObjectsResp to JSON.
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
    class Disconnect {

        /**
         * Constructs a new Disconnect.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDisconnect);

        /** Disconnect error. */
        public error: string;

        /**
         * Creates a new Disconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Disconnect instance
         */
        public static create(properties?: api.IDisconnect): api.Disconnect;

        /**
         * Encodes the specified Disconnect message. Does not implicitly {@link api.Disconnect.verify|verify} messages.
         * @param message Disconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Disconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Disconnect message, length delimited. Does not implicitly {@link api.Disconnect.verify|verify} messages.
         * @param message Disconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Disconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Disconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Disconnect;

        /**
         * Decodes a Disconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Disconnect;

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
        public static fromObject(object: { [k: string]: any }): api.Disconnect;

        /**
         * Creates a plain object from a Disconnect message. Also converts values to other types if specified.
         * @param message Disconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Disconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Send {

        /**
         * Constructs a new Send.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ISend);

        /** Send buff. */
        public buff: Uint8Array;

        /**
         * Creates a new Send instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Send instance
         */
        public static create(properties?: api.ISend): api.Send;

        /**
         * Encodes the specified Send message. Does not implicitly {@link api.Send.verify|verify} messages.
         * @param message Send message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Send, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Send message, length delimited. Does not implicitly {@link api.Send.verify|verify} messages.
         * @param message Send message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Send, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Send message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Send;

        /**
         * Decodes a Send message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Send;

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
        public static fromObject(object: { [k: string]: any }): api.Send;

        /**
         * Creates a plain object from a Send message. Also converts values to other types if specified.
         * @param message Send
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Send, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Recv {

        /**
         * Constructs a new Recv.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IRecv);

        /** Recv buff. */
        public buff: Uint8Array;

        /**
         * Creates a new Recv instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Recv instance
         */
        public static create(properties?: api.IRecv): api.Recv;

        /**
         * Encodes the specified Recv message. Does not implicitly {@link api.Recv.verify|verify} messages.
         * @param message Recv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Recv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Recv message, length delimited. Does not implicitly {@link api.Recv.verify|verify} messages.
         * @param message Recv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Recv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Recv message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Recv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Recv;

        /**
         * Decodes a Recv message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Recv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Recv;

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
        public static fromObject(object: { [k: string]: any }): api.Recv;

        /**
         * Creates a plain object from a Recv message. Also converts values to other types if specified.
         * @param message Recv
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Recv, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Connect {

        /**
         * Constructs a new Connect.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IConnect);

        /** Connect proto. */
        public proto: string;

        /** Connect addr. */
        public addr: string;

        /**
         * Creates a new Connect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Connect instance
         */
        public static create(properties?: api.IConnect): api.Connect;

        /**
         * Encodes the specified Connect message. Does not implicitly {@link api.Connect.verify|verify} messages.
         * @param message Connect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Connect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Connect message, length delimited. Does not implicitly {@link api.Connect.verify|verify} messages.
         * @param message Connect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Connect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Connect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Connect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Connect;

        /**
         * Decodes a Connect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Connect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Connect;

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
        public static fromObject(object: { [k: string]: any }): api.Connect;

        /**
         * Creates a plain object from a Connect message. Also converts values to other types if specified.
         * @param message Connect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Connect, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Hint {

        /**
         * Constructs a new Hint.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IHint);

        /** Hint text. */
        public text: string;

        /**
         * Creates a new Hint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hint instance
         */
        public static create(properties?: api.IHint): api.Hint;

        /**
         * Encodes the specified Hint message. Does not implicitly {@link api.Hint.verify|verify} messages.
         * @param message Hint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Hint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hint message, length delimited. Does not implicitly {@link api.Hint.verify|verify} messages.
         * @param message Hint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Hint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Hint;

        /**
         * Decodes a Hint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Hint;

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
        public static fromObject(object: { [k: string]: any }): api.Hint;

        /**
         * Creates a plain object from a Hint message. Also converts values to other types if specified.
         * @param message Hint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Hint, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Ping {

        /**
         * Constructs a new Ping.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPing);

        /**
         * Creates a new Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ping instance
         */
        public static create(properties?: api.IPing): api.Ping;

        /**
         * Encodes the specified Ping message. Does not implicitly {@link api.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link api.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Ping;

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Ping;

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
        public static fromObject(object: { [k: string]: any }): api.Ping;

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @param message Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Pong {

        /**
         * Constructs a new Pong.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPong);

        /**
         * Creates a new Pong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pong instance
         */
        public static create(properties?: api.IPong): api.Pong;

        /**
         * Encodes the specified Pong message. Does not implicitly {@link api.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Pong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link api.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Pong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Pong;

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Pong;

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
        public static fromObject(object: { [k: string]: any }): api.Pong;

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @param message Pong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Hello {

        /**
         * Constructs a new Hello.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IHello);

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
        public static create(properties?: api.IHello): api.Hello;

        /**
         * Encodes the specified Hello message. Does not implicitly {@link api.Hello.verify|verify} messages.
         * @param message Hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Hello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hello message, length delimited. Does not implicitly {@link api.Hello.verify|verify} messages.
         * @param message Hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Hello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hello message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Hello;

        /**
         * Decodes a Hello message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Hello;

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
        public static fromObject(object: { [k: string]: any }): api.Hello;

        /**
         * Creates a plain object from a Hello message. Also converts values to other types if specified.
         * @param message Hello
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Hello, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Goodbye {

        /**
         * Constructs a new Goodbye.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IGoodbye);

        /**
         * Creates a new Goodbye instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Goodbye instance
         */
        public static create(properties?: api.IGoodbye): api.Goodbye;

        /**
         * Encodes the specified Goodbye message. Does not implicitly {@link api.Goodbye.verify|verify} messages.
         * @param message Goodbye message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Goodbye, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Goodbye message, length delimited. Does not implicitly {@link api.Goodbye.verify|verify} messages.
         * @param message Goodbye message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Goodbye, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Goodbye message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Goodbye
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Goodbye;

        /**
         * Decodes a Goodbye message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Goodbye
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Goodbye;

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
        public static fromObject(object: { [k: string]: any }): api.Goodbye;

        /**
         * Creates a plain object from a Goodbye message. Also converts values to other types if specified.
         * @param message Goodbye
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Goodbye, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class CheckChanges {

        /**
         * Constructs a new CheckChanges.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ICheckChanges);

        /**
         * Creates a new CheckChanges instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckChanges instance
         */
        public static create(properties?: api.ICheckChanges): api.CheckChanges;

        /**
         * Encodes the specified CheckChanges message. Does not implicitly {@link api.CheckChanges.verify|verify} messages.
         * @param message CheckChanges message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.CheckChanges, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckChanges message, length delimited. Does not implicitly {@link api.CheckChanges.verify|verify} messages.
         * @param message CheckChanges message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.CheckChanges, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckChanges message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckChanges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.CheckChanges;

        /**
         * Decodes a CheckChanges message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckChanges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.CheckChanges;

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
        public static fromObject(object: { [k: string]: any }): api.CheckChanges;

        /**
         * Creates a plain object from a CheckChanges message. Also converts values to other types if specified.
         * @param message CheckChanges
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.CheckChanges, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        file?: (api.File|api.IFile|null);
    }

    /** Represents an EnsurePackages. */
    class EnsurePackages {

        /**
         * Constructs a new EnsurePackages.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IEnsurePackages);

        /** EnsurePackages install. */
        public install: boolean;

        /** EnsurePackages file. */
        public file?: (api.File|null);

        /**
         * Creates a new EnsurePackages instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnsurePackages instance
         */
        public static create(properties?: api.IEnsurePackages): api.EnsurePackages;

        /**
         * Encodes the specified EnsurePackages message. Does not implicitly {@link api.EnsurePackages.verify|verify} messages.
         * @param message EnsurePackages message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.EnsurePackages, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnsurePackages message, length delimited. Does not implicitly {@link api.EnsurePackages.verify|verify} messages.
         * @param message EnsurePackages message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.EnsurePackages, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnsurePackages message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnsurePackages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.EnsurePackages;

        /**
         * Decodes an EnsurePackages message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnsurePackages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.EnsurePackages;

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
        public static fromObject(object: { [k: string]: any }): api.EnsurePackages;

        /**
         * Creates a plain object from an EnsurePackages message. Also converts values to other types if specified.
         * @param message EnsurePackages
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.EnsurePackages, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Start {

        /**
         * Constructs a new Start.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IStart);

        /**
         * Creates a new Start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Start instance
         */
        public static create(properties?: api.IStart): api.Start;

        /**
         * Encodes the specified Start message. Does not implicitly {@link api.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Start message, length delimited. Does not implicitly {@link api.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Start;

        /**
         * Decodes a Start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Start;

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
        public static fromObject(object: { [k: string]: any }): api.Start;

        /**
         * Creates a plain object from a Start message. Also converts values to other types if specified.
         * @param message Start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Start, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        stack?: ((api.StackFrame|api.IStackFrame)[]|null);
    }

    /** Represents a DebugStatus. */
    class DebugStatus {

        /**
         * Constructs a new DebugStatus.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugStatus);

        /** DebugStatus done. */
        public done: boolean;

        /** DebugStatus stack. */
        public stack: api.StackFrame[];

        /**
         * Creates a new DebugStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugStatus instance
         */
        public static create(properties?: api.IDebugStatus): api.DebugStatus;

        /**
         * Encodes the specified DebugStatus message. Does not implicitly {@link api.DebugStatus.verify|verify} messages.
         * @param message DebugStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugStatus message, length delimited. Does not implicitly {@link api.DebugStatus.verify|verify} messages.
         * @param message DebugStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugStatus;

        /**
         * Decodes a DebugStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugStatus;

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
        public static fromObject(object: { [k: string]: any }): api.DebugStatus;

        /**
         * Creates a plain object from a DebugStatus message. Also converts values to other types if specified.
         * @param message DebugStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class StackFrame {

        /**
         * Constructs a new StackFrame.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IStackFrame);

        /** StackFrame function. */
        public function: string;

        /** StackFrame line. */
        public line: number;

        /**
         * Creates a new StackFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StackFrame instance
         */
        public static create(properties?: api.IStackFrame): api.StackFrame;

        /**
         * Encodes the specified StackFrame message. Does not implicitly {@link api.StackFrame.verify|verify} messages.
         * @param message StackFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.StackFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StackFrame message, length delimited. Does not implicitly {@link api.StackFrame.verify|verify} messages.
         * @param message StackFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.StackFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StackFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.StackFrame;

        /**
         * Decodes a StackFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.StackFrame;

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
        public static fromObject(object: { [k: string]: any }): api.StackFrame;

        /**
         * Creates a plain object from a StackFrame message. Also converts values to other types if specified.
         * @param message StackFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.StackFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StackFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContainedTest. */
    interface IContainedTest {

        /** ContainedTest suite */
        suite?: (api.File|api.IFile|null);

        /** ContainedTest project */
        project?: ((api.File|api.IFile)[]|null);
    }

    /** Represents a ContainedTest. */
    class ContainedTest {

        /**
         * Constructs a new ContainedTest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IContainedTest);

        /** ContainedTest suite. */
        public suite?: (api.File|null);

        /** ContainedTest project. */
        public project: api.File[];

        /**
         * Creates a new ContainedTest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContainedTest instance
         */
        public static create(properties?: api.IContainedTest): api.ContainedTest;

        /**
         * Encodes the specified ContainedTest message. Does not implicitly {@link api.ContainedTest.verify|verify} messages.
         * @param message ContainedTest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ContainedTest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContainedTest message, length delimited. Does not implicitly {@link api.ContainedTest.verify|verify} messages.
         * @param message ContainedTest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ContainedTest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContainedTest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContainedTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ContainedTest;

        /**
         * Decodes a ContainedTest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContainedTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ContainedTest;

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
        public static fromObject(object: { [k: string]: any }): api.ContainedTest;

        /**
         * Creates a plain object from a ContainedTest message. Also converts values to other types if specified.
         * @param message ContainedTest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ContainedTest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        fails?: ((api.TestFailure|api.ITestFailure)[]|null);
    }

    /** Represents a TestResult. */
    class TestResult {

        /**
         * Constructs a new TestResult.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ITestResult);

        /** TestResult passed. */
        public passed: boolean;

        /** TestResult stderr. */
        public stderr: string;

        /** TestResult fails. */
        public fails: api.TestFailure[];

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

    /** Properties of a TestFailure. */
    interface ITestFailure {

        /** TestFailure name */
        name?: (string|null);

        /** TestFailure trace */
        trace?: (string|null);
    }

    /** Represents a TestFailure. */
    class TestFailure {

        /**
         * Constructs a new TestFailure.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ITestFailure);

        /** TestFailure name. */
        public name: string;

        /** TestFailure trace. */
        public trace: string;

        /**
         * Creates a new TestFailure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestFailure instance
         */
        public static create(properties?: api.ITestFailure): api.TestFailure;

        /**
         * Encodes the specified TestFailure message. Does not implicitly {@link api.TestFailure.verify|verify} messages.
         * @param message TestFailure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.TestFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestFailure message, length delimited. Does not implicitly {@link api.TestFailure.verify|verify} messages.
         * @param message TestFailure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.TestFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestFailure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.TestFailure;

        /**
         * Decodes a TestFailure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.TestFailure;

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
        public static fromObject(object: { [k: string]: any }): api.TestFailure;

        /**
         * Creates a plain object from a TestFailure message. Also converts values to other types if specified.
         * @param message TestFailure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.TestFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class ResizeTerm {

        /**
         * Constructs a new ResizeTerm.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IResizeTerm);

        /** ResizeTerm rows. */
        public rows: number;

        /** ResizeTerm cols. */
        public cols: number;

        /**
         * Creates a new ResizeTerm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResizeTerm instance
         */
        public static create(properties?: api.IResizeTerm): api.ResizeTerm;

        /**
         * Encodes the specified ResizeTerm message. Does not implicitly {@link api.ResizeTerm.verify|verify} messages.
         * @param message ResizeTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ResizeTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResizeTerm message, length delimited. Does not implicitly {@link api.ResizeTerm.verify|verify} messages.
         * @param message ResizeTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ResizeTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResizeTerm message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResizeTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ResizeTerm;

        /**
         * Decodes a ResizeTerm message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResizeTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ResizeTerm;

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
        public static fromObject(object: { [k: string]: any }): api.ResizeTerm;

        /**
         * Creates a plain object from a ResizeTerm message. Also converts values to other types if specified.
         * @param message ResizeTerm
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ResizeTerm, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class SaneTerm {

        /**
         * Constructs a new SaneTerm.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ISaneTerm);

        /**
         * Creates a new SaneTerm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaneTerm instance
         */
        public static create(properties?: api.ISaneTerm): api.SaneTerm;

        /**
         * Encodes the specified SaneTerm message. Does not implicitly {@link api.SaneTerm.verify|verify} messages.
         * @param message SaneTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.SaneTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaneTerm message, length delimited. Does not implicitly {@link api.SaneTerm.verify|verify} messages.
         * @param message SaneTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.SaneTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaneTerm message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaneTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.SaneTerm;

        /**
         * Decodes a SaneTerm message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaneTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.SaneTerm;

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
        public static fromObject(object: { [k: string]: any }): api.SaneTerm;

        /**
         * Creates a plain object from a SaneTerm message. Also converts values to other types if specified.
         * @param message SaneTerm
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.SaneTerm, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaneTerm to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LintResults. */
    interface ILintResults {

        /** LintResults results */
        results?: ((api.LintResult|api.ILintResult)[]|null);
    }

    /** Represents a LintResults. */
    class LintResults {

        /**
         * Constructs a new LintResults.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ILintResults);

        /** LintResults results. */
        public results: api.LintResult[];

        /**
         * Creates a new LintResults instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LintResults instance
         */
        public static create(properties?: api.ILintResults): api.LintResults;

        /**
         * Encodes the specified LintResults message. Does not implicitly {@link api.LintResults.verify|verify} messages.
         * @param message LintResults message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.LintResults, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LintResults message, length delimited. Does not implicitly {@link api.LintResults.verify|verify} messages.
         * @param message LintResults message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.LintResults, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LintResults message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LintResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.LintResults;

        /**
         * Decodes a LintResults message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LintResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.LintResults;

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
        public static fromObject(object: { [k: string]: any }): api.LintResults;

        /**
         * Creates a plain object from a LintResults message. Also converts values to other types if specified.
         * @param message LintResults
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.LintResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class LintResult {

        /**
         * Constructs a new LintResult.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ILintResult);

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
        public static create(properties?: api.ILintResult): api.LintResult;

        /**
         * Encodes the specified LintResult message. Does not implicitly {@link api.LintResult.verify|verify} messages.
         * @param message LintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.LintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LintResult message, length delimited. Does not implicitly {@link api.LintResult.verify|verify} messages.
         * @param message LintResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.LintResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LintResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.LintResult;

        /**
         * Decodes a LintResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LintResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.LintResult;

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
        public static fromObject(object: { [k: string]: any }): api.LintResult;

        /**
         * Creates a plain object from a LintResult message. Also converts values to other types if specified.
         * @param message LintResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.LintResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class OK {

        /**
         * Constructs a new OK.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOK);

        /**
         * Creates a new OK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OK instance
         */
        public static create(properties?: api.IOK): api.OK;

        /**
         * Encodes the specified OK message. Does not implicitly {@link api.OK.verify|verify} messages.
         * @param message OK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OK message, length delimited. Does not implicitly {@link api.OK.verify|verify} messages.
         * @param message OK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OK;

        /**
         * Decodes a OK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OK;

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
        public static fromObject(object: { [k: string]: any }): api.OK;

        /**
         * Creates a plain object from a OK message. Also converts values to other types if specified.
         * @param message OK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OK, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Move {

        /**
         * Constructs a new Move.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IMove);

        /** Move oldPath. */
        public oldPath: string;

        /** Move newPath. */
        public newPath: string;

        /**
         * Creates a new Move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Move instance
         */
        public static create(properties?: api.IMove): api.Move;

        /**
         * Encodes the specified Move message. Does not implicitly {@link api.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link api.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Move;

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Move;

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
        public static fromObject(object: { [k: string]: any }): api.Move;

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @param message Move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Files. */
    interface IFiles {

        /** Files files */
        files?: ((api.File|api.IFile)[]|null);
    }

    /** Represents a Files. */
    class Files {

        /**
         * Constructs a new Files.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFiles);

        /** Files files. */
        public files: api.File[];

        /**
         * Creates a new Files instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Files instance
         */
        public static create(properties?: api.IFiles): api.Files;

        /**
         * Encodes the specified Files message. Does not implicitly {@link api.Files.verify|verify} messages.
         * @param message Files message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Files, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Files message, length delimited. Does not implicitly {@link api.Files.verify|verify} messages.
         * @param message Files message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Files, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Files message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Files
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Files;

        /**
         * Decodes a Files message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Files
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Files;

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
        public static fromObject(object: { [k: string]: any }): api.Files;

        /**
         * Creates a plain object from a Files message. Also converts values to other types if specified.
         * @param message Files
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Files, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Files to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StatResult. */
    interface IStatResult {

        /** StatResult exists */
        exists?: (boolean|null);

        /** StatResult type */
        type?: (api.File.Type|null);

        /** StatResult size */
        size?: (number|null);

        /** StatResult fileMode */
        fileMode?: (string|null);

        /** StatResult modTime */
        modTime?: (number|null);
    }

    /** Represents a StatResult. */
    class StatResult {

        /**
         * Constructs a new StatResult.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IStatResult);

        /** StatResult exists. */
        public exists: boolean;

        /** StatResult type. */
        public type: api.File.Type;

        /** StatResult size. */
        public size: number;

        /** StatResult fileMode. */
        public fileMode: string;

        /** StatResult modTime. */
        public modTime: number;

        /**
         * Creates a new StatResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatResult instance
         */
        public static create(properties?: api.IStatResult): api.StatResult;

        /**
         * Encodes the specified StatResult message. Does not implicitly {@link api.StatResult.verify|verify} messages.
         * @param message StatResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.StatResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatResult message, length delimited. Does not implicitly {@link api.StatResult.verify|verify} messages.
         * @param message StatResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.StatResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.StatResult;

        /**
         * Decodes a StatResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.StatResult;

        /**
         * Verifies a StatResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatResult
         */
        public static fromObject(object: { [k: string]: any }): api.StatResult;

        /**
         * Creates a plain object from a StatResult message. Also converts values to other types if specified.
         * @param message StatResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.StatResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a File. */
    interface IFile {

        /** File path */
        path?: (string|null);

        /** File type */
        type?: (api.File.Type|null);

        /** File content */
        content?: (Uint8Array|null);
    }

    /** Represents a File. */
    class File {

        /**
         * Constructs a new File.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFile);

        /** File path. */
        public path: string;

        /** File type. */
        public type: api.File.Type;

        /** File content. */
        public content: Uint8Array;

        /**
         * Creates a new File instance using the specified properties.
         * @param [properties] Properties to set
         * @returns File instance
         */
        public static create(properties?: api.IFile): api.File;

        /**
         * Encodes the specified File message. Does not implicitly {@link api.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.File, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link api.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.File, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a File message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.File;

        /**
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.File;

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
        public static fromObject(object: { [k: string]: any }): api.File;

        /**
         * Creates a plain object from a File message. Also converts values to other types if specified.
         * @param message File
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a Transfer. */
    interface ITransfer {

        /** Transfer id */
        id?: (string|null);
    }

    /** Represents a Transfer. */
    class Transfer {

        /**
         * Constructs a new Transfer.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ITransfer);

        /** Transfer id. */
        public id: string;

        /**
         * Creates a new Transfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transfer instance
         */
        public static create(properties?: api.ITransfer): api.Transfer;

        /**
         * Encodes the specified Transfer message. Does not implicitly {@link api.Transfer.verify|verify} messages.
         * @param message Transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transfer message, length delimited. Does not implicitly {@link api.Transfer.verify|verify} messages.
         * @param message Transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Transfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Transfer;

        /**
         * Decodes a Transfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Transfer;

        /**
         * Verifies a Transfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transfer
         */
        public static fromObject(object: { [k: string]: any }): api.Transfer;

        /**
         * Creates a plain object from a Transfer message. Also converts values to other types if specified.
         * @param message Transfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Transfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TransferStart. */
    interface ITransferStart {

        /** TransferStart path */
        path?: (string|null);

        /** TransferStart size */
        size?: (number|null);
    }

    /** Represents a TransferStart. */
    class TransferStart {

        /**
         * Constructs a new TransferStart.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ITransferStart);

        /** TransferStart path. */
        public path: string;

        /** TransferStart size. */
        public size: number;

        /**
         * Creates a new TransferStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransferStart instance
         */
        public static create(properties?: api.ITransferStart): api.TransferStart;

        /**
         * Encodes the specified TransferStart message. Does not implicitly {@link api.TransferStart.verify|verify} messages.
         * @param message TransferStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.TransferStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransferStart message, length delimited. Does not implicitly {@link api.TransferStart.verify|verify} messages.
         * @param message TransferStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.TransferStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransferStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransferStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.TransferStart;

        /**
         * Decodes a TransferStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransferStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.TransferStart;

        /**
         * Verifies a TransferStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransferStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransferStart
         */
        public static fromObject(object: { [k: string]: any }): api.TransferStart;

        /**
         * Creates a plain object from a TransferStart message. Also converts values to other types if specified.
         * @param message TransferStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.TransferStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransferStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TransferChunk. */
    interface ITransferChunk {

        /** TransferChunk id */
        id?: (string|null);

        /** TransferChunk content */
        content?: (Uint8Array|null);
    }

    /** Represents a TransferChunk. */
    class TransferChunk {

        /**
         * Constructs a new TransferChunk.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ITransferChunk);

        /** TransferChunk id. */
        public id: string;

        /** TransferChunk content. */
        public content: Uint8Array;

        /**
         * Creates a new TransferChunk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransferChunk instance
         */
        public static create(properties?: api.ITransferChunk): api.TransferChunk;

        /**
         * Encodes the specified TransferChunk message. Does not implicitly {@link api.TransferChunk.verify|verify} messages.
         * @param message TransferChunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.TransferChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransferChunk message, length delimited. Does not implicitly {@link api.TransferChunk.verify|verify} messages.
         * @param message TransferChunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.TransferChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransferChunk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransferChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.TransferChunk;

        /**
         * Decodes a TransferChunk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransferChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.TransferChunk;

        /**
         * Verifies a TransferChunk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransferChunk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransferChunk
         */
        public static fromObject(object: { [k: string]: any }): api.TransferChunk;

        /**
         * Creates a plain object from a TransferChunk message. Also converts values to other types if specified.
         * @param message TransferChunk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.TransferChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransferChunk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TransferComplete. */
    interface ITransferComplete {

        /** TransferComplete id */
        id?: (string|null);

        /** TransferComplete crc32 */
        crc32?: (number|null);
    }

    /** Represents a TransferComplete. */
    class TransferComplete {

        /**
         * Constructs a new TransferComplete.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ITransferComplete);

        /** TransferComplete id. */
        public id: string;

        /** TransferComplete crc32. */
        public crc32: number;

        /**
         * Creates a new TransferComplete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransferComplete instance
         */
        public static create(properties?: api.ITransferComplete): api.TransferComplete;

        /**
         * Encodes the specified TransferComplete message. Does not implicitly {@link api.TransferComplete.verify|verify} messages.
         * @param message TransferComplete message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.TransferComplete, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransferComplete message, length delimited. Does not implicitly {@link api.TransferComplete.verify|verify} messages.
         * @param message TransferComplete message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.TransferComplete, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransferComplete message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransferComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.TransferComplete;

        /**
         * Decodes a TransferComplete message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransferComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.TransferComplete;

        /**
         * Verifies a TransferComplete message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransferComplete message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransferComplete
         */
        public static fromObject(object: { [k: string]: any }): api.TransferComplete;

        /**
         * Creates a plain object from a TransferComplete message. Also converts values to other types if specified.
         * @param message TransferComplete
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.TransferComplete, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransferComplete to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Clear. */
    interface IClear {
    }

    /** Represents a Clear. */
    class Clear {

        /**
         * Constructs a new Clear.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IClear);

        /**
         * Creates a new Clear instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Clear instance
         */
        public static create(properties?: api.IClear): api.Clear;

        /**
         * Encodes the specified Clear message. Does not implicitly {@link api.Clear.verify|verify} messages.
         * @param message Clear message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Clear, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Clear message, length delimited. Does not implicitly {@link api.Clear.verify|verify} messages.
         * @param message Clear message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Clear, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Clear message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Clear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Clear;

        /**
         * Decodes a Clear message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Clear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Clear;

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
        public static fromObject(object: { [k: string]: any }): api.Clear;

        /**
         * Creates a plain object from a Clear message. Also converts values to other types if specified.
         * @param message Clear
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Clear, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class Toast {

        /**
         * Constructs a new Toast.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IToast);

        /** Toast text. */
        public text: string;

        /**
         * Creates a new Toast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Toast instance
         */
        public static create(properties?: api.IToast): api.Toast;

        /**
         * Encodes the specified Toast message. Does not implicitly {@link api.Toast.verify|verify} messages.
         * @param message Toast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Toast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Toast message, length delimited. Does not implicitly {@link api.Toast.verify|verify} messages.
         * @param message Toast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Toast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Toast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Toast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Toast;

        /**
         * Decodes a Toast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Toast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Toast;

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
        public static fromObject(object: { [k: string]: any }): api.Toast;

        /**
         * Creates a plain object from a Toast message. Also converts values to other types if specified.
         * @param message Toast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Toast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Toast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProtocolError. */
    interface IProtocolError {

        /** ProtocolError text */
        text?: (string|null);
    }

    /** Represents a ProtocolError. */
    class ProtocolError {

        /**
         * Constructs a new ProtocolError.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IProtocolError);

        /** ProtocolError text. */
        public text: string;

        /**
         * Creates a new ProtocolError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtocolError instance
         */
        public static create(properties?: api.IProtocolError): api.ProtocolError;

        /**
         * Encodes the specified ProtocolError message. Does not implicitly {@link api.ProtocolError.verify|verify} messages.
         * @param message ProtocolError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ProtocolError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtocolError message, length delimited. Does not implicitly {@link api.ProtocolError.verify|verify} messages.
         * @param message ProtocolError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ProtocolError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtocolError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtocolError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ProtocolError;

        /**
         * Decodes a ProtocolError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtocolError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ProtocolError;

        /**
         * Verifies a ProtocolError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtocolError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtocolError
         */
        public static fromObject(object: { [k: string]: any }): api.ProtocolError;

        /**
         * Creates a plain object from a ProtocolError message. Also converts values to other types if specified.
         * @param message ProtocolError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ProtocolError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtocolError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Redirect. */
    interface IRedirect {

        /** Redirect url */
        url?: (string|null);
    }

    /** Represents a Redirect. */
    class Redirect {

        /**
         * Constructs a new Redirect.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IRedirect);

        /** Redirect url. */
        public url: string;

        /**
         * Creates a new Redirect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Redirect instance
         */
        public static create(properties?: api.IRedirect): api.Redirect;

        /**
         * Encodes the specified Redirect message. Does not implicitly {@link api.Redirect.verify|verify} messages.
         * @param message Redirect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Redirect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Redirect message, length delimited. Does not implicitly {@link api.Redirect.verify|verify} messages.
         * @param message Redirect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Redirect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Redirect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Redirect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Redirect;

        /**
         * Decodes a Redirect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Redirect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Redirect;

        /**
         * Verifies a Redirect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Redirect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Redirect
         */
        public static fromObject(object: { [k: string]: any }): api.Redirect;

        /**
         * Creates a plain object from a Redirect message. Also converts values to other types if specified.
         * @param message Redirect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Redirect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Redirect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AlwaysOn. */
    interface IAlwaysOn {

        /** AlwaysOn enable */
        enable?: (boolean|null);
    }

    /** Represents an AlwaysOn. */
    class AlwaysOn {

        /**
         * Constructs a new AlwaysOn.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IAlwaysOn);

        /** AlwaysOn enable. */
        public enable: boolean;

        /**
         * Creates a new AlwaysOn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AlwaysOn instance
         */
        public static create(properties?: api.IAlwaysOn): api.AlwaysOn;

        /**
         * Encodes the specified AlwaysOn message. Does not implicitly {@link api.AlwaysOn.verify|verify} messages.
         * @param message AlwaysOn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.AlwaysOn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AlwaysOn message, length delimited. Does not implicitly {@link api.AlwaysOn.verify|verify} messages.
         * @param message AlwaysOn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.AlwaysOn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AlwaysOn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AlwaysOn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.AlwaysOn;

        /**
         * Decodes an AlwaysOn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AlwaysOn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.AlwaysOn;

        /**
         * Verifies an AlwaysOn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AlwaysOn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AlwaysOn
         */
        public static fromObject(object: { [k: string]: any }): api.AlwaysOn;

        /**
         * Creates a plain object from an AlwaysOn message. Also converts values to other types if specified.
         * @param message AlwaysOn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.AlwaysOn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AlwaysOn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RunMain. */
    interface IRunMain {
    }

    /** Represents a RunMain. */
    class RunMain {

        /**
         * Constructs a new RunMain.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IRunMain);

        /**
         * Creates a new RunMain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RunMain instance
         */
        public static create(properties?: api.IRunMain): api.RunMain;

        /**
         * Encodes the specified RunMain message. Does not implicitly {@link api.RunMain.verify|verify} messages.
         * @param message RunMain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.RunMain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RunMain message, length delimited. Does not implicitly {@link api.RunMain.verify|verify} messages.
         * @param message RunMain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.RunMain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RunMain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RunMain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.RunMain;

        /**
         * Decodes a RunMain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RunMain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.RunMain;

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
        public static fromObject(object: { [k: string]: any }): api.RunMain;

        /**
         * Creates a plain object from a RunMain message. Also converts values to other types if specified.
         * @param message RunMain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.RunMain, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        action?: (api.OpenChannel.Action|null);

        /** OpenChannel id */
        id?: (number|null);
    }

    /** Represents an OpenChannel. */
    class OpenChannel {

        /**
         * Constructs a new OpenChannel.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOpenChannel);

        /** OpenChannel service. */
        public service: string;

        /** OpenChannel name. */
        public name: string;

        /** OpenChannel action. */
        public action: api.OpenChannel.Action;

        /** OpenChannel id. */
        public id: number;

        /**
         * Creates a new OpenChannel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenChannel instance
         */
        public static create(properties?: api.IOpenChannel): api.OpenChannel;

        /**
         * Encodes the specified OpenChannel message. Does not implicitly {@link api.OpenChannel.verify|verify} messages.
         * @param message OpenChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OpenChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpenChannel message, length delimited. Does not implicitly {@link api.OpenChannel.verify|verify} messages.
         * @param message OpenChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OpenChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenChannel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OpenChannel;

        /**
         * Decodes an OpenChannel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OpenChannel;

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
        public static fromObject(object: { [k: string]: any }): api.OpenChannel;

        /**
         * Creates a plain object from an OpenChannel message. Also converts values to other types if specified.
         * @param message OpenChannel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OpenChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        state?: (api.OpenChannelRes.State|null);

        /** OpenChannelRes error */
        error?: (string|null);
    }

    /** Represents an OpenChannelRes. */
    class OpenChannelRes {

        /**
         * Constructs a new OpenChannelRes.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOpenChannelRes);

        /** OpenChannelRes id. */
        public id: number;

        /** OpenChannelRes state. */
        public state: api.OpenChannelRes.State;

        /** OpenChannelRes error. */
        public error: string;

        /**
         * Creates a new OpenChannelRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenChannelRes instance
         */
        public static create(properties?: api.IOpenChannelRes): api.OpenChannelRes;

        /**
         * Encodes the specified OpenChannelRes message. Does not implicitly {@link api.OpenChannelRes.verify|verify} messages.
         * @param message OpenChannelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OpenChannelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpenChannelRes message, length delimited. Does not implicitly {@link api.OpenChannelRes.verify|verify} messages.
         * @param message OpenChannelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OpenChannelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenChannelRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenChannelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OpenChannelRes;

        /**
         * Decodes an OpenChannelRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenChannelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OpenChannelRes;

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
        public static fromObject(object: { [k: string]: any }): api.OpenChannelRes;

        /**
         * Creates a plain object from an OpenChannelRes message. Also converts values to other types if specified.
         * @param message OpenChannelRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OpenChannelRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        action?: (api.CloseChannel.Action|null);
    }

    /** Represents a CloseChannel. */
    class CloseChannel {

        /**
         * Constructs a new CloseChannel.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ICloseChannel);

        /** CloseChannel id. */
        public id: number;

        /** CloseChannel action. */
        public action: api.CloseChannel.Action;

        /**
         * Creates a new CloseChannel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseChannel instance
         */
        public static create(properties?: api.ICloseChannel): api.CloseChannel;

        /**
         * Encodes the specified CloseChannel message. Does not implicitly {@link api.CloseChannel.verify|verify} messages.
         * @param message CloseChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.CloseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseChannel message, length delimited. Does not implicitly {@link api.CloseChannel.verify|verify} messages.
         * @param message CloseChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.CloseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseChannel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.CloseChannel;

        /**
         * Decodes a CloseChannel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.CloseChannel;

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
        public static fromObject(object: { [k: string]: any }): api.CloseChannel;

        /**
         * Creates a plain object from a CloseChannel message. Also converts values to other types if specified.
         * @param message CloseChannel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.CloseChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        status?: (api.CloseChannelRes.Status|null);
    }

    /** Represents a CloseChannelRes. */
    class CloseChannelRes {

        /**
         * Constructs a new CloseChannelRes.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ICloseChannelRes);

        /** CloseChannelRes id. */
        public id: number;

        /** CloseChannelRes status. */
        public status: api.CloseChannelRes.Status;

        /**
         * Creates a new CloseChannelRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseChannelRes instance
         */
        public static create(properties?: api.ICloseChannelRes): api.CloseChannelRes;

        /**
         * Encodes the specified CloseChannelRes message. Does not implicitly {@link api.CloseChannelRes.verify|verify} messages.
         * @param message CloseChannelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.CloseChannelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseChannelRes message, length delimited. Does not implicitly {@link api.CloseChannelRes.verify|verify} messages.
         * @param message CloseChannelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.CloseChannelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseChannelRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseChannelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.CloseChannelRes;

        /**
         * Decodes a CloseChannelRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseChannelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.CloseChannelRes;

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
        public static fromObject(object: { [k: string]: any }): api.CloseChannelRes;

        /**
         * Creates a plain object from a CloseChannelRes message. Also converts values to other types if specified.
         * @param message CloseChannelRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.CloseChannelRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        state?: (api.ContainerState.State|null);
    }

    /** Represents a ContainerState. */
    class ContainerState {

        /**
         * Constructs a new ContainerState.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IContainerState);

        /** ContainerState state. */
        public state: api.ContainerState.State;

        /**
         * Creates a new ContainerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContainerState instance
         */
        public static create(properties?: api.IContainerState): api.ContainerState;

        /**
         * Encodes the specified ContainerState message. Does not implicitly {@link api.ContainerState.verify|verify} messages.
         * @param message ContainerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ContainerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContainerState message, length delimited. Does not implicitly {@link api.ContainerState.verify|verify} messages.
         * @param message ContainerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ContainerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContainerState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContainerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ContainerState;

        /**
         * Decodes a ContainerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContainerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ContainerState;

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
        public static fromObject(object: { [k: string]: any }): api.ContainerState;

        /**
         * Creates a plain object from a ContainerState message. Also converts values to other types if specified.
         * @param message ContainerState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ContainerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class PortOpen {

        /**
         * Constructs a new PortOpen.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPortOpen);

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
        public static create(properties?: api.IPortOpen): api.PortOpen;

        /**
         * Encodes the specified PortOpen message. Does not implicitly {@link api.PortOpen.verify|verify} messages.
         * @param message PortOpen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PortOpen, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PortOpen message, length delimited. Does not implicitly {@link api.PortOpen.verify|verify} messages.
         * @param message PortOpen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PortOpen, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PortOpen message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PortOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PortOpen;

        /**
         * Decodes a PortOpen message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PortOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PortOpen;

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
        public static fromObject(object: { [k: string]: any }): api.PortOpen;

        /**
         * Creates a plain object from a PortOpen message. Also converts values to other types if specified.
         * @param message PortOpen
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PortOpen, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PortOpen to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTFetchRequest. */
    interface IOTFetchRequest {

        /** OTFetchRequest versionFrom */
        versionFrom?: (number|null);

        /** OTFetchRequest versionTo */
        versionTo?: (number|null);
    }

    /** Represents a OTFetchRequest. */
    class OTFetchRequest {

        /**
         * Constructs a new OTFetchRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTFetchRequest);

        /** OTFetchRequest versionFrom. */
        public versionFrom: number;

        /** OTFetchRequest versionTo. */
        public versionTo: number;

        /**
         * Creates a new OTFetchRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTFetchRequest instance
         */
        public static create(properties?: api.IOTFetchRequest): api.OTFetchRequest;

        /**
         * Encodes the specified OTFetchRequest message. Does not implicitly {@link api.OTFetchRequest.verify|verify} messages.
         * @param message OTFetchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTFetchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTFetchRequest message, length delimited. Does not implicitly {@link api.OTFetchRequest.verify|verify} messages.
         * @param message OTFetchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTFetchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTFetchRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTFetchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTFetchRequest;

        /**
         * Decodes a OTFetchRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTFetchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTFetchRequest;

        /**
         * Verifies a OTFetchRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTFetchRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTFetchRequest
         */
        public static fromObject(object: { [k: string]: any }): api.OTFetchRequest;

        /**
         * Creates a plain object from a OTFetchRequest message. Also converts values to other types if specified.
         * @param message OTFetchRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTFetchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTFetchRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTFetchResponse. */
    interface IOTFetchResponse {

        /** OTFetchResponse packets */
        packets?: ((api.OTPacket|api.IOTPacket)[]|null);
    }

    /** Represents a OTFetchResponse. */
    class OTFetchResponse {

        /**
         * Constructs a new OTFetchResponse.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTFetchResponse);

        /** OTFetchResponse packets. */
        public packets: api.OTPacket[];

        /**
         * Creates a new OTFetchResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTFetchResponse instance
         */
        public static create(properties?: api.IOTFetchResponse): api.OTFetchResponse;

        /**
         * Encodes the specified OTFetchResponse message. Does not implicitly {@link api.OTFetchResponse.verify|verify} messages.
         * @param message OTFetchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTFetchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTFetchResponse message, length delimited. Does not implicitly {@link api.OTFetchResponse.verify|verify} messages.
         * @param message OTFetchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTFetchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTFetchResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTFetchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTFetchResponse;

        /**
         * Decodes a OTFetchResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTFetchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTFetchResponse;

        /**
         * Verifies a OTFetchResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTFetchResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTFetchResponse
         */
        public static fromObject(object: { [k: string]: any }): api.OTFetchResponse;

        /**
         * Creates a plain object from a OTFetchResponse message. Also converts values to other types if specified.
         * @param message OTFetchResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTFetchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTFetchResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTTransformSelectionRequest. */
    interface IOTTransformSelectionRequest {

        /** OTTransformSelectionRequest indexStart */
        indexStart?: (number|null);

        /** OTTransformSelectionRequest indexEnd */
        indexEnd?: (number|null);

        /** OTTransformSelectionRequest versionFrom */
        versionFrom?: (number|null);

        /** OTTransformSelectionRequest versionTo */
        versionTo?: (number|null);
    }

    /** Represents a OTTransformSelectionRequest. */
    class OTTransformSelectionRequest {

        /**
         * Constructs a new OTTransformSelectionRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTTransformSelectionRequest);

        /** OTTransformSelectionRequest indexStart. */
        public indexStart: number;

        /** OTTransformSelectionRequest indexEnd. */
        public indexEnd: number;

        /** OTTransformSelectionRequest versionFrom. */
        public versionFrom: number;

        /** OTTransformSelectionRequest versionTo. */
        public versionTo: number;

        /**
         * Creates a new OTTransformSelectionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTTransformSelectionRequest instance
         */
        public static create(properties?: api.IOTTransformSelectionRequest): api.OTTransformSelectionRequest;

        /**
         * Encodes the specified OTTransformSelectionRequest message. Does not implicitly {@link api.OTTransformSelectionRequest.verify|verify} messages.
         * @param message OTTransformSelectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTTransformSelectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTTransformSelectionRequest message, length delimited. Does not implicitly {@link api.OTTransformSelectionRequest.verify|verify} messages.
         * @param message OTTransformSelectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTTransformSelectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTTransformSelectionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTTransformSelectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTTransformSelectionRequest;

        /**
         * Decodes a OTTransformSelectionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTTransformSelectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTTransformSelectionRequest;

        /**
         * Verifies a OTTransformSelectionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTTransformSelectionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTTransformSelectionRequest
         */
        public static fromObject(object: { [k: string]: any }): api.OTTransformSelectionRequest;

        /**
         * Creates a plain object from a OTTransformSelectionRequest message. Also converts values to other types if specified.
         * @param message OTTransformSelectionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTTransformSelectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTTransformSelectionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTTransformSelectionResponse. */
    interface IOTTransformSelectionResponse {

        /** OTTransformSelectionResponse indexStart */
        indexStart?: (number|null);

        /** OTTransformSelectionResponse indexEnd */
        indexEnd?: (number|null);

        /** OTTransformSelectionResponse version */
        version?: (number|null);
    }

    /** Represents a OTTransformSelectionResponse. */
    class OTTransformSelectionResponse {

        /**
         * Constructs a new OTTransformSelectionResponse.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTTransformSelectionResponse);

        /** OTTransformSelectionResponse indexStart. */
        public indexStart: number;

        /** OTTransformSelectionResponse indexEnd. */
        public indexEnd: number;

        /** OTTransformSelectionResponse version. */
        public version: number;

        /**
         * Creates a new OTTransformSelectionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTTransformSelectionResponse instance
         */
        public static create(properties?: api.IOTTransformSelectionResponse): api.OTTransformSelectionResponse;

        /**
         * Encodes the specified OTTransformSelectionResponse message. Does not implicitly {@link api.OTTransformSelectionResponse.verify|verify} messages.
         * @param message OTTransformSelectionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTTransformSelectionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTTransformSelectionResponse message, length delimited. Does not implicitly {@link api.OTTransformSelectionResponse.verify|verify} messages.
         * @param message OTTransformSelectionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTTransformSelectionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTTransformSelectionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTTransformSelectionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTTransformSelectionResponse;

        /**
         * Decodes a OTTransformSelectionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTTransformSelectionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTTransformSelectionResponse;

        /**
         * Verifies a OTTransformSelectionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OTTransformSelectionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OTTransformSelectionResponse
         */
        public static fromObject(object: { [k: string]: any }): api.OTTransformSelectionResponse;

        /**
         * Creates a plain object from a OTTransformSelectionResponse message. Also converts values to other types if specified.
         * @param message OTTransformSelectionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTTransformSelectionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OTTransformSelectionResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a OTPacket. */
    interface IOTPacket {

        /** OTPacket spookyVersion */
        spookyVersion?: (number|null);

        /** OTPacket version */
        version?: (number|null);

        /** OTPacket ops */
        ops?: ((api.OTRuneTransformOp|api.IOTRuneTransformOp)[]|null);

        /** OTPacket crc32 */
        crc32?: (number|null);

        /** OTPacket committed */
        committed?: (google.protobuf.Timestamp|google.protobuf.ITimestamp|null);

        /** OTPacket nonce */
        nonce?: (number|null);
    }

    /** Represents a OTPacket. */
    class OTPacket {

        /**
         * Constructs a new OTPacket.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTPacket);

        /** OTPacket spookyVersion. */
        public spookyVersion: number;

        /** OTPacket version. */
        public version: number;

        /** OTPacket ops. */
        public ops: api.OTRuneTransformOp[];

        /** OTPacket crc32. */
        public crc32: number;

        /** OTPacket committed. */
        public committed?: (google.protobuf.Timestamp|null);

        /** OTPacket nonce. */
        public nonce: number;

        /**
         * Creates a new OTPacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTPacket instance
         */
        public static create(properties?: api.IOTPacket): api.OTPacket;

        /**
         * Encodes the specified OTPacket message. Does not implicitly {@link api.OTPacket.verify|verify} messages.
         * @param message OTPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTPacket message, length delimited. Does not implicitly {@link api.OTPacket.verify|verify} messages.
         * @param message OTPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTPacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTPacket;

        /**
         * Decodes a OTPacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTPacket;

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
        public static fromObject(object: { [k: string]: any }): api.OTPacket;

        /**
         * Creates a plain object from a OTPacket message. Also converts values to other types if specified.
         * @param message OTPacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class OTRuneTransformOp {

        /**
         * Constructs a new OTRuneTransformOp.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTRuneTransformOp);

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
        public static create(properties?: api.IOTRuneTransformOp): api.OTRuneTransformOp;

        /**
         * Encodes the specified OTRuneTransformOp message. Does not implicitly {@link api.OTRuneTransformOp.verify|verify} messages.
         * @param message OTRuneTransformOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTRuneTransformOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTRuneTransformOp message, length delimited. Does not implicitly {@link api.OTRuneTransformOp.verify|verify} messages.
         * @param message OTRuneTransformOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTRuneTransformOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTRuneTransformOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTRuneTransformOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTRuneTransformOp;

        /**
         * Decodes a OTRuneTransformOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTRuneTransformOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTRuneTransformOp;

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
        public static fromObject(object: { [k: string]: any }): api.OTRuneTransformOp;

        /**
         * Creates a plain object from a OTRuneTransformOp message. Also converts values to other types if specified.
         * @param message OTRuneTransformOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTRuneTransformOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        linkedFile?: (api.File|api.IFile|null);

        /** OTStatus cursors */
        cursors?: ((api.OTCursor|api.IOTCursor)[]|null);
    }

    /** Represents a OTStatus. */
    class OTStatus {

        /**
         * Constructs a new OTStatus.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTStatus);

        /** OTStatus contents. */
        public contents: string;

        /** OTStatus version. */
        public version: number;

        /** OTStatus linkedFile. */
        public linkedFile?: (api.File|null);

        /** OTStatus cursors. */
        public cursors: api.OTCursor[];

        /**
         * Creates a new OTStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTStatus instance
         */
        public static create(properties?: api.IOTStatus): api.OTStatus;

        /**
         * Encodes the specified OTStatus message. Does not implicitly {@link api.OTStatus.verify|verify} messages.
         * @param message OTStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTStatus message, length delimited. Does not implicitly {@link api.OTStatus.verify|verify} messages.
         * @param message OTStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTStatus;

        /**
         * Decodes a OTStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTStatus;

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
        public static fromObject(object: { [k: string]: any }): api.OTStatus;

        /**
         * Creates a plain object from a OTStatus message. Also converts values to other types if specified.
         * @param message OTStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        user?: (api.User|api.IUser|null);

        /** OTCursor id */
        id?: (string|null);
    }

    /** Represents a OTCursor. */
    class OTCursor {

        /**
         * Constructs a new OTCursor.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOTCursor);

        /** OTCursor position. */
        public position: number;

        /** OTCursor selectionStart. */
        public selectionStart: number;

        /** OTCursor selectionEnd. */
        public selectionEnd: number;

        /** OTCursor user. */
        public user?: (api.User|null);

        /** OTCursor id. */
        public id: string;

        /**
         * Creates a new OTCursor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OTCursor instance
         */
        public static create(properties?: api.IOTCursor): api.OTCursor;

        /**
         * Encodes the specified OTCursor message. Does not implicitly {@link api.OTCursor.verify|verify} messages.
         * @param message OTCursor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OTCursor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OTCursor message, length delimited. Does not implicitly {@link api.OTCursor.verify|verify} messages.
         * @param message OTCursor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OTCursor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OTCursor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OTCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OTCursor;

        /**
         * Decodes a OTCursor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OTCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OTCursor;

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
        public static fromObject(object: { [k: string]: any }): api.OTCursor;

        /**
         * Creates a plain object from a OTCursor message. Also converts values to other types if specified.
         * @param message OTCursor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OTCursor, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class ChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IChatMessage);

        /** ChatMessage username. */
        public username: string;

        /** ChatMessage text. */
        public text: string;

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessage instance
         */
        public static create(properties?: api.IChatMessage): api.ChatMessage;

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link api.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link api.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ChatMessage;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ChatMessage;

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
        public static fromObject(object: { [k: string]: any }): api.ChatMessage;

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param message ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class ChatTyping {

        /**
         * Constructs a new ChatTyping.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IChatTyping);

        /** ChatTyping username. */
        public username: string;

        /** ChatTyping typing. */
        public typing: boolean;

        /**
         * Creates a new ChatTyping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatTyping instance
         */
        public static create(properties?: api.IChatTyping): api.ChatTyping;

        /**
         * Encodes the specified ChatTyping message. Does not implicitly {@link api.ChatTyping.verify|verify} messages.
         * @param message ChatTyping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ChatTyping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatTyping message, length delimited. Does not implicitly {@link api.ChatTyping.verify|verify} messages.
         * @param message ChatTyping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ChatTyping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatTyping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatTyping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ChatTyping;

        /**
         * Decodes a ChatTyping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatTyping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ChatTyping;

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
        public static fromObject(object: { [k: string]: any }): api.ChatTyping;

        /**
         * Creates a plain object from a ChatTyping message. Also converts values to other types if specified.
         * @param message ChatTyping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ChatTyping, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class User {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IUser);

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
        public static create(properties?: api.IUser): api.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link api.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.User, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link api.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.User, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.User;

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
        public static fromObject(object: { [k: string]: any }): api.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Roster. */
    interface IRoster {

        /** Roster user */
        user?: ((api.User|api.IUser)[]|null);

        /** Roster files */
        files?: ((api.FileOpened|api.IFileOpened)[]|null);
    }

    /** Represents a Roster. */
    class Roster {

        /**
         * Constructs a new Roster.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IRoster);

        /** Roster user. */
        public user: api.User[];

        /** Roster files. */
        public files: api.FileOpened[];

        /**
         * Creates a new Roster instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Roster instance
         */
        public static create(properties?: api.IRoster): api.Roster;

        /**
         * Encodes the specified Roster message. Does not implicitly {@link api.Roster.verify|verify} messages.
         * @param message Roster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Roster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Roster message, length delimited. Does not implicitly {@link api.Roster.verify|verify} messages.
         * @param message Roster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Roster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Roster message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Roster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Roster;

        /**
         * Decodes a Roster message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Roster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Roster;

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
        public static fromObject(object: { [k: string]: any }): api.Roster;

        /**
         * Creates a plain object from a Roster message. Also converts values to other types if specified.
         * @param message Roster
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Roster, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Roster to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenFile. */
    interface IOpenFile {

        /** OpenFile file */
        file?: (string|null);
    }

    /** Represents an OpenFile. */
    class OpenFile {

        /**
         * Constructs a new OpenFile.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IOpenFile);

        /** OpenFile file. */
        public file: string;

        /**
         * Creates a new OpenFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenFile instance
         */
        public static create(properties?: api.IOpenFile): api.OpenFile;

        /**
         * Encodes the specified OpenFile message. Does not implicitly {@link api.OpenFile.verify|verify} messages.
         * @param message OpenFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.OpenFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpenFile message, length delimited. Does not implicitly {@link api.OpenFile.verify|verify} messages.
         * @param message OpenFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.OpenFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.OpenFile;

        /**
         * Decodes an OpenFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.OpenFile;

        /**
         * Verifies an OpenFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenFile
         */
        public static fromObject(object: { [k: string]: any }): api.OpenFile;

        /**
         * Creates a plain object from an OpenFile message. Also converts values to other types if specified.
         * @param message OpenFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.OpenFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileOpened. */
    interface IFileOpened {

        /** FileOpened userId */
        userId?: (number|null);

        /** FileOpened file */
        file?: (string|null);

        /** FileOpened session */
        session?: (number|null);

        /** FileOpened timestamp */
        timestamp?: (google.protobuf.Timestamp|google.protobuf.ITimestamp|null);
    }

    /** Represents a FileOpened. */
    class FileOpened {

        /**
         * Constructs a new FileOpened.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFileOpened);

        /** FileOpened userId. */
        public userId: number;

        /** FileOpened file. */
        public file: string;

        /** FileOpened session. */
        public session: number;

        /** FileOpened timestamp. */
        public timestamp?: (google.protobuf.Timestamp|null);

        /**
         * Creates a new FileOpened instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileOpened instance
         */
        public static create(properties?: api.IFileOpened): api.FileOpened;

        /**
         * Encodes the specified FileOpened message. Does not implicitly {@link api.FileOpened.verify|verify} messages.
         * @param message FileOpened message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.FileOpened, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileOpened message, length delimited. Does not implicitly {@link api.FileOpened.verify|verify} messages.
         * @param message FileOpened message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.FileOpened, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileOpened message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileOpened
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.FileOpened;

        /**
         * Decodes a FileOpened message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileOpened
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.FileOpened;

        /**
         * Verifies a FileOpened message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileOpened message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileOpened
         */
        public static fromObject(object: { [k: string]: any }): api.FileOpened;

        /**
         * Creates a plain object from a FileOpened message. Also converts values to other types if specified.
         * @param message FileOpened
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.FileOpened, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileOpened to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateSessionTimestamp. */
    interface IUpdateSessionTimestamp {
    }

    /** Represents an UpdateSessionTimestamp. */
    class UpdateSessionTimestamp {

        /**
         * Constructs a new UpdateSessionTimestamp.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IUpdateSessionTimestamp);

        /**
         * Creates a new UpdateSessionTimestamp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateSessionTimestamp instance
         */
        public static create(properties?: api.IUpdateSessionTimestamp): api.UpdateSessionTimestamp;

        /**
         * Encodes the specified UpdateSessionTimestamp message. Does not implicitly {@link api.UpdateSessionTimestamp.verify|verify} messages.
         * @param message UpdateSessionTimestamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.UpdateSessionTimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateSessionTimestamp message, length delimited. Does not implicitly {@link api.UpdateSessionTimestamp.verify|verify} messages.
         * @param message UpdateSessionTimestamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.UpdateSessionTimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateSessionTimestamp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateSessionTimestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.UpdateSessionTimestamp;

        /**
         * Decodes an UpdateSessionTimestamp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateSessionTimestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.UpdateSessionTimestamp;

        /**
         * Verifies an UpdateSessionTimestamp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateSessionTimestamp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateSessionTimestamp
         */
        public static fromObject(object: { [k: string]: any }): api.UpdateSessionTimestamp;

        /**
         * Creates a plain object from an UpdateSessionTimestamp message. Also converts values to other types if specified.
         * @param message UpdateSessionTimestamp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.UpdateSessionTimestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateSessionTimestamp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SessionTimestampUpdated. */
    interface ISessionTimestampUpdated {

        /** SessionTimestampUpdated session */
        session?: (number|null);

        /** SessionTimestampUpdated timestamp */
        timestamp?: (google.protobuf.Timestamp|google.protobuf.ITimestamp|null);
    }

    /** Represents a SessionTimestampUpdated. */
    class SessionTimestampUpdated {

        /**
         * Constructs a new SessionTimestampUpdated.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ISessionTimestampUpdated);

        /** SessionTimestampUpdated session. */
        public session: number;

        /** SessionTimestampUpdated timestamp. */
        public timestamp?: (google.protobuf.Timestamp|null);

        /**
         * Creates a new SessionTimestampUpdated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionTimestampUpdated instance
         */
        public static create(properties?: api.ISessionTimestampUpdated): api.SessionTimestampUpdated;

        /**
         * Encodes the specified SessionTimestampUpdated message. Does not implicitly {@link api.SessionTimestampUpdated.verify|verify} messages.
         * @param message SessionTimestampUpdated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.SessionTimestampUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionTimestampUpdated message, length delimited. Does not implicitly {@link api.SessionTimestampUpdated.verify|verify} messages.
         * @param message SessionTimestampUpdated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.SessionTimestampUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionTimestampUpdated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionTimestampUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.SessionTimestampUpdated;

        /**
         * Decodes a SessionTimestampUpdated message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionTimestampUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.SessionTimestampUpdated;

        /**
         * Verifies a SessionTimestampUpdated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionTimestampUpdated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionTimestampUpdated
         */
        public static fromObject(object: { [k: string]: any }): api.SessionTimestampUpdated;

        /**
         * Creates a plain object from a SessionTimestampUpdated message. Also converts values to other types if specified.
         * @param message SessionTimestampUpdated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.SessionTimestampUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionTimestampUpdated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FollowUser. */
    interface IFollowUser {

        /** FollowUser session */
        session?: (number|null);
    }

    /** Represents a FollowUser. */
    class FollowUser {

        /**
         * Constructs a new FollowUser.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IFollowUser);

        /** FollowUser session. */
        public session: number;

        /**
         * Creates a new FollowUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FollowUser instance
         */
        public static create(properties?: api.IFollowUser): api.FollowUser;

        /**
         * Encodes the specified FollowUser message. Does not implicitly {@link api.FollowUser.verify|verify} messages.
         * @param message FollowUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.FollowUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FollowUser message, length delimited. Does not implicitly {@link api.FollowUser.verify|verify} messages.
         * @param message FollowUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.FollowUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FollowUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FollowUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.FollowUser;

        /**
         * Decodes a FollowUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FollowUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.FollowUser;

        /**
         * Verifies a FollowUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FollowUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FollowUser
         */
        public static fromObject(object: { [k: string]: any }): api.FollowUser;

        /**
         * Creates a plain object from a FollowUser message. Also converts values to other types if specified.
         * @param message FollowUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.FollowUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FollowUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnfollowUser. */
    interface IUnfollowUser {

        /** UnfollowUser session */
        session?: (number|null);
    }

    /** Represents an UnfollowUser. */
    class UnfollowUser {

        /**
         * Constructs a new UnfollowUser.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IUnfollowUser);

        /** UnfollowUser session. */
        public session: number;

        /**
         * Creates a new UnfollowUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnfollowUser instance
         */
        public static create(properties?: api.IUnfollowUser): api.UnfollowUser;

        /**
         * Encodes the specified UnfollowUser message. Does not implicitly {@link api.UnfollowUser.verify|verify} messages.
         * @param message UnfollowUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.UnfollowUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnfollowUser message, length delimited. Does not implicitly {@link api.UnfollowUser.verify|verify} messages.
         * @param message UnfollowUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.UnfollowUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnfollowUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnfollowUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.UnfollowUser;

        /**
         * Decodes an UnfollowUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnfollowUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.UnfollowUser;

        /**
         * Verifies an UnfollowUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnfollowUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnfollowUser
         */
        public static fromObject(object: { [k: string]: any }): api.UnfollowUser;

        /**
         * Creates a plain object from an UnfollowUser message. Also converts values to other types if specified.
         * @param message UnfollowUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.UnfollowUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnfollowUser to JSON.
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

        /** Exec lifecycle */
        lifecycle?: (api.Exec.Lifecycle|null);

        /** Exec splitStderr */
        splitStderr?: (boolean|null);

        /** Exec splitLogs */
        splitLogs?: (boolean|null);
    }

    /** Represents an Exec. */
    class Exec {

        /**
         * Constructs a new Exec.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IExec);

        /** Exec args. */
        public args: string[];

        /** Exec env. */
        public env: { [k: string]: string };

        /** Exec blocking. */
        public blocking: boolean;

        /** Exec lifecycle. */
        public lifecycle: api.Exec.Lifecycle;

        /** Exec splitStderr. */
        public splitStderr: boolean;

        /** Exec splitLogs. */
        public splitLogs: boolean;

        /**
         * Creates a new Exec instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Exec instance
         */
        public static create(properties?: api.IExec): api.Exec;

        /**
         * Encodes the specified Exec message. Does not implicitly {@link api.Exec.verify|verify} messages.
         * @param message Exec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Exec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Exec message, length delimited. Does not implicitly {@link api.Exec.verify|verify} messages.
         * @param message Exec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Exec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Exec message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Exec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Exec;

        /**
         * Decodes an Exec message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Exec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Exec;

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
        public static fromObject(object: { [k: string]: any }): api.Exec;

        /**
         * Creates a plain object from an Exec message. Also converts values to other types if specified.
         * @param message Exec
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Exec, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Exec to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Exec {

        /** Lifecycle enum. */
        enum Lifecycle {
            NON_BLOCKING = 0,
            BLOCKING = 1,
            STDIN = 2
        }
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
        dependencies?: ((api.Package|api.IPackage)[]|null);
    }

    /** Represents a Package. */
    class Package {

        /**
         * Constructs a new Package.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackage);

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
        public dependencies: api.Package[];

        /**
         * Creates a new Package instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Package instance
         */
        public static create(properties?: api.IPackage): api.Package;

        /**
         * Encodes the specified Package message. Does not implicitly {@link api.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Package, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Package message, length delimited. Does not implicitly {@link api.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Package, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Package message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Package;

        /**
         * Decodes a Package message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Package;

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
        public static fromObject(object: { [k: string]: any }): api.Package;

        /**
         * Creates a plain object from a Package message. Also converts values to other types if specified.
         * @param message Package
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class PackageSearch {

        /**
         * Constructs a new PackageSearch.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageSearch);

        /** PackageSearch query. */
        public query: string;

        /**
         * Creates a new PackageSearch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageSearch instance
         */
        public static create(properties?: api.IPackageSearch): api.PackageSearch;

        /**
         * Encodes the specified PackageSearch message. Does not implicitly {@link api.PackageSearch.verify|verify} messages.
         * @param message PackageSearch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageSearch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageSearch message, length delimited. Does not implicitly {@link api.PackageSearch.verify|verify} messages.
         * @param message PackageSearch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageSearch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageSearch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageSearch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageSearch;

        /**
         * Decodes a PackageSearch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageSearch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageSearch;

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
        public static fromObject(object: { [k: string]: any }): api.PackageSearch;

        /**
         * Creates a plain object from a PackageSearch message. Also converts values to other types if specified.
         * @param message PackageSearch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageSearch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageSearch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageSearchResp. */
    interface IPackageSearchResp {

        /** PackageSearchResp results */
        results?: ((api.Package|api.IPackage)[]|null);
    }

    /** Represents a PackageSearchResp. */
    class PackageSearchResp {

        /**
         * Constructs a new PackageSearchResp.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageSearchResp);

        /** PackageSearchResp results. */
        public results: api.Package[];

        /**
         * Creates a new PackageSearchResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageSearchResp instance
         */
        public static create(properties?: api.IPackageSearchResp): api.PackageSearchResp;

        /**
         * Encodes the specified PackageSearchResp message. Does not implicitly {@link api.PackageSearchResp.verify|verify} messages.
         * @param message PackageSearchResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageSearchResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageSearchResp message, length delimited. Does not implicitly {@link api.PackageSearchResp.verify|verify} messages.
         * @param message PackageSearchResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageSearchResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageSearchResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageSearchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageSearchResp;

        /**
         * Decodes a PackageSearchResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageSearchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageSearchResp;

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
        public static fromObject(object: { [k: string]: any }): api.PackageSearchResp;

        /**
         * Creates a plain object from a PackageSearchResp message. Also converts values to other types if specified.
         * @param message PackageSearchResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageSearchResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageSearchResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageInfo. */
    interface IPackageInfo {

        /** PackageInfo pkg */
        pkg?: (api.Package|api.IPackage|null);
    }

    /** Represents a PackageInfo. */
    class PackageInfo {

        /**
         * Constructs a new PackageInfo.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageInfo);

        /** PackageInfo pkg. */
        public pkg?: (api.Package|null);

        /**
         * Creates a new PackageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageInfo instance
         */
        public static create(properties?: api.IPackageInfo): api.PackageInfo;

        /**
         * Encodes the specified PackageInfo message. Does not implicitly {@link api.PackageInfo.verify|verify} messages.
         * @param message PackageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageInfo message, length delimited. Does not implicitly {@link api.PackageInfo.verify|verify} messages.
         * @param message PackageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageInfo;

        /**
         * Decodes a PackageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageInfo;

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
        public static fromObject(object: { [k: string]: any }): api.PackageInfo;

        /**
         * Creates a plain object from a PackageInfo message. Also converts values to other types if specified.
         * @param message PackageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageInfoResp. */
    interface IPackageInfoResp {

        /** PackageInfoResp pkg */
        pkg?: (api.Package|api.IPackage|null);
    }

    /** Represents a PackageInfoResp. */
    class PackageInfoResp {

        /**
         * Constructs a new PackageInfoResp.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageInfoResp);

        /** PackageInfoResp pkg. */
        public pkg?: (api.Package|null);

        /**
         * Creates a new PackageInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageInfoResp instance
         */
        public static create(properties?: api.IPackageInfoResp): api.PackageInfoResp;

        /**
         * Encodes the specified PackageInfoResp message. Does not implicitly {@link api.PackageInfoResp.verify|verify} messages.
         * @param message PackageInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageInfoResp message, length delimited. Does not implicitly {@link api.PackageInfoResp.verify|verify} messages.
         * @param message PackageInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageInfoResp;

        /**
         * Decodes a PackageInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageInfoResp;

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
        public static fromObject(object: { [k: string]: any }): api.PackageInfoResp;

        /**
         * Creates a plain object from a PackageInfoResp message. Also converts values to other types if specified.
         * @param message PackageInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageAdd. */
    interface IPackageAdd {

        /** PackageAdd pkgs */
        pkgs?: ((api.Package|api.IPackage)[]|null);
    }

    /** Represents a PackageAdd. */
    class PackageAdd {

        /**
         * Constructs a new PackageAdd.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageAdd);

        /** PackageAdd pkgs. */
        public pkgs: api.Package[];

        /**
         * Creates a new PackageAdd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageAdd instance
         */
        public static create(properties?: api.IPackageAdd): api.PackageAdd;

        /**
         * Encodes the specified PackageAdd message. Does not implicitly {@link api.PackageAdd.verify|verify} messages.
         * @param message PackageAdd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageAdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageAdd message, length delimited. Does not implicitly {@link api.PackageAdd.verify|verify} messages.
         * @param message PackageAdd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageAdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageAdd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageAdd;

        /**
         * Decodes a PackageAdd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageAdd;

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
        public static fromObject(object: { [k: string]: any }): api.PackageAdd;

        /**
         * Creates a plain object from a PackageAdd message. Also converts values to other types if specified.
         * @param message PackageAdd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageAdd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageAdd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageRemove. */
    interface IPackageRemove {

        /** PackageRemove pkgs */
        pkgs?: ((api.Package|api.IPackage)[]|null);
    }

    /** Represents a PackageRemove. */
    class PackageRemove {

        /**
         * Constructs a new PackageRemove.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageRemove);

        /** PackageRemove pkgs. */
        public pkgs: api.Package[];

        /**
         * Creates a new PackageRemove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageRemove instance
         */
        public static create(properties?: api.IPackageRemove): api.PackageRemove;

        /**
         * Encodes the specified PackageRemove message. Does not implicitly {@link api.PackageRemove.verify|verify} messages.
         * @param message PackageRemove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageRemove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageRemove message, length delimited. Does not implicitly {@link api.PackageRemove.verify|verify} messages.
         * @param message PackageRemove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageRemove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageRemove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageRemove;

        /**
         * Decodes a PackageRemove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageRemove;

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
        public static fromObject(object: { [k: string]: any }): api.PackageRemove;

        /**
         * Creates a plain object from a PackageRemove message. Also converts values to other types if specified.
         * @param message PackageRemove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageRemove, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class PackageInstall {

        /**
         * Constructs a new PackageInstall.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageInstall);

        /**
         * Creates a new PackageInstall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageInstall instance
         */
        public static create(properties?: api.IPackageInstall): api.PackageInstall;

        /**
         * Encodes the specified PackageInstall message. Does not implicitly {@link api.PackageInstall.verify|verify} messages.
         * @param message PackageInstall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageInstall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageInstall message, length delimited. Does not implicitly {@link api.PackageInstall.verify|verify} messages.
         * @param message PackageInstall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageInstall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageInstall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageInstall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageInstall;

        /**
         * Decodes a PackageInstall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageInstall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageInstall;

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
        public static fromObject(object: { [k: string]: any }): api.PackageInstall;

        /**
         * Creates a plain object from a PackageInstall message. Also converts values to other types if specified.
         * @param message PackageInstall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageInstall, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class PackageListSpecfile {

        /**
         * Constructs a new PackageListSpecfile.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageListSpecfile);

        /**
         * Creates a new PackageListSpecfile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageListSpecfile instance
         */
        public static create(properties?: api.IPackageListSpecfile): api.PackageListSpecfile;

        /**
         * Encodes the specified PackageListSpecfile message. Does not implicitly {@link api.PackageListSpecfile.verify|verify} messages.
         * @param message PackageListSpecfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageListSpecfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageListSpecfile message, length delimited. Does not implicitly {@link api.PackageListSpecfile.verify|verify} messages.
         * @param message PackageListSpecfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageListSpecfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageListSpecfile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageListSpecfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageListSpecfile;

        /**
         * Decodes a PackageListSpecfile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageListSpecfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageListSpecfile;

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
        public static fromObject(object: { [k: string]: any }): api.PackageListSpecfile;

        /**
         * Creates a plain object from a PackageListSpecfile message. Also converts values to other types if specified.
         * @param message PackageListSpecfile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageListSpecfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageListSpecfile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PackageListSpecfileResp. */
    interface IPackageListSpecfileResp {

        /** PackageListSpecfileResp pkgs */
        pkgs?: ((api.Package|api.IPackage)[]|null);
    }

    /** Represents a PackageListSpecfileResp. */
    class PackageListSpecfileResp {

        /**
         * Constructs a new PackageListSpecfileResp.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageListSpecfileResp);

        /** PackageListSpecfileResp pkgs. */
        public pkgs: api.Package[];

        /**
         * Creates a new PackageListSpecfileResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageListSpecfileResp instance
         */
        public static create(properties?: api.IPackageListSpecfileResp): api.PackageListSpecfileResp;

        /**
         * Encodes the specified PackageListSpecfileResp message. Does not implicitly {@link api.PackageListSpecfileResp.verify|verify} messages.
         * @param message PackageListSpecfileResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageListSpecfileResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageListSpecfileResp message, length delimited. Does not implicitly {@link api.PackageListSpecfileResp.verify|verify} messages.
         * @param message PackageListSpecfileResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageListSpecfileResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageListSpecfileResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageListSpecfileResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageListSpecfileResp;

        /**
         * Decodes a PackageListSpecfileResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageListSpecfileResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageListSpecfileResp;

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
        public static fromObject(object: { [k: string]: any }): api.PackageListSpecfileResp;

        /**
         * Creates a plain object from a PackageListSpecfileResp message. Also converts values to other types if specified.
         * @param message PackageListSpecfileResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageListSpecfileResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    class PackageCacheSave {

        /**
         * Constructs a new PackageCacheSave.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPackageCacheSave);

        /**
         * Creates a new PackageCacheSave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageCacheSave instance
         */
        public static create(properties?: api.IPackageCacheSave): api.PackageCacheSave;

        /**
         * Encodes the specified PackageCacheSave message. Does not implicitly {@link api.PackageCacheSave.verify|verify} messages.
         * @param message PackageCacheSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PackageCacheSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageCacheSave message, length delimited. Does not implicitly {@link api.PackageCacheSave.verify|verify} messages.
         * @param message PackageCacheSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PackageCacheSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageCacheSave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageCacheSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PackageCacheSave;

        /**
         * Decodes a PackageCacheSave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageCacheSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PackageCacheSave;

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
        public static fromObject(object: { [k: string]: any }): api.PackageCacheSave;

        /**
         * Creates a plain object from a PackageCacheSave message. Also converts values to other types if specified.
         * @param message PackageCacheSave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PackageCacheSave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageCacheSave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatScrollback. */
    interface IChatScrollback {

        /** ChatScrollback scrollback */
        scrollback?: ((api.ChatMessage|api.IChatMessage)[]|null);
    }

    /** Represents a ChatScrollback. */
    class ChatScrollback {

        /**
         * Constructs a new ChatScrollback.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IChatScrollback);

        /** ChatScrollback scrollback. */
        public scrollback: api.ChatMessage[];

        /**
         * Creates a new ChatScrollback instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatScrollback instance
         */
        public static create(properties?: api.IChatScrollback): api.ChatScrollback;

        /**
         * Encodes the specified ChatScrollback message. Does not implicitly {@link api.ChatScrollback.verify|verify} messages.
         * @param message ChatScrollback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ChatScrollback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatScrollback message, length delimited. Does not implicitly {@link api.ChatScrollback.verify|verify} messages.
         * @param message ChatScrollback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ChatScrollback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatScrollback message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatScrollback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ChatScrollback;

        /**
         * Decodes a ChatScrollback message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatScrollback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ChatScrollback;

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
        public static fromObject(object: { [k: string]: any }): api.ChatScrollback;

        /**
         * Creates a plain object from a ChatScrollback message. Also converts values to other types if specified.
         * @param message ChatScrollback
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ChatScrollback, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatScrollback to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Metrics. */
    interface IMetrics {

        /** Metrics prometheusMetricFamilies */
        prometheusMetricFamilies?: (Uint8Array[]|null);
    }

    /** Represents a Metrics. */
    class Metrics {

        /**
         * Constructs a new Metrics.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IMetrics);

        /** Metrics prometheusMetricFamilies. */
        public prometheusMetricFamilies: Uint8Array[];

        /**
         * Creates a new Metrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metrics instance
         */
        public static create(properties?: api.IMetrics): api.Metrics;

        /**
         * Encodes the specified Metrics message. Does not implicitly {@link api.Metrics.verify|verify} messages.
         * @param message Metrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Metrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metrics message, length delimited. Does not implicitly {@link api.Metrics.verify|verify} messages.
         * @param message Metrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Metrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Metrics;

        /**
         * Decodes a Metrics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Metrics;

        /**
         * Verifies a Metrics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metrics
         */
        public static fromObject(object: { [k: string]: any }): api.Metrics;

        /**
         * Creates a plain object from a Metrics message. Also converts values to other types if specified.
         * @param message Metrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Metrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PprofRequest. */
    interface IPprofRequest {

        /** PprofRequest id */
        id?: (string|null);

        /** PprofRequest pprofCpuProfileRequest */
        pprofCpuProfileRequest?: (api.PprofCpuProfileRequest|api.IPprofCpuProfileRequest|null);

        /** PprofRequest pprofHeapProfileRequest */
        pprofHeapProfileRequest?: (api.PprofHeapProfileRequest|api.IPprofHeapProfileRequest|null);

        /** PprofRequest pprofAllocsProfileRequest */
        pprofAllocsProfileRequest?: (api.PprofAllocsProfileRequest|api.IPprofAllocsProfileRequest|null);

        /** PprofRequest pprofBlockProfileRequest */
        pprofBlockProfileRequest?: (api.PprofBlockProfileRequest|api.IPprofBlockProfileRequest|null);

        /** PprofRequest pprofMutexProfileRequest */
        pprofMutexProfileRequest?: (api.PprofMutexProfileRequest|api.IPprofMutexProfileRequest|null);
    }

    /** Represents a PprofRequest. */
    class PprofRequest {

        /**
         * Constructs a new PprofRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPprofRequest);

        /** PprofRequest id. */
        public id: string;

        /** PprofRequest pprofCpuProfileRequest. */
        public pprofCpuProfileRequest?: (api.PprofCpuProfileRequest|null);

        /** PprofRequest pprofHeapProfileRequest. */
        public pprofHeapProfileRequest?: (api.PprofHeapProfileRequest|null);

        /** PprofRequest pprofAllocsProfileRequest. */
        public pprofAllocsProfileRequest?: (api.PprofAllocsProfileRequest|null);

        /** PprofRequest pprofBlockProfileRequest. */
        public pprofBlockProfileRequest?: (api.PprofBlockProfileRequest|null);

        /** PprofRequest pprofMutexProfileRequest. */
        public pprofMutexProfileRequest?: (api.PprofMutexProfileRequest|null);

        /** PprofRequest body. */
        public body?: ("pprofCpuProfileRequest"|"pprofHeapProfileRequest"|"pprofAllocsProfileRequest"|"pprofBlockProfileRequest"|"pprofMutexProfileRequest");

        /**
         * Creates a new PprofRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PprofRequest instance
         */
        public static create(properties?: api.IPprofRequest): api.PprofRequest;

        /**
         * Encodes the specified PprofRequest message. Does not implicitly {@link api.PprofRequest.verify|verify} messages.
         * @param message PprofRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PprofRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PprofRequest message, length delimited. Does not implicitly {@link api.PprofRequest.verify|verify} messages.
         * @param message PprofRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PprofRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PprofRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PprofRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PprofRequest;

        /**
         * Decodes a PprofRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PprofRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PprofRequest;

        /**
         * Verifies a PprofRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PprofRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PprofRequest
         */
        public static fromObject(object: { [k: string]: any }): api.PprofRequest;

        /**
         * Creates a plain object from a PprofRequest message. Also converts values to other types if specified.
         * @param message PprofRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PprofRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PprofRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PprofAllocsProfileRequest. */
    interface IPprofAllocsProfileRequest {

        /** PprofAllocsProfileRequest debug */
        debug?: (boolean|null);
    }

    /** Represents a PprofAllocsProfileRequest. */
    class PprofAllocsProfileRequest {

        /**
         * Constructs a new PprofAllocsProfileRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPprofAllocsProfileRequest);

        /** PprofAllocsProfileRequest debug. */
        public debug: boolean;

        /**
         * Creates a new PprofAllocsProfileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PprofAllocsProfileRequest instance
         */
        public static create(properties?: api.IPprofAllocsProfileRequest): api.PprofAllocsProfileRequest;

        /**
         * Encodes the specified PprofAllocsProfileRequest message. Does not implicitly {@link api.PprofAllocsProfileRequest.verify|verify} messages.
         * @param message PprofAllocsProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PprofAllocsProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PprofAllocsProfileRequest message, length delimited. Does not implicitly {@link api.PprofAllocsProfileRequest.verify|verify} messages.
         * @param message PprofAllocsProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PprofAllocsProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PprofAllocsProfileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PprofAllocsProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PprofAllocsProfileRequest;

        /**
         * Decodes a PprofAllocsProfileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PprofAllocsProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PprofAllocsProfileRequest;

        /**
         * Verifies a PprofAllocsProfileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PprofAllocsProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PprofAllocsProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): api.PprofAllocsProfileRequest;

        /**
         * Creates a plain object from a PprofAllocsProfileRequest message. Also converts values to other types if specified.
         * @param message PprofAllocsProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PprofAllocsProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PprofAllocsProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PprofBlockProfileRequest. */
    interface IPprofBlockProfileRequest {

        /** PprofBlockProfileRequest debug */
        debug?: (boolean|null);
    }

    /** Represents a PprofBlockProfileRequest. */
    class PprofBlockProfileRequest {

        /**
         * Constructs a new PprofBlockProfileRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPprofBlockProfileRequest);

        /** PprofBlockProfileRequest debug. */
        public debug: boolean;

        /**
         * Creates a new PprofBlockProfileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PprofBlockProfileRequest instance
         */
        public static create(properties?: api.IPprofBlockProfileRequest): api.PprofBlockProfileRequest;

        /**
         * Encodes the specified PprofBlockProfileRequest message. Does not implicitly {@link api.PprofBlockProfileRequest.verify|verify} messages.
         * @param message PprofBlockProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PprofBlockProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PprofBlockProfileRequest message, length delimited. Does not implicitly {@link api.PprofBlockProfileRequest.verify|verify} messages.
         * @param message PprofBlockProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PprofBlockProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PprofBlockProfileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PprofBlockProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PprofBlockProfileRequest;

        /**
         * Decodes a PprofBlockProfileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PprofBlockProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PprofBlockProfileRequest;

        /**
         * Verifies a PprofBlockProfileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PprofBlockProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PprofBlockProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): api.PprofBlockProfileRequest;

        /**
         * Creates a plain object from a PprofBlockProfileRequest message. Also converts values to other types if specified.
         * @param message PprofBlockProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PprofBlockProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PprofBlockProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PprofCpuProfileRequest. */
    interface IPprofCpuProfileRequest {

        /** PprofCpuProfileRequest seconds */
        seconds?: (number|null);
    }

    /** Represents a PprofCpuProfileRequest. */
    class PprofCpuProfileRequest {

        /**
         * Constructs a new PprofCpuProfileRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPprofCpuProfileRequest);

        /** PprofCpuProfileRequest seconds. */
        public seconds: number;

        /**
         * Creates a new PprofCpuProfileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PprofCpuProfileRequest instance
         */
        public static create(properties?: api.IPprofCpuProfileRequest): api.PprofCpuProfileRequest;

        /**
         * Encodes the specified PprofCpuProfileRequest message. Does not implicitly {@link api.PprofCpuProfileRequest.verify|verify} messages.
         * @param message PprofCpuProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PprofCpuProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PprofCpuProfileRequest message, length delimited. Does not implicitly {@link api.PprofCpuProfileRequest.verify|verify} messages.
         * @param message PprofCpuProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PprofCpuProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PprofCpuProfileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PprofCpuProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PprofCpuProfileRequest;

        /**
         * Decodes a PprofCpuProfileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PprofCpuProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PprofCpuProfileRequest;

        /**
         * Verifies a PprofCpuProfileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PprofCpuProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PprofCpuProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): api.PprofCpuProfileRequest;

        /**
         * Creates a plain object from a PprofCpuProfileRequest message. Also converts values to other types if specified.
         * @param message PprofCpuProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PprofCpuProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PprofCpuProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PprofHeapProfileRequest. */
    interface IPprofHeapProfileRequest {

        /** PprofHeapProfileRequest gc */
        gc?: (boolean|null);

        /** PprofHeapProfileRequest debug */
        debug?: (boolean|null);
    }

    /** Represents a PprofHeapProfileRequest. */
    class PprofHeapProfileRequest {

        /**
         * Constructs a new PprofHeapProfileRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPprofHeapProfileRequest);

        /** PprofHeapProfileRequest gc. */
        public gc: boolean;

        /** PprofHeapProfileRequest debug. */
        public debug: boolean;

        /**
         * Creates a new PprofHeapProfileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PprofHeapProfileRequest instance
         */
        public static create(properties?: api.IPprofHeapProfileRequest): api.PprofHeapProfileRequest;

        /**
         * Encodes the specified PprofHeapProfileRequest message. Does not implicitly {@link api.PprofHeapProfileRequest.verify|verify} messages.
         * @param message PprofHeapProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PprofHeapProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PprofHeapProfileRequest message, length delimited. Does not implicitly {@link api.PprofHeapProfileRequest.verify|verify} messages.
         * @param message PprofHeapProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PprofHeapProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PprofHeapProfileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PprofHeapProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PprofHeapProfileRequest;

        /**
         * Decodes a PprofHeapProfileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PprofHeapProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PprofHeapProfileRequest;

        /**
         * Verifies a PprofHeapProfileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PprofHeapProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PprofHeapProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): api.PprofHeapProfileRequest;

        /**
         * Creates a plain object from a PprofHeapProfileRequest message. Also converts values to other types if specified.
         * @param message PprofHeapProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PprofHeapProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PprofHeapProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PprofMutexProfileRequest. */
    interface IPprofMutexProfileRequest {

        /** PprofMutexProfileRequest debug */
        debug?: (boolean|null);
    }

    /** Represents a PprofMutexProfileRequest. */
    class PprofMutexProfileRequest {

        /**
         * Constructs a new PprofMutexProfileRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPprofMutexProfileRequest);

        /** PprofMutexProfileRequest debug. */
        public debug: boolean;

        /**
         * Creates a new PprofMutexProfileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PprofMutexProfileRequest instance
         */
        public static create(properties?: api.IPprofMutexProfileRequest): api.PprofMutexProfileRequest;

        /**
         * Encodes the specified PprofMutexProfileRequest message. Does not implicitly {@link api.PprofMutexProfileRequest.verify|verify} messages.
         * @param message PprofMutexProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PprofMutexProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PprofMutexProfileRequest message, length delimited. Does not implicitly {@link api.PprofMutexProfileRequest.verify|verify} messages.
         * @param message PprofMutexProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PprofMutexProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PprofMutexProfileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PprofMutexProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PprofMutexProfileRequest;

        /**
         * Decodes a PprofMutexProfileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PprofMutexProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PprofMutexProfileRequest;

        /**
         * Verifies a PprofMutexProfileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PprofMutexProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PprofMutexProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): api.PprofMutexProfileRequest;

        /**
         * Creates a plain object from a PprofMutexProfileRequest message. Also converts values to other types if specified.
         * @param message PprofMutexProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PprofMutexProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PprofMutexProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PprofResponse. */
    interface IPprofResponse {

        /** PprofResponse id */
        id?: (string|null);

        /** PprofResponse profile */
        profile?: (Uint8Array|null);
    }

    /** Represents a PprofResponse. */
    class PprofResponse {

        /**
         * Constructs a new PprofResponse.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPprofResponse);

        /** PprofResponse id. */
        public id: string;

        /** PprofResponse profile. */
        public profile: Uint8Array;

        /**
         * Creates a new PprofResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PprofResponse instance
         */
        public static create(properties?: api.IPprofResponse): api.PprofResponse;

        /**
         * Encodes the specified PprofResponse message. Does not implicitly {@link api.PprofResponse.verify|verify} messages.
         * @param message PprofResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PprofResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PprofResponse message, length delimited. Does not implicitly {@link api.PprofResponse.verify|verify} messages.
         * @param message PprofResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PprofResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PprofResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PprofResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PprofResponse;

        /**
         * Decodes a PprofResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PprofResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PprofResponse;

        /**
         * Verifies a PprofResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PprofResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PprofResponse
         */
        public static fromObject(object: { [k: string]: any }): api.PprofResponse;

        /**
         * Creates a plain object from a PprofResponse message. Also converts values to other types if specified.
         * @param message PprofResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PprofResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PprofResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PTYConfig. */
    interface IPTYConfig {

        /** PTYConfig pipeMode */
        pipeMode?: (boolean|null);
    }

    /** Represents a PTYConfig. */
    class PTYConfig {

        /**
         * Constructs a new PTYConfig.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPTYConfig);

        /** PTYConfig pipeMode. */
        public pipeMode: boolean;

        /**
         * Creates a new PTYConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PTYConfig instance
         */
        public static create(properties?: api.IPTYConfig): api.PTYConfig;

        /**
         * Encodes the specified PTYConfig message. Does not implicitly {@link api.PTYConfig.verify|verify} messages.
         * @param message PTYConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.PTYConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PTYConfig message, length delimited. Does not implicitly {@link api.PTYConfig.verify|verify} messages.
         * @param message PTYConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.PTYConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PTYConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PTYConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.PTYConfig;

        /**
         * Decodes a PTYConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PTYConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.PTYConfig;

        /**
         * Verifies a PTYConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PTYConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PTYConfig
         */
        public static fromObject(object: { [k: string]: any }): api.PTYConfig;

        /**
         * Creates a plain object from a PTYConfig message. Also converts values to other types if specified.
         * @param message PTYConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.PTYConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PTYConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugMain. */
    interface IDebugMain {

        /** DebugMain session */
        session?: (string|null);

        /** DebugMain readOnly */
        readOnly?: (boolean|null);
    }

    /** Represents a DebugMain. */
    class DebugMain {

        /**
         * Constructs a new DebugMain.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugMain);

        /** DebugMain session. */
        public session: string;

        /** DebugMain readOnly. */
        public readOnly: boolean;

        /**
         * Creates a new DebugMain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugMain instance
         */
        public static create(properties?: api.IDebugMain): api.DebugMain;

        /**
         * Encodes the specified DebugMain message. Does not implicitly {@link api.DebugMain.verify|verify} messages.
         * @param message DebugMain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugMain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugMain message, length delimited. Does not implicitly {@link api.DebugMain.verify|verify} messages.
         * @param message DebugMain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugMain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugMain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugMain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugMain;

        /**
         * Decodes a DebugMain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugMain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugMain;

        /**
         * Verifies a DebugMain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugMain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugMain
         */
        public static fromObject(object: { [k: string]: any }): api.DebugMain;

        /**
         * Creates a plain object from a DebugMain message. Also converts values to other types if specified.
         * @param message DebugMain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugMain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugMain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugMainReply. */
    interface IDebugMainReply {

        /** DebugMainReply joined */
        joined?: (boolean|null);

        /** DebugMainReply protocol */
        protocol?: (api.DebugMainReply.Protocol|null);
    }

    /** Represents a DebugMainReply. */
    class DebugMainReply {

        /**
         * Constructs a new DebugMainReply.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugMainReply);

        /** DebugMainReply joined. */
        public joined: boolean;

        /** DebugMainReply protocol. */
        public protocol: api.DebugMainReply.Protocol;

        /**
         * Creates a new DebugMainReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugMainReply instance
         */
        public static create(properties?: api.IDebugMainReply): api.DebugMainReply;

        /**
         * Encodes the specified DebugMainReply message. Does not implicitly {@link api.DebugMainReply.verify|verify} messages.
         * @param message DebugMainReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugMainReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugMainReply message, length delimited. Does not implicitly {@link api.DebugMainReply.verify|verify} messages.
         * @param message DebugMainReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugMainReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugMainReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugMainReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugMainReply;

        /**
         * Decodes a DebugMainReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugMainReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugMainReply;

        /**
         * Verifies a DebugMainReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugMainReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugMainReply
         */
        public static fromObject(object: { [k: string]: any }): api.DebugMainReply;

        /**
         * Creates a plain object from a DebugMainReply message. Also converts values to other types if specified.
         * @param message DebugMainReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugMainReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugMainReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DebugMainReply {

        /** Protocol enum. */
        enum Protocol {
            DAP = 0
        }
    }

    /** Properties of a DebugState. */
    interface IDebugState {

        /** DebugState session */
        session?: (string|null);

        /** DebugState state */
        state?: (api.State|null);
    }

    /** Represents a DebugState. */
    class DebugState {

        /**
         * Constructs a new DebugState.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugState);

        /** DebugState session. */
        public session: string;

        /** DebugState state. */
        public state: api.State;

        /**
         * Creates a new DebugState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugState instance
         */
        public static create(properties?: api.IDebugState): api.DebugState;

        /**
         * Encodes the specified DebugState message. Does not implicitly {@link api.DebugState.verify|verify} messages.
         * @param message DebugState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugState message, length delimited. Does not implicitly {@link api.DebugState.verify|verify} messages.
         * @param message DebugState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugState;

        /**
         * Decodes a DebugState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugState;

        /**
         * Verifies a DebugState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugState
         */
        public static fromObject(object: { [k: string]: any }): api.DebugState;

        /**
         * Creates a plain object from a DebugState message. Also converts values to other types if specified.
         * @param message DebugState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugInput. */
    interface IDebugInput {

        /** DebugInput session */
        session?: (string|null);

        /** DebugInput input */
        input?: (string|null);

        /** DebugInput adapterInput */
        adapterInput?: (string|null);
    }

    /** Represents a DebugInput. */
    class DebugInput {

        /**
         * Constructs a new DebugInput.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugInput);

        /** DebugInput session. */
        public session: string;

        /** DebugInput input. */
        public input: string;

        /** DebugInput adapterInput. */
        public adapterInput: string;

        /** DebugInput stream. */
        public stream?: ("input"|"adapterInput");

        /**
         * Creates a new DebugInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugInput instance
         */
        public static create(properties?: api.IDebugInput): api.DebugInput;

        /**
         * Encodes the specified DebugInput message. Does not implicitly {@link api.DebugInput.verify|verify} messages.
         * @param message DebugInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugInput message, length delimited. Does not implicitly {@link api.DebugInput.verify|verify} messages.
         * @param message DebugInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugInput;

        /**
         * Decodes a DebugInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugInput;

        /**
         * Verifies a DebugInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugInput
         */
        public static fromObject(object: { [k: string]: any }): api.DebugInput;

        /**
         * Creates a plain object from a DebugInput message. Also converts values to other types if specified.
         * @param message DebugInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugOutput. */
    interface IDebugOutput {

        /** DebugOutput session */
        session?: (string|null);

        /** DebugOutput output */
        output?: (string|null);

        /** DebugOutput adapterOutput */
        adapterOutput?: (string|null);
    }

    /** Represents a DebugOutput. */
    class DebugOutput {

        /**
         * Constructs a new DebugOutput.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugOutput);

        /** DebugOutput session. */
        public session: string;

        /** DebugOutput output. */
        public output: string;

        /** DebugOutput adapterOutput. */
        public adapterOutput: string;

        /** DebugOutput stream. */
        public stream?: ("output"|"adapterOutput");

        /**
         * Creates a new DebugOutput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugOutput instance
         */
        public static create(properties?: api.IDebugOutput): api.DebugOutput;

        /**
         * Encodes the specified DebugOutput message. Does not implicitly {@link api.DebugOutput.verify|verify} messages.
         * @param message DebugOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugOutput message, length delimited. Does not implicitly {@link api.DebugOutput.verify|verify} messages.
         * @param message DebugOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugOutput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugOutput;

        /**
         * Decodes a DebugOutput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugOutput;

        /**
         * Verifies a DebugOutput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugOutput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugOutput
         */
        public static fromObject(object: { [k: string]: any }): api.DebugOutput;

        /**
         * Creates a plain object from a DebugOutput message. Also converts values to other types if specified.
         * @param message DebugOutput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugOutput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugStop. */
    interface IDebugStop {

        /** DebugStop session */
        session?: (string|null);
    }

    /** Represents a DebugStop. */
    class DebugStop {

        /**
         * Constructs a new DebugStop.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugStop);

        /** DebugStop session. */
        public session: string;

        /**
         * Creates a new DebugStop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugStop instance
         */
        public static create(properties?: api.IDebugStop): api.DebugStop;

        /**
         * Encodes the specified DebugStop message. Does not implicitly {@link api.DebugStop.verify|verify} messages.
         * @param message DebugStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugStop message, length delimited. Does not implicitly {@link api.DebugStop.verify|verify} messages.
         * @param message DebugStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugStop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugStop;

        /**
         * Decodes a DebugStop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugStop;

        /**
         * Verifies a DebugStop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugStop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugStop
         */
        public static fromObject(object: { [k: string]: any }): api.DebugStop;

        /**
         * Creates a plain object from a DebugStop message. Also converts values to other types if specified.
         * @param message DebugStop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugStop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugLeave. */
    interface IDebugLeave {

        /** DebugLeave session */
        session?: (string|null);
    }

    /** Represents a DebugLeave. */
    class DebugLeave {

        /**
         * Constructs a new DebugLeave.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugLeave);

        /** DebugLeave session. */
        public session: string;

        /**
         * Creates a new DebugLeave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugLeave instance
         */
        public static create(properties?: api.IDebugLeave): api.DebugLeave;

        /**
         * Encodes the specified DebugLeave message. Does not implicitly {@link api.DebugLeave.verify|verify} messages.
         * @param message DebugLeave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugLeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugLeave message, length delimited. Does not implicitly {@link api.DebugLeave.verify|verify} messages.
         * @param message DebugLeave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugLeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugLeave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugLeave;

        /**
         * Decodes a DebugLeave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugLeave;

        /**
         * Verifies a DebugLeave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugLeave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugLeave
         */
        public static fromObject(object: { [k: string]: any }): api.DebugLeave;

        /**
         * Creates a plain object from a DebugLeave message. Also converts values to other types if specified.
         * @param message DebugLeave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugLeave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugLeave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugSessions. */
    interface IDebugSessions {

        /** DebugSessions sessions */
        sessions?: ({ [k: string]: api.State }|null);
    }

    /** Represents a DebugSessions. */
    class DebugSessions {

        /**
         * Constructs a new DebugSessions.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugSessions);

        /** DebugSessions sessions. */
        public sessions: { [k: string]: api.State };

        /**
         * Creates a new DebugSessions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugSessions instance
         */
        public static create(properties?: api.IDebugSessions): api.DebugSessions;

        /**
         * Encodes the specified DebugSessions message. Does not implicitly {@link api.DebugSessions.verify|verify} messages.
         * @param message DebugSessions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugSessions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugSessions message, length delimited. Does not implicitly {@link api.DebugSessions.verify|verify} messages.
         * @param message DebugSessions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugSessions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugSessions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugSessions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugSessions;

        /**
         * Decodes a DebugSessions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugSessions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugSessions;

        /**
         * Verifies a DebugSessions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugSessions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugSessions
         */
        public static fromObject(object: { [k: string]: any }): api.DebugSessions;

        /**
         * Creates a plain object from a DebugSessions message. Also converts values to other types if specified.
         * @param message DebugSessions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugSessions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugSessions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DotReplitGetRequest. */
    interface IDotReplitGetRequest {
    }

    /** Represents a DotReplitGetRequest. */
    class DotReplitGetRequest {

        /**
         * Constructs a new DotReplitGetRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDotReplitGetRequest);

        /**
         * Creates a new DotReplitGetRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DotReplitGetRequest instance
         */
        public static create(properties?: api.IDotReplitGetRequest): api.DotReplitGetRequest;

        /**
         * Encodes the specified DotReplitGetRequest message. Does not implicitly {@link api.DotReplitGetRequest.verify|verify} messages.
         * @param message DotReplitGetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DotReplitGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DotReplitGetRequest message, length delimited. Does not implicitly {@link api.DotReplitGetRequest.verify|verify} messages.
         * @param message DotReplitGetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DotReplitGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DotReplitGetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DotReplitGetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DotReplitGetRequest;

        /**
         * Decodes a DotReplitGetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DotReplitGetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DotReplitGetRequest;

        /**
         * Verifies a DotReplitGetRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DotReplitGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DotReplitGetRequest
         */
        public static fromObject(object: { [k: string]: any }): api.DotReplitGetRequest;

        /**
         * Creates a plain object from a DotReplitGetRequest message. Also converts values to other types if specified.
         * @param message DotReplitGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DotReplitGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DotReplitGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DotReplitGetResponse. */
    interface IDotReplitGetResponse {

        /** DotReplitGetResponse dotReplit */
        dotReplit?: (api.DotReplit|api.IDotReplit|null);
    }

    /** Represents a DotReplitGetResponse. */
    class DotReplitGetResponse {

        /**
         * Constructs a new DotReplitGetResponse.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDotReplitGetResponse);

        /** DotReplitGetResponse dotReplit. */
        public dotReplit?: (api.DotReplit|null);

        /**
         * Creates a new DotReplitGetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DotReplitGetResponse instance
         */
        public static create(properties?: api.IDotReplitGetResponse): api.DotReplitGetResponse;

        /**
         * Encodes the specified DotReplitGetResponse message. Does not implicitly {@link api.DotReplitGetResponse.verify|verify} messages.
         * @param message DotReplitGetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DotReplitGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DotReplitGetResponse message, length delimited. Does not implicitly {@link api.DotReplitGetResponse.verify|verify} messages.
         * @param message DotReplitGetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DotReplitGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DotReplitGetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DotReplitGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DotReplitGetResponse;

        /**
         * Decodes a DotReplitGetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DotReplitGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DotReplitGetResponse;

        /**
         * Verifies a DotReplitGetResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DotReplitGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DotReplitGetResponse
         */
        public static fromObject(object: { [k: string]: any }): api.DotReplitGetResponse;

        /**
         * Creates a plain object from a DotReplitGetResponse message. Also converts values to other types if specified.
         * @param message DotReplitGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DotReplitGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DotReplitGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugAddBreakpointRequest. */
    interface IDebugAddBreakpointRequest {

        /** DebugAddBreakpointRequest path */
        path?: (string|null);

        /** DebugAddBreakpointRequest otVersion */
        otVersion?: (number|null);

        /** DebugAddBreakpointRequest otIndex */
        otIndex?: (number|null);

        /** DebugAddBreakpointRequest sessionLocal */
        sessionLocal?: (boolean|null);

        /** DebugAddBreakpointRequest line */
        line?: (number|null);

        /** DebugAddBreakpointRequest logMessage */
        logMessage?: (string|null);
    }

    /** Represents a DebugAddBreakpointRequest. */
    class DebugAddBreakpointRequest {

        /**
         * Constructs a new DebugAddBreakpointRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugAddBreakpointRequest);

        /** DebugAddBreakpointRequest path. */
        public path: string;

        /** DebugAddBreakpointRequest otVersion. */
        public otVersion: number;

        /** DebugAddBreakpointRequest otIndex. */
        public otIndex: number;

        /** DebugAddBreakpointRequest sessionLocal. */
        public sessionLocal: boolean;

        /** DebugAddBreakpointRequest line. */
        public line: number;

        /** DebugAddBreakpointRequest logMessage. */
        public logMessage: string;

        /**
         * Creates a new DebugAddBreakpointRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugAddBreakpointRequest instance
         */
        public static create(properties?: api.IDebugAddBreakpointRequest): api.DebugAddBreakpointRequest;

        /**
         * Encodes the specified DebugAddBreakpointRequest message. Does not implicitly {@link api.DebugAddBreakpointRequest.verify|verify} messages.
         * @param message DebugAddBreakpointRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugAddBreakpointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugAddBreakpointRequest message, length delimited. Does not implicitly {@link api.DebugAddBreakpointRequest.verify|verify} messages.
         * @param message DebugAddBreakpointRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugAddBreakpointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugAddBreakpointRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugAddBreakpointRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugAddBreakpointRequest;

        /**
         * Decodes a DebugAddBreakpointRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugAddBreakpointRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugAddBreakpointRequest;

        /**
         * Verifies a DebugAddBreakpointRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugAddBreakpointRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugAddBreakpointRequest
         */
        public static fromObject(object: { [k: string]: any }): api.DebugAddBreakpointRequest;

        /**
         * Creates a plain object from a DebugAddBreakpointRequest message. Also converts values to other types if specified.
         * @param message DebugAddBreakpointRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugAddBreakpointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugAddBreakpointRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugUpdateBreakpointRequest. */
    interface IDebugUpdateBreakpointRequest {

        /** DebugUpdateBreakpointRequest breakpointId */
        breakpointId?: (string|null);

        /** DebugUpdateBreakpointRequest logMessage */
        logMessage?: (string|null);
    }

    /** Represents a DebugUpdateBreakpointRequest. */
    class DebugUpdateBreakpointRequest {

        /**
         * Constructs a new DebugUpdateBreakpointRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugUpdateBreakpointRequest);

        /** DebugUpdateBreakpointRequest breakpointId. */
        public breakpointId: string;

        /** DebugUpdateBreakpointRequest logMessage. */
        public logMessage: string;

        /**
         * Creates a new DebugUpdateBreakpointRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugUpdateBreakpointRequest instance
         */
        public static create(properties?: api.IDebugUpdateBreakpointRequest): api.DebugUpdateBreakpointRequest;

        /**
         * Encodes the specified DebugUpdateBreakpointRequest message. Does not implicitly {@link api.DebugUpdateBreakpointRequest.verify|verify} messages.
         * @param message DebugUpdateBreakpointRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugUpdateBreakpointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugUpdateBreakpointRequest message, length delimited. Does not implicitly {@link api.DebugUpdateBreakpointRequest.verify|verify} messages.
         * @param message DebugUpdateBreakpointRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugUpdateBreakpointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugUpdateBreakpointRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugUpdateBreakpointRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugUpdateBreakpointRequest;

        /**
         * Decodes a DebugUpdateBreakpointRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugUpdateBreakpointRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugUpdateBreakpointRequest;

        /**
         * Verifies a DebugUpdateBreakpointRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugUpdateBreakpointRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugUpdateBreakpointRequest
         */
        public static fromObject(object: { [k: string]: any }): api.DebugUpdateBreakpointRequest;

        /**
         * Creates a plain object from a DebugUpdateBreakpointRequest message. Also converts values to other types if specified.
         * @param message DebugUpdateBreakpointRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugUpdateBreakpointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugUpdateBreakpointRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugRemoveBreakpointRequest. */
    interface IDebugRemoveBreakpointRequest {

        /** DebugRemoveBreakpointRequest breakpointId */
        breakpointId?: (string|null);
    }

    /** Represents a DebugRemoveBreakpointRequest. */
    class DebugRemoveBreakpointRequest {

        /**
         * Constructs a new DebugRemoveBreakpointRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugRemoveBreakpointRequest);

        /** DebugRemoveBreakpointRequest breakpointId. */
        public breakpointId: string;

        /**
         * Creates a new DebugRemoveBreakpointRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugRemoveBreakpointRequest instance
         */
        public static create(properties?: api.IDebugRemoveBreakpointRequest): api.DebugRemoveBreakpointRequest;

        /**
         * Encodes the specified DebugRemoveBreakpointRequest message. Does not implicitly {@link api.DebugRemoveBreakpointRequest.verify|verify} messages.
         * @param message DebugRemoveBreakpointRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugRemoveBreakpointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugRemoveBreakpointRequest message, length delimited. Does not implicitly {@link api.DebugRemoveBreakpointRequest.verify|verify} messages.
         * @param message DebugRemoveBreakpointRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugRemoveBreakpointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugRemoveBreakpointRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugRemoveBreakpointRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugRemoveBreakpointRequest;

        /**
         * Decodes a DebugRemoveBreakpointRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugRemoveBreakpointRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugRemoveBreakpointRequest;

        /**
         * Verifies a DebugRemoveBreakpointRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugRemoveBreakpointRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugRemoveBreakpointRequest
         */
        public static fromObject(object: { [k: string]: any }): api.DebugRemoveBreakpointRequest;

        /**
         * Creates a plain object from a DebugRemoveBreakpointRequest message. Also converts values to other types if specified.
         * @param message DebugRemoveBreakpointRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugRemoveBreakpointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugRemoveBreakpointRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugBreakpointEvent. */
    interface IDebugBreakpointEvent {

        /** DebugBreakpointEvent path */
        path?: (string|null);

        /** DebugBreakpointEvent absolutePath */
        absolutePath?: (string|null);

        /** DebugBreakpointEvent breakpoints */
        breakpoints?: ((api.DebugBreakpoint|api.IDebugBreakpoint)[]|null);
    }

    /** Represents a DebugBreakpointEvent. */
    class DebugBreakpointEvent {

        /**
         * Constructs a new DebugBreakpointEvent.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugBreakpointEvent);

        /** DebugBreakpointEvent path. */
        public path: string;

        /** DebugBreakpointEvent absolutePath. */
        public absolutePath: string;

        /** DebugBreakpointEvent breakpoints. */
        public breakpoints: api.DebugBreakpoint[];

        /**
         * Creates a new DebugBreakpointEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugBreakpointEvent instance
         */
        public static create(properties?: api.IDebugBreakpointEvent): api.DebugBreakpointEvent;

        /**
         * Encodes the specified DebugBreakpointEvent message. Does not implicitly {@link api.DebugBreakpointEvent.verify|verify} messages.
         * @param message DebugBreakpointEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugBreakpointEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugBreakpointEvent message, length delimited. Does not implicitly {@link api.DebugBreakpointEvent.verify|verify} messages.
         * @param message DebugBreakpointEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugBreakpointEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugBreakpointEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugBreakpointEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugBreakpointEvent;

        /**
         * Decodes a DebugBreakpointEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugBreakpointEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugBreakpointEvent;

        /**
         * Verifies a DebugBreakpointEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugBreakpointEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugBreakpointEvent
         */
        public static fromObject(object: { [k: string]: any }): api.DebugBreakpointEvent;

        /**
         * Creates a plain object from a DebugBreakpointEvent message. Also converts values to other types if specified.
         * @param message DebugBreakpointEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugBreakpointEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugBreakpointEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugBreakpoint. */
    interface IDebugBreakpoint {

        /** DebugBreakpoint breakpointId */
        breakpointId?: (string|null);

        /** DebugBreakpoint line */
        line?: (number|null);

        /** DebugBreakpoint otVersion */
        otVersion?: (number|null);

        /** DebugBreakpoint otIndex */
        otIndex?: (number|null);

        /** DebugBreakpoint sessionLocal */
        sessionLocal?: (boolean|null);

        /** DebugBreakpoint logMessage */
        logMessage?: (string|null);
    }

    /** Represents a DebugBreakpoint. */
    class DebugBreakpoint {

        /**
         * Constructs a new DebugBreakpoint.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebugBreakpoint);

        /** DebugBreakpoint breakpointId. */
        public breakpointId: string;

        /** DebugBreakpoint line. */
        public line: number;

        /** DebugBreakpoint otVersion. */
        public otVersion: number;

        /** DebugBreakpoint otIndex. */
        public otIndex: number;

        /** DebugBreakpoint sessionLocal. */
        public sessionLocal: boolean;

        /** DebugBreakpoint logMessage. */
        public logMessage: string;

        /**
         * Creates a new DebugBreakpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugBreakpoint instance
         */
        public static create(properties?: api.IDebugBreakpoint): api.DebugBreakpoint;

        /**
         * Encodes the specified DebugBreakpoint message. Does not implicitly {@link api.DebugBreakpoint.verify|verify} messages.
         * @param message DebugBreakpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebugBreakpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugBreakpoint message, length delimited. Does not implicitly {@link api.DebugBreakpoint.verify|verify} messages.
         * @param message DebugBreakpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebugBreakpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugBreakpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugBreakpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebugBreakpoint;

        /**
         * Decodes a DebugBreakpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugBreakpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebugBreakpoint;

        /**
         * Verifies a DebugBreakpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugBreakpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugBreakpoint
         */
        public static fromObject(object: { [k: string]: any }): api.DebugBreakpoint;

        /**
         * Creates a plain object from a DebugBreakpoint message. Also converts values to other types if specified.
         * @param message DebugBreakpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebugBreakpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugBreakpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DotReplit. */
    interface IDotReplit {

        /** DotReplit run */
        run?: (api.Exec|api.IExec|null);

        /** DotReplit compile */
        compile?: (api.Exec|api.IExec|null);

        /** DotReplit debugger */
        "debugger"?: (api.DebuggerConfig|api.IDebuggerConfig|null);

        /** DotReplit language */
        language?: (string|null);

        /** DotReplit onBoot */
        onBoot?: (api.Exec|api.IExec|null);

        /** DotReplit packager */
        packager?: (api.DotReplitPackager|api.IDotReplitPackager|null);

        /** DotReplit interpreter */
        interpreter?: (api.DotReplitInterp|api.IDotReplitInterp|null);

        /** DotReplit entrypoint */
        entrypoint?: (string|null);
    }

    /** Represents a DotReplit. */
    class DotReplit {

        /**
         * Constructs a new DotReplit.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDotReplit);

        /** DotReplit run. */
        public run?: (api.Exec|null);

        /** DotReplit compile. */
        public compile?: (api.Exec|null);

        /** DotReplit debugger. */
        public debugger?: (api.DebuggerConfig|null);

        /** DotReplit language. */
        public language: string;

        /** DotReplit onBoot. */
        public onBoot?: (api.Exec|null);

        /** DotReplit packager. */
        public packager?: (api.DotReplitPackager|null);

        /** DotReplit interpreter. */
        public interpreter?: (api.DotReplitInterp|null);

        /** DotReplit entrypoint. */
        public entrypoint: string;

        /**
         * Creates a new DotReplit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DotReplit instance
         */
        public static create(properties?: api.IDotReplit): api.DotReplit;

        /**
         * Encodes the specified DotReplit message. Does not implicitly {@link api.DotReplit.verify|verify} messages.
         * @param message DotReplit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DotReplit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DotReplit message, length delimited. Does not implicitly {@link api.DotReplit.verify|verify} messages.
         * @param message DotReplit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DotReplit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DotReplit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DotReplit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DotReplit;

        /**
         * Decodes a DotReplit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DotReplit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DotReplit;

        /**
         * Verifies a DotReplit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DotReplit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DotReplit
         */
        public static fromObject(object: { [k: string]: any }): api.DotReplit;

        /**
         * Creates a plain object from a DotReplit message. Also converts values to other types if specified.
         * @param message DotReplit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DotReplit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DotReplit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DotReplitInterp. */
    interface IDotReplitInterp {

        /** DotReplitInterp command */
        command?: (api.Exec|api.IExec|null);

        /** DotReplitInterp prompt */
        prompt?: (Uint8Array|null);
    }

    /** Represents a DotReplitInterp. */
    class DotReplitInterp {

        /**
         * Constructs a new DotReplitInterp.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDotReplitInterp);

        /** DotReplitInterp command. */
        public command?: (api.Exec|null);

        /** DotReplitInterp prompt. */
        public prompt: Uint8Array;

        /**
         * Creates a new DotReplitInterp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DotReplitInterp instance
         */
        public static create(properties?: api.IDotReplitInterp): api.DotReplitInterp;

        /**
         * Encodes the specified DotReplitInterp message. Does not implicitly {@link api.DotReplitInterp.verify|verify} messages.
         * @param message DotReplitInterp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DotReplitInterp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DotReplitInterp message, length delimited. Does not implicitly {@link api.DotReplitInterp.verify|verify} messages.
         * @param message DotReplitInterp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DotReplitInterp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DotReplitInterp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DotReplitInterp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DotReplitInterp;

        /**
         * Decodes a DotReplitInterp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DotReplitInterp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DotReplitInterp;

        /**
         * Verifies a DotReplitInterp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DotReplitInterp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DotReplitInterp
         */
        public static fromObject(object: { [k: string]: any }): api.DotReplitInterp;

        /**
         * Creates a plain object from a DotReplitInterp message. Also converts values to other types if specified.
         * @param message DotReplitInterp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DotReplitInterp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DotReplitInterp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DotReplitPackager. */
    interface IDotReplitPackager {

        /** DotReplitPackager afterInstall */
        afterInstall?: (api.Exec|api.IExec|null);

        /** DotReplitPackager language */
        language?: (string|null);

        /** DotReplitPackager features */
        features?: (api.DotReplitPackagerFeatures|api.IDotReplitPackagerFeatures|null);

        /** DotReplitPackager env */
        env?: ({ [k: string]: string }|null);

        /** DotReplitPackager ignoredPaths */
        ignoredPaths?: (string[]|null);

        /** DotReplitPackager ignoredPackages */
        ignoredPackages?: (string[]|null);
    }

    /** Represents a DotReplitPackager. */
    class DotReplitPackager {

        /**
         * Constructs a new DotReplitPackager.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDotReplitPackager);

        /** DotReplitPackager afterInstall. */
        public afterInstall?: (api.Exec|null);

        /** DotReplitPackager language. */
        public language: string;

        /** DotReplitPackager features. */
        public features?: (api.DotReplitPackagerFeatures|null);

        /** DotReplitPackager env. */
        public env: { [k: string]: string };

        /** DotReplitPackager ignoredPaths. */
        public ignoredPaths: string[];

        /** DotReplitPackager ignoredPackages. */
        public ignoredPackages: string[];

        /**
         * Creates a new DotReplitPackager instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DotReplitPackager instance
         */
        public static create(properties?: api.IDotReplitPackager): api.DotReplitPackager;

        /**
         * Encodes the specified DotReplitPackager message. Does not implicitly {@link api.DotReplitPackager.verify|verify} messages.
         * @param message DotReplitPackager message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DotReplitPackager, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DotReplitPackager message, length delimited. Does not implicitly {@link api.DotReplitPackager.verify|verify} messages.
         * @param message DotReplitPackager message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DotReplitPackager, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DotReplitPackager message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DotReplitPackager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DotReplitPackager;

        /**
         * Decodes a DotReplitPackager message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DotReplitPackager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DotReplitPackager;

        /**
         * Verifies a DotReplitPackager message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DotReplitPackager message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DotReplitPackager
         */
        public static fromObject(object: { [k: string]: any }): api.DotReplitPackager;

        /**
         * Creates a plain object from a DotReplitPackager message. Also converts values to other types if specified.
         * @param message DotReplitPackager
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DotReplitPackager, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DotReplitPackager to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DotReplitPackagerFeatures. */
    interface IDotReplitPackagerFeatures {

        /** DotReplitPackagerFeatures packageSearch */
        packageSearch?: (boolean|null);

        /** DotReplitPackagerFeatures guessImports */
        guessImports?: (boolean|null);
    }

    /** Represents a DotReplitPackagerFeatures. */
    class DotReplitPackagerFeatures {

        /**
         * Constructs a new DotReplitPackagerFeatures.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDotReplitPackagerFeatures);

        /** DotReplitPackagerFeatures packageSearch. */
        public packageSearch: boolean;

        /** DotReplitPackagerFeatures guessImports. */
        public guessImports: boolean;

        /**
         * Creates a new DotReplitPackagerFeatures instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DotReplitPackagerFeatures instance
         */
        public static create(properties?: api.IDotReplitPackagerFeatures): api.DotReplitPackagerFeatures;

        /**
         * Encodes the specified DotReplitPackagerFeatures message. Does not implicitly {@link api.DotReplitPackagerFeatures.verify|verify} messages.
         * @param message DotReplitPackagerFeatures message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DotReplitPackagerFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DotReplitPackagerFeatures message, length delimited. Does not implicitly {@link api.DotReplitPackagerFeatures.verify|verify} messages.
         * @param message DotReplitPackagerFeatures message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DotReplitPackagerFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DotReplitPackagerFeatures message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DotReplitPackagerFeatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DotReplitPackagerFeatures;

        /**
         * Decodes a DotReplitPackagerFeatures message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DotReplitPackagerFeatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DotReplitPackagerFeatures;

        /**
         * Verifies a DotReplitPackagerFeatures message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DotReplitPackagerFeatures message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DotReplitPackagerFeatures
         */
        public static fromObject(object: { [k: string]: any }): api.DotReplitPackagerFeatures;

        /**
         * Creates a plain object from a DotReplitPackagerFeatures message. Also converts values to other types if specified.
         * @param message DotReplitPackagerFeatures
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DotReplitPackagerFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DotReplitPackagerFeatures to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebuggerConfig. */
    interface IDebuggerConfig {

        /** DebuggerConfig support */
        support?: (boolean|null);
    }

    /** Represents a DebuggerConfig. */
    class DebuggerConfig {

        /**
         * Constructs a new DebuggerConfig.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IDebuggerConfig);

        /** DebuggerConfig support. */
        public support: boolean;

        /**
         * Creates a new DebuggerConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebuggerConfig instance
         */
        public static create(properties?: api.IDebuggerConfig): api.DebuggerConfig;

        /**
         * Encodes the specified DebuggerConfig message. Does not implicitly {@link api.DebuggerConfig.verify|verify} messages.
         * @param message DebuggerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.DebuggerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebuggerConfig message, length delimited. Does not implicitly {@link api.DebuggerConfig.verify|verify} messages.
         * @param message DebuggerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.DebuggerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebuggerConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebuggerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DebuggerConfig;

        /**
         * Decodes a DebuggerConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebuggerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DebuggerConfig;

        /**
         * Verifies a DebuggerConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebuggerConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebuggerConfig
         */
        public static fromObject(object: { [k: string]: any }): api.DebuggerConfig;

        /**
         * Creates a plain object from a DebuggerConfig message. Also converts values to other types if specified.
         * @param message DebuggerConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DebuggerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebuggerConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Repl. */
    interface IRepl {

        /** Repl id */
        id?: (string|null);

        /** Repl language */
        language?: (string|null);

        /** Repl bucket */
        bucket?: (string|null);

        /** Repl slug */
        slug?: (string|null);

        /** Repl user */
        user?: (string|null);

        /** Repl sourceRepl */
        sourceRepl?: (string|null);
    }

    /** Represents a Repl. */
    class Repl {

        /**
         * Constructs a new Repl.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IRepl);

        /** Repl id. */
        public id: string;

        /** Repl language. */
        public language: string;

        /** Repl bucket. */
        public bucket: string;

        /** Repl slug. */
        public slug: string;

        /** Repl user. */
        public user: string;

        /** Repl sourceRepl. */
        public sourceRepl: string;

        /**
         * Creates a new Repl instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Repl instance
         */
        public static create(properties?: api.IRepl): api.Repl;

        /**
         * Encodes the specified Repl message. Does not implicitly {@link api.Repl.verify|verify} messages.
         * @param message Repl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Repl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Repl message, length delimited. Does not implicitly {@link api.Repl.verify|verify} messages.
         * @param message Repl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Repl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Repl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Repl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Repl;

        /**
         * Decodes a Repl message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Repl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Repl;

        /**
         * Verifies a Repl message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Repl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Repl
         */
        public static fromObject(object: { [k: string]: any }): api.Repl;

        /**
         * Creates a plain object from a Repl message. Also converts values to other types if specified.
         * @param message Repl
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Repl, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Repl to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResourceLimits. */
    interface IResourceLimits {

        /** ResourceLimits net */
        net?: (boolean|null);

        /** ResourceLimits memory */
        memory?: (number|null);

        /** ResourceLimits threads */
        threads?: (number|null);

        /** ResourceLimits shares */
        shares?: (number|null);

        /** ResourceLimits disk */
        disk?: (number|null);

        /** ResourceLimits cache */
        cache?: (api.ResourceLimits.Cachability|null);
    }

    /** Represents a ResourceLimits. */
    class ResourceLimits {

        /**
         * Constructs a new ResourceLimits.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IResourceLimits);

        /** ResourceLimits net. */
        public net: boolean;

        /** ResourceLimits memory. */
        public memory: number;

        /** ResourceLimits threads. */
        public threads: number;

        /** ResourceLimits shares. */
        public shares: number;

        /** ResourceLimits disk. */
        public disk: number;

        /** ResourceLimits cache. */
        public cache: api.ResourceLimits.Cachability;

        /**
         * Creates a new ResourceLimits instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResourceLimits instance
         */
        public static create(properties?: api.IResourceLimits): api.ResourceLimits;

        /**
         * Encodes the specified ResourceLimits message. Does not implicitly {@link api.ResourceLimits.verify|verify} messages.
         * @param message ResourceLimits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ResourceLimits, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResourceLimits message, length delimited. Does not implicitly {@link api.ResourceLimits.verify|verify} messages.
         * @param message ResourceLimits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ResourceLimits, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResourceLimits message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResourceLimits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ResourceLimits;

        /**
         * Decodes a ResourceLimits message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResourceLimits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ResourceLimits;

        /**
         * Verifies a ResourceLimits message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResourceLimits message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResourceLimits
         */
        public static fromObject(object: { [k: string]: any }): api.ResourceLimits;

        /**
         * Creates a plain object from a ResourceLimits message. Also converts values to other types if specified.
         * @param message ResourceLimits
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ResourceLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResourceLimits to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ResourceLimits {

        /** Cachability enum. */
        enum Cachability {
            NONE = 0,
            USER = 1,
            REPL = 2
        }
    }

    /** Properties of a Permissions. */
    interface IPermissions {

        /** Permissions toggleAlwaysOn */
        toggleAlwaysOn?: (boolean|null);
    }

    /** Represents a Permissions. */
    class Permissions {

        /**
         * Constructs a new Permissions.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IPermissions);

        /** Permissions toggleAlwaysOn. */
        public toggleAlwaysOn: boolean;

        /**
         * Creates a new Permissions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Permissions instance
         */
        public static create(properties?: api.IPermissions): api.Permissions;

        /**
         * Encodes the specified Permissions message. Does not implicitly {@link api.Permissions.verify|verify} messages.
         * @param message Permissions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.Permissions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Permissions message, length delimited. Does not implicitly {@link api.Permissions.verify|verify} messages.
         * @param message Permissions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.Permissions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Permissions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Permissions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Permissions;

        /**
         * Decodes a Permissions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Permissions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Permissions;

        /**
         * Verifies a Permissions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Permissions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Permissions
         */
        public static fromObject(object: { [k: string]: any }): api.Permissions;

        /**
         * Creates a plain object from a Permissions message. Also converts values to other types if specified.
         * @param message Permissions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Permissions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Permissions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReplToken. */
    interface IReplToken {

        /** ReplToken iat */
        iat?: (google.protobuf.Timestamp|google.protobuf.ITimestamp|null);

        /** ReplToken exp */
        exp?: (google.protobuf.Timestamp|google.protobuf.ITimestamp|null);

        /** ReplToken salt */
        salt?: (string|null);

        /** ReplToken cluster */
        cluster?: (string|null);

        /** ReplToken persistence */
        persistence?: (api.ReplToken.Persistence|null);

        /** ReplToken repl */
        repl?: (api.Repl|api.IRepl|null);

        /** ReplToken id */
        id?: (api.ReplToken.ReplID|api.ReplToken.IReplID|null);

        /** ReplToken classroom */
        classroom?: (api.ReplToken.ClassroomMetadata|api.ReplToken.IClassroomMetadata|null);

        /** ReplToken resourceLimits */
        resourceLimits?: (api.ResourceLimits|api.IResourceLimits|null);

        /** ReplToken format */
        format?: (api.ReplToken.WireFormat|null);

        /** ReplToken presenced */
        presenced?: (api.ReplToken.Presenced|api.ReplToken.IPresenced|null);

        /** ReplToken flags */
        flags?: (string[]|null);

        /** ReplToken permissions */
        permissions?: (api.Permissions|api.IPermissions|null);
    }

    /** Represents a ReplToken. */
    class ReplToken {

        /**
         * Constructs a new ReplToken.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IReplToken);

        /** ReplToken iat. */
        public iat?: (google.protobuf.Timestamp|null);

        /** ReplToken exp. */
        public exp?: (google.protobuf.Timestamp|null);

        /** ReplToken salt. */
        public salt: string;

        /** ReplToken cluster. */
        public cluster: string;

        /** ReplToken persistence. */
        public persistence: api.ReplToken.Persistence;

        /** ReplToken repl. */
        public repl?: (api.Repl|null);

        /** ReplToken id. */
        public id?: (api.ReplToken.ReplID|null);

        /** ReplToken classroom. */
        public classroom?: (api.ReplToken.ClassroomMetadata|null);

        /** ReplToken resourceLimits. */
        public resourceLimits?: (api.ResourceLimits|null);

        /** ReplToken format. */
        public format: api.ReplToken.WireFormat;

        /** ReplToken presenced. */
        public presenced?: (api.ReplToken.Presenced|null);

        /** ReplToken flags. */
        public flags: string[];

        /** ReplToken permissions. */
        public permissions?: (api.Permissions|null);

        /** ReplToken metadata. */
        public metadata?: ("repl"|"id"|"classroom");

        /**
         * Creates a new ReplToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplToken instance
         */
        public static create(properties?: api.IReplToken): api.ReplToken;

        /**
         * Encodes the specified ReplToken message. Does not implicitly {@link api.ReplToken.verify|verify} messages.
         * @param message ReplToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ReplToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplToken message, length delimited. Does not implicitly {@link api.ReplToken.verify|verify} messages.
         * @param message ReplToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ReplToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ReplToken;

        /**
         * Decodes a ReplToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ReplToken;

        /**
         * Verifies a ReplToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplToken
         */
        public static fromObject(object: { [k: string]: any }): api.ReplToken;

        /**
         * Creates a plain object from a ReplToken message. Also converts values to other types if specified.
         * @param message ReplToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ReplToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ReplToken {

        /** Persistence enum. */
        enum Persistence {
            PERSISTENT = 0,
            EPHEMERAL = 1,
            NONE = 2
        }

        /** Properties of a ClassroomMetadata. */
        interface IClassroomMetadata {

            /** ClassroomMetadata id */
            id?: (string|null);

            /** ClassroomMetadata language */
            language?: (string|null);
        }

        /** Represents a ClassroomMetadata. */
        class ClassroomMetadata {

            /**
             * Constructs a new ClassroomMetadata.
             * @param [properties] Properties to set
             */
            private constructor(properties?: api.ReplToken.IClassroomMetadata);

            /** ClassroomMetadata id. */
            public id: string;

            /** ClassroomMetadata language. */
            public language: string;

            /**
             * Creates a new ClassroomMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClassroomMetadata instance
             */
            public static create(properties?: api.ReplToken.IClassroomMetadata): api.ReplToken.ClassroomMetadata;

            /**
             * Encodes the specified ClassroomMetadata message. Does not implicitly {@link api.ReplToken.ClassroomMetadata.verify|verify} messages.
             * @param message ClassroomMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.ReplToken.ClassroomMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClassroomMetadata message, length delimited. Does not implicitly {@link api.ReplToken.ClassroomMetadata.verify|verify} messages.
             * @param message ClassroomMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.ReplToken.ClassroomMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClassroomMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClassroomMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ReplToken.ClassroomMetadata;

            /**
             * Decodes a ClassroomMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClassroomMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ReplToken.ClassroomMetadata;

            /**
             * Verifies a ClassroomMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClassroomMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClassroomMetadata
             */
            public static fromObject(object: { [k: string]: any }): api.ReplToken.ClassroomMetadata;

            /**
             * Creates a plain object from a ClassroomMetadata message. Also converts values to other types if specified.
             * @param message ClassroomMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.ReplToken.ClassroomMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClassroomMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReplID. */
        interface IReplID {

            /** ReplID id */
            id?: (string|null);

            /** ReplID sourceRepl */
            sourceRepl?: (string|null);
        }

        /** Represents a ReplID. */
        class ReplID {

            /**
             * Constructs a new ReplID.
             * @param [properties] Properties to set
             */
            private constructor(properties?: api.ReplToken.IReplID);

            /** ReplID id. */
            public id: string;

            /** ReplID sourceRepl. */
            public sourceRepl: string;

            /**
             * Creates a new ReplID instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReplID instance
             */
            public static create(properties?: api.ReplToken.IReplID): api.ReplToken.ReplID;

            /**
             * Encodes the specified ReplID message. Does not implicitly {@link api.ReplToken.ReplID.verify|verify} messages.
             * @param message ReplID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.ReplToken.ReplID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReplID message, length delimited. Does not implicitly {@link api.ReplToken.ReplID.verify|verify} messages.
             * @param message ReplID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.ReplToken.ReplID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReplID message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReplID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ReplToken.ReplID;

            /**
             * Decodes a ReplID message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReplID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ReplToken.ReplID;

            /**
             * Verifies a ReplID message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReplID message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReplID
             */
            public static fromObject(object: { [k: string]: any }): api.ReplToken.ReplID;

            /**
             * Creates a plain object from a ReplID message. Also converts values to other types if specified.
             * @param message ReplID
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.ReplToken.ReplID, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReplID to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** WireFormat enum. */
        enum WireFormat {
            PROTOBUF = 0,
            JSON = 1
        }

        /** Properties of a Presenced. */
        interface IPresenced {

            /** Presenced bearerID */
            bearerID?: (number|null);

            /** Presenced bearerName */
            bearerName?: (string|null);
        }

        /** Represents a Presenced. */
        class Presenced {

            /**
             * Constructs a new Presenced.
             * @param [properties] Properties to set
             */
            private constructor(properties?: api.ReplToken.IPresenced);

            /** Presenced bearerID. */
            public bearerID: number;

            /** Presenced bearerName. */
            public bearerName: string;

            /**
             * Creates a new Presenced instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Presenced instance
             */
            public static create(properties?: api.ReplToken.IPresenced): api.ReplToken.Presenced;

            /**
             * Encodes the specified Presenced message. Does not implicitly {@link api.ReplToken.Presenced.verify|verify} messages.
             * @param message Presenced message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.ReplToken.Presenced, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Presenced message, length delimited. Does not implicitly {@link api.ReplToken.Presenced.verify|verify} messages.
             * @param message Presenced message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.ReplToken.Presenced, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Presenced message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Presenced
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ReplToken.Presenced;

            /**
             * Decodes a Presenced message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Presenced
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ReplToken.Presenced;

            /**
             * Verifies a Presenced message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Presenced message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Presenced
             */
            public static fromObject(object: { [k: string]: any }): api.ReplToken.Presenced;

            /**
             * Creates a plain object from a Presenced message. Also converts values to other types if specified.
             * @param message Presenced
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.ReplToken.Presenced, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Presenced to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a TLSCertificate. */
    interface ITLSCertificate {

        /** TLSCertificate domain */
        domain?: (string|null);

        /** TLSCertificate cert */
        cert?: (Uint8Array|null);
    }

    /** Represents a TLSCertificate. */
    class TLSCertificate {

        /**
         * Constructs a new TLSCertificate.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ITLSCertificate);

        /** TLSCertificate domain. */
        public domain: string;

        /** TLSCertificate cert. */
        public cert: Uint8Array;

        /**
         * Creates a new TLSCertificate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TLSCertificate instance
         */
        public static create(properties?: api.ITLSCertificate): api.TLSCertificate;

        /**
         * Encodes the specified TLSCertificate message. Does not implicitly {@link api.TLSCertificate.verify|verify} messages.
         * @param message TLSCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.TLSCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TLSCertificate message, length delimited. Does not implicitly {@link api.TLSCertificate.verify|verify} messages.
         * @param message TLSCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.TLSCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TLSCertificate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TLSCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.TLSCertificate;

        /**
         * Decodes a TLSCertificate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TLSCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.TLSCertificate;

        /**
         * Verifies a TLSCertificate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TLSCertificate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TLSCertificate
         */
        public static fromObject(object: { [k: string]: any }): api.TLSCertificate;

        /**
         * Creates a plain object from a TLSCertificate message. Also converts values to other types if specified.
         * @param message TLSCertificate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.TLSCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TLSCertificate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReplTransfer. */
    interface IReplTransfer {

        /** ReplTransfer repl */
        repl?: (api.Repl|api.IRepl|null);

        /** ReplTransfer replLimits */
        replLimits?: (api.ResourceLimits|api.IResourceLimits|null);

        /** ReplTransfer userLimits */
        userLimits?: (api.ResourceLimits|api.IResourceLimits|null);

        /** ReplTransfer customDomains */
        customDomains?: (string[]|null);

        /** ReplTransfer certificates */
        certificates?: ((api.TLSCertificate|api.ITLSCertificate)[]|null);
    }

    /** Represents a ReplTransfer. */
    class ReplTransfer {

        /**
         * Constructs a new ReplTransfer.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IReplTransfer);

        /** ReplTransfer repl. */
        public repl?: (api.Repl|null);

        /** ReplTransfer replLimits. */
        public replLimits?: (api.ResourceLimits|null);

        /** ReplTransfer userLimits. */
        public userLimits?: (api.ResourceLimits|null);

        /** ReplTransfer customDomains. */
        public customDomains: string[];

        /** ReplTransfer certificates. */
        public certificates: api.TLSCertificate[];

        /**
         * Creates a new ReplTransfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplTransfer instance
         */
        public static create(properties?: api.IReplTransfer): api.ReplTransfer;

        /**
         * Encodes the specified ReplTransfer message. Does not implicitly {@link api.ReplTransfer.verify|verify} messages.
         * @param message ReplTransfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ReplTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplTransfer message, length delimited. Does not implicitly {@link api.ReplTransfer.verify|verify} messages.
         * @param message ReplTransfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ReplTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplTransfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ReplTransfer;

        /**
         * Decodes a ReplTransfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ReplTransfer;

        /**
         * Verifies a ReplTransfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplTransfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplTransfer
         */
        public static fromObject(object: { [k: string]: any }): api.ReplTransfer;

        /**
         * Creates a plain object from a ReplTransfer message. Also converts values to other types if specified.
         * @param message ReplTransfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ReplTransfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplTransfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AllowReplRequest. */
    interface IAllowReplRequest {

        /** AllowReplRequest replTransfer */
        replTransfer?: (api.ReplTransfer|api.IReplTransfer|null);
    }

    /** Represents an AllowReplRequest. */
    class AllowReplRequest {

        /**
         * Constructs a new AllowReplRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IAllowReplRequest);

        /** AllowReplRequest replTransfer. */
        public replTransfer?: (api.ReplTransfer|null);

        /**
         * Creates a new AllowReplRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllowReplRequest instance
         */
        public static create(properties?: api.IAllowReplRequest): api.AllowReplRequest;

        /**
         * Encodes the specified AllowReplRequest message. Does not implicitly {@link api.AllowReplRequest.verify|verify} messages.
         * @param message AllowReplRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.AllowReplRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AllowReplRequest message, length delimited. Does not implicitly {@link api.AllowReplRequest.verify|verify} messages.
         * @param message AllowReplRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.AllowReplRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllowReplRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllowReplRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.AllowReplRequest;

        /**
         * Decodes an AllowReplRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllowReplRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.AllowReplRequest;

        /**
         * Verifies an AllowReplRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AllowReplRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AllowReplRequest
         */
        public static fromObject(object: { [k: string]: any }): api.AllowReplRequest;

        /**
         * Creates a plain object from an AllowReplRequest message. Also converts values to other types if specified.
         * @param message AllowReplRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.AllowReplRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AllowReplRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClusterMetadata. */
    interface IClusterMetadata {

        /** ClusterMetadata id */
        id?: (string|null);

        /** ClusterMetadata conmanURL */
        conmanURL?: (string|null);

        /** ClusterMetadata gurl */
        gurl?: (string|null);

        /** ClusterMetadata proxyHost */
        proxyHost?: (string|null);

        /** ClusterMetadata proxy */
        proxy?: (string|null);

        /** ClusterMetadata proxyIP */
        proxyIP?: (string|null);
    }

    /** Represents a ClusterMetadata. */
    class ClusterMetadata {

        /**
         * Constructs a new ClusterMetadata.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IClusterMetadata);

        /** ClusterMetadata id. */
        public id: string;

        /** ClusterMetadata conmanURL. */
        public conmanURL: string;

        /** ClusterMetadata gurl. */
        public gurl: string;

        /** ClusterMetadata proxyHost. */
        public proxyHost: string;

        /** ClusterMetadata proxy. */
        public proxy: string;

        /** ClusterMetadata proxyIP. */
        public proxyIP: string;

        /**
         * Creates a new ClusterMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClusterMetadata instance
         */
        public static create(properties?: api.IClusterMetadata): api.ClusterMetadata;

        /**
         * Encodes the specified ClusterMetadata message. Does not implicitly {@link api.ClusterMetadata.verify|verify} messages.
         * @param message ClusterMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ClusterMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClusterMetadata message, length delimited. Does not implicitly {@link api.ClusterMetadata.verify|verify} messages.
         * @param message ClusterMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ClusterMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClusterMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClusterMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ClusterMetadata;

        /**
         * Decodes a ClusterMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClusterMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ClusterMetadata;

        /**
         * Verifies a ClusterMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClusterMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClusterMetadata
         */
        public static fromObject(object: { [k: string]: any }): api.ClusterMetadata;

        /**
         * Creates a plain object from a ClusterMetadata message. Also converts values to other types if specified.
         * @param message ClusterMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ClusterMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClusterMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EvictReplRequest. */
    interface IEvictReplRequest {

        /** EvictReplRequest clusterMetadata */
        clusterMetadata?: (api.ClusterMetadata|api.IClusterMetadata|null);

        /** EvictReplRequest token */
        token?: (string|null);

        /** EvictReplRequest user */
        user?: (string|null);

        /** EvictReplRequest slug */
        slug?: (string|null);
    }

    /** Represents an EvictReplRequest. */
    class EvictReplRequest {

        /**
         * Constructs a new EvictReplRequest.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IEvictReplRequest);

        /** EvictReplRequest clusterMetadata. */
        public clusterMetadata?: (api.ClusterMetadata|null);

        /** EvictReplRequest token. */
        public token: string;

        /** EvictReplRequest user. */
        public user: string;

        /** EvictReplRequest slug. */
        public slug: string;

        /**
         * Creates a new EvictReplRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EvictReplRequest instance
         */
        public static create(properties?: api.IEvictReplRequest): api.EvictReplRequest;

        /**
         * Encodes the specified EvictReplRequest message. Does not implicitly {@link api.EvictReplRequest.verify|verify} messages.
         * @param message EvictReplRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.EvictReplRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EvictReplRequest message, length delimited. Does not implicitly {@link api.EvictReplRequest.verify|verify} messages.
         * @param message EvictReplRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.EvictReplRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EvictReplRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EvictReplRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.EvictReplRequest;

        /**
         * Decodes an EvictReplRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EvictReplRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.EvictReplRequest;

        /**
         * Verifies an EvictReplRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EvictReplRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EvictReplRequest
         */
        public static fromObject(object: { [k: string]: any }): api.EvictReplRequest;

        /**
         * Creates a plain object from an EvictReplRequest message. Also converts values to other types if specified.
         * @param message EvictReplRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.EvictReplRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EvictReplRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EvictReplResponse. */
    interface IEvictReplResponse {

        /** EvictReplResponse replTransfer */
        replTransfer?: (api.ReplTransfer|api.IReplTransfer|null);
    }

    /** Represents an EvictReplResponse. */
    class EvictReplResponse {

        /**
         * Constructs a new EvictReplResponse.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IEvictReplResponse);

        /** EvictReplResponse replTransfer. */
        public replTransfer?: (api.ReplTransfer|null);

        /**
         * Creates a new EvictReplResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EvictReplResponse instance
         */
        public static create(properties?: api.IEvictReplResponse): api.EvictReplResponse;

        /**
         * Encodes the specified EvictReplResponse message. Does not implicitly {@link api.EvictReplResponse.verify|verify} messages.
         * @param message EvictReplResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.EvictReplResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EvictReplResponse message, length delimited. Does not implicitly {@link api.EvictReplResponse.verify|verify} messages.
         * @param message EvictReplResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.EvictReplResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EvictReplResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EvictReplResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.EvictReplResponse;

        /**
         * Decodes an EvictReplResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EvictReplResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.EvictReplResponse;

        /**
         * Verifies an EvictReplResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EvictReplResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EvictReplResponse
         */
        public static fromObject(object: { [k: string]: any }): api.EvictReplResponse;

        /**
         * Creates a plain object from an EvictReplResponse message. Also converts values to other types if specified.
         * @param message EvictReplResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.EvictReplResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EvictReplResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** TokenVersion enum. */
    enum TokenVersion {
        BARE_REPL_TOKEN = 0,
        TYPE_AWARE_TOKEN = 1
    }

    /** Properties of a GovalSigningAuthority. */
    interface IGovalSigningAuthority {

        /** GovalSigningAuthority keyId */
        keyId?: (string|null);

        /** GovalSigningAuthority signedCert */
        signedCert?: (string|null);

        /** GovalSigningAuthority version */
        version?: (api.TokenVersion|null);
    }

    /** Represents a GovalSigningAuthority. */
    class GovalSigningAuthority {

        /**
         * Constructs a new GovalSigningAuthority.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IGovalSigningAuthority);

        /** GovalSigningAuthority keyId. */
        public keyId: string;

        /** GovalSigningAuthority signedCert. */
        public signedCert: string;

        /** GovalSigningAuthority version. */
        public version: api.TokenVersion;

        /** GovalSigningAuthority cert. */
        public cert?: ("keyId"|"signedCert");

        /**
         * Creates a new GovalSigningAuthority instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GovalSigningAuthority instance
         */
        public static create(properties?: api.IGovalSigningAuthority): api.GovalSigningAuthority;

        /**
         * Encodes the specified GovalSigningAuthority message. Does not implicitly {@link api.GovalSigningAuthority.verify|verify} messages.
         * @param message GovalSigningAuthority message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.GovalSigningAuthority, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GovalSigningAuthority message, length delimited. Does not implicitly {@link api.GovalSigningAuthority.verify|verify} messages.
         * @param message GovalSigningAuthority message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.GovalSigningAuthority, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GovalSigningAuthority message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GovalSigningAuthority
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.GovalSigningAuthority;

        /**
         * Decodes a GovalSigningAuthority message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GovalSigningAuthority
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.GovalSigningAuthority;

        /**
         * Verifies a GovalSigningAuthority message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GovalSigningAuthority message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GovalSigningAuthority
         */
        public static fromObject(object: { [k: string]: any }): api.GovalSigningAuthority;

        /**
         * Creates a plain object from a GovalSigningAuthority message. Also converts values to other types if specified.
         * @param message GovalSigningAuthority
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.GovalSigningAuthority, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GovalSigningAuthority to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** FlagClaim enum. */
    enum FlagClaim {
        MINT_GOVAL_TOKEN = 0,
        SIGN_INTERMEDIATE_CERT = 1
    }

    /** Properties of a CertificateClaim. */
    interface ICertificateClaim {

        /** CertificateClaim replid */
        replid?: (string|null);

        /** CertificateClaim user */
        user?: (string|null);

        /** CertificateClaim flag */
        flag?: (api.FlagClaim|null);
    }

    /** Represents a CertificateClaim. */
    class CertificateClaim {

        /**
         * Constructs a new CertificateClaim.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.ICertificateClaim);

        /** CertificateClaim replid. */
        public replid: string;

        /** CertificateClaim user. */
        public user: string;

        /** CertificateClaim flag. */
        public flag: api.FlagClaim;

        /** CertificateClaim claim. */
        public claim?: ("replid"|"user"|"flag");

        /**
         * Creates a new CertificateClaim instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CertificateClaim instance
         */
        public static create(properties?: api.ICertificateClaim): api.CertificateClaim;

        /**
         * Encodes the specified CertificateClaim message. Does not implicitly {@link api.CertificateClaim.verify|verify} messages.
         * @param message CertificateClaim message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.CertificateClaim, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CertificateClaim message, length delimited. Does not implicitly {@link api.CertificateClaim.verify|verify} messages.
         * @param message CertificateClaim message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.CertificateClaim, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CertificateClaim message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CertificateClaim
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.CertificateClaim;

        /**
         * Decodes a CertificateClaim message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CertificateClaim
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.CertificateClaim;

        /**
         * Verifies a CertificateClaim message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CertificateClaim message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CertificateClaim
         */
        public static fromObject(object: { [k: string]: any }): api.CertificateClaim;

        /**
         * Creates a plain object from a CertificateClaim message. Also converts values to other types if specified.
         * @param message CertificateClaim
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.CertificateClaim, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CertificateClaim to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GovalCert. */
    interface IGovalCert {

        /** GovalCert iat */
        iat?: (google.protobuf.Timestamp|google.protobuf.ITimestamp|null);

        /** GovalCert exp */
        exp?: (google.protobuf.Timestamp|google.protobuf.ITimestamp|null);

        /** GovalCert claims */
        claims?: ((api.CertificateClaim|api.ICertificateClaim)[]|null);

        /** GovalCert publicKey */
        publicKey?: (string|null);
    }

    /** Represents a GovalCert. */
    class GovalCert {

        /**
         * Constructs a new GovalCert.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IGovalCert);

        /** GovalCert iat. */
        public iat?: (google.protobuf.Timestamp|null);

        /** GovalCert exp. */
        public exp?: (google.protobuf.Timestamp|null);

        /** GovalCert claims. */
        public claims: api.CertificateClaim[];

        /** GovalCert publicKey. */
        public publicKey: string;

        /**
         * Creates a new GovalCert instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GovalCert instance
         */
        public static create(properties?: api.IGovalCert): api.GovalCert;

        /**
         * Encodes the specified GovalCert message. Does not implicitly {@link api.GovalCert.verify|verify} messages.
         * @param message GovalCert message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.GovalCert, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GovalCert message, length delimited. Does not implicitly {@link api.GovalCert.verify|verify} messages.
         * @param message GovalCert message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.GovalCert, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GovalCert message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GovalCert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.GovalCert;

        /**
         * Decodes a GovalCert message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GovalCert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.GovalCert;

        /**
         * Verifies a GovalCert message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GovalCert message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GovalCert
         */
        public static fromObject(object: { [k: string]: any }): api.GovalCert;

        /**
         * Creates a plain object from a GovalCert message. Also converts values to other types if specified.
         * @param message GovalCert
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.GovalCert, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GovalCert to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GovalToken. */
    interface IGovalToken {

        /** GovalToken iat */
        iat?: (google.protobuf.Timestamp|google.protobuf.ITimestamp|null);

        /** GovalToken exp */
        exp?: (google.protobuf.Timestamp|google.protobuf.ITimestamp|null);

        /** GovalToken replid */
        replid?: (string|null);

        /** GovalToken replToken */
        replToken?: (api.ReplToken|api.IReplToken|null);
    }

    /** Represents a GovalToken. */
    class GovalToken {

        /**
         * Constructs a new GovalToken.
         * @param [properties] Properties to set
         */
        private constructor(properties?: api.IGovalToken);

        /** GovalToken iat. */
        public iat?: (google.protobuf.Timestamp|null);

        /** GovalToken exp. */
        public exp?: (google.protobuf.Timestamp|null);

        /** GovalToken replid. */
        public replid: string;

        /** GovalToken replToken. */
        public replToken?: (api.ReplToken|null);

        /** GovalToken Token. */
        public Token?: "replToken";

        /**
         * Creates a new GovalToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GovalToken instance
         */
        public static create(properties?: api.IGovalToken): api.GovalToken;

        /**
         * Encodes the specified GovalToken message. Does not implicitly {@link api.GovalToken.verify|verify} messages.
         * @param message GovalToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.GovalToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GovalToken message, length delimited. Does not implicitly {@link api.GovalToken.verify|verify} messages.
         * @param message GovalToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.GovalToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GovalToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GovalToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.GovalToken;

        /**
         * Decodes a GovalToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GovalToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.GovalToken;

        /**
         * Verifies a GovalToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GovalToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GovalToken
         */
        public static fromObject(object: { [k: string]: any }): api.GovalToken;

        /**
         * Creates a plain object from a GovalToken message. Also converts values to other types if specified.
         * @param message GovalToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.GovalToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GovalToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            private constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: number;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.Timestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.Timestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
