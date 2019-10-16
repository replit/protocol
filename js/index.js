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
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.replitproto = (function() {
    
        /**
         * Namespace replitproto.
         * @exports replitproto
         * @namespace
         */
        var replitproto = {};
    
        replitproto.Command = (function() {
    
            /**
             * Properties of a Command.
             * @memberof replitproto
             * @interface ICommand
             * @property {number|null} [channel] Command channel
             * @property {number|null} [session] Command session
             * @property {replitproto.IOpenChannel|null} [openChan] Command openChan
             * @property {replitproto.IOpenChannelRes|null} [openChanRes] Command openChanRes
             * @property {replitproto.ICloseChannel|null} [closeChan] Command closeChan
             * @property {replitproto.ICloseChannelRes|null} [closeChanRes] Command closeChanRes
             * @property {replitproto.IContainerState|null} [containerState] Command containerState
             * @property {replitproto.IPortOpen|null} [portOpen] Command portOpen
             * @property {replitproto.IToast|null} [toast] Command toast
             * @property {replitproto.IRunMain|null} [runMain] Command runMain
             * @property {replitproto.IClear|null} [clear] Command clear
             * @property {string|null} ["eval"] Command eval
             * @property {string|null} [result] Command result
             * @property {string|null} [input] Command input
             * @property {string|null} [output] Command output
             * @property {string|null} [error] Command error
             * @property {replitproto.ISaneTerm|null} [saneTerm] Command saneTerm
             * @property {replitproto.IResizeTerm|null} [resizeTerm] Command resizeTerm
             * @property {replitproto.State|null} [state] Command state
             * @property {replitproto.IOK|null} [ok] Command ok
             * @property {replitproto.IFile|null} [persist] Command persist
             * @property {replitproto.IFile|null} [write] Command write
             * @property {replitproto.IFile|null} [remove] Command remove
             * @property {replitproto.IMove|null} [move] Command move
             * @property {replitproto.IFile|null} [mkdir] Command mkdir
             * @property {replitproto.IFile|null} [read] Command read
             * @property {replitproto.IFile|null} [readdir] Command readdir
             * @property {replitproto.IFiles|null} [files] Command files
             * @property {replitproto.IFile|null} [file] Command file
             * @property {replitproto.ICheckChanges|null} [checkChanges] Command checkChanges
             * @property {replitproto.IFiles|null} [changedFiles] Command changedFiles
             * @property {replitproto.ILintResults|null} [lintResults] Command lintResults
             * @property {replitproto.IContainedTest|null} [runContainedTest] Command runContainedTest
             * @property {replitproto.ITestResult|null} [testResult] Command testResult
             * @property {string|null} [debuggerStart] Command debuggerStart
             * @property {replitproto.IRunMain|null} [debuggerStep] Command debuggerStep
             * @property {replitproto.IDebugStatus|null} [debuggerStatus] Command debuggerStatus
             * @property {replitproto.IEnsurePackages|null} [ensurePackages] Command ensurePackages
             * @property {replitproto.IPing|null} [ping] Command ping
             * @property {replitproto.IPong|null} [pong] Command pong
             * @property {replitproto.IHello|null} [hello] Command hello
             * @property {replitproto.IGoodbye|null} [goodbye] Command goodbye
             * @property {replitproto.IHint|null} [hint] Command hint
             * @property {replitproto.IConnect|null} [connect] Command connect
             * @property {replitproto.ISend|null} [send] Command send
             * @property {replitproto.IRecv|null} [recv] Command recv
             * @property {replitproto.IDisconnect|null} [disconnect] Command disconnect
             * @property {replitproto.IFileAuthReq|null} [fileAuthReq] Command fileAuthReq
             * @property {replitproto.IFileAuthRes|null} [fileAuthRes] Command fileAuthRes
             * @property {replitproto.IMultiFileAuthRes|null} [mutliFileAuthRes] Command mutliFileAuthRes
             * @property {replitproto.IOTPacket|null} [ot] Command ot
             * @property {replitproto.IOTStatus|null} [otstatus] Command otstatus
             * @property {replitproto.IOTLinkFile|null} [otLinkFile] Command otLinkFile
             * @property {replitproto.IOTCursor|null} [otNewCursor] Command otNewCursor
             * @property {replitproto.IOTCursor|null} [otDeleteCursor] Command otDeleteCursor
             * @property {replitproto.IFlush|null} [flush] Command flush
             * @property {replitproto.IDebug|null} [debug] Command debug
             * @property {replitproto.IStartVCR|null} [startVCR] Command startVCR
             * @property {replitproto.IReadVCR|null} [readVCR] Command readVCR
             * @property {replitproto.IVCRLog|null} [VCRLog] Command VCRLog
             * @property {replitproto.IAuth|null} [auth] Command auth
             * @property {replitproto.IExecInfo|null} [execInfo] Command execInfo
             * @property {replitproto.IFile|null} [subscribe] Command subscribe
             * @property {replitproto.IFile|null} [eventCreated] Command eventCreated
             * @property {replitproto.IFile|null} [eventModified] Command eventModified
             * @property {replitproto.IFile|null} [eventDeleted] Command eventDeleted
             * @property {replitproto.IMove|null} [eventMoved] Command eventMoved
             * @property {replitproto.ISubscribeFile|null} [subscribeFile] Command subscribeFile
             * @property {replitproto.IFileEvent|null} [fileEvent] Command fileEvent
             * @property {replitproto.IRoster|null} [roster] Command roster
             * @property {replitproto.IUser|null} [join] Command join
             * @property {replitproto.IUser|null} [part] Command part
             * @property {replitproto.IExec|null} [exec] Command exec
             * @property {replitproto.IPackageSearch|null} [packageSearch] Command packageSearch
             * @property {replitproto.IPackageSearchResp|null} [packageSearchResp] Command packageSearchResp
             * @property {replitproto.IPackageInfo|null} [packageInfo] Command packageInfo
             * @property {replitproto.IPackageInfoResp|null} [packageInfoResp] Command packageInfoResp
             * @property {replitproto.IPackageAdd|null} [packageAdd] Command packageAdd
             * @property {replitproto.IPackageRemove|null} [packageRemove] Command packageRemove
             * @property {replitproto.IPackageInstall|null} [packageInstall] Command packageInstall
             * @property {replitproto.IPackageListSpecfile|null} [packageListSpecfile] Command packageListSpecfile
             * @property {replitproto.IPackageListSpecfileResp|null} [packageListSpecfileResp] Command packageListSpecfileResp
             * @property {replitproto.IPackageCacheSave|null} [packageCacheSave] Command packageCacheSave
             * @property {replitproto.IChatMessage|null} [chatMessage] Command chatMessage
             * @property {replitproto.IChatTyping|null} [chatTyping] Command chatTyping
             * @property {replitproto.IChatScrollback|null} [chatScrollback] Command chatScrollback
             * @property {string|null} [ref] Command ref
             */
    
            /**
             * Constructs a new Command.
             * @memberof replitproto
             * @classdesc Represents a Command.
             * @implements ICommand
             * @constructor
             * @param {replitproto.ICommand=} [properties] Properties to set
             */
            function Command(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Command channel.
             * @member {number} channel
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.channel = 0;
    
            /**
             * Command session.
             * @member {number} session
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.session = 0;
    
            /**
             * Command openChan.
             * @member {replitproto.IOpenChannel|null|undefined} openChan
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.openChan = null;
    
            /**
             * Command openChanRes.
             * @member {replitproto.IOpenChannelRes|null|undefined} openChanRes
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.openChanRes = null;
    
            /**
             * Command closeChan.
             * @member {replitproto.ICloseChannel|null|undefined} closeChan
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.closeChan = null;
    
            /**
             * Command closeChanRes.
             * @member {replitproto.ICloseChannelRes|null|undefined} closeChanRes
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.closeChanRes = null;
    
            /**
             * Command containerState.
             * @member {replitproto.IContainerState|null|undefined} containerState
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.containerState = null;
    
            /**
             * Command portOpen.
             * @member {replitproto.IPortOpen|null|undefined} portOpen
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.portOpen = null;
    
            /**
             * Command toast.
             * @member {replitproto.IToast|null|undefined} toast
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.toast = null;
    
            /**
             * Command runMain.
             * @member {replitproto.IRunMain|null|undefined} runMain
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.runMain = null;
    
            /**
             * Command clear.
             * @member {replitproto.IClear|null|undefined} clear
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.clear = null;
    
            /**
             * Command eval.
             * @member {string} eval
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype["eval"] = "";
    
            /**
             * Command result.
             * @member {string} result
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.result = "";
    
            /**
             * Command input.
             * @member {string} input
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.input = "";
    
            /**
             * Command output.
             * @member {string} output
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.output = "";
    
            /**
             * Command error.
             * @member {string} error
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.error = "";
    
            /**
             * Command saneTerm.
             * @member {replitproto.ISaneTerm|null|undefined} saneTerm
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.saneTerm = null;
    
            /**
             * Command resizeTerm.
             * @member {replitproto.IResizeTerm|null|undefined} resizeTerm
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.resizeTerm = null;
    
            /**
             * Command state.
             * @member {replitproto.State} state
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.state = 0;
    
            /**
             * Command ok.
             * @member {replitproto.IOK|null|undefined} ok
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.ok = null;
    
            /**
             * Command persist.
             * @member {replitproto.IFile|null|undefined} persist
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.persist = null;
    
            /**
             * Command write.
             * @member {replitproto.IFile|null|undefined} write
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.write = null;
    
            /**
             * Command remove.
             * @member {replitproto.IFile|null|undefined} remove
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.remove = null;
    
            /**
             * Command move.
             * @member {replitproto.IMove|null|undefined} move
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.move = null;
    
            /**
             * Command mkdir.
             * @member {replitproto.IFile|null|undefined} mkdir
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.mkdir = null;
    
            /**
             * Command read.
             * @member {replitproto.IFile|null|undefined} read
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.read = null;
    
            /**
             * Command readdir.
             * @member {replitproto.IFile|null|undefined} readdir
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.readdir = null;
    
            /**
             * Command files.
             * @member {replitproto.IFiles|null|undefined} files
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.files = null;
    
            /**
             * Command file.
             * @member {replitproto.IFile|null|undefined} file
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.file = null;
    
            /**
             * Command checkChanges.
             * @member {replitproto.ICheckChanges|null|undefined} checkChanges
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.checkChanges = null;
    
            /**
             * Command changedFiles.
             * @member {replitproto.IFiles|null|undefined} changedFiles
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.changedFiles = null;
    
            /**
             * Command lintResults.
             * @member {replitproto.ILintResults|null|undefined} lintResults
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.lintResults = null;
    
            /**
             * Command runContainedTest.
             * @member {replitproto.IContainedTest|null|undefined} runContainedTest
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.runContainedTest = null;
    
            /**
             * Command testResult.
             * @member {replitproto.ITestResult|null|undefined} testResult
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.testResult = null;
    
            /**
             * Command debuggerStart.
             * @member {string} debuggerStart
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.debuggerStart = "";
    
            /**
             * Command debuggerStep.
             * @member {replitproto.IRunMain|null|undefined} debuggerStep
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.debuggerStep = null;
    
            /**
             * Command debuggerStatus.
             * @member {replitproto.IDebugStatus|null|undefined} debuggerStatus
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.debuggerStatus = null;
    
            /**
             * Command ensurePackages.
             * @member {replitproto.IEnsurePackages|null|undefined} ensurePackages
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.ensurePackages = null;
    
            /**
             * Command ping.
             * @member {replitproto.IPing|null|undefined} ping
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.ping = null;
    
            /**
             * Command pong.
             * @member {replitproto.IPong|null|undefined} pong
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.pong = null;
    
            /**
             * Command hello.
             * @member {replitproto.IHello|null|undefined} hello
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.hello = null;
    
            /**
             * Command goodbye.
             * @member {replitproto.IGoodbye|null|undefined} goodbye
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.goodbye = null;
    
            /**
             * Command hint.
             * @member {replitproto.IHint|null|undefined} hint
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.hint = null;
    
            /**
             * Command connect.
             * @member {replitproto.IConnect|null|undefined} connect
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.connect = null;
    
            /**
             * Command send.
             * @member {replitproto.ISend|null|undefined} send
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.send = null;
    
            /**
             * Command recv.
             * @member {replitproto.IRecv|null|undefined} recv
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.recv = null;
    
            /**
             * Command disconnect.
             * @member {replitproto.IDisconnect|null|undefined} disconnect
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.disconnect = null;
    
            /**
             * Command fileAuthReq.
             * @member {replitproto.IFileAuthReq|null|undefined} fileAuthReq
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.fileAuthReq = null;
    
            /**
             * Command fileAuthRes.
             * @member {replitproto.IFileAuthRes|null|undefined} fileAuthRes
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.fileAuthRes = null;
    
            /**
             * Command mutliFileAuthRes.
             * @member {replitproto.IMultiFileAuthRes|null|undefined} mutliFileAuthRes
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.mutliFileAuthRes = null;
    
            /**
             * Command ot.
             * @member {replitproto.IOTPacket|null|undefined} ot
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.ot = null;
    
            /**
             * Command otstatus.
             * @member {replitproto.IOTStatus|null|undefined} otstatus
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.otstatus = null;
    
            /**
             * Command otLinkFile.
             * @member {replitproto.IOTLinkFile|null|undefined} otLinkFile
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.otLinkFile = null;
    
            /**
             * Command otNewCursor.
             * @member {replitproto.IOTCursor|null|undefined} otNewCursor
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.otNewCursor = null;
    
            /**
             * Command otDeleteCursor.
             * @member {replitproto.IOTCursor|null|undefined} otDeleteCursor
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.otDeleteCursor = null;
    
            /**
             * Command flush.
             * @member {replitproto.IFlush|null|undefined} flush
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.flush = null;
    
            /**
             * Command debug.
             * @member {replitproto.IDebug|null|undefined} debug
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.debug = null;
    
            /**
             * Command startVCR.
             * @member {replitproto.IStartVCR|null|undefined} startVCR
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.startVCR = null;
    
            /**
             * Command readVCR.
             * @member {replitproto.IReadVCR|null|undefined} readVCR
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.readVCR = null;
    
            /**
             * Command VCRLog.
             * @member {replitproto.IVCRLog|null|undefined} VCRLog
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.VCRLog = null;
    
            /**
             * Command auth.
             * @member {replitproto.IAuth|null|undefined} auth
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.auth = null;
    
            /**
             * Command execInfo.
             * @member {replitproto.IExecInfo|null|undefined} execInfo
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.execInfo = null;
    
            /**
             * Command subscribe.
             * @member {replitproto.IFile|null|undefined} subscribe
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.subscribe = null;
    
            /**
             * Command eventCreated.
             * @member {replitproto.IFile|null|undefined} eventCreated
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.eventCreated = null;
    
            /**
             * Command eventModified.
             * @member {replitproto.IFile|null|undefined} eventModified
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.eventModified = null;
    
            /**
             * Command eventDeleted.
             * @member {replitproto.IFile|null|undefined} eventDeleted
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.eventDeleted = null;
    
            /**
             * Command eventMoved.
             * @member {replitproto.IMove|null|undefined} eventMoved
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.eventMoved = null;
    
            /**
             * Command subscribeFile.
             * @member {replitproto.ISubscribeFile|null|undefined} subscribeFile
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.subscribeFile = null;
    
            /**
             * Command fileEvent.
             * @member {replitproto.IFileEvent|null|undefined} fileEvent
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.fileEvent = null;
    
            /**
             * Command roster.
             * @member {replitproto.IRoster|null|undefined} roster
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.roster = null;
    
            /**
             * Command join.
             * @member {replitproto.IUser|null|undefined} join
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.join = null;
    
            /**
             * Command part.
             * @member {replitproto.IUser|null|undefined} part
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.part = null;
    
            /**
             * Command exec.
             * @member {replitproto.IExec|null|undefined} exec
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.exec = null;
    
            /**
             * Command packageSearch.
             * @member {replitproto.IPackageSearch|null|undefined} packageSearch
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageSearch = null;
    
            /**
             * Command packageSearchResp.
             * @member {replitproto.IPackageSearchResp|null|undefined} packageSearchResp
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageSearchResp = null;
    
            /**
             * Command packageInfo.
             * @member {replitproto.IPackageInfo|null|undefined} packageInfo
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageInfo = null;
    
            /**
             * Command packageInfoResp.
             * @member {replitproto.IPackageInfoResp|null|undefined} packageInfoResp
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageInfoResp = null;
    
            /**
             * Command packageAdd.
             * @member {replitproto.IPackageAdd|null|undefined} packageAdd
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageAdd = null;
    
            /**
             * Command packageRemove.
             * @member {replitproto.IPackageRemove|null|undefined} packageRemove
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageRemove = null;
    
            /**
             * Command packageInstall.
             * @member {replitproto.IPackageInstall|null|undefined} packageInstall
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageInstall = null;
    
            /**
             * Command packageListSpecfile.
             * @member {replitproto.IPackageListSpecfile|null|undefined} packageListSpecfile
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageListSpecfile = null;
    
            /**
             * Command packageListSpecfileResp.
             * @member {replitproto.IPackageListSpecfileResp|null|undefined} packageListSpecfileResp
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageListSpecfileResp = null;
    
            /**
             * Command packageCacheSave.
             * @member {replitproto.IPackageCacheSave|null|undefined} packageCacheSave
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.packageCacheSave = null;
    
            /**
             * Command chatMessage.
             * @member {replitproto.IChatMessage|null|undefined} chatMessage
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.chatMessage = null;
    
            /**
             * Command chatTyping.
             * @member {replitproto.IChatTyping|null|undefined} chatTyping
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.chatTyping = null;
    
            /**
             * Command chatScrollback.
             * @member {replitproto.IChatScrollback|null|undefined} chatScrollback
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.chatScrollback = null;
    
            /**
             * Command ref.
             * @member {string} ref
             * @memberof replitproto.Command
             * @instance
             */
            Command.prototype.ref = "";
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Command body.
             * @member {"openChan"|"openChanRes"|"closeChan"|"closeChanRes"|"containerState"|"portOpen"|"toast"|"runMain"|"clear"|"eval"|"result"|"input"|"output"|"error"|"saneTerm"|"resizeTerm"|"state"|"ok"|"persist"|"write"|"remove"|"move"|"mkdir"|"read"|"readdir"|"files"|"file"|"checkChanges"|"changedFiles"|"lintResults"|"runContainedTest"|"testResult"|"debuggerStart"|"debuggerStep"|"debuggerStatus"|"ensurePackages"|"ping"|"pong"|"hello"|"goodbye"|"hint"|"connect"|"send"|"recv"|"disconnect"|"fileAuthReq"|"fileAuthRes"|"mutliFileAuthRes"|"ot"|"otstatus"|"otLinkFile"|"otNewCursor"|"otDeleteCursor"|"flush"|"debug"|"startVCR"|"readVCR"|"VCRLog"|"auth"|"execInfo"|"subscribe"|"eventCreated"|"eventModified"|"eventDeleted"|"eventMoved"|"subscribeFile"|"fileEvent"|"roster"|"join"|"part"|"exec"|"packageSearch"|"packageSearchResp"|"packageInfo"|"packageInfoResp"|"packageAdd"|"packageRemove"|"packageInstall"|"packageListSpecfile"|"packageListSpecfileResp"|"packageCacheSave"|"chatMessage"|"chatTyping"|"chatScrollback"|undefined} body
             * @memberof replitproto.Command
             * @instance
             */
            Object.defineProperty(Command.prototype, "body", {
                get: $util.oneOfGetter($oneOfFields = ["openChan", "openChanRes", "closeChan", "closeChanRes", "containerState", "portOpen", "toast", "runMain", "clear", "eval", "result", "input", "output", "error", "saneTerm", "resizeTerm", "state", "ok", "persist", "write", "remove", "move", "mkdir", "read", "readdir", "files", "file", "checkChanges", "changedFiles", "lintResults", "runContainedTest", "testResult", "debuggerStart", "debuggerStep", "debuggerStatus", "ensurePackages", "ping", "pong", "hello", "goodbye", "hint", "connect", "send", "recv", "disconnect", "fileAuthReq", "fileAuthRes", "mutliFileAuthRes", "ot", "otstatus", "otLinkFile", "otNewCursor", "otDeleteCursor", "flush", "debug", "startVCR", "readVCR", "VCRLog", "auth", "execInfo", "subscribe", "eventCreated", "eventModified", "eventDeleted", "eventMoved", "subscribeFile", "fileEvent", "roster", "join", "part", "exec", "packageSearch", "packageSearchResp", "packageInfo", "packageInfoResp", "packageAdd", "packageRemove", "packageInstall", "packageListSpecfile", "packageListSpecfileResp", "packageCacheSave", "chatMessage", "chatTyping", "chatScrollback"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Command instance using the specified properties.
             * @function create
             * @memberof replitproto.Command
             * @static
             * @param {replitproto.ICommand=} [properties] Properties to set
             * @returns {replitproto.Command} Command instance
             */
            Command.create = function create(properties) {
                return new Command(properties);
            };
    
            /**
             * Encodes the specified Command message. Does not implicitly {@link replitproto.Command.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Command
             * @static
             * @param {replitproto.ICommand} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.channel);
                if (message.session != null && message.hasOwnProperty("session"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.session);
                if (message.openChan != null && message.hasOwnProperty("openChan"))
                    $root.replitproto.OpenChannel.encode(message.openChan, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.openChanRes != null && message.hasOwnProperty("openChanRes"))
                    $root.replitproto.OpenChannelRes.encode(message.openChanRes, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.closeChan != null && message.hasOwnProperty("closeChan"))
                    $root.replitproto.CloseChannel.encode(message.closeChan, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.closeChanRes != null && message.hasOwnProperty("closeChanRes"))
                    $root.replitproto.CloseChannelRes.encode(message.closeChanRes, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.containerState != null && message.hasOwnProperty("containerState"))
                    $root.replitproto.ContainerState.encode(message.containerState, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.portOpen != null && message.hasOwnProperty("portOpen"))
                    $root.replitproto.PortOpen.encode(message.portOpen, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.toast != null && message.hasOwnProperty("toast"))
                    $root.replitproto.Toast.encode(message.toast, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.runMain != null && message.hasOwnProperty("runMain"))
                    $root.replitproto.RunMain.encode(message.runMain, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                if (message.clear != null && message.hasOwnProperty("clear"))
                    $root.replitproto.Clear.encode(message.clear, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message["eval"] != null && message.hasOwnProperty("eval"))
                    writer.uint32(/* id 20, wireType 2 =*/162).string(message["eval"]);
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 21, wireType 2 =*/170).string(message.result);
                if (message.input != null && message.hasOwnProperty("input"))
                    writer.uint32(/* id 22, wireType 2 =*/178).string(message.input);
                if (message.output != null && message.hasOwnProperty("output"))
                    writer.uint32(/* id 23, wireType 2 =*/186).string(message.output);
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32(/* id 24, wireType 2 =*/194).string(message.error);
                if (message.saneTerm != null && message.hasOwnProperty("saneTerm"))
                    $root.replitproto.SaneTerm.encode(message.saneTerm, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
                if (message.resizeTerm != null && message.hasOwnProperty("resizeTerm"))
                    $root.replitproto.ResizeTerm.encode(message.resizeTerm, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 28, wireType 0 =*/224).int32(message.state);
                if (message.ok != null && message.hasOwnProperty("ok"))
                    $root.replitproto.OK.encode(message.ok, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
                if (message.persist != null && message.hasOwnProperty("persist"))
                    $root.replitproto.File.encode(message.persist, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
                if (message.write != null && message.hasOwnProperty("write"))
                    $root.replitproto.File.encode(message.write, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
                if (message.remove != null && message.hasOwnProperty("remove"))
                    $root.replitproto.File.encode(message.remove, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
                if (message.move != null && message.hasOwnProperty("move"))
                    $root.replitproto.Move.encode(message.move, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
                if (message.read != null && message.hasOwnProperty("read"))
                    $root.replitproto.File.encode(message.read, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
                if (message.readdir != null && message.hasOwnProperty("readdir"))
                    $root.replitproto.File.encode(message.readdir, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
                if (message.files != null && message.hasOwnProperty("files"))
                    $root.replitproto.Files.encode(message.files, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
                if (message.mkdir != null && message.hasOwnProperty("mkdir"))
                    $root.replitproto.File.encode(message.mkdir, writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
                if (message.file != null && message.hasOwnProperty("file"))
                    $root.replitproto.File.encode(message.file, writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
                if (message.checkChanges != null && message.hasOwnProperty("checkChanges"))
                    $root.replitproto.CheckChanges.encode(message.checkChanges, writer.uint32(/* id 42, wireType 2 =*/338).fork()).ldelim();
                if (message.changedFiles != null && message.hasOwnProperty("changedFiles"))
                    $root.replitproto.Files.encode(message.changedFiles, writer.uint32(/* id 43, wireType 2 =*/346).fork()).ldelim();
                if (message.lintResults != null && message.hasOwnProperty("lintResults"))
                    $root.replitproto.LintResults.encode(message.lintResults, writer.uint32(/* id 44, wireType 2 =*/354).fork()).ldelim();
                if (message.runContainedTest != null && message.hasOwnProperty("runContainedTest"))
                    $root.replitproto.ContainedTest.encode(message.runContainedTest, writer.uint32(/* id 70, wireType 2 =*/562).fork()).ldelim();
                if (message.testResult != null && message.hasOwnProperty("testResult"))
                    $root.replitproto.TestResult.encode(message.testResult, writer.uint32(/* id 71, wireType 2 =*/570).fork()).ldelim();
                if (message.debuggerStart != null && message.hasOwnProperty("debuggerStart"))
                    writer.uint32(/* id 90, wireType 2 =*/722).string(message.debuggerStart);
                if (message.debuggerStep != null && message.hasOwnProperty("debuggerStep"))
                    $root.replitproto.RunMain.encode(message.debuggerStep, writer.uint32(/* id 91, wireType 2 =*/730).fork()).ldelim();
                if (message.debuggerStatus != null && message.hasOwnProperty("debuggerStatus"))
                    $root.replitproto.DebugStatus.encode(message.debuggerStatus, writer.uint32(/* id 92, wireType 2 =*/738).fork()).ldelim();
                if (message.ensurePackages != null && message.hasOwnProperty("ensurePackages"))
                    $root.replitproto.EnsurePackages.encode(message.ensurePackages, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                if (message.ping != null && message.hasOwnProperty("ping"))
                    $root.replitproto.Ping.encode(message.ping, writer.uint32(/* id 120, wireType 2 =*/962).fork()).ldelim();
                if (message.pong != null && message.hasOwnProperty("pong"))
                    $root.replitproto.Pong.encode(message.pong, writer.uint32(/* id 121, wireType 2 =*/970).fork()).ldelim();
                if (message.hello != null && message.hasOwnProperty("hello"))
                    $root.replitproto.Hello.encode(message.hello, writer.uint32(/* id 122, wireType 2 =*/978).fork()).ldelim();
                if (message.goodbye != null && message.hasOwnProperty("goodbye"))
                    $root.replitproto.Goodbye.encode(message.goodbye, writer.uint32(/* id 123, wireType 2 =*/986).fork()).ldelim();
                if (message.hint != null && message.hasOwnProperty("hint"))
                    $root.replitproto.Hint.encode(message.hint, writer.uint32(/* id 130, wireType 2 =*/1042).fork()).ldelim();
                if (message.connect != null && message.hasOwnProperty("connect"))
                    $root.replitproto.Connect.encode(message.connect, writer.uint32(/* id 150, wireType 2 =*/1202).fork()).ldelim();
                if (message.send != null && message.hasOwnProperty("send"))
                    $root.replitproto.Send.encode(message.send, writer.uint32(/* id 151, wireType 2 =*/1210).fork()).ldelim();
                if (message.recv != null && message.hasOwnProperty("recv"))
                    $root.replitproto.Recv.encode(message.recv, writer.uint32(/* id 152, wireType 2 =*/1218).fork()).ldelim();
                if (message.disconnect != null && message.hasOwnProperty("disconnect"))
                    $root.replitproto.Disconnect.encode(message.disconnect, writer.uint32(/* id 153, wireType 2 =*/1226).fork()).ldelim();
                if (message.fileAuthReq != null && message.hasOwnProperty("fileAuthReq"))
                    $root.replitproto.FileAuthReq.encode(message.fileAuthReq, writer.uint32(/* id 200, wireType 2 =*/1602).fork()).ldelim();
                if (message.fileAuthRes != null && message.hasOwnProperty("fileAuthRes"))
                    $root.replitproto.FileAuthRes.encode(message.fileAuthRes, writer.uint32(/* id 201, wireType 2 =*/1610).fork()).ldelim();
                if (message.mutliFileAuthRes != null && message.hasOwnProperty("mutliFileAuthRes"))
                    $root.replitproto.MultiFileAuthRes.encode(message.mutliFileAuthRes, writer.uint32(/* id 202, wireType 2 =*/1618).fork()).ldelim();
                if (message.ot != null && message.hasOwnProperty("ot"))
                    $root.replitproto.OTPacket.encode(message.ot, writer.uint32(/* id 220, wireType 2 =*/1762).fork()).ldelim();
                if (message.otstatus != null && message.hasOwnProperty("otstatus"))
                    $root.replitproto.OTStatus.encode(message.otstatus, writer.uint32(/* id 221, wireType 2 =*/1770).fork()).ldelim();
                if (message.otLinkFile != null && message.hasOwnProperty("otLinkFile"))
                    $root.replitproto.OTLinkFile.encode(message.otLinkFile, writer.uint32(/* id 222, wireType 2 =*/1778).fork()).ldelim();
                if (message.otNewCursor != null && message.hasOwnProperty("otNewCursor"))
                    $root.replitproto.OTCursor.encode(message.otNewCursor, writer.uint32(/* id 223, wireType 2 =*/1786).fork()).ldelim();
                if (message.otDeleteCursor != null && message.hasOwnProperty("otDeleteCursor"))
                    $root.replitproto.OTCursor.encode(message.otDeleteCursor, writer.uint32(/* id 224, wireType 2 =*/1794).fork()).ldelim();
                if (message.debug != null && message.hasOwnProperty("debug"))
                    $root.replitproto.Debug.encode(message.debug, writer.uint32(/* id 230, wireType 2 =*/1842).fork()).ldelim();
                if (message.startVCR != null && message.hasOwnProperty("startVCR"))
                    $root.replitproto.StartVCR.encode(message.startVCR, writer.uint32(/* id 231, wireType 2 =*/1850).fork()).ldelim();
                if (message.readVCR != null && message.hasOwnProperty("readVCR"))
                    $root.replitproto.ReadVCR.encode(message.readVCR, writer.uint32(/* id 232, wireType 2 =*/1858).fork()).ldelim();
                if (message.VCRLog != null && message.hasOwnProperty("VCRLog"))
                    $root.replitproto.VCRLog.encode(message.VCRLog, writer.uint32(/* id 233, wireType 2 =*/1866).fork()).ldelim();
                if (message.auth != null && message.hasOwnProperty("auth"))
                    $root.replitproto.Auth.encode(message.auth, writer.uint32(/* id 235, wireType 2 =*/1882).fork()).ldelim();
                if (message.execInfo != null && message.hasOwnProperty("execInfo"))
                    $root.replitproto.ExecInfo.encode(message.execInfo, writer.uint32(/* id 240, wireType 2 =*/1922).fork()).ldelim();
                if (message.subscribe != null && message.hasOwnProperty("subscribe"))
                    $root.replitproto.File.encode(message.subscribe, writer.uint32(/* id 250, wireType 2 =*/2002).fork()).ldelim();
                if (message.flush != null && message.hasOwnProperty("flush"))
                    $root.replitproto.Flush.encode(message.flush, writer.uint32(/* id 251, wireType 2 =*/2010).fork()).ldelim();
                if (message.eventCreated != null && message.hasOwnProperty("eventCreated"))
                    $root.replitproto.File.encode(message.eventCreated, writer.uint32(/* id 252, wireType 2 =*/2018).fork()).ldelim();
                if (message.eventModified != null && message.hasOwnProperty("eventModified"))
                    $root.replitproto.File.encode(message.eventModified, writer.uint32(/* id 253, wireType 2 =*/2026).fork()).ldelim();
                if (message.eventDeleted != null && message.hasOwnProperty("eventDeleted"))
                    $root.replitproto.File.encode(message.eventDeleted, writer.uint32(/* id 254, wireType 2 =*/2034).fork()).ldelim();
                if (message.eventMoved != null && message.hasOwnProperty("eventMoved"))
                    $root.replitproto.Move.encode(message.eventMoved, writer.uint32(/* id 255, wireType 2 =*/2042).fork()).ldelim();
                if (message.subscribeFile != null && message.hasOwnProperty("subscribeFile"))
                    $root.replitproto.SubscribeFile.encode(message.subscribeFile, writer.uint32(/* id 256, wireType 2 =*/2050).fork()).ldelim();
                if (message.fileEvent != null && message.hasOwnProperty("fileEvent"))
                    $root.replitproto.FileEvent.encode(message.fileEvent, writer.uint32(/* id 257, wireType 2 =*/2058).fork()).ldelim();
                if (message.roster != null && message.hasOwnProperty("roster"))
                    $root.replitproto.Roster.encode(message.roster, writer.uint32(/* id 260, wireType 2 =*/2082).fork()).ldelim();
                if (message.join != null && message.hasOwnProperty("join"))
                    $root.replitproto.User.encode(message.join, writer.uint32(/* id 261, wireType 2 =*/2090).fork()).ldelim();
                if (message.part != null && message.hasOwnProperty("part"))
                    $root.replitproto.User.encode(message.part, writer.uint32(/* id 262, wireType 2 =*/2098).fork()).ldelim();
                if (message.exec != null && message.hasOwnProperty("exec"))
                    $root.replitproto.Exec.encode(message.exec, writer.uint32(/* id 270, wireType 2 =*/2162).fork()).ldelim();
                if (message.packageSearch != null && message.hasOwnProperty("packageSearch"))
                    $root.replitproto.PackageSearch.encode(message.packageSearch, writer.uint32(/* id 280, wireType 2 =*/2242).fork()).ldelim();
                if (message.packageSearchResp != null && message.hasOwnProperty("packageSearchResp"))
                    $root.replitproto.PackageSearchResp.encode(message.packageSearchResp, writer.uint32(/* id 281, wireType 2 =*/2250).fork()).ldelim();
                if (message.packageInfo != null && message.hasOwnProperty("packageInfo"))
                    $root.replitproto.PackageInfo.encode(message.packageInfo, writer.uint32(/* id 282, wireType 2 =*/2258).fork()).ldelim();
                if (message.packageInfoResp != null && message.hasOwnProperty("packageInfoResp"))
                    $root.replitproto.PackageInfoResp.encode(message.packageInfoResp, writer.uint32(/* id 283, wireType 2 =*/2266).fork()).ldelim();
                if (message.packageAdd != null && message.hasOwnProperty("packageAdd"))
                    $root.replitproto.PackageAdd.encode(message.packageAdd, writer.uint32(/* id 284, wireType 2 =*/2274).fork()).ldelim();
                if (message.packageRemove != null && message.hasOwnProperty("packageRemove"))
                    $root.replitproto.PackageRemove.encode(message.packageRemove, writer.uint32(/* id 285, wireType 2 =*/2282).fork()).ldelim();
                if (message.packageInstall != null && message.hasOwnProperty("packageInstall"))
                    $root.replitproto.PackageInstall.encode(message.packageInstall, writer.uint32(/* id 286, wireType 2 =*/2290).fork()).ldelim();
                if (message.packageListSpecfile != null && message.hasOwnProperty("packageListSpecfile"))
                    $root.replitproto.PackageListSpecfile.encode(message.packageListSpecfile, writer.uint32(/* id 287, wireType 2 =*/2298).fork()).ldelim();
                if (message.packageListSpecfileResp != null && message.hasOwnProperty("packageListSpecfileResp"))
                    $root.replitproto.PackageListSpecfileResp.encode(message.packageListSpecfileResp, writer.uint32(/* id 288, wireType 2 =*/2306).fork()).ldelim();
                if (message.packageCacheSave != null && message.hasOwnProperty("packageCacheSave"))
                    $root.replitproto.PackageCacheSave.encode(message.packageCacheSave, writer.uint32(/* id 289, wireType 2 =*/2314).fork()).ldelim();
                if (message.chatMessage != null && message.hasOwnProperty("chatMessage"))
                    $root.replitproto.ChatMessage.encode(message.chatMessage, writer.uint32(/* id 310, wireType 2 =*/2482).fork()).ldelim();
                if (message.chatTyping != null && message.hasOwnProperty("chatTyping"))
                    $root.replitproto.ChatTyping.encode(message.chatTyping, writer.uint32(/* id 311, wireType 2 =*/2490).fork()).ldelim();
                if (message.chatScrollback != null && message.hasOwnProperty("chatScrollback"))
                    $root.replitproto.ChatScrollback.encode(message.chatScrollback, writer.uint32(/* id 312, wireType 2 =*/2498).fork()).ldelim();
                if (message.ref != null && message.hasOwnProperty("ref"))
                    writer.uint32(/* id 1000, wireType 2 =*/8002).string(message.ref);
                return writer;
            };
    
            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link replitproto.Command.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Command
             * @static
             * @param {replitproto.ICommand} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Command message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Command
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Command} Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Command.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Command();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.channel = reader.int32();
                        break;
                    case 2:
                        message.session = reader.int32();
                        break;
                    case 3:
                        message.openChan = $root.replitproto.OpenChannel.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.openChanRes = $root.replitproto.OpenChannelRes.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.closeChan = $root.replitproto.CloseChannel.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.closeChanRes = $root.replitproto.CloseChannelRes.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.containerState = $root.replitproto.ContainerState.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.portOpen = $root.replitproto.PortOpen.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.toast = $root.replitproto.Toast.decode(reader, reader.uint32());
                        break;
                    case 16:
                        message.runMain = $root.replitproto.RunMain.decode(reader, reader.uint32());
                        break;
                    case 17:
                        message.clear = $root.replitproto.Clear.decode(reader, reader.uint32());
                        break;
                    case 20:
                        message["eval"] = reader.string();
                        break;
                    case 21:
                        message.result = reader.string();
                        break;
                    case 22:
                        message.input = reader.string();
                        break;
                    case 23:
                        message.output = reader.string();
                        break;
                    case 24:
                        message.error = reader.string();
                        break;
                    case 26:
                        message.saneTerm = $root.replitproto.SaneTerm.decode(reader, reader.uint32());
                        break;
                    case 27:
                        message.resizeTerm = $root.replitproto.ResizeTerm.decode(reader, reader.uint32());
                        break;
                    case 28:
                        message.state = reader.int32();
                        break;
                    case 30:
                        message.ok = $root.replitproto.OK.decode(reader, reader.uint32());
                        break;
                    case 31:
                        message.persist = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 32:
                        message.write = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 33:
                        message.remove = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 34:
                        message.move = $root.replitproto.Move.decode(reader, reader.uint32());
                        break;
                    case 39:
                        message.mkdir = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 35:
                        message.read = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 37:
                        message.readdir = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 38:
                        message.files = $root.replitproto.Files.decode(reader, reader.uint32());
                        break;
                    case 40:
                        message.file = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 42:
                        message.checkChanges = $root.replitproto.CheckChanges.decode(reader, reader.uint32());
                        break;
                    case 43:
                        message.changedFiles = $root.replitproto.Files.decode(reader, reader.uint32());
                        break;
                    case 44:
                        message.lintResults = $root.replitproto.LintResults.decode(reader, reader.uint32());
                        break;
                    case 70:
                        message.runContainedTest = $root.replitproto.ContainedTest.decode(reader, reader.uint32());
                        break;
                    case 71:
                        message.testResult = $root.replitproto.TestResult.decode(reader, reader.uint32());
                        break;
                    case 90:
                        message.debuggerStart = reader.string();
                        break;
                    case 91:
                        message.debuggerStep = $root.replitproto.RunMain.decode(reader, reader.uint32());
                        break;
                    case 92:
                        message.debuggerStatus = $root.replitproto.DebugStatus.decode(reader, reader.uint32());
                        break;
                    case 100:
                        message.ensurePackages = $root.replitproto.EnsurePackages.decode(reader, reader.uint32());
                        break;
                    case 120:
                        message.ping = $root.replitproto.Ping.decode(reader, reader.uint32());
                        break;
                    case 121:
                        message.pong = $root.replitproto.Pong.decode(reader, reader.uint32());
                        break;
                    case 122:
                        message.hello = $root.replitproto.Hello.decode(reader, reader.uint32());
                        break;
                    case 123:
                        message.goodbye = $root.replitproto.Goodbye.decode(reader, reader.uint32());
                        break;
                    case 130:
                        message.hint = $root.replitproto.Hint.decode(reader, reader.uint32());
                        break;
                    case 150:
                        message.connect = $root.replitproto.Connect.decode(reader, reader.uint32());
                        break;
                    case 151:
                        message.send = $root.replitproto.Send.decode(reader, reader.uint32());
                        break;
                    case 152:
                        message.recv = $root.replitproto.Recv.decode(reader, reader.uint32());
                        break;
                    case 153:
                        message.disconnect = $root.replitproto.Disconnect.decode(reader, reader.uint32());
                        break;
                    case 200:
                        message.fileAuthReq = $root.replitproto.FileAuthReq.decode(reader, reader.uint32());
                        break;
                    case 201:
                        message.fileAuthRes = $root.replitproto.FileAuthRes.decode(reader, reader.uint32());
                        break;
                    case 202:
                        message.mutliFileAuthRes = $root.replitproto.MultiFileAuthRes.decode(reader, reader.uint32());
                        break;
                    case 220:
                        message.ot = $root.replitproto.OTPacket.decode(reader, reader.uint32());
                        break;
                    case 221:
                        message.otstatus = $root.replitproto.OTStatus.decode(reader, reader.uint32());
                        break;
                    case 222:
                        message.otLinkFile = $root.replitproto.OTLinkFile.decode(reader, reader.uint32());
                        break;
                    case 223:
                        message.otNewCursor = $root.replitproto.OTCursor.decode(reader, reader.uint32());
                        break;
                    case 224:
                        message.otDeleteCursor = $root.replitproto.OTCursor.decode(reader, reader.uint32());
                        break;
                    case 251:
                        message.flush = $root.replitproto.Flush.decode(reader, reader.uint32());
                        break;
                    case 230:
                        message.debug = $root.replitproto.Debug.decode(reader, reader.uint32());
                        break;
                    case 231:
                        message.startVCR = $root.replitproto.StartVCR.decode(reader, reader.uint32());
                        break;
                    case 232:
                        message.readVCR = $root.replitproto.ReadVCR.decode(reader, reader.uint32());
                        break;
                    case 233:
                        message.VCRLog = $root.replitproto.VCRLog.decode(reader, reader.uint32());
                        break;
                    case 235:
                        message.auth = $root.replitproto.Auth.decode(reader, reader.uint32());
                        break;
                    case 240:
                        message.execInfo = $root.replitproto.ExecInfo.decode(reader, reader.uint32());
                        break;
                    case 250:
                        message.subscribe = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 252:
                        message.eventCreated = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 253:
                        message.eventModified = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 254:
                        message.eventDeleted = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 255:
                        message.eventMoved = $root.replitproto.Move.decode(reader, reader.uint32());
                        break;
                    case 256:
                        message.subscribeFile = $root.replitproto.SubscribeFile.decode(reader, reader.uint32());
                        break;
                    case 257:
                        message.fileEvent = $root.replitproto.FileEvent.decode(reader, reader.uint32());
                        break;
                    case 260:
                        message.roster = $root.replitproto.Roster.decode(reader, reader.uint32());
                        break;
                    case 261:
                        message.join = $root.replitproto.User.decode(reader, reader.uint32());
                        break;
                    case 262:
                        message.part = $root.replitproto.User.decode(reader, reader.uint32());
                        break;
                    case 270:
                        message.exec = $root.replitproto.Exec.decode(reader, reader.uint32());
                        break;
                    case 280:
                        message.packageSearch = $root.replitproto.PackageSearch.decode(reader, reader.uint32());
                        break;
                    case 281:
                        message.packageSearchResp = $root.replitproto.PackageSearchResp.decode(reader, reader.uint32());
                        break;
                    case 282:
                        message.packageInfo = $root.replitproto.PackageInfo.decode(reader, reader.uint32());
                        break;
                    case 283:
                        message.packageInfoResp = $root.replitproto.PackageInfoResp.decode(reader, reader.uint32());
                        break;
                    case 284:
                        message.packageAdd = $root.replitproto.PackageAdd.decode(reader, reader.uint32());
                        break;
                    case 285:
                        message.packageRemove = $root.replitproto.PackageRemove.decode(reader, reader.uint32());
                        break;
                    case 286:
                        message.packageInstall = $root.replitproto.PackageInstall.decode(reader, reader.uint32());
                        break;
                    case 287:
                        message.packageListSpecfile = $root.replitproto.PackageListSpecfile.decode(reader, reader.uint32());
                        break;
                    case 288:
                        message.packageListSpecfileResp = $root.replitproto.PackageListSpecfileResp.decode(reader, reader.uint32());
                        break;
                    case 289:
                        message.packageCacheSave = $root.replitproto.PackageCacheSave.decode(reader, reader.uint32());
                        break;
                    case 310:
                        message.chatMessage = $root.replitproto.ChatMessage.decode(reader, reader.uint32());
                        break;
                    case 311:
                        message.chatTyping = $root.replitproto.ChatTyping.decode(reader, reader.uint32());
                        break;
                    case 312:
                        message.chatScrollback = $root.replitproto.ChatScrollback.decode(reader, reader.uint32());
                        break;
                    case 1000:
                        message.ref = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Command
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Command} Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Command.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Command message.
             * @function verify
             * @memberof replitproto.Command
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Command.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isInteger(message.channel))
                        return "channel: integer expected";
                if (message.session != null && message.hasOwnProperty("session"))
                    if (!$util.isInteger(message.session))
                        return "session: integer expected";
                if (message.openChan != null && message.hasOwnProperty("openChan")) {
                    properties.body = 1;
                    {
                        var error = $root.replitproto.OpenChannel.verify(message.openChan);
                        if (error)
                            return "openChan." + error;
                    }
                }
                if (message.openChanRes != null && message.hasOwnProperty("openChanRes")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.OpenChannelRes.verify(message.openChanRes);
                        if (error)
                            return "openChanRes." + error;
                    }
                }
                if (message.closeChan != null && message.hasOwnProperty("closeChan")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.CloseChannel.verify(message.closeChan);
                        if (error)
                            return "closeChan." + error;
                    }
                }
                if (message.closeChanRes != null && message.hasOwnProperty("closeChanRes")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.CloseChannelRes.verify(message.closeChanRes);
                        if (error)
                            return "closeChanRes." + error;
                    }
                }
                if (message.containerState != null && message.hasOwnProperty("containerState")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.ContainerState.verify(message.containerState);
                        if (error)
                            return "containerState." + error;
                    }
                }
                if (message.portOpen != null && message.hasOwnProperty("portOpen")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PortOpen.verify(message.portOpen);
                        if (error)
                            return "portOpen." + error;
                    }
                }
                if (message.toast != null && message.hasOwnProperty("toast")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Toast.verify(message.toast);
                        if (error)
                            return "toast." + error;
                    }
                }
                if (message.runMain != null && message.hasOwnProperty("runMain")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.RunMain.verify(message.runMain);
                        if (error)
                            return "runMain." + error;
                    }
                }
                if (message.clear != null && message.hasOwnProperty("clear")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Clear.verify(message.clear);
                        if (error)
                            return "clear." + error;
                    }
                }
                if (message["eval"] != null && message.hasOwnProperty("eval")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    if (!$util.isString(message["eval"]))
                        return "eval: string expected";
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    if (!$util.isString(message.result))
                        return "result: string expected";
                }
                if (message.input != null && message.hasOwnProperty("input")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    if (!$util.isString(message.input))
                        return "input: string expected";
                }
                if (message.output != null && message.hasOwnProperty("output")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    if (!$util.isString(message.output))
                        return "output: string expected";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    if (!$util.isString(message.error))
                        return "error: string expected";
                }
                if (message.saneTerm != null && message.hasOwnProperty("saneTerm")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.SaneTerm.verify(message.saneTerm);
                        if (error)
                            return "saneTerm." + error;
                    }
                }
                if (message.resizeTerm != null && message.hasOwnProperty("resizeTerm")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.ResizeTerm.verify(message.resizeTerm);
                        if (error)
                            return "resizeTerm." + error;
                    }
                }
                if (message.state != null && message.hasOwnProperty("state")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    switch (message.state) {
                    default:
                        return "state: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                }
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.OK.verify(message.ok);
                        if (error)
                            return "ok." + error;
                    }
                }
                if (message.persist != null && message.hasOwnProperty("persist")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.persist);
                        if (error)
                            return "persist." + error;
                    }
                }
                if (message.write != null && message.hasOwnProperty("write")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.write);
                        if (error)
                            return "write." + error;
                    }
                }
                if (message.remove != null && message.hasOwnProperty("remove")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.remove);
                        if (error)
                            return "remove." + error;
                    }
                }
                if (message.move != null && message.hasOwnProperty("move")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Move.verify(message.move);
                        if (error)
                            return "move." + error;
                    }
                }
                if (message.mkdir != null && message.hasOwnProperty("mkdir")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.mkdir);
                        if (error)
                            return "mkdir." + error;
                    }
                }
                if (message.read != null && message.hasOwnProperty("read")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.read);
                        if (error)
                            return "read." + error;
                    }
                }
                if (message.readdir != null && message.hasOwnProperty("readdir")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.readdir);
                        if (error)
                            return "readdir." + error;
                    }
                }
                if (message.files != null && message.hasOwnProperty("files")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Files.verify(message.files);
                        if (error)
                            return "files." + error;
                    }
                }
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.file);
                        if (error)
                            return "file." + error;
                    }
                }
                if (message.checkChanges != null && message.hasOwnProperty("checkChanges")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.CheckChanges.verify(message.checkChanges);
                        if (error)
                            return "checkChanges." + error;
                    }
                }
                if (message.changedFiles != null && message.hasOwnProperty("changedFiles")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Files.verify(message.changedFiles);
                        if (error)
                            return "changedFiles." + error;
                    }
                }
                if (message.lintResults != null && message.hasOwnProperty("lintResults")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.LintResults.verify(message.lintResults);
                        if (error)
                            return "lintResults." + error;
                    }
                }
                if (message.runContainedTest != null && message.hasOwnProperty("runContainedTest")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.ContainedTest.verify(message.runContainedTest);
                        if (error)
                            return "runContainedTest." + error;
                    }
                }
                if (message.testResult != null && message.hasOwnProperty("testResult")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.TestResult.verify(message.testResult);
                        if (error)
                            return "testResult." + error;
                    }
                }
                if (message.debuggerStart != null && message.hasOwnProperty("debuggerStart")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    if (!$util.isString(message.debuggerStart))
                        return "debuggerStart: string expected";
                }
                if (message.debuggerStep != null && message.hasOwnProperty("debuggerStep")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.RunMain.verify(message.debuggerStep);
                        if (error)
                            return "debuggerStep." + error;
                    }
                }
                if (message.debuggerStatus != null && message.hasOwnProperty("debuggerStatus")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.DebugStatus.verify(message.debuggerStatus);
                        if (error)
                            return "debuggerStatus." + error;
                    }
                }
                if (message.ensurePackages != null && message.hasOwnProperty("ensurePackages")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.EnsurePackages.verify(message.ensurePackages);
                        if (error)
                            return "ensurePackages." + error;
                    }
                }
                if (message.ping != null && message.hasOwnProperty("ping")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Ping.verify(message.ping);
                        if (error)
                            return "ping." + error;
                    }
                }
                if (message.pong != null && message.hasOwnProperty("pong")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Pong.verify(message.pong);
                        if (error)
                            return "pong." + error;
                    }
                }
                if (message.hello != null && message.hasOwnProperty("hello")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Hello.verify(message.hello);
                        if (error)
                            return "hello." + error;
                    }
                }
                if (message.goodbye != null && message.hasOwnProperty("goodbye")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Goodbye.verify(message.goodbye);
                        if (error)
                            return "goodbye." + error;
                    }
                }
                if (message.hint != null && message.hasOwnProperty("hint")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Hint.verify(message.hint);
                        if (error)
                            return "hint." + error;
                    }
                }
                if (message.connect != null && message.hasOwnProperty("connect")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Connect.verify(message.connect);
                        if (error)
                            return "connect." + error;
                    }
                }
                if (message.send != null && message.hasOwnProperty("send")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Send.verify(message.send);
                        if (error)
                            return "send." + error;
                    }
                }
                if (message.recv != null && message.hasOwnProperty("recv")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Recv.verify(message.recv);
                        if (error)
                            return "recv." + error;
                    }
                }
                if (message.disconnect != null && message.hasOwnProperty("disconnect")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Disconnect.verify(message.disconnect);
                        if (error)
                            return "disconnect." + error;
                    }
                }
                if (message.fileAuthReq != null && message.hasOwnProperty("fileAuthReq")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.FileAuthReq.verify(message.fileAuthReq);
                        if (error)
                            return "fileAuthReq." + error;
                    }
                }
                if (message.fileAuthRes != null && message.hasOwnProperty("fileAuthRes")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.FileAuthRes.verify(message.fileAuthRes);
                        if (error)
                            return "fileAuthRes." + error;
                    }
                }
                if (message.mutliFileAuthRes != null && message.hasOwnProperty("mutliFileAuthRes")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.MultiFileAuthRes.verify(message.mutliFileAuthRes);
                        if (error)
                            return "mutliFileAuthRes." + error;
                    }
                }
                if (message.ot != null && message.hasOwnProperty("ot")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.OTPacket.verify(message.ot);
                        if (error)
                            return "ot." + error;
                    }
                }
                if (message.otstatus != null && message.hasOwnProperty("otstatus")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.OTStatus.verify(message.otstatus);
                        if (error)
                            return "otstatus." + error;
                    }
                }
                if (message.otLinkFile != null && message.hasOwnProperty("otLinkFile")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.OTLinkFile.verify(message.otLinkFile);
                        if (error)
                            return "otLinkFile." + error;
                    }
                }
                if (message.otNewCursor != null && message.hasOwnProperty("otNewCursor")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.OTCursor.verify(message.otNewCursor);
                        if (error)
                            return "otNewCursor." + error;
                    }
                }
                if (message.otDeleteCursor != null && message.hasOwnProperty("otDeleteCursor")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.OTCursor.verify(message.otDeleteCursor);
                        if (error)
                            return "otDeleteCursor." + error;
                    }
                }
                if (message.flush != null && message.hasOwnProperty("flush")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Flush.verify(message.flush);
                        if (error)
                            return "flush." + error;
                    }
                }
                if (message.debug != null && message.hasOwnProperty("debug")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Debug.verify(message.debug);
                        if (error)
                            return "debug." + error;
                    }
                }
                if (message.startVCR != null && message.hasOwnProperty("startVCR")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.StartVCR.verify(message.startVCR);
                        if (error)
                            return "startVCR." + error;
                    }
                }
                if (message.readVCR != null && message.hasOwnProperty("readVCR")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.ReadVCR.verify(message.readVCR);
                        if (error)
                            return "readVCR." + error;
                    }
                }
                if (message.VCRLog != null && message.hasOwnProperty("VCRLog")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.VCRLog.verify(message.VCRLog);
                        if (error)
                            return "VCRLog." + error;
                    }
                }
                if (message.auth != null && message.hasOwnProperty("auth")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Auth.verify(message.auth);
                        if (error)
                            return "auth." + error;
                    }
                }
                if (message.execInfo != null && message.hasOwnProperty("execInfo")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.ExecInfo.verify(message.execInfo);
                        if (error)
                            return "execInfo." + error;
                    }
                }
                if (message.subscribe != null && message.hasOwnProperty("subscribe")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.subscribe);
                        if (error)
                            return "subscribe." + error;
                    }
                }
                if (message.eventCreated != null && message.hasOwnProperty("eventCreated")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.eventCreated);
                        if (error)
                            return "eventCreated." + error;
                    }
                }
                if (message.eventModified != null && message.hasOwnProperty("eventModified")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.eventModified);
                        if (error)
                            return "eventModified." + error;
                    }
                }
                if (message.eventDeleted != null && message.hasOwnProperty("eventDeleted")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.File.verify(message.eventDeleted);
                        if (error)
                            return "eventDeleted." + error;
                    }
                }
                if (message.eventMoved != null && message.hasOwnProperty("eventMoved")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Move.verify(message.eventMoved);
                        if (error)
                            return "eventMoved." + error;
                    }
                }
                if (message.subscribeFile != null && message.hasOwnProperty("subscribeFile")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.SubscribeFile.verify(message.subscribeFile);
                        if (error)
                            return "subscribeFile." + error;
                    }
                }
                if (message.fileEvent != null && message.hasOwnProperty("fileEvent")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.FileEvent.verify(message.fileEvent);
                        if (error)
                            return "fileEvent." + error;
                    }
                }
                if (message.roster != null && message.hasOwnProperty("roster")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Roster.verify(message.roster);
                        if (error)
                            return "roster." + error;
                    }
                }
                if (message.join != null && message.hasOwnProperty("join")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.User.verify(message.join);
                        if (error)
                            return "join." + error;
                    }
                }
                if (message.part != null && message.hasOwnProperty("part")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.User.verify(message.part);
                        if (error)
                            return "part." + error;
                    }
                }
                if (message.exec != null && message.hasOwnProperty("exec")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.Exec.verify(message.exec);
                        if (error)
                            return "exec." + error;
                    }
                }
                if (message.packageSearch != null && message.hasOwnProperty("packageSearch")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageSearch.verify(message.packageSearch);
                        if (error)
                            return "packageSearch." + error;
                    }
                }
                if (message.packageSearchResp != null && message.hasOwnProperty("packageSearchResp")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageSearchResp.verify(message.packageSearchResp);
                        if (error)
                            return "packageSearchResp." + error;
                    }
                }
                if (message.packageInfo != null && message.hasOwnProperty("packageInfo")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageInfo.verify(message.packageInfo);
                        if (error)
                            return "packageInfo." + error;
                    }
                }
                if (message.packageInfoResp != null && message.hasOwnProperty("packageInfoResp")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageInfoResp.verify(message.packageInfoResp);
                        if (error)
                            return "packageInfoResp." + error;
                    }
                }
                if (message.packageAdd != null && message.hasOwnProperty("packageAdd")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageAdd.verify(message.packageAdd);
                        if (error)
                            return "packageAdd." + error;
                    }
                }
                if (message.packageRemove != null && message.hasOwnProperty("packageRemove")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageRemove.verify(message.packageRemove);
                        if (error)
                            return "packageRemove." + error;
                    }
                }
                if (message.packageInstall != null && message.hasOwnProperty("packageInstall")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageInstall.verify(message.packageInstall);
                        if (error)
                            return "packageInstall." + error;
                    }
                }
                if (message.packageListSpecfile != null && message.hasOwnProperty("packageListSpecfile")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageListSpecfile.verify(message.packageListSpecfile);
                        if (error)
                            return "packageListSpecfile." + error;
                    }
                }
                if (message.packageListSpecfileResp != null && message.hasOwnProperty("packageListSpecfileResp")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageListSpecfileResp.verify(message.packageListSpecfileResp);
                        if (error)
                            return "packageListSpecfileResp." + error;
                    }
                }
                if (message.packageCacheSave != null && message.hasOwnProperty("packageCacheSave")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.PackageCacheSave.verify(message.packageCacheSave);
                        if (error)
                            return "packageCacheSave." + error;
                    }
                }
                if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.ChatMessage.verify(message.chatMessage);
                        if (error)
                            return "chatMessage." + error;
                    }
                }
                if (message.chatTyping != null && message.hasOwnProperty("chatTyping")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.ChatTyping.verify(message.chatTyping);
                        if (error)
                            return "chatTyping." + error;
                    }
                }
                if (message.chatScrollback != null && message.hasOwnProperty("chatScrollback")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        var error = $root.replitproto.ChatScrollback.verify(message.chatScrollback);
                        if (error)
                            return "chatScrollback." + error;
                    }
                }
                if (message.ref != null && message.hasOwnProperty("ref"))
                    if (!$util.isString(message.ref))
                        return "ref: string expected";
                return null;
            };
    
            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Command
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Command} Command
             */
            Command.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Command)
                    return object;
                var message = new $root.replitproto.Command();
                if (object.channel != null)
                    message.channel = object.channel | 0;
                if (object.session != null)
                    message.session = object.session | 0;
                if (object.openChan != null) {
                    if (typeof object.openChan !== "object")
                        throw TypeError(".replitproto.Command.openChan: object expected");
                    message.openChan = $root.replitproto.OpenChannel.fromObject(object.openChan);
                }
                if (object.openChanRes != null) {
                    if (typeof object.openChanRes !== "object")
                        throw TypeError(".replitproto.Command.openChanRes: object expected");
                    message.openChanRes = $root.replitproto.OpenChannelRes.fromObject(object.openChanRes);
                }
                if (object.closeChan != null) {
                    if (typeof object.closeChan !== "object")
                        throw TypeError(".replitproto.Command.closeChan: object expected");
                    message.closeChan = $root.replitproto.CloseChannel.fromObject(object.closeChan);
                }
                if (object.closeChanRes != null) {
                    if (typeof object.closeChanRes !== "object")
                        throw TypeError(".replitproto.Command.closeChanRes: object expected");
                    message.closeChanRes = $root.replitproto.CloseChannelRes.fromObject(object.closeChanRes);
                }
                if (object.containerState != null) {
                    if (typeof object.containerState !== "object")
                        throw TypeError(".replitproto.Command.containerState: object expected");
                    message.containerState = $root.replitproto.ContainerState.fromObject(object.containerState);
                }
                if (object.portOpen != null) {
                    if (typeof object.portOpen !== "object")
                        throw TypeError(".replitproto.Command.portOpen: object expected");
                    message.portOpen = $root.replitproto.PortOpen.fromObject(object.portOpen);
                }
                if (object.toast != null) {
                    if (typeof object.toast !== "object")
                        throw TypeError(".replitproto.Command.toast: object expected");
                    message.toast = $root.replitproto.Toast.fromObject(object.toast);
                }
                if (object.runMain != null) {
                    if (typeof object.runMain !== "object")
                        throw TypeError(".replitproto.Command.runMain: object expected");
                    message.runMain = $root.replitproto.RunMain.fromObject(object.runMain);
                }
                if (object.clear != null) {
                    if (typeof object.clear !== "object")
                        throw TypeError(".replitproto.Command.clear: object expected");
                    message.clear = $root.replitproto.Clear.fromObject(object.clear);
                }
                if (object["eval"] != null)
                    message["eval"] = String(object["eval"]);
                if (object.result != null)
                    message.result = String(object.result);
                if (object.input != null)
                    message.input = String(object.input);
                if (object.output != null)
                    message.output = String(object.output);
                if (object.error != null)
                    message.error = String(object.error);
                if (object.saneTerm != null) {
                    if (typeof object.saneTerm !== "object")
                        throw TypeError(".replitproto.Command.saneTerm: object expected");
                    message.saneTerm = $root.replitproto.SaneTerm.fromObject(object.saneTerm);
                }
                if (object.resizeTerm != null) {
                    if (typeof object.resizeTerm !== "object")
                        throw TypeError(".replitproto.Command.resizeTerm: object expected");
                    message.resizeTerm = $root.replitproto.ResizeTerm.fromObject(object.resizeTerm);
                }
                switch (object.state) {
                case "Stopped":
                case 0:
                    message.state = 0;
                    break;
                case "Running":
                case 1:
                    message.state = 1;
                    break;
                }
                if (object.ok != null) {
                    if (typeof object.ok !== "object")
                        throw TypeError(".replitproto.Command.ok: object expected");
                    message.ok = $root.replitproto.OK.fromObject(object.ok);
                }
                if (object.persist != null) {
                    if (typeof object.persist !== "object")
                        throw TypeError(".replitproto.Command.persist: object expected");
                    message.persist = $root.replitproto.File.fromObject(object.persist);
                }
                if (object.write != null) {
                    if (typeof object.write !== "object")
                        throw TypeError(".replitproto.Command.write: object expected");
                    message.write = $root.replitproto.File.fromObject(object.write);
                }
                if (object.remove != null) {
                    if (typeof object.remove !== "object")
                        throw TypeError(".replitproto.Command.remove: object expected");
                    message.remove = $root.replitproto.File.fromObject(object.remove);
                }
                if (object.move != null) {
                    if (typeof object.move !== "object")
                        throw TypeError(".replitproto.Command.move: object expected");
                    message.move = $root.replitproto.Move.fromObject(object.move);
                }
                if (object.mkdir != null) {
                    if (typeof object.mkdir !== "object")
                        throw TypeError(".replitproto.Command.mkdir: object expected");
                    message.mkdir = $root.replitproto.File.fromObject(object.mkdir);
                }
                if (object.read != null) {
                    if (typeof object.read !== "object")
                        throw TypeError(".replitproto.Command.read: object expected");
                    message.read = $root.replitproto.File.fromObject(object.read);
                }
                if (object.readdir != null) {
                    if (typeof object.readdir !== "object")
                        throw TypeError(".replitproto.Command.readdir: object expected");
                    message.readdir = $root.replitproto.File.fromObject(object.readdir);
                }
                if (object.files != null) {
                    if (typeof object.files !== "object")
                        throw TypeError(".replitproto.Command.files: object expected");
                    message.files = $root.replitproto.Files.fromObject(object.files);
                }
                if (object.file != null) {
                    if (typeof object.file !== "object")
                        throw TypeError(".replitproto.Command.file: object expected");
                    message.file = $root.replitproto.File.fromObject(object.file);
                }
                if (object.checkChanges != null) {
                    if (typeof object.checkChanges !== "object")
                        throw TypeError(".replitproto.Command.checkChanges: object expected");
                    message.checkChanges = $root.replitproto.CheckChanges.fromObject(object.checkChanges);
                }
                if (object.changedFiles != null) {
                    if (typeof object.changedFiles !== "object")
                        throw TypeError(".replitproto.Command.changedFiles: object expected");
                    message.changedFiles = $root.replitproto.Files.fromObject(object.changedFiles);
                }
                if (object.lintResults != null) {
                    if (typeof object.lintResults !== "object")
                        throw TypeError(".replitproto.Command.lintResults: object expected");
                    message.lintResults = $root.replitproto.LintResults.fromObject(object.lintResults);
                }
                if (object.runContainedTest != null) {
                    if (typeof object.runContainedTest !== "object")
                        throw TypeError(".replitproto.Command.runContainedTest: object expected");
                    message.runContainedTest = $root.replitproto.ContainedTest.fromObject(object.runContainedTest);
                }
                if (object.testResult != null) {
                    if (typeof object.testResult !== "object")
                        throw TypeError(".replitproto.Command.testResult: object expected");
                    message.testResult = $root.replitproto.TestResult.fromObject(object.testResult);
                }
                if (object.debuggerStart != null)
                    message.debuggerStart = String(object.debuggerStart);
                if (object.debuggerStep != null) {
                    if (typeof object.debuggerStep !== "object")
                        throw TypeError(".replitproto.Command.debuggerStep: object expected");
                    message.debuggerStep = $root.replitproto.RunMain.fromObject(object.debuggerStep);
                }
                if (object.debuggerStatus != null) {
                    if (typeof object.debuggerStatus !== "object")
                        throw TypeError(".replitproto.Command.debuggerStatus: object expected");
                    message.debuggerStatus = $root.replitproto.DebugStatus.fromObject(object.debuggerStatus);
                }
                if (object.ensurePackages != null) {
                    if (typeof object.ensurePackages !== "object")
                        throw TypeError(".replitproto.Command.ensurePackages: object expected");
                    message.ensurePackages = $root.replitproto.EnsurePackages.fromObject(object.ensurePackages);
                }
                if (object.ping != null) {
                    if (typeof object.ping !== "object")
                        throw TypeError(".replitproto.Command.ping: object expected");
                    message.ping = $root.replitproto.Ping.fromObject(object.ping);
                }
                if (object.pong != null) {
                    if (typeof object.pong !== "object")
                        throw TypeError(".replitproto.Command.pong: object expected");
                    message.pong = $root.replitproto.Pong.fromObject(object.pong);
                }
                if (object.hello != null) {
                    if (typeof object.hello !== "object")
                        throw TypeError(".replitproto.Command.hello: object expected");
                    message.hello = $root.replitproto.Hello.fromObject(object.hello);
                }
                if (object.goodbye != null) {
                    if (typeof object.goodbye !== "object")
                        throw TypeError(".replitproto.Command.goodbye: object expected");
                    message.goodbye = $root.replitproto.Goodbye.fromObject(object.goodbye);
                }
                if (object.hint != null) {
                    if (typeof object.hint !== "object")
                        throw TypeError(".replitproto.Command.hint: object expected");
                    message.hint = $root.replitproto.Hint.fromObject(object.hint);
                }
                if (object.connect != null) {
                    if (typeof object.connect !== "object")
                        throw TypeError(".replitproto.Command.connect: object expected");
                    message.connect = $root.replitproto.Connect.fromObject(object.connect);
                }
                if (object.send != null) {
                    if (typeof object.send !== "object")
                        throw TypeError(".replitproto.Command.send: object expected");
                    message.send = $root.replitproto.Send.fromObject(object.send);
                }
                if (object.recv != null) {
                    if (typeof object.recv !== "object")
                        throw TypeError(".replitproto.Command.recv: object expected");
                    message.recv = $root.replitproto.Recv.fromObject(object.recv);
                }
                if (object.disconnect != null) {
                    if (typeof object.disconnect !== "object")
                        throw TypeError(".replitproto.Command.disconnect: object expected");
                    message.disconnect = $root.replitproto.Disconnect.fromObject(object.disconnect);
                }
                if (object.fileAuthReq != null) {
                    if (typeof object.fileAuthReq !== "object")
                        throw TypeError(".replitproto.Command.fileAuthReq: object expected");
                    message.fileAuthReq = $root.replitproto.FileAuthReq.fromObject(object.fileAuthReq);
                }
                if (object.fileAuthRes != null) {
                    if (typeof object.fileAuthRes !== "object")
                        throw TypeError(".replitproto.Command.fileAuthRes: object expected");
                    message.fileAuthRes = $root.replitproto.FileAuthRes.fromObject(object.fileAuthRes);
                }
                if (object.mutliFileAuthRes != null) {
                    if (typeof object.mutliFileAuthRes !== "object")
                        throw TypeError(".replitproto.Command.mutliFileAuthRes: object expected");
                    message.mutliFileAuthRes = $root.replitproto.MultiFileAuthRes.fromObject(object.mutliFileAuthRes);
                }
                if (object.ot != null) {
                    if (typeof object.ot !== "object")
                        throw TypeError(".replitproto.Command.ot: object expected");
                    message.ot = $root.replitproto.OTPacket.fromObject(object.ot);
                }
                if (object.otstatus != null) {
                    if (typeof object.otstatus !== "object")
                        throw TypeError(".replitproto.Command.otstatus: object expected");
                    message.otstatus = $root.replitproto.OTStatus.fromObject(object.otstatus);
                }
                if (object.otLinkFile != null) {
                    if (typeof object.otLinkFile !== "object")
                        throw TypeError(".replitproto.Command.otLinkFile: object expected");
                    message.otLinkFile = $root.replitproto.OTLinkFile.fromObject(object.otLinkFile);
                }
                if (object.otNewCursor != null) {
                    if (typeof object.otNewCursor !== "object")
                        throw TypeError(".replitproto.Command.otNewCursor: object expected");
                    message.otNewCursor = $root.replitproto.OTCursor.fromObject(object.otNewCursor);
                }
                if (object.otDeleteCursor != null) {
                    if (typeof object.otDeleteCursor !== "object")
                        throw TypeError(".replitproto.Command.otDeleteCursor: object expected");
                    message.otDeleteCursor = $root.replitproto.OTCursor.fromObject(object.otDeleteCursor);
                }
                if (object.flush != null) {
                    if (typeof object.flush !== "object")
                        throw TypeError(".replitproto.Command.flush: object expected");
                    message.flush = $root.replitproto.Flush.fromObject(object.flush);
                }
                if (object.debug != null) {
                    if (typeof object.debug !== "object")
                        throw TypeError(".replitproto.Command.debug: object expected");
                    message.debug = $root.replitproto.Debug.fromObject(object.debug);
                }
                if (object.startVCR != null) {
                    if (typeof object.startVCR !== "object")
                        throw TypeError(".replitproto.Command.startVCR: object expected");
                    message.startVCR = $root.replitproto.StartVCR.fromObject(object.startVCR);
                }
                if (object.readVCR != null) {
                    if (typeof object.readVCR !== "object")
                        throw TypeError(".replitproto.Command.readVCR: object expected");
                    message.readVCR = $root.replitproto.ReadVCR.fromObject(object.readVCR);
                }
                if (object.VCRLog != null) {
                    if (typeof object.VCRLog !== "object")
                        throw TypeError(".replitproto.Command.VCRLog: object expected");
                    message.VCRLog = $root.replitproto.VCRLog.fromObject(object.VCRLog);
                }
                if (object.auth != null) {
                    if (typeof object.auth !== "object")
                        throw TypeError(".replitproto.Command.auth: object expected");
                    message.auth = $root.replitproto.Auth.fromObject(object.auth);
                }
                if (object.execInfo != null) {
                    if (typeof object.execInfo !== "object")
                        throw TypeError(".replitproto.Command.execInfo: object expected");
                    message.execInfo = $root.replitproto.ExecInfo.fromObject(object.execInfo);
                }
                if (object.subscribe != null) {
                    if (typeof object.subscribe !== "object")
                        throw TypeError(".replitproto.Command.subscribe: object expected");
                    message.subscribe = $root.replitproto.File.fromObject(object.subscribe);
                }
                if (object.eventCreated != null) {
                    if (typeof object.eventCreated !== "object")
                        throw TypeError(".replitproto.Command.eventCreated: object expected");
                    message.eventCreated = $root.replitproto.File.fromObject(object.eventCreated);
                }
                if (object.eventModified != null) {
                    if (typeof object.eventModified !== "object")
                        throw TypeError(".replitproto.Command.eventModified: object expected");
                    message.eventModified = $root.replitproto.File.fromObject(object.eventModified);
                }
                if (object.eventDeleted != null) {
                    if (typeof object.eventDeleted !== "object")
                        throw TypeError(".replitproto.Command.eventDeleted: object expected");
                    message.eventDeleted = $root.replitproto.File.fromObject(object.eventDeleted);
                }
                if (object.eventMoved != null) {
                    if (typeof object.eventMoved !== "object")
                        throw TypeError(".replitproto.Command.eventMoved: object expected");
                    message.eventMoved = $root.replitproto.Move.fromObject(object.eventMoved);
                }
                if (object.subscribeFile != null) {
                    if (typeof object.subscribeFile !== "object")
                        throw TypeError(".replitproto.Command.subscribeFile: object expected");
                    message.subscribeFile = $root.replitproto.SubscribeFile.fromObject(object.subscribeFile);
                }
                if (object.fileEvent != null) {
                    if (typeof object.fileEvent !== "object")
                        throw TypeError(".replitproto.Command.fileEvent: object expected");
                    message.fileEvent = $root.replitproto.FileEvent.fromObject(object.fileEvent);
                }
                if (object.roster != null) {
                    if (typeof object.roster !== "object")
                        throw TypeError(".replitproto.Command.roster: object expected");
                    message.roster = $root.replitproto.Roster.fromObject(object.roster);
                }
                if (object.join != null) {
                    if (typeof object.join !== "object")
                        throw TypeError(".replitproto.Command.join: object expected");
                    message.join = $root.replitproto.User.fromObject(object.join);
                }
                if (object.part != null) {
                    if (typeof object.part !== "object")
                        throw TypeError(".replitproto.Command.part: object expected");
                    message.part = $root.replitproto.User.fromObject(object.part);
                }
                if (object.exec != null) {
                    if (typeof object.exec !== "object")
                        throw TypeError(".replitproto.Command.exec: object expected");
                    message.exec = $root.replitproto.Exec.fromObject(object.exec);
                }
                if (object.packageSearch != null) {
                    if (typeof object.packageSearch !== "object")
                        throw TypeError(".replitproto.Command.packageSearch: object expected");
                    message.packageSearch = $root.replitproto.PackageSearch.fromObject(object.packageSearch);
                }
                if (object.packageSearchResp != null) {
                    if (typeof object.packageSearchResp !== "object")
                        throw TypeError(".replitproto.Command.packageSearchResp: object expected");
                    message.packageSearchResp = $root.replitproto.PackageSearchResp.fromObject(object.packageSearchResp);
                }
                if (object.packageInfo != null) {
                    if (typeof object.packageInfo !== "object")
                        throw TypeError(".replitproto.Command.packageInfo: object expected");
                    message.packageInfo = $root.replitproto.PackageInfo.fromObject(object.packageInfo);
                }
                if (object.packageInfoResp != null) {
                    if (typeof object.packageInfoResp !== "object")
                        throw TypeError(".replitproto.Command.packageInfoResp: object expected");
                    message.packageInfoResp = $root.replitproto.PackageInfoResp.fromObject(object.packageInfoResp);
                }
                if (object.packageAdd != null) {
                    if (typeof object.packageAdd !== "object")
                        throw TypeError(".replitproto.Command.packageAdd: object expected");
                    message.packageAdd = $root.replitproto.PackageAdd.fromObject(object.packageAdd);
                }
                if (object.packageRemove != null) {
                    if (typeof object.packageRemove !== "object")
                        throw TypeError(".replitproto.Command.packageRemove: object expected");
                    message.packageRemove = $root.replitproto.PackageRemove.fromObject(object.packageRemove);
                }
                if (object.packageInstall != null) {
                    if (typeof object.packageInstall !== "object")
                        throw TypeError(".replitproto.Command.packageInstall: object expected");
                    message.packageInstall = $root.replitproto.PackageInstall.fromObject(object.packageInstall);
                }
                if (object.packageListSpecfile != null) {
                    if (typeof object.packageListSpecfile !== "object")
                        throw TypeError(".replitproto.Command.packageListSpecfile: object expected");
                    message.packageListSpecfile = $root.replitproto.PackageListSpecfile.fromObject(object.packageListSpecfile);
                }
                if (object.packageListSpecfileResp != null) {
                    if (typeof object.packageListSpecfileResp !== "object")
                        throw TypeError(".replitproto.Command.packageListSpecfileResp: object expected");
                    message.packageListSpecfileResp = $root.replitproto.PackageListSpecfileResp.fromObject(object.packageListSpecfileResp);
                }
                if (object.packageCacheSave != null) {
                    if (typeof object.packageCacheSave !== "object")
                        throw TypeError(".replitproto.Command.packageCacheSave: object expected");
                    message.packageCacheSave = $root.replitproto.PackageCacheSave.fromObject(object.packageCacheSave);
                }
                if (object.chatMessage != null) {
                    if (typeof object.chatMessage !== "object")
                        throw TypeError(".replitproto.Command.chatMessage: object expected");
                    message.chatMessage = $root.replitproto.ChatMessage.fromObject(object.chatMessage);
                }
                if (object.chatTyping != null) {
                    if (typeof object.chatTyping !== "object")
                        throw TypeError(".replitproto.Command.chatTyping: object expected");
                    message.chatTyping = $root.replitproto.ChatTyping.fromObject(object.chatTyping);
                }
                if (object.chatScrollback != null) {
                    if (typeof object.chatScrollback !== "object")
                        throw TypeError(".replitproto.Command.chatScrollback: object expected");
                    message.chatScrollback = $root.replitproto.ChatScrollback.fromObject(object.chatScrollback);
                }
                if (object.ref != null)
                    message.ref = String(object.ref);
                return message;
            };
    
            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Command
             * @static
             * @param {replitproto.Command} message Command
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Command.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.channel = 0;
                    object.session = 0;
                    object.ref = "";
                }
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                if (message.session != null && message.hasOwnProperty("session"))
                    object.session = message.session;
                if (message.openChan != null && message.hasOwnProperty("openChan")) {
                    object.openChan = $root.replitproto.OpenChannel.toObject(message.openChan, options);
                    if (options.oneofs)
                        object.body = "openChan";
                }
                if (message.openChanRes != null && message.hasOwnProperty("openChanRes")) {
                    object.openChanRes = $root.replitproto.OpenChannelRes.toObject(message.openChanRes, options);
                    if (options.oneofs)
                        object.body = "openChanRes";
                }
                if (message.closeChan != null && message.hasOwnProperty("closeChan")) {
                    object.closeChan = $root.replitproto.CloseChannel.toObject(message.closeChan, options);
                    if (options.oneofs)
                        object.body = "closeChan";
                }
                if (message.closeChanRes != null && message.hasOwnProperty("closeChanRes")) {
                    object.closeChanRes = $root.replitproto.CloseChannelRes.toObject(message.closeChanRes, options);
                    if (options.oneofs)
                        object.body = "closeChanRes";
                }
                if (message.containerState != null && message.hasOwnProperty("containerState")) {
                    object.containerState = $root.replitproto.ContainerState.toObject(message.containerState, options);
                    if (options.oneofs)
                        object.body = "containerState";
                }
                if (message.portOpen != null && message.hasOwnProperty("portOpen")) {
                    object.portOpen = $root.replitproto.PortOpen.toObject(message.portOpen, options);
                    if (options.oneofs)
                        object.body = "portOpen";
                }
                if (message.toast != null && message.hasOwnProperty("toast")) {
                    object.toast = $root.replitproto.Toast.toObject(message.toast, options);
                    if (options.oneofs)
                        object.body = "toast";
                }
                if (message.runMain != null && message.hasOwnProperty("runMain")) {
                    object.runMain = $root.replitproto.RunMain.toObject(message.runMain, options);
                    if (options.oneofs)
                        object.body = "runMain";
                }
                if (message.clear != null && message.hasOwnProperty("clear")) {
                    object.clear = $root.replitproto.Clear.toObject(message.clear, options);
                    if (options.oneofs)
                        object.body = "clear";
                }
                if (message["eval"] != null && message.hasOwnProperty("eval")) {
                    object["eval"] = message["eval"];
                    if (options.oneofs)
                        object.body = "eval";
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    object.result = message.result;
                    if (options.oneofs)
                        object.body = "result";
                }
                if (message.input != null && message.hasOwnProperty("input")) {
                    object.input = message.input;
                    if (options.oneofs)
                        object.body = "input";
                }
                if (message.output != null && message.hasOwnProperty("output")) {
                    object.output = message.output;
                    if (options.oneofs)
                        object.body = "output";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = message.error;
                    if (options.oneofs)
                        object.body = "error";
                }
                if (message.saneTerm != null && message.hasOwnProperty("saneTerm")) {
                    object.saneTerm = $root.replitproto.SaneTerm.toObject(message.saneTerm, options);
                    if (options.oneofs)
                        object.body = "saneTerm";
                }
                if (message.resizeTerm != null && message.hasOwnProperty("resizeTerm")) {
                    object.resizeTerm = $root.replitproto.ResizeTerm.toObject(message.resizeTerm, options);
                    if (options.oneofs)
                        object.body = "resizeTerm";
                }
                if (message.state != null && message.hasOwnProperty("state")) {
                    object.state = options.enums === String ? $root.replitproto.State[message.state] : message.state;
                    if (options.oneofs)
                        object.body = "state";
                }
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    object.ok = $root.replitproto.OK.toObject(message.ok, options);
                    if (options.oneofs)
                        object.body = "ok";
                }
                if (message.persist != null && message.hasOwnProperty("persist")) {
                    object.persist = $root.replitproto.File.toObject(message.persist, options);
                    if (options.oneofs)
                        object.body = "persist";
                }
                if (message.write != null && message.hasOwnProperty("write")) {
                    object.write = $root.replitproto.File.toObject(message.write, options);
                    if (options.oneofs)
                        object.body = "write";
                }
                if (message.remove != null && message.hasOwnProperty("remove")) {
                    object.remove = $root.replitproto.File.toObject(message.remove, options);
                    if (options.oneofs)
                        object.body = "remove";
                }
                if (message.move != null && message.hasOwnProperty("move")) {
                    object.move = $root.replitproto.Move.toObject(message.move, options);
                    if (options.oneofs)
                        object.body = "move";
                }
                if (message.read != null && message.hasOwnProperty("read")) {
                    object.read = $root.replitproto.File.toObject(message.read, options);
                    if (options.oneofs)
                        object.body = "read";
                }
                if (message.readdir != null && message.hasOwnProperty("readdir")) {
                    object.readdir = $root.replitproto.File.toObject(message.readdir, options);
                    if (options.oneofs)
                        object.body = "readdir";
                }
                if (message.files != null && message.hasOwnProperty("files")) {
                    object.files = $root.replitproto.Files.toObject(message.files, options);
                    if (options.oneofs)
                        object.body = "files";
                }
                if (message.mkdir != null && message.hasOwnProperty("mkdir")) {
                    object.mkdir = $root.replitproto.File.toObject(message.mkdir, options);
                    if (options.oneofs)
                        object.body = "mkdir";
                }
                if (message.file != null && message.hasOwnProperty("file")) {
                    object.file = $root.replitproto.File.toObject(message.file, options);
                    if (options.oneofs)
                        object.body = "file";
                }
                if (message.checkChanges != null && message.hasOwnProperty("checkChanges")) {
                    object.checkChanges = $root.replitproto.CheckChanges.toObject(message.checkChanges, options);
                    if (options.oneofs)
                        object.body = "checkChanges";
                }
                if (message.changedFiles != null && message.hasOwnProperty("changedFiles")) {
                    object.changedFiles = $root.replitproto.Files.toObject(message.changedFiles, options);
                    if (options.oneofs)
                        object.body = "changedFiles";
                }
                if (message.lintResults != null && message.hasOwnProperty("lintResults")) {
                    object.lintResults = $root.replitproto.LintResults.toObject(message.lintResults, options);
                    if (options.oneofs)
                        object.body = "lintResults";
                }
                if (message.runContainedTest != null && message.hasOwnProperty("runContainedTest")) {
                    object.runContainedTest = $root.replitproto.ContainedTest.toObject(message.runContainedTest, options);
                    if (options.oneofs)
                        object.body = "runContainedTest";
                }
                if (message.testResult != null && message.hasOwnProperty("testResult")) {
                    object.testResult = $root.replitproto.TestResult.toObject(message.testResult, options);
                    if (options.oneofs)
                        object.body = "testResult";
                }
                if (message.debuggerStart != null && message.hasOwnProperty("debuggerStart")) {
                    object.debuggerStart = message.debuggerStart;
                    if (options.oneofs)
                        object.body = "debuggerStart";
                }
                if (message.debuggerStep != null && message.hasOwnProperty("debuggerStep")) {
                    object.debuggerStep = $root.replitproto.RunMain.toObject(message.debuggerStep, options);
                    if (options.oneofs)
                        object.body = "debuggerStep";
                }
                if (message.debuggerStatus != null && message.hasOwnProperty("debuggerStatus")) {
                    object.debuggerStatus = $root.replitproto.DebugStatus.toObject(message.debuggerStatus, options);
                    if (options.oneofs)
                        object.body = "debuggerStatus";
                }
                if (message.ensurePackages != null && message.hasOwnProperty("ensurePackages")) {
                    object.ensurePackages = $root.replitproto.EnsurePackages.toObject(message.ensurePackages, options);
                    if (options.oneofs)
                        object.body = "ensurePackages";
                }
                if (message.ping != null && message.hasOwnProperty("ping")) {
                    object.ping = $root.replitproto.Ping.toObject(message.ping, options);
                    if (options.oneofs)
                        object.body = "ping";
                }
                if (message.pong != null && message.hasOwnProperty("pong")) {
                    object.pong = $root.replitproto.Pong.toObject(message.pong, options);
                    if (options.oneofs)
                        object.body = "pong";
                }
                if (message.hello != null && message.hasOwnProperty("hello")) {
                    object.hello = $root.replitproto.Hello.toObject(message.hello, options);
                    if (options.oneofs)
                        object.body = "hello";
                }
                if (message.goodbye != null && message.hasOwnProperty("goodbye")) {
                    object.goodbye = $root.replitproto.Goodbye.toObject(message.goodbye, options);
                    if (options.oneofs)
                        object.body = "goodbye";
                }
                if (message.hint != null && message.hasOwnProperty("hint")) {
                    object.hint = $root.replitproto.Hint.toObject(message.hint, options);
                    if (options.oneofs)
                        object.body = "hint";
                }
                if (message.connect != null && message.hasOwnProperty("connect")) {
                    object.connect = $root.replitproto.Connect.toObject(message.connect, options);
                    if (options.oneofs)
                        object.body = "connect";
                }
                if (message.send != null && message.hasOwnProperty("send")) {
                    object.send = $root.replitproto.Send.toObject(message.send, options);
                    if (options.oneofs)
                        object.body = "send";
                }
                if (message.recv != null && message.hasOwnProperty("recv")) {
                    object.recv = $root.replitproto.Recv.toObject(message.recv, options);
                    if (options.oneofs)
                        object.body = "recv";
                }
                if (message.disconnect != null && message.hasOwnProperty("disconnect")) {
                    object.disconnect = $root.replitproto.Disconnect.toObject(message.disconnect, options);
                    if (options.oneofs)
                        object.body = "disconnect";
                }
                if (message.fileAuthReq != null && message.hasOwnProperty("fileAuthReq")) {
                    object.fileAuthReq = $root.replitproto.FileAuthReq.toObject(message.fileAuthReq, options);
                    if (options.oneofs)
                        object.body = "fileAuthReq";
                }
                if (message.fileAuthRes != null && message.hasOwnProperty("fileAuthRes")) {
                    object.fileAuthRes = $root.replitproto.FileAuthRes.toObject(message.fileAuthRes, options);
                    if (options.oneofs)
                        object.body = "fileAuthRes";
                }
                if (message.mutliFileAuthRes != null && message.hasOwnProperty("mutliFileAuthRes")) {
                    object.mutliFileAuthRes = $root.replitproto.MultiFileAuthRes.toObject(message.mutliFileAuthRes, options);
                    if (options.oneofs)
                        object.body = "mutliFileAuthRes";
                }
                if (message.ot != null && message.hasOwnProperty("ot")) {
                    object.ot = $root.replitproto.OTPacket.toObject(message.ot, options);
                    if (options.oneofs)
                        object.body = "ot";
                }
                if (message.otstatus != null && message.hasOwnProperty("otstatus")) {
                    object.otstatus = $root.replitproto.OTStatus.toObject(message.otstatus, options);
                    if (options.oneofs)
                        object.body = "otstatus";
                }
                if (message.otLinkFile != null && message.hasOwnProperty("otLinkFile")) {
                    object.otLinkFile = $root.replitproto.OTLinkFile.toObject(message.otLinkFile, options);
                    if (options.oneofs)
                        object.body = "otLinkFile";
                }
                if (message.otNewCursor != null && message.hasOwnProperty("otNewCursor")) {
                    object.otNewCursor = $root.replitproto.OTCursor.toObject(message.otNewCursor, options);
                    if (options.oneofs)
                        object.body = "otNewCursor";
                }
                if (message.otDeleteCursor != null && message.hasOwnProperty("otDeleteCursor")) {
                    object.otDeleteCursor = $root.replitproto.OTCursor.toObject(message.otDeleteCursor, options);
                    if (options.oneofs)
                        object.body = "otDeleteCursor";
                }
                if (message.debug != null && message.hasOwnProperty("debug")) {
                    object.debug = $root.replitproto.Debug.toObject(message.debug, options);
                    if (options.oneofs)
                        object.body = "debug";
                }
                if (message.startVCR != null && message.hasOwnProperty("startVCR")) {
                    object.startVCR = $root.replitproto.StartVCR.toObject(message.startVCR, options);
                    if (options.oneofs)
                        object.body = "startVCR";
                }
                if (message.readVCR != null && message.hasOwnProperty("readVCR")) {
                    object.readVCR = $root.replitproto.ReadVCR.toObject(message.readVCR, options);
                    if (options.oneofs)
                        object.body = "readVCR";
                }
                if (message.VCRLog != null && message.hasOwnProperty("VCRLog")) {
                    object.VCRLog = $root.replitproto.VCRLog.toObject(message.VCRLog, options);
                    if (options.oneofs)
                        object.body = "VCRLog";
                }
                if (message.auth != null && message.hasOwnProperty("auth")) {
                    object.auth = $root.replitproto.Auth.toObject(message.auth, options);
                    if (options.oneofs)
                        object.body = "auth";
                }
                if (message.execInfo != null && message.hasOwnProperty("execInfo")) {
                    object.execInfo = $root.replitproto.ExecInfo.toObject(message.execInfo, options);
                    if (options.oneofs)
                        object.body = "execInfo";
                }
                if (message.subscribe != null && message.hasOwnProperty("subscribe")) {
                    object.subscribe = $root.replitproto.File.toObject(message.subscribe, options);
                    if (options.oneofs)
                        object.body = "subscribe";
                }
                if (message.flush != null && message.hasOwnProperty("flush")) {
                    object.flush = $root.replitproto.Flush.toObject(message.flush, options);
                    if (options.oneofs)
                        object.body = "flush";
                }
                if (message.eventCreated != null && message.hasOwnProperty("eventCreated")) {
                    object.eventCreated = $root.replitproto.File.toObject(message.eventCreated, options);
                    if (options.oneofs)
                        object.body = "eventCreated";
                }
                if (message.eventModified != null && message.hasOwnProperty("eventModified")) {
                    object.eventModified = $root.replitproto.File.toObject(message.eventModified, options);
                    if (options.oneofs)
                        object.body = "eventModified";
                }
                if (message.eventDeleted != null && message.hasOwnProperty("eventDeleted")) {
                    object.eventDeleted = $root.replitproto.File.toObject(message.eventDeleted, options);
                    if (options.oneofs)
                        object.body = "eventDeleted";
                }
                if (message.eventMoved != null && message.hasOwnProperty("eventMoved")) {
                    object.eventMoved = $root.replitproto.Move.toObject(message.eventMoved, options);
                    if (options.oneofs)
                        object.body = "eventMoved";
                }
                if (message.subscribeFile != null && message.hasOwnProperty("subscribeFile")) {
                    object.subscribeFile = $root.replitproto.SubscribeFile.toObject(message.subscribeFile, options);
                    if (options.oneofs)
                        object.body = "subscribeFile";
                }
                if (message.fileEvent != null && message.hasOwnProperty("fileEvent")) {
                    object.fileEvent = $root.replitproto.FileEvent.toObject(message.fileEvent, options);
                    if (options.oneofs)
                        object.body = "fileEvent";
                }
                if (message.roster != null && message.hasOwnProperty("roster")) {
                    object.roster = $root.replitproto.Roster.toObject(message.roster, options);
                    if (options.oneofs)
                        object.body = "roster";
                }
                if (message.join != null && message.hasOwnProperty("join")) {
                    object.join = $root.replitproto.User.toObject(message.join, options);
                    if (options.oneofs)
                        object.body = "join";
                }
                if (message.part != null && message.hasOwnProperty("part")) {
                    object.part = $root.replitproto.User.toObject(message.part, options);
                    if (options.oneofs)
                        object.body = "part";
                }
                if (message.exec != null && message.hasOwnProperty("exec")) {
                    object.exec = $root.replitproto.Exec.toObject(message.exec, options);
                    if (options.oneofs)
                        object.body = "exec";
                }
                if (message.packageSearch != null && message.hasOwnProperty("packageSearch")) {
                    object.packageSearch = $root.replitproto.PackageSearch.toObject(message.packageSearch, options);
                    if (options.oneofs)
                        object.body = "packageSearch";
                }
                if (message.packageSearchResp != null && message.hasOwnProperty("packageSearchResp")) {
                    object.packageSearchResp = $root.replitproto.PackageSearchResp.toObject(message.packageSearchResp, options);
                    if (options.oneofs)
                        object.body = "packageSearchResp";
                }
                if (message.packageInfo != null && message.hasOwnProperty("packageInfo")) {
                    object.packageInfo = $root.replitproto.PackageInfo.toObject(message.packageInfo, options);
                    if (options.oneofs)
                        object.body = "packageInfo";
                }
                if (message.packageInfoResp != null && message.hasOwnProperty("packageInfoResp")) {
                    object.packageInfoResp = $root.replitproto.PackageInfoResp.toObject(message.packageInfoResp, options);
                    if (options.oneofs)
                        object.body = "packageInfoResp";
                }
                if (message.packageAdd != null && message.hasOwnProperty("packageAdd")) {
                    object.packageAdd = $root.replitproto.PackageAdd.toObject(message.packageAdd, options);
                    if (options.oneofs)
                        object.body = "packageAdd";
                }
                if (message.packageRemove != null && message.hasOwnProperty("packageRemove")) {
                    object.packageRemove = $root.replitproto.PackageRemove.toObject(message.packageRemove, options);
                    if (options.oneofs)
                        object.body = "packageRemove";
                }
                if (message.packageInstall != null && message.hasOwnProperty("packageInstall")) {
                    object.packageInstall = $root.replitproto.PackageInstall.toObject(message.packageInstall, options);
                    if (options.oneofs)
                        object.body = "packageInstall";
                }
                if (message.packageListSpecfile != null && message.hasOwnProperty("packageListSpecfile")) {
                    object.packageListSpecfile = $root.replitproto.PackageListSpecfile.toObject(message.packageListSpecfile, options);
                    if (options.oneofs)
                        object.body = "packageListSpecfile";
                }
                if (message.packageListSpecfileResp != null && message.hasOwnProperty("packageListSpecfileResp")) {
                    object.packageListSpecfileResp = $root.replitproto.PackageListSpecfileResp.toObject(message.packageListSpecfileResp, options);
                    if (options.oneofs)
                        object.body = "packageListSpecfileResp";
                }
                if (message.packageCacheSave != null && message.hasOwnProperty("packageCacheSave")) {
                    object.packageCacheSave = $root.replitproto.PackageCacheSave.toObject(message.packageCacheSave, options);
                    if (options.oneofs)
                        object.body = "packageCacheSave";
                }
                if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
                    object.chatMessage = $root.replitproto.ChatMessage.toObject(message.chatMessage, options);
                    if (options.oneofs)
                        object.body = "chatMessage";
                }
                if (message.chatTyping != null && message.hasOwnProperty("chatTyping")) {
                    object.chatTyping = $root.replitproto.ChatTyping.toObject(message.chatTyping, options);
                    if (options.oneofs)
                        object.body = "chatTyping";
                }
                if (message.chatScrollback != null && message.hasOwnProperty("chatScrollback")) {
                    object.chatScrollback = $root.replitproto.ChatScrollback.toObject(message.chatScrollback, options);
                    if (options.oneofs)
                        object.body = "chatScrollback";
                }
                if (message.ref != null && message.hasOwnProperty("ref"))
                    object.ref = message.ref;
                return object;
            };
    
            /**
             * Converts this Command to JSON.
             * @function toJSON
             * @memberof replitproto.Command
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Command.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Command;
        })();
    
        replitproto.SubscribeFile = (function() {
    
            /**
             * Properties of a SubscribeFile.
             * @memberof replitproto
             * @interface ISubscribeFile
             * @property {Array.<replitproto.IFile>|null} [files] SubscribeFile files
             */
    
            /**
             * Constructs a new SubscribeFile.
             * @memberof replitproto
             * @classdesc Represents a SubscribeFile.
             * @implements ISubscribeFile
             * @constructor
             * @param {replitproto.ISubscribeFile=} [properties] Properties to set
             */
            function SubscribeFile(properties) {
                this.files = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SubscribeFile files.
             * @member {Array.<replitproto.IFile>} files
             * @memberof replitproto.SubscribeFile
             * @instance
             */
            SubscribeFile.prototype.files = $util.emptyArray;
    
            /**
             * Creates a new SubscribeFile instance using the specified properties.
             * @function create
             * @memberof replitproto.SubscribeFile
             * @static
             * @param {replitproto.ISubscribeFile=} [properties] Properties to set
             * @returns {replitproto.SubscribeFile} SubscribeFile instance
             */
            SubscribeFile.create = function create(properties) {
                return new SubscribeFile(properties);
            };
    
            /**
             * Encodes the specified SubscribeFile message. Does not implicitly {@link replitproto.SubscribeFile.verify|verify} messages.
             * @function encode
             * @memberof replitproto.SubscribeFile
             * @static
             * @param {replitproto.ISubscribeFile} message SubscribeFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeFile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.files != null && message.files.length)
                    for (var i = 0; i < message.files.length; ++i)
                        $root.replitproto.File.encode(message.files[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified SubscribeFile message, length delimited. Does not implicitly {@link replitproto.SubscribeFile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.SubscribeFile
             * @static
             * @param {replitproto.ISubscribeFile} message SubscribeFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeFile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SubscribeFile message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.SubscribeFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.SubscribeFile} SubscribeFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeFile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.SubscribeFile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.files && message.files.length))
                            message.files = [];
                        message.files.push($root.replitproto.File.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SubscribeFile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.SubscribeFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.SubscribeFile} SubscribeFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeFile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SubscribeFile message.
             * @function verify
             * @memberof replitproto.SubscribeFile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubscribeFile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.files != null && message.hasOwnProperty("files")) {
                    if (!Array.isArray(message.files))
                        return "files: array expected";
                    for (var i = 0; i < message.files.length; ++i) {
                        var error = $root.replitproto.File.verify(message.files[i]);
                        if (error)
                            return "files." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a SubscribeFile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.SubscribeFile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.SubscribeFile} SubscribeFile
             */
            SubscribeFile.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.SubscribeFile)
                    return object;
                var message = new $root.replitproto.SubscribeFile();
                if (object.files) {
                    if (!Array.isArray(object.files))
                        throw TypeError(".replitproto.SubscribeFile.files: array expected");
                    message.files = [];
                    for (var i = 0; i < object.files.length; ++i) {
                        if (typeof object.files[i] !== "object")
                            throw TypeError(".replitproto.SubscribeFile.files: object expected");
                        message.files[i] = $root.replitproto.File.fromObject(object.files[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SubscribeFile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.SubscribeFile
             * @static
             * @param {replitproto.SubscribeFile} message SubscribeFile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscribeFile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.files = [];
                if (message.files && message.files.length) {
                    object.files = [];
                    for (var j = 0; j < message.files.length; ++j)
                        object.files[j] = $root.replitproto.File.toObject(message.files[j], options);
                }
                return object;
            };
    
            /**
             * Converts this SubscribeFile to JSON.
             * @function toJSON
             * @memberof replitproto.SubscribeFile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubscribeFile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SubscribeFile;
        })();
    
        replitproto.FileEvent = (function() {
    
            /**
             * Properties of a FileEvent.
             * @memberof replitproto
             * @interface IFileEvent
             * @property {replitproto.IFile|null} [file] FileEvent file
             * @property {replitproto.IFile|null} [dest] FileEvent dest
             * @property {replitproto.FileEvent.Op|null} [op] FileEvent op
             */
    
            /**
             * Constructs a new FileEvent.
             * @memberof replitproto
             * @classdesc Represents a FileEvent.
             * @implements IFileEvent
             * @constructor
             * @param {replitproto.IFileEvent=} [properties] Properties to set
             */
            function FileEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FileEvent file.
             * @member {replitproto.IFile|null|undefined} file
             * @memberof replitproto.FileEvent
             * @instance
             */
            FileEvent.prototype.file = null;
    
            /**
             * FileEvent dest.
             * @member {replitproto.IFile|null|undefined} dest
             * @memberof replitproto.FileEvent
             * @instance
             */
            FileEvent.prototype.dest = null;
    
            /**
             * FileEvent op.
             * @member {replitproto.FileEvent.Op} op
             * @memberof replitproto.FileEvent
             * @instance
             */
            FileEvent.prototype.op = 0;
    
            /**
             * Creates a new FileEvent instance using the specified properties.
             * @function create
             * @memberof replitproto.FileEvent
             * @static
             * @param {replitproto.IFileEvent=} [properties] Properties to set
             * @returns {replitproto.FileEvent} FileEvent instance
             */
            FileEvent.create = function create(properties) {
                return new FileEvent(properties);
            };
    
            /**
             * Encodes the specified FileEvent message. Does not implicitly {@link replitproto.FileEvent.verify|verify} messages.
             * @function encode
             * @memberof replitproto.FileEvent
             * @static
             * @param {replitproto.IFileEvent} message FileEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.hasOwnProperty("file"))
                    $root.replitproto.File.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.op != null && message.hasOwnProperty("op"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.op);
                if (message.dest != null && message.hasOwnProperty("dest"))
                    $root.replitproto.File.encode(message.dest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified FileEvent message, length delimited. Does not implicitly {@link replitproto.FileEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.FileEvent
             * @static
             * @param {replitproto.IFileEvent} message FileEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FileEvent message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.FileEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.FileEvent} FileEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.FileEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.file = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.dest = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.op = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FileEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.FileEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.FileEvent} FileEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FileEvent message.
             * @function verify
             * @memberof replitproto.FileEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    var error = $root.replitproto.File.verify(message.file);
                    if (error)
                        return "file." + error;
                }
                if (message.dest != null && message.hasOwnProperty("dest")) {
                    var error = $root.replitproto.File.verify(message.dest);
                    if (error)
                        return "dest." + error;
                }
                if (message.op != null && message.hasOwnProperty("op"))
                    switch (message.op) {
                    default:
                        return "op: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a FileEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.FileEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.FileEvent} FileEvent
             */
            FileEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.FileEvent)
                    return object;
                var message = new $root.replitproto.FileEvent();
                if (object.file != null) {
                    if (typeof object.file !== "object")
                        throw TypeError(".replitproto.FileEvent.file: object expected");
                    message.file = $root.replitproto.File.fromObject(object.file);
                }
                if (object.dest != null) {
                    if (typeof object.dest !== "object")
                        throw TypeError(".replitproto.FileEvent.dest: object expected");
                    message.dest = $root.replitproto.File.fromObject(object.dest);
                }
                switch (object.op) {
                case "Create":
                case 0:
                    message.op = 0;
                    break;
                case "Move":
                case 1:
                    message.op = 1;
                    break;
                case "Remove":
                case 2:
                    message.op = 2;
                    break;
                case "Modify":
                case 3:
                    message.op = 3;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a FileEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.FileEvent
             * @static
             * @param {replitproto.FileEvent} message FileEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.file = null;
                    object.op = options.enums === String ? "Create" : 0;
                    object.dest = null;
                }
                if (message.file != null && message.hasOwnProperty("file"))
                    object.file = $root.replitproto.File.toObject(message.file, options);
                if (message.op != null && message.hasOwnProperty("op"))
                    object.op = options.enums === String ? $root.replitproto.FileEvent.Op[message.op] : message.op;
                if (message.dest != null && message.hasOwnProperty("dest"))
                    object.dest = $root.replitproto.File.toObject(message.dest, options);
                return object;
            };
    
            /**
             * Converts this FileEvent to JSON.
             * @function toJSON
             * @memberof replitproto.FileEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Op enum.
             * @name replitproto.FileEvent.Op
             * @enum {string}
             * @property {number} Create=0 Create value
             * @property {number} Move=1 Move value
             * @property {number} Remove=2 Remove value
             * @property {number} Modify=3 Modify value
             */
            FileEvent.Op = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Create"] = 0;
                values[valuesById[1] = "Move"] = 1;
                values[valuesById[2] = "Remove"] = 2;
                values[valuesById[3] = "Modify"] = 3;
                return values;
            })();
    
            return FileEvent;
        })();
    
        replitproto.Flush = (function() {
    
            /**
             * Properties of a Flush.
             * @memberof replitproto
             * @interface IFlush
             */
    
            /**
             * Constructs a new Flush.
             * @memberof replitproto
             * @classdesc Represents a Flush.
             * @implements IFlush
             * @constructor
             * @param {replitproto.IFlush=} [properties] Properties to set
             */
            function Flush(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Flush instance using the specified properties.
             * @function create
             * @memberof replitproto.Flush
             * @static
             * @param {replitproto.IFlush=} [properties] Properties to set
             * @returns {replitproto.Flush} Flush instance
             */
            Flush.create = function create(properties) {
                return new Flush(properties);
            };
    
            /**
             * Encodes the specified Flush message. Does not implicitly {@link replitproto.Flush.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Flush
             * @static
             * @param {replitproto.IFlush} message Flush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Flush.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Flush message, length delimited. Does not implicitly {@link replitproto.Flush.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Flush
             * @static
             * @param {replitproto.IFlush} message Flush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Flush.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Flush message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Flush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Flush} Flush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Flush.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Flush();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Flush message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Flush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Flush} Flush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Flush.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Flush message.
             * @function verify
             * @memberof replitproto.Flush
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Flush.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Flush message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Flush
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Flush} Flush
             */
            Flush.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Flush)
                    return object;
                return new $root.replitproto.Flush();
            };
    
            /**
             * Creates a plain object from a Flush message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Flush
             * @static
             * @param {replitproto.Flush} message Flush
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Flush.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Flush to JSON.
             * @function toJSON
             * @memberof replitproto.Flush
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Flush.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Flush;
        })();
    
        replitproto.OTLinkFile = (function() {
    
            /**
             * Properties of a OTLinkFile.
             * @memberof replitproto
             * @interface IOTLinkFile
             * @property {replitproto.IFile|null} [file] OTLinkFile file
             */
    
            /**
             * Constructs a new OTLinkFile.
             * @memberof replitproto
             * @classdesc Represents a OTLinkFile.
             * @implements IOTLinkFile
             * @constructor
             * @param {replitproto.IOTLinkFile=} [properties] Properties to set
             */
            function OTLinkFile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OTLinkFile file.
             * @member {replitproto.IFile|null|undefined} file
             * @memberof replitproto.OTLinkFile
             * @instance
             */
            OTLinkFile.prototype.file = null;
    
            /**
             * Creates a new OTLinkFile instance using the specified properties.
             * @function create
             * @memberof replitproto.OTLinkFile
             * @static
             * @param {replitproto.IOTLinkFile=} [properties] Properties to set
             * @returns {replitproto.OTLinkFile} OTLinkFile instance
             */
            OTLinkFile.create = function create(properties) {
                return new OTLinkFile(properties);
            };
    
            /**
             * Encodes the specified OTLinkFile message. Does not implicitly {@link replitproto.OTLinkFile.verify|verify} messages.
             * @function encode
             * @memberof replitproto.OTLinkFile
             * @static
             * @param {replitproto.IOTLinkFile} message OTLinkFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTLinkFile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.hasOwnProperty("file"))
                    $root.replitproto.File.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified OTLinkFile message, length delimited. Does not implicitly {@link replitproto.OTLinkFile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.OTLinkFile
             * @static
             * @param {replitproto.IOTLinkFile} message OTLinkFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTLinkFile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a OTLinkFile message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.OTLinkFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.OTLinkFile} OTLinkFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTLinkFile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.OTLinkFile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.file = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a OTLinkFile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.OTLinkFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.OTLinkFile} OTLinkFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTLinkFile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a OTLinkFile message.
             * @function verify
             * @memberof replitproto.OTLinkFile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OTLinkFile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    var error = $root.replitproto.File.verify(message.file);
                    if (error)
                        return "file." + error;
                }
                return null;
            };
    
            /**
             * Creates a OTLinkFile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.OTLinkFile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.OTLinkFile} OTLinkFile
             */
            OTLinkFile.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.OTLinkFile)
                    return object;
                var message = new $root.replitproto.OTLinkFile();
                if (object.file != null) {
                    if (typeof object.file !== "object")
                        throw TypeError(".replitproto.OTLinkFile.file: object expected");
                    message.file = $root.replitproto.File.fromObject(object.file);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a OTLinkFile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.OTLinkFile
             * @static
             * @param {replitproto.OTLinkFile} message OTLinkFile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OTLinkFile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.file = null;
                if (message.file != null && message.hasOwnProperty("file"))
                    object.file = $root.replitproto.File.toObject(message.file, options);
                return object;
            };
    
            /**
             * Converts this OTLinkFile to JSON.
             * @function toJSON
             * @memberof replitproto.OTLinkFile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OTLinkFile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OTLinkFile;
        })();
    
        replitproto.Auth = (function() {
    
            /**
             * Properties of an Auth.
             * @memberof replitproto
             * @interface IAuth
             * @property {string|null} [token] Auth token
             * @property {string|null} [containerID] Auth containerID
             */
    
            /**
             * Constructs a new Auth.
             * @memberof replitproto
             * @classdesc Represents an Auth.
             * @implements IAuth
             * @constructor
             * @param {replitproto.IAuth=} [properties] Properties to set
             */
            function Auth(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Auth token.
             * @member {string} token
             * @memberof replitproto.Auth
             * @instance
             */
            Auth.prototype.token = "";
    
            /**
             * Auth containerID.
             * @member {string} containerID
             * @memberof replitproto.Auth
             * @instance
             */
            Auth.prototype.containerID = "";
    
            /**
             * Creates a new Auth instance using the specified properties.
             * @function create
             * @memberof replitproto.Auth
             * @static
             * @param {replitproto.IAuth=} [properties] Properties to set
             * @returns {replitproto.Auth} Auth instance
             */
            Auth.create = function create(properties) {
                return new Auth(properties);
            };
    
            /**
             * Encodes the specified Auth message. Does not implicitly {@link replitproto.Auth.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Auth
             * @static
             * @param {replitproto.IAuth} message Auth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Auth.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.token != null && message.hasOwnProperty("token"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.containerID != null && message.hasOwnProperty("containerID"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.containerID);
                return writer;
            };
    
            /**
             * Encodes the specified Auth message, length delimited. Does not implicitly {@link replitproto.Auth.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Auth
             * @static
             * @param {replitproto.IAuth} message Auth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Auth.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Auth message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Auth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Auth} Auth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Auth.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Auth();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.token = reader.string();
                        break;
                    case 2:
                        message.containerID = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Auth message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Auth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Auth} Auth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Auth.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Auth message.
             * @function verify
             * @memberof replitproto.Auth
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Auth.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.containerID != null && message.hasOwnProperty("containerID"))
                    if (!$util.isString(message.containerID))
                        return "containerID: string expected";
                return null;
            };
    
            /**
             * Creates an Auth message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Auth
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Auth} Auth
             */
            Auth.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Auth)
                    return object;
                var message = new $root.replitproto.Auth();
                if (object.token != null)
                    message.token = String(object.token);
                if (object.containerID != null)
                    message.containerID = String(object.containerID);
                return message;
            };
    
            /**
             * Creates a plain object from an Auth message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Auth
             * @static
             * @param {replitproto.Auth} message Auth
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Auth.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.token = "";
                    object.containerID = "";
                }
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.containerID != null && message.hasOwnProperty("containerID"))
                    object.containerID = message.containerID;
                return object;
            };
    
            /**
             * Converts this Auth to JSON.
             * @function toJSON
             * @memberof replitproto.Auth
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Auth.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Auth;
        })();
    
        replitproto.VCREntry = (function() {
    
            /**
             * Properties of a VCREntry.
             * @memberof replitproto
             * @interface IVCREntry
             * @property {number|Long|null} [timestamp] VCREntry timestamp
             * @property {replitproto.VCREntry.Direction|null} [direction] VCREntry direction
             * @property {replitproto.ICommand|null} [command] VCREntry command
             * @property {string|null} [uid] VCREntry uid
             */
    
            /**
             * Constructs a new VCREntry.
             * @memberof replitproto
             * @classdesc Represents a VCREntry.
             * @implements IVCREntry
             * @constructor
             * @param {replitproto.IVCREntry=} [properties] Properties to set
             */
            function VCREntry(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * VCREntry timestamp.
             * @member {number|Long} timestamp
             * @memberof replitproto.VCREntry
             * @instance
             */
            VCREntry.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * VCREntry direction.
             * @member {replitproto.VCREntry.Direction} direction
             * @memberof replitproto.VCREntry
             * @instance
             */
            VCREntry.prototype.direction = 0;
    
            /**
             * VCREntry command.
             * @member {replitproto.ICommand|null|undefined} command
             * @memberof replitproto.VCREntry
             * @instance
             */
            VCREntry.prototype.command = null;
    
            /**
             * VCREntry uid.
             * @member {string} uid
             * @memberof replitproto.VCREntry
             * @instance
             */
            VCREntry.prototype.uid = "";
    
            /**
             * Creates a new VCREntry instance using the specified properties.
             * @function create
             * @memberof replitproto.VCREntry
             * @static
             * @param {replitproto.IVCREntry=} [properties] Properties to set
             * @returns {replitproto.VCREntry} VCREntry instance
             */
            VCREntry.create = function create(properties) {
                return new VCREntry(properties);
            };
    
            /**
             * Encodes the specified VCREntry message. Does not implicitly {@link replitproto.VCREntry.verify|verify} messages.
             * @function encode
             * @memberof replitproto.VCREntry
             * @static
             * @param {replitproto.IVCREntry} message VCREntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VCREntry.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
                if (message.direction != null && message.hasOwnProperty("direction"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.direction);
                if (message.command != null && message.hasOwnProperty("command"))
                    $root.replitproto.Command.encode(message.command, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.uid);
                return writer;
            };
    
            /**
             * Encodes the specified VCREntry message, length delimited. Does not implicitly {@link replitproto.VCREntry.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.VCREntry
             * @static
             * @param {replitproto.IVCREntry} message VCREntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VCREntry.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a VCREntry message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.VCREntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.VCREntry} VCREntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VCREntry.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.VCREntry();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.timestamp = reader.uint64();
                        break;
                    case 2:
                        message.direction = reader.int32();
                        break;
                    case 3:
                        message.command = $root.replitproto.Command.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.uid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a VCREntry message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.VCREntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.VCREntry} VCREntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VCREntry.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a VCREntry message.
             * @function verify
             * @memberof replitproto.VCREntry
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VCREntry.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.direction != null && message.hasOwnProperty("direction"))
                    switch (message.direction) {
                    default:
                        return "direction: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.command != null && message.hasOwnProperty("command")) {
                    var error = $root.replitproto.Command.verify(message.command);
                    if (error)
                        return "command." + error;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };
    
            /**
             * Creates a VCREntry message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.VCREntry
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.VCREntry} VCREntry
             */
            VCREntry.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.VCREntry)
                    return object;
                var message = new $root.replitproto.VCREntry();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                switch (object.direction) {
                case "IN":
                case 0:
                    message.direction = 0;
                    break;
                case "OUT":
                case 1:
                    message.direction = 1;
                    break;
                }
                if (object.command != null) {
                    if (typeof object.command !== "object")
                        throw TypeError(".replitproto.VCREntry.command: object expected");
                    message.command = $root.replitproto.Command.fromObject(object.command);
                }
                if (object.uid != null)
                    message.uid = String(object.uid);
                return message;
            };
    
            /**
             * Creates a plain object from a VCREntry message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.VCREntry
             * @static
             * @param {replitproto.VCREntry} message VCREntry
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VCREntry.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                    object.direction = options.enums === String ? "IN" : 0;
                    object.command = null;
                    object.uid = "";
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (message.direction != null && message.hasOwnProperty("direction"))
                    object.direction = options.enums === String ? $root.replitproto.VCREntry.Direction[message.direction] : message.direction;
                if (message.command != null && message.hasOwnProperty("command"))
                    object.command = $root.replitproto.Command.toObject(message.command, options);
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                return object;
            };
    
            /**
             * Converts this VCREntry to JSON.
             * @function toJSON
             * @memberof replitproto.VCREntry
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VCREntry.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Direction enum.
             * @name replitproto.VCREntry.Direction
             * @enum {string}
             * @property {number} IN=0 IN value
             * @property {number} OUT=1 OUT value
             */
            VCREntry.Direction = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "IN"] = 0;
                values[valuesById[1] = "OUT"] = 1;
                return values;
            })();
    
            return VCREntry;
        })();
    
        replitproto.StartVCR = (function() {
    
            /**
             * Properties of a StartVCR.
             * @memberof replitproto
             * @interface IStartVCR
             */
    
            /**
             * Constructs a new StartVCR.
             * @memberof replitproto
             * @classdesc Represents a StartVCR.
             * @implements IStartVCR
             * @constructor
             * @param {replitproto.IStartVCR=} [properties] Properties to set
             */
            function StartVCR(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new StartVCR instance using the specified properties.
             * @function create
             * @memberof replitproto.StartVCR
             * @static
             * @param {replitproto.IStartVCR=} [properties] Properties to set
             * @returns {replitproto.StartVCR} StartVCR instance
             */
            StartVCR.create = function create(properties) {
                return new StartVCR(properties);
            };
    
            /**
             * Encodes the specified StartVCR message. Does not implicitly {@link replitproto.StartVCR.verify|verify} messages.
             * @function encode
             * @memberof replitproto.StartVCR
             * @static
             * @param {replitproto.IStartVCR} message StartVCR message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartVCR.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified StartVCR message, length delimited. Does not implicitly {@link replitproto.StartVCR.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.StartVCR
             * @static
             * @param {replitproto.IStartVCR} message StartVCR message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartVCR.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a StartVCR message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.StartVCR
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.StartVCR} StartVCR
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartVCR.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.StartVCR();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a StartVCR message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.StartVCR
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.StartVCR} StartVCR
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartVCR.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a StartVCR message.
             * @function verify
             * @memberof replitproto.StartVCR
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartVCR.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a StartVCR message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.StartVCR
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.StartVCR} StartVCR
             */
            StartVCR.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.StartVCR)
                    return object;
                return new $root.replitproto.StartVCR();
            };
    
            /**
             * Creates a plain object from a StartVCR message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.StartVCR
             * @static
             * @param {replitproto.StartVCR} message StartVCR
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartVCR.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this StartVCR to JSON.
             * @function toJSON
             * @memberof replitproto.StartVCR
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartVCR.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return StartVCR;
        })();
    
        replitproto.ReadVCR = (function() {
    
            /**
             * Properties of a ReadVCR.
             * @memberof replitproto
             * @interface IReadVCR
             */
    
            /**
             * Constructs a new ReadVCR.
             * @memberof replitproto
             * @classdesc Represents a ReadVCR.
             * @implements IReadVCR
             * @constructor
             * @param {replitproto.IReadVCR=} [properties] Properties to set
             */
            function ReadVCR(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new ReadVCR instance using the specified properties.
             * @function create
             * @memberof replitproto.ReadVCR
             * @static
             * @param {replitproto.IReadVCR=} [properties] Properties to set
             * @returns {replitproto.ReadVCR} ReadVCR instance
             */
            ReadVCR.create = function create(properties) {
                return new ReadVCR(properties);
            };
    
            /**
             * Encodes the specified ReadVCR message. Does not implicitly {@link replitproto.ReadVCR.verify|verify} messages.
             * @function encode
             * @memberof replitproto.ReadVCR
             * @static
             * @param {replitproto.IReadVCR} message ReadVCR message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadVCR.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified ReadVCR message, length delimited. Does not implicitly {@link replitproto.ReadVCR.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.ReadVCR
             * @static
             * @param {replitproto.IReadVCR} message ReadVCR message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadVCR.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReadVCR message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.ReadVCR
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.ReadVCR} ReadVCR
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadVCR.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.ReadVCR();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ReadVCR message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.ReadVCR
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.ReadVCR} ReadVCR
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadVCR.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReadVCR message.
             * @function verify
             * @memberof replitproto.ReadVCR
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadVCR.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a ReadVCR message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.ReadVCR
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.ReadVCR} ReadVCR
             */
            ReadVCR.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.ReadVCR)
                    return object;
                return new $root.replitproto.ReadVCR();
            };
    
            /**
             * Creates a plain object from a ReadVCR message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.ReadVCR
             * @static
             * @param {replitproto.ReadVCR} message ReadVCR
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadVCR.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this ReadVCR to JSON.
             * @function toJSON
             * @memberof replitproto.ReadVCR
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadVCR.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ReadVCR;
        })();
    
        replitproto.VCRLog = (function() {
    
            /**
             * Properties of a VCRLog.
             * @memberof replitproto
             * @interface IVCRLog
             * @property {Array.<replitproto.IVCREntry>|null} [log] VCRLog log
             * @property {replitproto.IFile|null} [logfile] VCRLog logfile
             */
    
            /**
             * Constructs a new VCRLog.
             * @memberof replitproto
             * @classdesc Represents a VCRLog.
             * @implements IVCRLog
             * @constructor
             * @param {replitproto.IVCRLog=} [properties] Properties to set
             */
            function VCRLog(properties) {
                this.log = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * VCRLog log.
             * @member {Array.<replitproto.IVCREntry>} log
             * @memberof replitproto.VCRLog
             * @instance
             */
            VCRLog.prototype.log = $util.emptyArray;
    
            /**
             * VCRLog logfile.
             * @member {replitproto.IFile|null|undefined} logfile
             * @memberof replitproto.VCRLog
             * @instance
             */
            VCRLog.prototype.logfile = null;
    
            /**
             * Creates a new VCRLog instance using the specified properties.
             * @function create
             * @memberof replitproto.VCRLog
             * @static
             * @param {replitproto.IVCRLog=} [properties] Properties to set
             * @returns {replitproto.VCRLog} VCRLog instance
             */
            VCRLog.create = function create(properties) {
                return new VCRLog(properties);
            };
    
            /**
             * Encodes the specified VCRLog message. Does not implicitly {@link replitproto.VCRLog.verify|verify} messages.
             * @function encode
             * @memberof replitproto.VCRLog
             * @static
             * @param {replitproto.IVCRLog} message VCRLog message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VCRLog.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.log != null && message.log.length)
                    for (var i = 0; i < message.log.length; ++i)
                        $root.replitproto.VCREntry.encode(message.log[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.logfile != null && message.hasOwnProperty("logfile"))
                    $root.replitproto.File.encode(message.logfile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified VCRLog message, length delimited. Does not implicitly {@link replitproto.VCRLog.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.VCRLog
             * @static
             * @param {replitproto.IVCRLog} message VCRLog message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VCRLog.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a VCRLog message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.VCRLog
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.VCRLog} VCRLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VCRLog.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.VCRLog();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.log && message.log.length))
                            message.log = [];
                        message.log.push($root.replitproto.VCREntry.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.logfile = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a VCRLog message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.VCRLog
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.VCRLog} VCRLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VCRLog.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a VCRLog message.
             * @function verify
             * @memberof replitproto.VCRLog
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VCRLog.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.log != null && message.hasOwnProperty("log")) {
                    if (!Array.isArray(message.log))
                        return "log: array expected";
                    for (var i = 0; i < message.log.length; ++i) {
                        var error = $root.replitproto.VCREntry.verify(message.log[i]);
                        if (error)
                            return "log." + error;
                    }
                }
                if (message.logfile != null && message.hasOwnProperty("logfile")) {
                    var error = $root.replitproto.File.verify(message.logfile);
                    if (error)
                        return "logfile." + error;
                }
                return null;
            };
    
            /**
             * Creates a VCRLog message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.VCRLog
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.VCRLog} VCRLog
             */
            VCRLog.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.VCRLog)
                    return object;
                var message = new $root.replitproto.VCRLog();
                if (object.log) {
                    if (!Array.isArray(object.log))
                        throw TypeError(".replitproto.VCRLog.log: array expected");
                    message.log = [];
                    for (var i = 0; i < object.log.length; ++i) {
                        if (typeof object.log[i] !== "object")
                            throw TypeError(".replitproto.VCRLog.log: object expected");
                        message.log[i] = $root.replitproto.VCREntry.fromObject(object.log[i]);
                    }
                }
                if (object.logfile != null) {
                    if (typeof object.logfile !== "object")
                        throw TypeError(".replitproto.VCRLog.logfile: object expected");
                    message.logfile = $root.replitproto.File.fromObject(object.logfile);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a VCRLog message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.VCRLog
             * @static
             * @param {replitproto.VCRLog} message VCRLog
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VCRLog.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.log = [];
                if (options.defaults)
                    object.logfile = null;
                if (message.log && message.log.length) {
                    object.log = [];
                    for (var j = 0; j < message.log.length; ++j)
                        object.log[j] = $root.replitproto.VCREntry.toObject(message.log[j], options);
                }
                if (message.logfile != null && message.hasOwnProperty("logfile"))
                    object.logfile = $root.replitproto.File.toObject(message.logfile, options);
                return object;
            };
    
            /**
             * Converts this VCRLog to JSON.
             * @function toJSON
             * @memberof replitproto.VCRLog
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VCRLog.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return VCRLog;
        })();
    
        replitproto.ExecInfo = (function() {
    
            /**
             * Properties of an ExecInfo.
             * @memberof replitproto
             * @interface IExecInfo
             * @property {Array.<string>|null} [command] ExecInfo command
             * @property {string|null} [reason] ExecInfo reason
             */
    
            /**
             * Constructs a new ExecInfo.
             * @memberof replitproto
             * @classdesc Represents an ExecInfo.
             * @implements IExecInfo
             * @constructor
             * @param {replitproto.IExecInfo=} [properties] Properties to set
             */
            function ExecInfo(properties) {
                this.command = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExecInfo command.
             * @member {Array.<string>} command
             * @memberof replitproto.ExecInfo
             * @instance
             */
            ExecInfo.prototype.command = $util.emptyArray;
    
            /**
             * ExecInfo reason.
             * @member {string} reason
             * @memberof replitproto.ExecInfo
             * @instance
             */
            ExecInfo.prototype.reason = "";
    
            /**
             * Creates a new ExecInfo instance using the specified properties.
             * @function create
             * @memberof replitproto.ExecInfo
             * @static
             * @param {replitproto.IExecInfo=} [properties] Properties to set
             * @returns {replitproto.ExecInfo} ExecInfo instance
             */
            ExecInfo.create = function create(properties) {
                return new ExecInfo(properties);
            };
    
            /**
             * Encodes the specified ExecInfo message. Does not implicitly {@link replitproto.ExecInfo.verify|verify} messages.
             * @function encode
             * @memberof replitproto.ExecInfo
             * @static
             * @param {replitproto.IExecInfo} message ExecInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExecInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.command != null && message.command.length)
                    for (var i = 0; i < message.command.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.command[i]);
                if (message.reason != null && message.hasOwnProperty("reason"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                return writer;
            };
    
            /**
             * Encodes the specified ExecInfo message, length delimited. Does not implicitly {@link replitproto.ExecInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.ExecInfo
             * @static
             * @param {replitproto.IExecInfo} message ExecInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExecInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ExecInfo message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.ExecInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.ExecInfo} ExecInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExecInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.ExecInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.command && message.command.length))
                            message.command = [];
                        message.command.push(reader.string());
                        break;
                    case 2:
                        message.reason = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ExecInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.ExecInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.ExecInfo} ExecInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExecInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ExecInfo message.
             * @function verify
             * @memberof replitproto.ExecInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExecInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.command != null && message.hasOwnProperty("command")) {
                    if (!Array.isArray(message.command))
                        return "command: array expected";
                    for (var i = 0; i < message.command.length; ++i)
                        if (!$util.isString(message.command[i]))
                            return "command: string[] expected";
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };
    
            /**
             * Creates an ExecInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.ExecInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.ExecInfo} ExecInfo
             */
            ExecInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.ExecInfo)
                    return object;
                var message = new $root.replitproto.ExecInfo();
                if (object.command) {
                    if (!Array.isArray(object.command))
                        throw TypeError(".replitproto.ExecInfo.command: array expected");
                    message.command = [];
                    for (var i = 0; i < object.command.length; ++i)
                        message.command[i] = String(object.command[i]);
                }
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };
    
            /**
             * Creates a plain object from an ExecInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.ExecInfo
             * @static
             * @param {replitproto.ExecInfo} message ExecInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExecInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.command = [];
                if (options.defaults)
                    object.reason = "";
                if (message.command && message.command.length) {
                    object.command = [];
                    for (var j = 0; j < message.command.length; ++j)
                        object.command[j] = message.command[j];
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };
    
            /**
             * Converts this ExecInfo to JSON.
             * @function toJSON
             * @memberof replitproto.ExecInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExecInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ExecInfo;
        })();
    
        replitproto.Debug = (function() {
    
            /**
             * Properties of a Debug.
             * @memberof replitproto
             * @interface IDebug
             * @property {string|null} [text] Debug text
             */
    
            /**
             * Constructs a new Debug.
             * @memberof replitproto
             * @classdesc Represents a Debug.
             * @implements IDebug
             * @constructor
             * @param {replitproto.IDebug=} [properties] Properties to set
             */
            function Debug(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Debug text.
             * @member {string} text
             * @memberof replitproto.Debug
             * @instance
             */
            Debug.prototype.text = "";
    
            /**
             * Creates a new Debug instance using the specified properties.
             * @function create
             * @memberof replitproto.Debug
             * @static
             * @param {replitproto.IDebug=} [properties] Properties to set
             * @returns {replitproto.Debug} Debug instance
             */
            Debug.create = function create(properties) {
                return new Debug(properties);
            };
    
            /**
             * Encodes the specified Debug message. Does not implicitly {@link replitproto.Debug.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Debug
             * @static
             * @param {replitproto.IDebug} message Debug message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Debug.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && message.hasOwnProperty("text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                return writer;
            };
    
            /**
             * Encodes the specified Debug message, length delimited. Does not implicitly {@link replitproto.Debug.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Debug
             * @static
             * @param {replitproto.IDebug} message Debug message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Debug.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Debug message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Debug
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Debug} Debug
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Debug.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Debug();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.text = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Debug message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Debug
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Debug} Debug
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Debug.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Debug message.
             * @function verify
             * @memberof replitproto.Debug
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Debug.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                return null;
            };
    
            /**
             * Creates a Debug message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Debug
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Debug} Debug
             */
            Debug.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Debug)
                    return object;
                var message = new $root.replitproto.Debug();
                if (object.text != null)
                    message.text = String(object.text);
                return message;
            };
    
            /**
             * Creates a plain object from a Debug message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Debug
             * @static
             * @param {replitproto.Debug} message Debug
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Debug.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.text = "";
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                return object;
            };
    
            /**
             * Converts this Debug to JSON.
             * @function toJSON
             * @memberof replitproto.Debug
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Debug.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Debug;
        })();
    
        /**
         * FileAuthMethod enum.
         * @name replitproto.FileAuthMethod
         * @enum {string}
         * @property {number} GET=0 GET value
         * @property {number} HEAD=1 HEAD value
         * @property {number} PUT=2 PUT value
         * @property {number} DELETE=3 DELETE value
         */
        replitproto.FileAuthMethod = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GET"] = 0;
            values[valuesById[1] = "HEAD"] = 1;
            values[valuesById[2] = "PUT"] = 2;
            values[valuesById[3] = "DELETE"] = 3;
            return values;
        })();
    
        replitproto.FileAuthReq = (function() {
    
            /**
             * Properties of a FileAuthReq.
             * @memberof replitproto
             * @interface IFileAuthReq
             * @property {replitproto.IFile|null} [file] FileAuthReq file
             * @property {replitproto.FileAuthMethod|null} [method] FileAuthReq method
             */
    
            /**
             * Constructs a new FileAuthReq.
             * @memberof replitproto
             * @classdesc Represents a FileAuthReq.
             * @implements IFileAuthReq
             * @constructor
             * @param {replitproto.IFileAuthReq=} [properties] Properties to set
             */
            function FileAuthReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FileAuthReq file.
             * @member {replitproto.IFile|null|undefined} file
             * @memberof replitproto.FileAuthReq
             * @instance
             */
            FileAuthReq.prototype.file = null;
    
            /**
             * FileAuthReq method.
             * @member {replitproto.FileAuthMethod} method
             * @memberof replitproto.FileAuthReq
             * @instance
             */
            FileAuthReq.prototype.method = 0;
    
            /**
             * Creates a new FileAuthReq instance using the specified properties.
             * @function create
             * @memberof replitproto.FileAuthReq
             * @static
             * @param {replitproto.IFileAuthReq=} [properties] Properties to set
             * @returns {replitproto.FileAuthReq} FileAuthReq instance
             */
            FileAuthReq.create = function create(properties) {
                return new FileAuthReq(properties);
            };
    
            /**
             * Encodes the specified FileAuthReq message. Does not implicitly {@link replitproto.FileAuthReq.verify|verify} messages.
             * @function encode
             * @memberof replitproto.FileAuthReq
             * @static
             * @param {replitproto.IFileAuthReq} message FileAuthReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileAuthReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.hasOwnProperty("file"))
                    $root.replitproto.File.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.method != null && message.hasOwnProperty("method"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.method);
                return writer;
            };
    
            /**
             * Encodes the specified FileAuthReq message, length delimited. Does not implicitly {@link replitproto.FileAuthReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.FileAuthReq
             * @static
             * @param {replitproto.IFileAuthReq} message FileAuthReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileAuthReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FileAuthReq message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.FileAuthReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.FileAuthReq} FileAuthReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileAuthReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.FileAuthReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.file = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.method = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FileAuthReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.FileAuthReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.FileAuthReq} FileAuthReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileAuthReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FileAuthReq message.
             * @function verify
             * @memberof replitproto.FileAuthReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileAuthReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    var error = $root.replitproto.File.verify(message.file);
                    if (error)
                        return "file." + error;
                }
                if (message.method != null && message.hasOwnProperty("method"))
                    switch (message.method) {
                    default:
                        return "method: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a FileAuthReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.FileAuthReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.FileAuthReq} FileAuthReq
             */
            FileAuthReq.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.FileAuthReq)
                    return object;
                var message = new $root.replitproto.FileAuthReq();
                if (object.file != null) {
                    if (typeof object.file !== "object")
                        throw TypeError(".replitproto.FileAuthReq.file: object expected");
                    message.file = $root.replitproto.File.fromObject(object.file);
                }
                switch (object.method) {
                case "GET":
                case 0:
                    message.method = 0;
                    break;
                case "HEAD":
                case 1:
                    message.method = 1;
                    break;
                case "PUT":
                case 2:
                    message.method = 2;
                    break;
                case "DELETE":
                case 3:
                    message.method = 3;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a FileAuthReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.FileAuthReq
             * @static
             * @param {replitproto.FileAuthReq} message FileAuthReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileAuthReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.file = null;
                    object.method = options.enums === String ? "GET" : 0;
                }
                if (message.file != null && message.hasOwnProperty("file"))
                    object.file = $root.replitproto.File.toObject(message.file, options);
                if (message.method != null && message.hasOwnProperty("method"))
                    object.method = options.enums === String ? $root.replitproto.FileAuthMethod[message.method] : message.method;
                return object;
            };
    
            /**
             * Converts this FileAuthReq to JSON.
             * @function toJSON
             * @memberof replitproto.FileAuthReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileAuthReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FileAuthReq;
        })();
    
        replitproto.MultiFileAuthRes = (function() {
    
            /**
             * Properties of a MultiFileAuthRes.
             * @memberof replitproto
             * @interface IMultiFileAuthRes
             * @property {replitproto.IFileAuthRes|null} [put] MultiFileAuthRes put
             * @property {replitproto.IFileAuthRes|null} [del] MultiFileAuthRes del
             */
    
            /**
             * Constructs a new MultiFileAuthRes.
             * @memberof replitproto
             * @classdesc Represents a MultiFileAuthRes.
             * @implements IMultiFileAuthRes
             * @constructor
             * @param {replitproto.IMultiFileAuthRes=} [properties] Properties to set
             */
            function MultiFileAuthRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MultiFileAuthRes put.
             * @member {replitproto.IFileAuthRes|null|undefined} put
             * @memberof replitproto.MultiFileAuthRes
             * @instance
             */
            MultiFileAuthRes.prototype.put = null;
    
            /**
             * MultiFileAuthRes del.
             * @member {replitproto.IFileAuthRes|null|undefined} del
             * @memberof replitproto.MultiFileAuthRes
             * @instance
             */
            MultiFileAuthRes.prototype.del = null;
    
            /**
             * Creates a new MultiFileAuthRes instance using the specified properties.
             * @function create
             * @memberof replitproto.MultiFileAuthRes
             * @static
             * @param {replitproto.IMultiFileAuthRes=} [properties] Properties to set
             * @returns {replitproto.MultiFileAuthRes} MultiFileAuthRes instance
             */
            MultiFileAuthRes.create = function create(properties) {
                return new MultiFileAuthRes(properties);
            };
    
            /**
             * Encodes the specified MultiFileAuthRes message. Does not implicitly {@link replitproto.MultiFileAuthRes.verify|verify} messages.
             * @function encode
             * @memberof replitproto.MultiFileAuthRes
             * @static
             * @param {replitproto.IMultiFileAuthRes} message MultiFileAuthRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiFileAuthRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.put != null && message.hasOwnProperty("put"))
                    $root.replitproto.FileAuthRes.encode(message.put, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.del != null && message.hasOwnProperty("del"))
                    $root.replitproto.FileAuthRes.encode(message.del, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified MultiFileAuthRes message, length delimited. Does not implicitly {@link replitproto.MultiFileAuthRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.MultiFileAuthRes
             * @static
             * @param {replitproto.IMultiFileAuthRes} message MultiFileAuthRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiFileAuthRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MultiFileAuthRes message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.MultiFileAuthRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.MultiFileAuthRes} MultiFileAuthRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiFileAuthRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.MultiFileAuthRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.put = $root.replitproto.FileAuthRes.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.del = $root.replitproto.FileAuthRes.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MultiFileAuthRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.MultiFileAuthRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.MultiFileAuthRes} MultiFileAuthRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiFileAuthRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MultiFileAuthRes message.
             * @function verify
             * @memberof replitproto.MultiFileAuthRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultiFileAuthRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.put != null && message.hasOwnProperty("put")) {
                    var error = $root.replitproto.FileAuthRes.verify(message.put);
                    if (error)
                        return "put." + error;
                }
                if (message.del != null && message.hasOwnProperty("del")) {
                    var error = $root.replitproto.FileAuthRes.verify(message.del);
                    if (error)
                        return "del." + error;
                }
                return null;
            };
    
            /**
             * Creates a MultiFileAuthRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.MultiFileAuthRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.MultiFileAuthRes} MultiFileAuthRes
             */
            MultiFileAuthRes.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.MultiFileAuthRes)
                    return object;
                var message = new $root.replitproto.MultiFileAuthRes();
                if (object.put != null) {
                    if (typeof object.put !== "object")
                        throw TypeError(".replitproto.MultiFileAuthRes.put: object expected");
                    message.put = $root.replitproto.FileAuthRes.fromObject(object.put);
                }
                if (object.del != null) {
                    if (typeof object.del !== "object")
                        throw TypeError(".replitproto.MultiFileAuthRes.del: object expected");
                    message.del = $root.replitproto.FileAuthRes.fromObject(object.del);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MultiFileAuthRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.MultiFileAuthRes
             * @static
             * @param {replitproto.MultiFileAuthRes} message MultiFileAuthRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultiFileAuthRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.put = null;
                    object.del = null;
                }
                if (message.put != null && message.hasOwnProperty("put"))
                    object.put = $root.replitproto.FileAuthRes.toObject(message.put, options);
                if (message.del != null && message.hasOwnProperty("del"))
                    object.del = $root.replitproto.FileAuthRes.toObject(message.del, options);
                return object;
            };
    
            /**
             * Converts this MultiFileAuthRes to JSON.
             * @function toJSON
             * @memberof replitproto.MultiFileAuthRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultiFileAuthRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MultiFileAuthRes;
        })();
    
        replitproto.FileAuthRes = (function() {
    
            /**
             * Properties of a FileAuthRes.
             * @memberof replitproto
             * @interface IFileAuthRes
             * @property {replitproto.IFile|null} [file] FileAuthRes file
             * @property {string|null} [url] FileAuthRes url
             * @property {replitproto.FileAuthMethod|null} [method] FileAuthRes method
             * @property {number|Long|null} [expire] FileAuthRes expire
             * @property {string|null} [error] FileAuthRes error
             */
    
            /**
             * Constructs a new FileAuthRes.
             * @memberof replitproto
             * @classdesc Represents a FileAuthRes.
             * @implements IFileAuthRes
             * @constructor
             * @param {replitproto.IFileAuthRes=} [properties] Properties to set
             */
            function FileAuthRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FileAuthRes file.
             * @member {replitproto.IFile|null|undefined} file
             * @memberof replitproto.FileAuthRes
             * @instance
             */
            FileAuthRes.prototype.file = null;
    
            /**
             * FileAuthRes url.
             * @member {string} url
             * @memberof replitproto.FileAuthRes
             * @instance
             */
            FileAuthRes.prototype.url = "";
    
            /**
             * FileAuthRes method.
             * @member {replitproto.FileAuthMethod} method
             * @memberof replitproto.FileAuthRes
             * @instance
             */
            FileAuthRes.prototype.method = 0;
    
            /**
             * FileAuthRes expire.
             * @member {number|Long} expire
             * @memberof replitproto.FileAuthRes
             * @instance
             */
            FileAuthRes.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * FileAuthRes error.
             * @member {string} error
             * @memberof replitproto.FileAuthRes
             * @instance
             */
            FileAuthRes.prototype.error = "";
    
            /**
             * Creates a new FileAuthRes instance using the specified properties.
             * @function create
             * @memberof replitproto.FileAuthRes
             * @static
             * @param {replitproto.IFileAuthRes=} [properties] Properties to set
             * @returns {replitproto.FileAuthRes} FileAuthRes instance
             */
            FileAuthRes.create = function create(properties) {
                return new FileAuthRes(properties);
            };
    
            /**
             * Encodes the specified FileAuthRes message. Does not implicitly {@link replitproto.FileAuthRes.verify|verify} messages.
             * @function encode
             * @memberof replitproto.FileAuthRes
             * @static
             * @param {replitproto.IFileAuthRes} message FileAuthRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileAuthRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.hasOwnProperty("file"))
                    $root.replitproto.File.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.url != null && message.hasOwnProperty("url"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                if (message.method != null && message.hasOwnProperty("method"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.method);
                if (message.expire != null && message.hasOwnProperty("expire"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.expire);
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.error);
                return writer;
            };
    
            /**
             * Encodes the specified FileAuthRes message, length delimited. Does not implicitly {@link replitproto.FileAuthRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.FileAuthRes
             * @static
             * @param {replitproto.IFileAuthRes} message FileAuthRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileAuthRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FileAuthRes message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.FileAuthRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.FileAuthRes} FileAuthRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileAuthRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.FileAuthRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.file = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.url = reader.string();
                        break;
                    case 3:
                        message.method = reader.int32();
                        break;
                    case 4:
                        message.expire = reader.int64();
                        break;
                    case 5:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FileAuthRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.FileAuthRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.FileAuthRes} FileAuthRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileAuthRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FileAuthRes message.
             * @function verify
             * @memberof replitproto.FileAuthRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileAuthRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    var error = $root.replitproto.File.verify(message.file);
                    if (error)
                        return "file." + error;
                }
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                if (message.method != null && message.hasOwnProperty("method"))
                    switch (message.method) {
                    default:
                        return "method: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.expire != null && message.hasOwnProperty("expire"))
                    if (!$util.isInteger(message.expire) && !(message.expire && $util.isInteger(message.expire.low) && $util.isInteger(message.expire.high)))
                        return "expire: integer|Long expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };
    
            /**
             * Creates a FileAuthRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.FileAuthRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.FileAuthRes} FileAuthRes
             */
            FileAuthRes.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.FileAuthRes)
                    return object;
                var message = new $root.replitproto.FileAuthRes();
                if (object.file != null) {
                    if (typeof object.file !== "object")
                        throw TypeError(".replitproto.FileAuthRes.file: object expected");
                    message.file = $root.replitproto.File.fromObject(object.file);
                }
                if (object.url != null)
                    message.url = String(object.url);
                switch (object.method) {
                case "GET":
                case 0:
                    message.method = 0;
                    break;
                case "HEAD":
                case 1:
                    message.method = 1;
                    break;
                case "PUT":
                case 2:
                    message.method = 2;
                    break;
                case "DELETE":
                case 3:
                    message.method = 3;
                    break;
                }
                if (object.expire != null)
                    if ($util.Long)
                        (message.expire = $util.Long.fromValue(object.expire)).unsigned = false;
                    else if (typeof object.expire === "string")
                        message.expire = parseInt(object.expire, 10);
                    else if (typeof object.expire === "number")
                        message.expire = object.expire;
                    else if (typeof object.expire === "object")
                        message.expire = new $util.LongBits(object.expire.low >>> 0, object.expire.high >>> 0).toNumber();
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };
    
            /**
             * Creates a plain object from a FileAuthRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.FileAuthRes
             * @static
             * @param {replitproto.FileAuthRes} message FileAuthRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileAuthRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.file = null;
                    object.url = "";
                    object.method = options.enums === String ? "GET" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.expire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.expire = options.longs === String ? "0" : 0;
                    object.error = "";
                }
                if (message.file != null && message.hasOwnProperty("file"))
                    object.file = $root.replitproto.File.toObject(message.file, options);
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                if (message.method != null && message.hasOwnProperty("method"))
                    object.method = options.enums === String ? $root.replitproto.FileAuthMethod[message.method] : message.method;
                if (message.expire != null && message.hasOwnProperty("expire"))
                    if (typeof message.expire === "number")
                        object.expire = options.longs === String ? String(message.expire) : message.expire;
                    else
                        object.expire = options.longs === String ? $util.Long.prototype.toString.call(message.expire) : options.longs === Number ? new $util.LongBits(message.expire.low >>> 0, message.expire.high >>> 0).toNumber() : message.expire;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };
    
            /**
             * Converts this FileAuthRes to JSON.
             * @function toJSON
             * @memberof replitproto.FileAuthRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileAuthRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FileAuthRes;
        })();
    
        replitproto.Disconnect = (function() {
    
            /**
             * Properties of a Disconnect.
             * @memberof replitproto
             * @interface IDisconnect
             * @property {string|null} [error] Disconnect error
             */
    
            /**
             * Constructs a new Disconnect.
             * @memberof replitproto
             * @classdesc Represents a Disconnect.
             * @implements IDisconnect
             * @constructor
             * @param {replitproto.IDisconnect=} [properties] Properties to set
             */
            function Disconnect(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Disconnect error.
             * @member {string} error
             * @memberof replitproto.Disconnect
             * @instance
             */
            Disconnect.prototype.error = "";
    
            /**
             * Creates a new Disconnect instance using the specified properties.
             * @function create
             * @memberof replitproto.Disconnect
             * @static
             * @param {replitproto.IDisconnect=} [properties] Properties to set
             * @returns {replitproto.Disconnect} Disconnect instance
             */
            Disconnect.create = function create(properties) {
                return new Disconnect(properties);
            };
    
            /**
             * Encodes the specified Disconnect message. Does not implicitly {@link replitproto.Disconnect.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Disconnect
             * @static
             * @param {replitproto.IDisconnect} message Disconnect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Disconnect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
                return writer;
            };
    
            /**
             * Encodes the specified Disconnect message, length delimited. Does not implicitly {@link replitproto.Disconnect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Disconnect
             * @static
             * @param {replitproto.IDisconnect} message Disconnect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Disconnect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Disconnect message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Disconnect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Disconnect} Disconnect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Disconnect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Disconnect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Disconnect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Disconnect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Disconnect} Disconnect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Disconnect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Disconnect message.
             * @function verify
             * @memberof replitproto.Disconnect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Disconnect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };
    
            /**
             * Creates a Disconnect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Disconnect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Disconnect} Disconnect
             */
            Disconnect.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Disconnect)
                    return object;
                var message = new $root.replitproto.Disconnect();
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };
    
            /**
             * Creates a plain object from a Disconnect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Disconnect
             * @static
             * @param {replitproto.Disconnect} message Disconnect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Disconnect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.error = "";
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };
    
            /**
             * Converts this Disconnect to JSON.
             * @function toJSON
             * @memberof replitproto.Disconnect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Disconnect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Disconnect;
        })();
    
        replitproto.Send = (function() {
    
            /**
             * Properties of a Send.
             * @memberof replitproto
             * @interface ISend
             * @property {Uint8Array|null} [buff] Send buff
             */
    
            /**
             * Constructs a new Send.
             * @memberof replitproto
             * @classdesc Represents a Send.
             * @implements ISend
             * @constructor
             * @param {replitproto.ISend=} [properties] Properties to set
             */
            function Send(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Send buff.
             * @member {Uint8Array} buff
             * @memberof replitproto.Send
             * @instance
             */
            Send.prototype.buff = $util.newBuffer([]);
    
            /**
             * Creates a new Send instance using the specified properties.
             * @function create
             * @memberof replitproto.Send
             * @static
             * @param {replitproto.ISend=} [properties] Properties to set
             * @returns {replitproto.Send} Send instance
             */
            Send.create = function create(properties) {
                return new Send(properties);
            };
    
            /**
             * Encodes the specified Send message. Does not implicitly {@link replitproto.Send.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Send
             * @static
             * @param {replitproto.ISend} message Send message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Send.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buff != null && message.hasOwnProperty("buff"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.buff);
                return writer;
            };
    
            /**
             * Encodes the specified Send message, length delimited. Does not implicitly {@link replitproto.Send.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Send
             * @static
             * @param {replitproto.ISend} message Send message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Send.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Send message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Send
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Send} Send
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Send.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Send();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buff = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Send message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Send
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Send} Send
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Send.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Send message.
             * @function verify
             * @memberof replitproto.Send
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Send.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.buff != null && message.hasOwnProperty("buff"))
                    if (!(message.buff && typeof message.buff.length === "number" || $util.isString(message.buff)))
                        return "buff: buffer expected";
                return null;
            };
    
            /**
             * Creates a Send message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Send
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Send} Send
             */
            Send.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Send)
                    return object;
                var message = new $root.replitproto.Send();
                if (object.buff != null)
                    if (typeof object.buff === "string")
                        $util.base64.decode(object.buff, message.buff = $util.newBuffer($util.base64.length(object.buff)), 0);
                    else if (object.buff.length)
                        message.buff = object.buff;
                return message;
            };
    
            /**
             * Creates a plain object from a Send message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Send
             * @static
             * @param {replitproto.Send} message Send
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Send.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.buff = "";
                    else {
                        object.buff = [];
                        if (options.bytes !== Array)
                            object.buff = $util.newBuffer(object.buff);
                    }
                if (message.buff != null && message.hasOwnProperty("buff"))
                    object.buff = options.bytes === String ? $util.base64.encode(message.buff, 0, message.buff.length) : options.bytes === Array ? Array.prototype.slice.call(message.buff) : message.buff;
                return object;
            };
    
            /**
             * Converts this Send to JSON.
             * @function toJSON
             * @memberof replitproto.Send
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Send.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Send;
        })();
    
        replitproto.Recv = (function() {
    
            /**
             * Properties of a Recv.
             * @memberof replitproto
             * @interface IRecv
             * @property {Uint8Array|null} [buff] Recv buff
             */
    
            /**
             * Constructs a new Recv.
             * @memberof replitproto
             * @classdesc Represents a Recv.
             * @implements IRecv
             * @constructor
             * @param {replitproto.IRecv=} [properties] Properties to set
             */
            function Recv(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Recv buff.
             * @member {Uint8Array} buff
             * @memberof replitproto.Recv
             * @instance
             */
            Recv.prototype.buff = $util.newBuffer([]);
    
            /**
             * Creates a new Recv instance using the specified properties.
             * @function create
             * @memberof replitproto.Recv
             * @static
             * @param {replitproto.IRecv=} [properties] Properties to set
             * @returns {replitproto.Recv} Recv instance
             */
            Recv.create = function create(properties) {
                return new Recv(properties);
            };
    
            /**
             * Encodes the specified Recv message. Does not implicitly {@link replitproto.Recv.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Recv
             * @static
             * @param {replitproto.IRecv} message Recv message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Recv.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buff != null && message.hasOwnProperty("buff"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.buff);
                return writer;
            };
    
            /**
             * Encodes the specified Recv message, length delimited. Does not implicitly {@link replitproto.Recv.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Recv
             * @static
             * @param {replitproto.IRecv} message Recv message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Recv.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Recv message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Recv
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Recv} Recv
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Recv.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Recv();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.buff = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Recv message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Recv
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Recv} Recv
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Recv.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Recv message.
             * @function verify
             * @memberof replitproto.Recv
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Recv.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.buff != null && message.hasOwnProperty("buff"))
                    if (!(message.buff && typeof message.buff.length === "number" || $util.isString(message.buff)))
                        return "buff: buffer expected";
                return null;
            };
    
            /**
             * Creates a Recv message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Recv
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Recv} Recv
             */
            Recv.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Recv)
                    return object;
                var message = new $root.replitproto.Recv();
                if (object.buff != null)
                    if (typeof object.buff === "string")
                        $util.base64.decode(object.buff, message.buff = $util.newBuffer($util.base64.length(object.buff)), 0);
                    else if (object.buff.length)
                        message.buff = object.buff;
                return message;
            };
    
            /**
             * Creates a plain object from a Recv message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Recv
             * @static
             * @param {replitproto.Recv} message Recv
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Recv.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.buff = "";
                    else {
                        object.buff = [];
                        if (options.bytes !== Array)
                            object.buff = $util.newBuffer(object.buff);
                    }
                if (message.buff != null && message.hasOwnProperty("buff"))
                    object.buff = options.bytes === String ? $util.base64.encode(message.buff, 0, message.buff.length) : options.bytes === Array ? Array.prototype.slice.call(message.buff) : message.buff;
                return object;
            };
    
            /**
             * Converts this Recv to JSON.
             * @function toJSON
             * @memberof replitproto.Recv
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Recv.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Recv;
        })();
    
        replitproto.Connect = (function() {
    
            /**
             * Properties of a Connect.
             * @memberof replitproto
             * @interface IConnect
             * @property {string|null} [proto] Connect proto
             * @property {string|null} [addr] Connect addr
             */
    
            /**
             * Constructs a new Connect.
             * @memberof replitproto
             * @classdesc Represents a Connect.
             * @implements IConnect
             * @constructor
             * @param {replitproto.IConnect=} [properties] Properties to set
             */
            function Connect(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Connect proto.
             * @member {string} proto
             * @memberof replitproto.Connect
             * @instance
             */
            Connect.prototype.proto = "";
    
            /**
             * Connect addr.
             * @member {string} addr
             * @memberof replitproto.Connect
             * @instance
             */
            Connect.prototype.addr = "";
    
            /**
             * Creates a new Connect instance using the specified properties.
             * @function create
             * @memberof replitproto.Connect
             * @static
             * @param {replitproto.IConnect=} [properties] Properties to set
             * @returns {replitproto.Connect} Connect instance
             */
            Connect.create = function create(properties) {
                return new Connect(properties);
            };
    
            /**
             * Encodes the specified Connect message. Does not implicitly {@link replitproto.Connect.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Connect
             * @static
             * @param {replitproto.IConnect} message Connect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Connect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.proto != null && message.hasOwnProperty("proto"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.proto);
                if (message.addr != null && message.hasOwnProperty("addr"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.addr);
                return writer;
            };
    
            /**
             * Encodes the specified Connect message, length delimited. Does not implicitly {@link replitproto.Connect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Connect
             * @static
             * @param {replitproto.IConnect} message Connect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Connect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Connect message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Connect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Connect} Connect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Connect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Connect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.proto = reader.string();
                        break;
                    case 2:
                        message.addr = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Connect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Connect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Connect} Connect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Connect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Connect message.
             * @function verify
             * @memberof replitproto.Connect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Connect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.proto != null && message.hasOwnProperty("proto"))
                    if (!$util.isString(message.proto))
                        return "proto: string expected";
                if (message.addr != null && message.hasOwnProperty("addr"))
                    if (!$util.isString(message.addr))
                        return "addr: string expected";
                return null;
            };
    
            /**
             * Creates a Connect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Connect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Connect} Connect
             */
            Connect.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Connect)
                    return object;
                var message = new $root.replitproto.Connect();
                if (object.proto != null)
                    message.proto = String(object.proto);
                if (object.addr != null)
                    message.addr = String(object.addr);
                return message;
            };
    
            /**
             * Creates a plain object from a Connect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Connect
             * @static
             * @param {replitproto.Connect} message Connect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Connect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.proto = "";
                    object.addr = "";
                }
                if (message.proto != null && message.hasOwnProperty("proto"))
                    object.proto = message.proto;
                if (message.addr != null && message.hasOwnProperty("addr"))
                    object.addr = message.addr;
                return object;
            };
    
            /**
             * Converts this Connect to JSON.
             * @function toJSON
             * @memberof replitproto.Connect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Connect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Connect;
        })();
    
        replitproto.Hint = (function() {
    
            /**
             * Properties of a Hint.
             * @memberof replitproto
             * @interface IHint
             * @property {string|null} [text] Hint text
             */
    
            /**
             * Constructs a new Hint.
             * @memberof replitproto
             * @classdesc Represents a Hint.
             * @implements IHint
             * @constructor
             * @param {replitproto.IHint=} [properties] Properties to set
             */
            function Hint(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Hint text.
             * @member {string} text
             * @memberof replitproto.Hint
             * @instance
             */
            Hint.prototype.text = "";
    
            /**
             * Creates a new Hint instance using the specified properties.
             * @function create
             * @memberof replitproto.Hint
             * @static
             * @param {replitproto.IHint=} [properties] Properties to set
             * @returns {replitproto.Hint} Hint instance
             */
            Hint.create = function create(properties) {
                return new Hint(properties);
            };
    
            /**
             * Encodes the specified Hint message. Does not implicitly {@link replitproto.Hint.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Hint
             * @static
             * @param {replitproto.IHint} message Hint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hint.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && message.hasOwnProperty("text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                return writer;
            };
    
            /**
             * Encodes the specified Hint message, length delimited. Does not implicitly {@link replitproto.Hint.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Hint
             * @static
             * @param {replitproto.IHint} message Hint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Hint message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Hint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Hint} Hint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hint.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Hint();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.text = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Hint message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Hint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Hint} Hint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Hint message.
             * @function verify
             * @memberof replitproto.Hint
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Hint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                return null;
            };
    
            /**
             * Creates a Hint message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Hint
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Hint} Hint
             */
            Hint.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Hint)
                    return object;
                var message = new $root.replitproto.Hint();
                if (object.text != null)
                    message.text = String(object.text);
                return message;
            };
    
            /**
             * Creates a plain object from a Hint message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Hint
             * @static
             * @param {replitproto.Hint} message Hint
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Hint.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.text = "";
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                return object;
            };
    
            /**
             * Converts this Hint to JSON.
             * @function toJSON
             * @memberof replitproto.Hint
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Hint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Hint;
        })();
    
        replitproto.Ping = (function() {
    
            /**
             * Properties of a Ping.
             * @memberof replitproto
             * @interface IPing
             */
    
            /**
             * Constructs a new Ping.
             * @memberof replitproto
             * @classdesc Represents a Ping.
             * @implements IPing
             * @constructor
             * @param {replitproto.IPing=} [properties] Properties to set
             */
            function Ping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Ping instance using the specified properties.
             * @function create
             * @memberof replitproto.Ping
             * @static
             * @param {replitproto.IPing=} [properties] Properties to set
             * @returns {replitproto.Ping} Ping instance
             */
            Ping.create = function create(properties) {
                return new Ping(properties);
            };
    
            /**
             * Encodes the specified Ping message. Does not implicitly {@link replitproto.Ping.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Ping
             * @static
             * @param {replitproto.IPing} message Ping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Ping message, length delimited. Does not implicitly {@link replitproto.Ping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Ping
             * @static
             * @param {replitproto.IPing} message Ping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Ping message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Ping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Ping} Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Ping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Ping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Ping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Ping} Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Ping message.
             * @function verify
             * @memberof replitproto.Ping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Ping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Ping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Ping} Ping
             */
            Ping.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Ping)
                    return object;
                return new $root.replitproto.Ping();
            };
    
            /**
             * Creates a plain object from a Ping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Ping
             * @static
             * @param {replitproto.Ping} message Ping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ping.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Ping to JSON.
             * @function toJSON
             * @memberof replitproto.Ping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Ping;
        })();
    
        replitproto.Pong = (function() {
    
            /**
             * Properties of a Pong.
             * @memberof replitproto
             * @interface IPong
             */
    
            /**
             * Constructs a new Pong.
             * @memberof replitproto
             * @classdesc Represents a Pong.
             * @implements IPong
             * @constructor
             * @param {replitproto.IPong=} [properties] Properties to set
             */
            function Pong(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Pong instance using the specified properties.
             * @function create
             * @memberof replitproto.Pong
             * @static
             * @param {replitproto.IPong=} [properties] Properties to set
             * @returns {replitproto.Pong} Pong instance
             */
            Pong.create = function create(properties) {
                return new Pong(properties);
            };
    
            /**
             * Encodes the specified Pong message. Does not implicitly {@link replitproto.Pong.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Pong
             * @static
             * @param {replitproto.IPong} message Pong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pong.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Pong message, length delimited. Does not implicitly {@link replitproto.Pong.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Pong
             * @static
             * @param {replitproto.IPong} message Pong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pong.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Pong message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Pong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Pong} Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pong.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Pong();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Pong message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Pong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Pong} Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pong.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Pong message.
             * @function verify
             * @memberof replitproto.Pong
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pong.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Pong message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Pong
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Pong} Pong
             */
            Pong.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Pong)
                    return object;
                return new $root.replitproto.Pong();
            };
    
            /**
             * Creates a plain object from a Pong message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Pong
             * @static
             * @param {replitproto.Pong} message Pong
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pong.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Pong to JSON.
             * @function toJSON
             * @memberof replitproto.Pong
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pong.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Pong;
        })();
    
        replitproto.Hello = (function() {
    
            /**
             * Properties of a Hello.
             * @memberof replitproto
             * @interface IHello
             * @property {number|null} [userid] Hello userid
             * @property {string|null} [username] Hello username
             * @property {string|null} [token] Hello token
             */
    
            /**
             * Constructs a new Hello.
             * @memberof replitproto
             * @classdesc Represents a Hello.
             * @implements IHello
             * @constructor
             * @param {replitproto.IHello=} [properties] Properties to set
             */
            function Hello(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Hello userid.
             * @member {number} userid
             * @memberof replitproto.Hello
             * @instance
             */
            Hello.prototype.userid = 0;
    
            /**
             * Hello username.
             * @member {string} username
             * @memberof replitproto.Hello
             * @instance
             */
            Hello.prototype.username = "";
    
            /**
             * Hello token.
             * @member {string} token
             * @memberof replitproto.Hello
             * @instance
             */
            Hello.prototype.token = "";
    
            /**
             * Creates a new Hello instance using the specified properties.
             * @function create
             * @memberof replitproto.Hello
             * @static
             * @param {replitproto.IHello=} [properties] Properties to set
             * @returns {replitproto.Hello} Hello instance
             */
            Hello.create = function create(properties) {
                return new Hello(properties);
            };
    
            /**
             * Encodes the specified Hello message. Does not implicitly {@link replitproto.Hello.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Hello
             * @static
             * @param {replitproto.IHello} message Hello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hello.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userid != null && message.hasOwnProperty("userid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userid);
                if (message.username != null && message.hasOwnProperty("username"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                if (message.token != null && message.hasOwnProperty("token"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
                return writer;
            };
    
            /**
             * Encodes the specified Hello message, length delimited. Does not implicitly {@link replitproto.Hello.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Hello
             * @static
             * @param {replitproto.IHello} message Hello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hello.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Hello message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Hello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Hello} Hello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hello.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Hello();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userid = reader.uint32();
                        break;
                    case 2:
                        message.username = reader.string();
                        break;
                    case 3:
                        message.token = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Hello message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Hello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Hello} Hello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hello.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Hello message.
             * @function verify
             * @memberof replitproto.Hello
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Hello.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userid != null && message.hasOwnProperty("userid"))
                    if (!$util.isInteger(message.userid))
                        return "userid: integer expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };
    
            /**
             * Creates a Hello message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Hello
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Hello} Hello
             */
            Hello.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Hello)
                    return object;
                var message = new $root.replitproto.Hello();
                if (object.userid != null)
                    message.userid = object.userid >>> 0;
                if (object.username != null)
                    message.username = String(object.username);
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };
    
            /**
             * Creates a plain object from a Hello message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Hello
             * @static
             * @param {replitproto.Hello} message Hello
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Hello.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userid = 0;
                    object.username = "";
                    object.token = "";
                }
                if (message.userid != null && message.hasOwnProperty("userid"))
                    object.userid = message.userid;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };
    
            /**
             * Converts this Hello to JSON.
             * @function toJSON
             * @memberof replitproto.Hello
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Hello.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Hello;
        })();
    
        replitproto.Goodbye = (function() {
    
            /**
             * Properties of a Goodbye.
             * @memberof replitproto
             * @interface IGoodbye
             */
    
            /**
             * Constructs a new Goodbye.
             * @memberof replitproto
             * @classdesc Represents a Goodbye.
             * @implements IGoodbye
             * @constructor
             * @param {replitproto.IGoodbye=} [properties] Properties to set
             */
            function Goodbye(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Goodbye instance using the specified properties.
             * @function create
             * @memberof replitproto.Goodbye
             * @static
             * @param {replitproto.IGoodbye=} [properties] Properties to set
             * @returns {replitproto.Goodbye} Goodbye instance
             */
            Goodbye.create = function create(properties) {
                return new Goodbye(properties);
            };
    
            /**
             * Encodes the specified Goodbye message. Does not implicitly {@link replitproto.Goodbye.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Goodbye
             * @static
             * @param {replitproto.IGoodbye} message Goodbye message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Goodbye.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Goodbye message, length delimited. Does not implicitly {@link replitproto.Goodbye.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Goodbye
             * @static
             * @param {replitproto.IGoodbye} message Goodbye message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Goodbye.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Goodbye message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Goodbye
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Goodbye} Goodbye
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Goodbye.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Goodbye();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Goodbye message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Goodbye
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Goodbye} Goodbye
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Goodbye.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Goodbye message.
             * @function verify
             * @memberof replitproto.Goodbye
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Goodbye.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Goodbye message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Goodbye
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Goodbye} Goodbye
             */
            Goodbye.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Goodbye)
                    return object;
                return new $root.replitproto.Goodbye();
            };
    
            /**
             * Creates a plain object from a Goodbye message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Goodbye
             * @static
             * @param {replitproto.Goodbye} message Goodbye
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Goodbye.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Goodbye to JSON.
             * @function toJSON
             * @memberof replitproto.Goodbye
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Goodbye.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Goodbye;
        })();
    
        /**
         * State enum.
         * @name replitproto.State
         * @enum {string}
         * @property {number} Stopped=0 Stopped value
         * @property {number} Running=1 Running value
         */
        replitproto.State = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Stopped"] = 0;
            values[valuesById[1] = "Running"] = 1;
            return values;
        })();
    
        replitproto.CheckChanges = (function() {
    
            /**
             * Properties of a CheckChanges.
             * @memberof replitproto
             * @interface ICheckChanges
             */
    
            /**
             * Constructs a new CheckChanges.
             * @memberof replitproto
             * @classdesc Represents a CheckChanges.
             * @implements ICheckChanges
             * @constructor
             * @param {replitproto.ICheckChanges=} [properties] Properties to set
             */
            function CheckChanges(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new CheckChanges instance using the specified properties.
             * @function create
             * @memberof replitproto.CheckChanges
             * @static
             * @param {replitproto.ICheckChanges=} [properties] Properties to set
             * @returns {replitproto.CheckChanges} CheckChanges instance
             */
            CheckChanges.create = function create(properties) {
                return new CheckChanges(properties);
            };
    
            /**
             * Encodes the specified CheckChanges message. Does not implicitly {@link replitproto.CheckChanges.verify|verify} messages.
             * @function encode
             * @memberof replitproto.CheckChanges
             * @static
             * @param {replitproto.ICheckChanges} message CheckChanges message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CheckChanges.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified CheckChanges message, length delimited. Does not implicitly {@link replitproto.CheckChanges.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.CheckChanges
             * @static
             * @param {replitproto.ICheckChanges} message CheckChanges message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CheckChanges.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CheckChanges message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.CheckChanges
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.CheckChanges} CheckChanges
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CheckChanges.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.CheckChanges();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CheckChanges message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.CheckChanges
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.CheckChanges} CheckChanges
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CheckChanges.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CheckChanges message.
             * @function verify
             * @memberof replitproto.CheckChanges
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CheckChanges.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a CheckChanges message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.CheckChanges
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.CheckChanges} CheckChanges
             */
            CheckChanges.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.CheckChanges)
                    return object;
                return new $root.replitproto.CheckChanges();
            };
    
            /**
             * Creates a plain object from a CheckChanges message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.CheckChanges
             * @static
             * @param {replitproto.CheckChanges} message CheckChanges
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CheckChanges.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this CheckChanges to JSON.
             * @function toJSON
             * @memberof replitproto.CheckChanges
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CheckChanges.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CheckChanges;
        })();
    
        replitproto.EnsurePackages = (function() {
    
            /**
             * Properties of an EnsurePackages.
             * @memberof replitproto
             * @interface IEnsurePackages
             * @property {boolean|null} [install] EnsurePackages install
             * @property {replitproto.IFile|null} [file] EnsurePackages file
             */
    
            /**
             * Constructs a new EnsurePackages.
             * @memberof replitproto
             * @classdesc Represents an EnsurePackages.
             * @implements IEnsurePackages
             * @constructor
             * @param {replitproto.IEnsurePackages=} [properties] Properties to set
             */
            function EnsurePackages(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * EnsurePackages install.
             * @member {boolean} install
             * @memberof replitproto.EnsurePackages
             * @instance
             */
            EnsurePackages.prototype.install = false;
    
            /**
             * EnsurePackages file.
             * @member {replitproto.IFile|null|undefined} file
             * @memberof replitproto.EnsurePackages
             * @instance
             */
            EnsurePackages.prototype.file = null;
    
            /**
             * Creates a new EnsurePackages instance using the specified properties.
             * @function create
             * @memberof replitproto.EnsurePackages
             * @static
             * @param {replitproto.IEnsurePackages=} [properties] Properties to set
             * @returns {replitproto.EnsurePackages} EnsurePackages instance
             */
            EnsurePackages.create = function create(properties) {
                return new EnsurePackages(properties);
            };
    
            /**
             * Encodes the specified EnsurePackages message. Does not implicitly {@link replitproto.EnsurePackages.verify|verify} messages.
             * @function encode
             * @memberof replitproto.EnsurePackages
             * @static
             * @param {replitproto.IEnsurePackages} message EnsurePackages message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnsurePackages.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.install != null && message.hasOwnProperty("install"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.install);
                if (message.file != null && message.hasOwnProperty("file"))
                    $root.replitproto.File.encode(message.file, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified EnsurePackages message, length delimited. Does not implicitly {@link replitproto.EnsurePackages.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.EnsurePackages
             * @static
             * @param {replitproto.IEnsurePackages} message EnsurePackages message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnsurePackages.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an EnsurePackages message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.EnsurePackages
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.EnsurePackages} EnsurePackages
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnsurePackages.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.EnsurePackages();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.install = reader.bool();
                        break;
                    case 2:
                        message.file = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an EnsurePackages message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.EnsurePackages
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.EnsurePackages} EnsurePackages
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnsurePackages.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an EnsurePackages message.
             * @function verify
             * @memberof replitproto.EnsurePackages
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnsurePackages.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.install != null && message.hasOwnProperty("install"))
                    if (typeof message.install !== "boolean")
                        return "install: boolean expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    var error = $root.replitproto.File.verify(message.file);
                    if (error)
                        return "file." + error;
                }
                return null;
            };
    
            /**
             * Creates an EnsurePackages message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.EnsurePackages
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.EnsurePackages} EnsurePackages
             */
            EnsurePackages.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.EnsurePackages)
                    return object;
                var message = new $root.replitproto.EnsurePackages();
                if (object.install != null)
                    message.install = Boolean(object.install);
                if (object.file != null) {
                    if (typeof object.file !== "object")
                        throw TypeError(".replitproto.EnsurePackages.file: object expected");
                    message.file = $root.replitproto.File.fromObject(object.file);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an EnsurePackages message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.EnsurePackages
             * @static
             * @param {replitproto.EnsurePackages} message EnsurePackages
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnsurePackages.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.install = false;
                    object.file = null;
                }
                if (message.install != null && message.hasOwnProperty("install"))
                    object.install = message.install;
                if (message.file != null && message.hasOwnProperty("file"))
                    object.file = $root.replitproto.File.toObject(message.file, options);
                return object;
            };
    
            /**
             * Converts this EnsurePackages to JSON.
             * @function toJSON
             * @memberof replitproto.EnsurePackages
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnsurePackages.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return EnsurePackages;
        })();
    
        replitproto.Start = (function() {
    
            /**
             * Properties of a Start.
             * @memberof replitproto
             * @interface IStart
             */
    
            /**
             * Constructs a new Start.
             * @memberof replitproto
             * @classdesc Represents a Start.
             * @implements IStart
             * @constructor
             * @param {replitproto.IStart=} [properties] Properties to set
             */
            function Start(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Start instance using the specified properties.
             * @function create
             * @memberof replitproto.Start
             * @static
             * @param {replitproto.IStart=} [properties] Properties to set
             * @returns {replitproto.Start} Start instance
             */
            Start.create = function create(properties) {
                return new Start(properties);
            };
    
            /**
             * Encodes the specified Start message. Does not implicitly {@link replitproto.Start.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Start
             * @static
             * @param {replitproto.IStart} message Start message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Start.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Start message, length delimited. Does not implicitly {@link replitproto.Start.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Start
             * @static
             * @param {replitproto.IStart} message Start message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Start.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Start message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Start
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Start} Start
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Start.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Start();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Start message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Start
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Start} Start
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Start.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Start message.
             * @function verify
             * @memberof replitproto.Start
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Start.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Start message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Start
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Start} Start
             */
            Start.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Start)
                    return object;
                return new $root.replitproto.Start();
            };
    
            /**
             * Creates a plain object from a Start message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Start
             * @static
             * @param {replitproto.Start} message Start
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Start.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Start to JSON.
             * @function toJSON
             * @memberof replitproto.Start
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Start.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Start;
        })();
    
        replitproto.DebugStatus = (function() {
    
            /**
             * Properties of a DebugStatus.
             * @memberof replitproto
             * @interface IDebugStatus
             * @property {boolean|null} [done] DebugStatus done
             * @property {Array.<replitproto.IStackFrame>|null} [stack] DebugStatus stack
             */
    
            /**
             * Constructs a new DebugStatus.
             * @memberof replitproto
             * @classdesc Represents a DebugStatus.
             * @implements IDebugStatus
             * @constructor
             * @param {replitproto.IDebugStatus=} [properties] Properties to set
             */
            function DebugStatus(properties) {
                this.stack = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DebugStatus done.
             * @member {boolean} done
             * @memberof replitproto.DebugStatus
             * @instance
             */
            DebugStatus.prototype.done = false;
    
            /**
             * DebugStatus stack.
             * @member {Array.<replitproto.IStackFrame>} stack
             * @memberof replitproto.DebugStatus
             * @instance
             */
            DebugStatus.prototype.stack = $util.emptyArray;
    
            /**
             * Creates a new DebugStatus instance using the specified properties.
             * @function create
             * @memberof replitproto.DebugStatus
             * @static
             * @param {replitproto.IDebugStatus=} [properties] Properties to set
             * @returns {replitproto.DebugStatus} DebugStatus instance
             */
            DebugStatus.create = function create(properties) {
                return new DebugStatus(properties);
            };
    
            /**
             * Encodes the specified DebugStatus message. Does not implicitly {@link replitproto.DebugStatus.verify|verify} messages.
             * @function encode
             * @memberof replitproto.DebugStatus
             * @static
             * @param {replitproto.IDebugStatus} message DebugStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DebugStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.done != null && message.hasOwnProperty("done"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.done);
                if (message.stack != null && message.stack.length)
                    for (var i = 0; i < message.stack.length; ++i)
                        $root.replitproto.StackFrame.encode(message.stack[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified DebugStatus message, length delimited. Does not implicitly {@link replitproto.DebugStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.DebugStatus
             * @static
             * @param {replitproto.IDebugStatus} message DebugStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DebugStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DebugStatus message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.DebugStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.DebugStatus} DebugStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DebugStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.DebugStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.done = reader.bool();
                        break;
                    case 2:
                        if (!(message.stack && message.stack.length))
                            message.stack = [];
                        message.stack.push($root.replitproto.StackFrame.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DebugStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.DebugStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.DebugStatus} DebugStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DebugStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DebugStatus message.
             * @function verify
             * @memberof replitproto.DebugStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DebugStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.done != null && message.hasOwnProperty("done"))
                    if (typeof message.done !== "boolean")
                        return "done: boolean expected";
                if (message.stack != null && message.hasOwnProperty("stack")) {
                    if (!Array.isArray(message.stack))
                        return "stack: array expected";
                    for (var i = 0; i < message.stack.length; ++i) {
                        var error = $root.replitproto.StackFrame.verify(message.stack[i]);
                        if (error)
                            return "stack." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a DebugStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.DebugStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.DebugStatus} DebugStatus
             */
            DebugStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.DebugStatus)
                    return object;
                var message = new $root.replitproto.DebugStatus();
                if (object.done != null)
                    message.done = Boolean(object.done);
                if (object.stack) {
                    if (!Array.isArray(object.stack))
                        throw TypeError(".replitproto.DebugStatus.stack: array expected");
                    message.stack = [];
                    for (var i = 0; i < object.stack.length; ++i) {
                        if (typeof object.stack[i] !== "object")
                            throw TypeError(".replitproto.DebugStatus.stack: object expected");
                        message.stack[i] = $root.replitproto.StackFrame.fromObject(object.stack[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DebugStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.DebugStatus
             * @static
             * @param {replitproto.DebugStatus} message DebugStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DebugStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.stack = [];
                if (options.defaults)
                    object.done = false;
                if (message.done != null && message.hasOwnProperty("done"))
                    object.done = message.done;
                if (message.stack && message.stack.length) {
                    object.stack = [];
                    for (var j = 0; j < message.stack.length; ++j)
                        object.stack[j] = $root.replitproto.StackFrame.toObject(message.stack[j], options);
                }
                return object;
            };
    
            /**
             * Converts this DebugStatus to JSON.
             * @function toJSON
             * @memberof replitproto.DebugStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DebugStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DebugStatus;
        })();
    
        replitproto.StackFrame = (function() {
    
            /**
             * Properties of a StackFrame.
             * @memberof replitproto
             * @interface IStackFrame
             * @property {string|null} ["function"] StackFrame function
             * @property {number|null} [line] StackFrame line
             */
    
            /**
             * Constructs a new StackFrame.
             * @memberof replitproto
             * @classdesc Represents a StackFrame.
             * @implements IStackFrame
             * @constructor
             * @param {replitproto.IStackFrame=} [properties] Properties to set
             */
            function StackFrame(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * StackFrame function.
             * @member {string} function
             * @memberof replitproto.StackFrame
             * @instance
             */
            StackFrame.prototype["function"] = "";
    
            /**
             * StackFrame line.
             * @member {number} line
             * @memberof replitproto.StackFrame
             * @instance
             */
            StackFrame.prototype.line = 0;
    
            /**
             * Creates a new StackFrame instance using the specified properties.
             * @function create
             * @memberof replitproto.StackFrame
             * @static
             * @param {replitproto.IStackFrame=} [properties] Properties to set
             * @returns {replitproto.StackFrame} StackFrame instance
             */
            StackFrame.create = function create(properties) {
                return new StackFrame(properties);
            };
    
            /**
             * Encodes the specified StackFrame message. Does not implicitly {@link replitproto.StackFrame.verify|verify} messages.
             * @function encode
             * @memberof replitproto.StackFrame
             * @static
             * @param {replitproto.IStackFrame} message StackFrame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StackFrame.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["function"] != null && message.hasOwnProperty("function"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["function"]);
                if (message.line != null && message.hasOwnProperty("line"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.line);
                return writer;
            };
    
            /**
             * Encodes the specified StackFrame message, length delimited. Does not implicitly {@link replitproto.StackFrame.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.StackFrame
             * @static
             * @param {replitproto.IStackFrame} message StackFrame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StackFrame.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a StackFrame message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.StackFrame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.StackFrame} StackFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StackFrame.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.StackFrame();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message["function"] = reader.string();
                        break;
                    case 2:
                        message.line = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a StackFrame message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.StackFrame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.StackFrame} StackFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StackFrame.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a StackFrame message.
             * @function verify
             * @memberof replitproto.StackFrame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StackFrame.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message["function"] != null && message.hasOwnProperty("function"))
                    if (!$util.isString(message["function"]))
                        return "function: string expected";
                if (message.line != null && message.hasOwnProperty("line"))
                    if (!$util.isInteger(message.line))
                        return "line: integer expected";
                return null;
            };
    
            /**
             * Creates a StackFrame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.StackFrame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.StackFrame} StackFrame
             */
            StackFrame.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.StackFrame)
                    return object;
                var message = new $root.replitproto.StackFrame();
                if (object["function"] != null)
                    message["function"] = String(object["function"]);
                if (object.line != null)
                    message.line = object.line >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a StackFrame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.StackFrame
             * @static
             * @param {replitproto.StackFrame} message StackFrame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StackFrame.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object["function"] = "";
                    object.line = 0;
                }
                if (message["function"] != null && message.hasOwnProperty("function"))
                    object["function"] = message["function"];
                if (message.line != null && message.hasOwnProperty("line"))
                    object.line = message.line;
                return object;
            };
    
            /**
             * Converts this StackFrame to JSON.
             * @function toJSON
             * @memberof replitproto.StackFrame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StackFrame.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return StackFrame;
        })();
    
        replitproto.ContainedTest = (function() {
    
            /**
             * Properties of a ContainedTest.
             * @memberof replitproto
             * @interface IContainedTest
             * @property {replitproto.IFile|null} [suite] ContainedTest suite
             * @property {Array.<replitproto.IFile>|null} [project] ContainedTest project
             */
    
            /**
             * Constructs a new ContainedTest.
             * @memberof replitproto
             * @classdesc Represents a ContainedTest.
             * @implements IContainedTest
             * @constructor
             * @param {replitproto.IContainedTest=} [properties] Properties to set
             */
            function ContainedTest(properties) {
                this.project = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ContainedTest suite.
             * @member {replitproto.IFile|null|undefined} suite
             * @memberof replitproto.ContainedTest
             * @instance
             */
            ContainedTest.prototype.suite = null;
    
            /**
             * ContainedTest project.
             * @member {Array.<replitproto.IFile>} project
             * @memberof replitproto.ContainedTest
             * @instance
             */
            ContainedTest.prototype.project = $util.emptyArray;
    
            /**
             * Creates a new ContainedTest instance using the specified properties.
             * @function create
             * @memberof replitproto.ContainedTest
             * @static
             * @param {replitproto.IContainedTest=} [properties] Properties to set
             * @returns {replitproto.ContainedTest} ContainedTest instance
             */
            ContainedTest.create = function create(properties) {
                return new ContainedTest(properties);
            };
    
            /**
             * Encodes the specified ContainedTest message. Does not implicitly {@link replitproto.ContainedTest.verify|verify} messages.
             * @function encode
             * @memberof replitproto.ContainedTest
             * @static
             * @param {replitproto.IContainedTest} message ContainedTest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContainedTest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.suite != null && message.hasOwnProperty("suite"))
                    $root.replitproto.File.encode(message.suite, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.project != null && message.project.length)
                    for (var i = 0; i < message.project.length; ++i)
                        $root.replitproto.File.encode(message.project[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ContainedTest message, length delimited. Does not implicitly {@link replitproto.ContainedTest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.ContainedTest
             * @static
             * @param {replitproto.IContainedTest} message ContainedTest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContainedTest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ContainedTest message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.ContainedTest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.ContainedTest} ContainedTest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContainedTest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.ContainedTest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.suite = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.project && message.project.length))
                            message.project = [];
                        message.project.push($root.replitproto.File.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ContainedTest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.ContainedTest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.ContainedTest} ContainedTest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContainedTest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ContainedTest message.
             * @function verify
             * @memberof replitproto.ContainedTest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ContainedTest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.suite != null && message.hasOwnProperty("suite")) {
                    var error = $root.replitproto.File.verify(message.suite);
                    if (error)
                        return "suite." + error;
                }
                if (message.project != null && message.hasOwnProperty("project")) {
                    if (!Array.isArray(message.project))
                        return "project: array expected";
                    for (var i = 0; i < message.project.length; ++i) {
                        var error = $root.replitproto.File.verify(message.project[i]);
                        if (error)
                            return "project." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a ContainedTest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.ContainedTest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.ContainedTest} ContainedTest
             */
            ContainedTest.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.ContainedTest)
                    return object;
                var message = new $root.replitproto.ContainedTest();
                if (object.suite != null) {
                    if (typeof object.suite !== "object")
                        throw TypeError(".replitproto.ContainedTest.suite: object expected");
                    message.suite = $root.replitproto.File.fromObject(object.suite);
                }
                if (object.project) {
                    if (!Array.isArray(object.project))
                        throw TypeError(".replitproto.ContainedTest.project: array expected");
                    message.project = [];
                    for (var i = 0; i < object.project.length; ++i) {
                        if (typeof object.project[i] !== "object")
                            throw TypeError(".replitproto.ContainedTest.project: object expected");
                        message.project[i] = $root.replitproto.File.fromObject(object.project[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ContainedTest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.ContainedTest
             * @static
             * @param {replitproto.ContainedTest} message ContainedTest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ContainedTest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.project = [];
                if (options.defaults)
                    object.suite = null;
                if (message.suite != null && message.hasOwnProperty("suite"))
                    object.suite = $root.replitproto.File.toObject(message.suite, options);
                if (message.project && message.project.length) {
                    object.project = [];
                    for (var j = 0; j < message.project.length; ++j)
                        object.project[j] = $root.replitproto.File.toObject(message.project[j], options);
                }
                return object;
            };
    
            /**
             * Converts this ContainedTest to JSON.
             * @function toJSON
             * @memberof replitproto.ContainedTest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ContainedTest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ContainedTest;
        })();
    
        replitproto.TestResult = (function() {
    
            /**
             * Properties of a TestResult.
             * @memberof replitproto
             * @interface ITestResult
             * @property {boolean|null} [passed] TestResult passed
             * @property {string|null} [stderr] TestResult stderr
             * @property {Array.<replitproto.ITestFailure>|null} [fails] TestResult fails
             */
    
            /**
             * Constructs a new TestResult.
             * @memberof replitproto
             * @classdesc Represents a TestResult.
             * @implements ITestResult
             * @constructor
             * @param {replitproto.ITestResult=} [properties] Properties to set
             */
            function TestResult(properties) {
                this.fails = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TestResult passed.
             * @member {boolean} passed
             * @memberof replitproto.TestResult
             * @instance
             */
            TestResult.prototype.passed = false;
    
            /**
             * TestResult stderr.
             * @member {string} stderr
             * @memberof replitproto.TestResult
             * @instance
             */
            TestResult.prototype.stderr = "";
    
            /**
             * TestResult fails.
             * @member {Array.<replitproto.ITestFailure>} fails
             * @memberof replitproto.TestResult
             * @instance
             */
            TestResult.prototype.fails = $util.emptyArray;
    
            /**
             * Creates a new TestResult instance using the specified properties.
             * @function create
             * @memberof replitproto.TestResult
             * @static
             * @param {replitproto.ITestResult=} [properties] Properties to set
             * @returns {replitproto.TestResult} TestResult instance
             */
            TestResult.create = function create(properties) {
                return new TestResult(properties);
            };
    
            /**
             * Encodes the specified TestResult message. Does not implicitly {@link replitproto.TestResult.verify|verify} messages.
             * @function encode
             * @memberof replitproto.TestResult
             * @static
             * @param {replitproto.ITestResult} message TestResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.passed != null && message.hasOwnProperty("passed"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.passed);
                if (message.stderr != null && message.hasOwnProperty("stderr"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.stderr);
                if (message.fails != null && message.fails.length)
                    for (var i = 0; i < message.fails.length; ++i)
                        $root.replitproto.TestFailure.encode(message.fails[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TestResult message, length delimited. Does not implicitly {@link replitproto.TestResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.TestResult
             * @static
             * @param {replitproto.ITestResult} message TestResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TestResult message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.TestResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.TestResult} TestResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.TestResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.passed = reader.bool();
                        break;
                    case 2:
                        message.stderr = reader.string();
                        break;
                    case 3:
                        if (!(message.fails && message.fails.length))
                            message.fails = [];
                        message.fails.push($root.replitproto.TestFailure.decode(reader, reader.uint32()));
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
             * @memberof replitproto.TestResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.TestResult} TestResult
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
             * @memberof replitproto.TestResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.passed != null && message.hasOwnProperty("passed"))
                    if (typeof message.passed !== "boolean")
                        return "passed: boolean expected";
                if (message.stderr != null && message.hasOwnProperty("stderr"))
                    if (!$util.isString(message.stderr))
                        return "stderr: string expected";
                if (message.fails != null && message.hasOwnProperty("fails")) {
                    if (!Array.isArray(message.fails))
                        return "fails: array expected";
                    for (var i = 0; i < message.fails.length; ++i) {
                        var error = $root.replitproto.TestFailure.verify(message.fails[i]);
                        if (error)
                            return "fails." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TestResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.TestResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.TestResult} TestResult
             */
            TestResult.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.TestResult)
                    return object;
                var message = new $root.replitproto.TestResult();
                if (object.passed != null)
                    message.passed = Boolean(object.passed);
                if (object.stderr != null)
                    message.stderr = String(object.stderr);
                if (object.fails) {
                    if (!Array.isArray(object.fails))
                        throw TypeError(".replitproto.TestResult.fails: array expected");
                    message.fails = [];
                    for (var i = 0; i < object.fails.length; ++i) {
                        if (typeof object.fails[i] !== "object")
                            throw TypeError(".replitproto.TestResult.fails: object expected");
                        message.fails[i] = $root.replitproto.TestFailure.fromObject(object.fails[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TestResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.TestResult
             * @static
             * @param {replitproto.TestResult} message TestResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.fails = [];
                if (options.defaults) {
                    object.passed = false;
                    object.stderr = "";
                }
                if (message.passed != null && message.hasOwnProperty("passed"))
                    object.passed = message.passed;
                if (message.stderr != null && message.hasOwnProperty("stderr"))
                    object.stderr = message.stderr;
                if (message.fails && message.fails.length) {
                    object.fails = [];
                    for (var j = 0; j < message.fails.length; ++j)
                        object.fails[j] = $root.replitproto.TestFailure.toObject(message.fails[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TestResult to JSON.
             * @function toJSON
             * @memberof replitproto.TestResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TestResult;
        })();
    
        replitproto.TestFailure = (function() {
    
            /**
             * Properties of a TestFailure.
             * @memberof replitproto
             * @interface ITestFailure
             * @property {string|null} [name] TestFailure name
             * @property {string|null} [trace] TestFailure trace
             */
    
            /**
             * Constructs a new TestFailure.
             * @memberof replitproto
             * @classdesc Represents a TestFailure.
             * @implements ITestFailure
             * @constructor
             * @param {replitproto.ITestFailure=} [properties] Properties to set
             */
            function TestFailure(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TestFailure name.
             * @member {string} name
             * @memberof replitproto.TestFailure
             * @instance
             */
            TestFailure.prototype.name = "";
    
            /**
             * TestFailure trace.
             * @member {string} trace
             * @memberof replitproto.TestFailure
             * @instance
             */
            TestFailure.prototype.trace = "";
    
            /**
             * Creates a new TestFailure instance using the specified properties.
             * @function create
             * @memberof replitproto.TestFailure
             * @static
             * @param {replitproto.ITestFailure=} [properties] Properties to set
             * @returns {replitproto.TestFailure} TestFailure instance
             */
            TestFailure.create = function create(properties) {
                return new TestFailure(properties);
            };
    
            /**
             * Encodes the specified TestFailure message. Does not implicitly {@link replitproto.TestFailure.verify|verify} messages.
             * @function encode
             * @memberof replitproto.TestFailure
             * @static
             * @param {replitproto.ITestFailure} message TestFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestFailure.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.trace != null && message.hasOwnProperty("trace"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.trace);
                return writer;
            };
    
            /**
             * Encodes the specified TestFailure message, length delimited. Does not implicitly {@link replitproto.TestFailure.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.TestFailure
             * @static
             * @param {replitproto.ITestFailure} message TestFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestFailure.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TestFailure message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.TestFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.TestFailure} TestFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestFailure.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.TestFailure();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.trace = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TestFailure message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.TestFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.TestFailure} TestFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestFailure.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TestFailure message.
             * @function verify
             * @memberof replitproto.TestFailure
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestFailure.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.trace != null && message.hasOwnProperty("trace"))
                    if (!$util.isString(message.trace))
                        return "trace: string expected";
                return null;
            };
    
            /**
             * Creates a TestFailure message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.TestFailure
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.TestFailure} TestFailure
             */
            TestFailure.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.TestFailure)
                    return object;
                var message = new $root.replitproto.TestFailure();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.trace != null)
                    message.trace = String(object.trace);
                return message;
            };
    
            /**
             * Creates a plain object from a TestFailure message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.TestFailure
             * @static
             * @param {replitproto.TestFailure} message TestFailure
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestFailure.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.trace = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.trace != null && message.hasOwnProperty("trace"))
                    object.trace = message.trace;
                return object;
            };
    
            /**
             * Converts this TestFailure to JSON.
             * @function toJSON
             * @memberof replitproto.TestFailure
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestFailure.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TestFailure;
        })();
    
        replitproto.ResizeTerm = (function() {
    
            /**
             * Properties of a ResizeTerm.
             * @memberof replitproto
             * @interface IResizeTerm
             * @property {number|null} [rows] ResizeTerm rows
             * @property {number|null} [cols] ResizeTerm cols
             */
    
            /**
             * Constructs a new ResizeTerm.
             * @memberof replitproto
             * @classdesc Represents a ResizeTerm.
             * @implements IResizeTerm
             * @constructor
             * @param {replitproto.IResizeTerm=} [properties] Properties to set
             */
            function ResizeTerm(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResizeTerm rows.
             * @member {number} rows
             * @memberof replitproto.ResizeTerm
             * @instance
             */
            ResizeTerm.prototype.rows = 0;
    
            /**
             * ResizeTerm cols.
             * @member {number} cols
             * @memberof replitproto.ResizeTerm
             * @instance
             */
            ResizeTerm.prototype.cols = 0;
    
            /**
             * Creates a new ResizeTerm instance using the specified properties.
             * @function create
             * @memberof replitproto.ResizeTerm
             * @static
             * @param {replitproto.IResizeTerm=} [properties] Properties to set
             * @returns {replitproto.ResizeTerm} ResizeTerm instance
             */
            ResizeTerm.create = function create(properties) {
                return new ResizeTerm(properties);
            };
    
            /**
             * Encodes the specified ResizeTerm message. Does not implicitly {@link replitproto.ResizeTerm.verify|verify} messages.
             * @function encode
             * @memberof replitproto.ResizeTerm
             * @static
             * @param {replitproto.IResizeTerm} message ResizeTerm message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResizeTerm.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rows != null && message.hasOwnProperty("rows"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rows);
                if (message.cols != null && message.hasOwnProperty("cols"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cols);
                return writer;
            };
    
            /**
             * Encodes the specified ResizeTerm message, length delimited. Does not implicitly {@link replitproto.ResizeTerm.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.ResizeTerm
             * @static
             * @param {replitproto.IResizeTerm} message ResizeTerm message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResizeTerm.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResizeTerm message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.ResizeTerm
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.ResizeTerm} ResizeTerm
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResizeTerm.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.ResizeTerm();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.rows = reader.uint32();
                        break;
                    case 2:
                        message.cols = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResizeTerm message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.ResizeTerm
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.ResizeTerm} ResizeTerm
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResizeTerm.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResizeTerm message.
             * @function verify
             * @memberof replitproto.ResizeTerm
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResizeTerm.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rows != null && message.hasOwnProperty("rows"))
                    if (!$util.isInteger(message.rows))
                        return "rows: integer expected";
                if (message.cols != null && message.hasOwnProperty("cols"))
                    if (!$util.isInteger(message.cols))
                        return "cols: integer expected";
                return null;
            };
    
            /**
             * Creates a ResizeTerm message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.ResizeTerm
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.ResizeTerm} ResizeTerm
             */
            ResizeTerm.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.ResizeTerm)
                    return object;
                var message = new $root.replitproto.ResizeTerm();
                if (object.rows != null)
                    message.rows = object.rows >>> 0;
                if (object.cols != null)
                    message.cols = object.cols >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResizeTerm message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.ResizeTerm
             * @static
             * @param {replitproto.ResizeTerm} message ResizeTerm
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResizeTerm.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.rows = 0;
                    object.cols = 0;
                }
                if (message.rows != null && message.hasOwnProperty("rows"))
                    object.rows = message.rows;
                if (message.cols != null && message.hasOwnProperty("cols"))
                    object.cols = message.cols;
                return object;
            };
    
            /**
             * Converts this ResizeTerm to JSON.
             * @function toJSON
             * @memberof replitproto.ResizeTerm
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResizeTerm.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResizeTerm;
        })();
    
        replitproto.SaneTerm = (function() {
    
            /**
             * Properties of a SaneTerm.
             * @memberof replitproto
             * @interface ISaneTerm
             */
    
            /**
             * Constructs a new SaneTerm.
             * @memberof replitproto
             * @classdesc Represents a SaneTerm.
             * @implements ISaneTerm
             * @constructor
             * @param {replitproto.ISaneTerm=} [properties] Properties to set
             */
            function SaneTerm(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new SaneTerm instance using the specified properties.
             * @function create
             * @memberof replitproto.SaneTerm
             * @static
             * @param {replitproto.ISaneTerm=} [properties] Properties to set
             * @returns {replitproto.SaneTerm} SaneTerm instance
             */
            SaneTerm.create = function create(properties) {
                return new SaneTerm(properties);
            };
    
            /**
             * Encodes the specified SaneTerm message. Does not implicitly {@link replitproto.SaneTerm.verify|verify} messages.
             * @function encode
             * @memberof replitproto.SaneTerm
             * @static
             * @param {replitproto.ISaneTerm} message SaneTerm message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SaneTerm.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified SaneTerm message, length delimited. Does not implicitly {@link replitproto.SaneTerm.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.SaneTerm
             * @static
             * @param {replitproto.ISaneTerm} message SaneTerm message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SaneTerm.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SaneTerm message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.SaneTerm
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.SaneTerm} SaneTerm
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SaneTerm.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.SaneTerm();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SaneTerm message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.SaneTerm
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.SaneTerm} SaneTerm
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SaneTerm.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SaneTerm message.
             * @function verify
             * @memberof replitproto.SaneTerm
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SaneTerm.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a SaneTerm message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.SaneTerm
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.SaneTerm} SaneTerm
             */
            SaneTerm.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.SaneTerm)
                    return object;
                return new $root.replitproto.SaneTerm();
            };
    
            /**
             * Creates a plain object from a SaneTerm message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.SaneTerm
             * @static
             * @param {replitproto.SaneTerm} message SaneTerm
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SaneTerm.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this SaneTerm to JSON.
             * @function toJSON
             * @memberof replitproto.SaneTerm
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SaneTerm.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SaneTerm;
        })();
    
        replitproto.LintResults = (function() {
    
            /**
             * Properties of a LintResults.
             * @memberof replitproto
             * @interface ILintResults
             * @property {Array.<replitproto.ILintResult>|null} [results] LintResults results
             */
    
            /**
             * Constructs a new LintResults.
             * @memberof replitproto
             * @classdesc Represents a LintResults.
             * @implements ILintResults
             * @constructor
             * @param {replitproto.ILintResults=} [properties] Properties to set
             */
            function LintResults(properties) {
                this.results = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LintResults results.
             * @member {Array.<replitproto.ILintResult>} results
             * @memberof replitproto.LintResults
             * @instance
             */
            LintResults.prototype.results = $util.emptyArray;
    
            /**
             * Creates a new LintResults instance using the specified properties.
             * @function create
             * @memberof replitproto.LintResults
             * @static
             * @param {replitproto.ILintResults=} [properties] Properties to set
             * @returns {replitproto.LintResults} LintResults instance
             */
            LintResults.create = function create(properties) {
                return new LintResults(properties);
            };
    
            /**
             * Encodes the specified LintResults message. Does not implicitly {@link replitproto.LintResults.verify|verify} messages.
             * @function encode
             * @memberof replitproto.LintResults
             * @static
             * @param {replitproto.ILintResults} message LintResults message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LintResults.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.results != null && message.results.length)
                    for (var i = 0; i < message.results.length; ++i)
                        $root.replitproto.LintResult.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified LintResults message, length delimited. Does not implicitly {@link replitproto.LintResults.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.LintResults
             * @static
             * @param {replitproto.ILintResults} message LintResults message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LintResults.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LintResults message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.LintResults
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.LintResults} LintResults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LintResults.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.LintResults();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.results && message.results.length))
                            message.results = [];
                        message.results.push($root.replitproto.LintResult.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LintResults message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.LintResults
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.LintResults} LintResults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LintResults.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LintResults message.
             * @function verify
             * @memberof replitproto.LintResults
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LintResults.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.results != null && message.hasOwnProperty("results")) {
                    if (!Array.isArray(message.results))
                        return "results: array expected";
                    for (var i = 0; i < message.results.length; ++i) {
                        var error = $root.replitproto.LintResult.verify(message.results[i]);
                        if (error)
                            return "results." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a LintResults message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.LintResults
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.LintResults} LintResults
             */
            LintResults.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.LintResults)
                    return object;
                var message = new $root.replitproto.LintResults();
                if (object.results) {
                    if (!Array.isArray(object.results))
                        throw TypeError(".replitproto.LintResults.results: array expected");
                    message.results = [];
                    for (var i = 0; i < object.results.length; ++i) {
                        if (typeof object.results[i] !== "object")
                            throw TypeError(".replitproto.LintResults.results: object expected");
                        message.results[i] = $root.replitproto.LintResult.fromObject(object.results[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a LintResults message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.LintResults
             * @static
             * @param {replitproto.LintResults} message LintResults
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LintResults.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.results = [];
                if (message.results && message.results.length) {
                    object.results = [];
                    for (var j = 0; j < message.results.length; ++j)
                        object.results[j] = $root.replitproto.LintResult.toObject(message.results[j], options);
                }
                return object;
            };
    
            /**
             * Converts this LintResults to JSON.
             * @function toJSON
             * @memberof replitproto.LintResults
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LintResults.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LintResults;
        })();
    
        replitproto.LintResult = (function() {
    
            /**
             * Properties of a LintResult.
             * @memberof replitproto
             * @interface ILintResult
             * @property {string|null} [text] LintResult text
             * @property {number|null} [row] LintResult row
             * @property {number|null} [column] LintResult column
             * @property {string|null} [type] LintResult type
             */
    
            /**
             * Constructs a new LintResult.
             * @memberof replitproto
             * @classdesc Represents a LintResult.
             * @implements ILintResult
             * @constructor
             * @param {replitproto.ILintResult=} [properties] Properties to set
             */
            function LintResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LintResult text.
             * @member {string} text
             * @memberof replitproto.LintResult
             * @instance
             */
            LintResult.prototype.text = "";
    
            /**
             * LintResult row.
             * @member {number} row
             * @memberof replitproto.LintResult
             * @instance
             */
            LintResult.prototype.row = 0;
    
            /**
             * LintResult column.
             * @member {number} column
             * @memberof replitproto.LintResult
             * @instance
             */
            LintResult.prototype.column = 0;
    
            /**
             * LintResult type.
             * @member {string} type
             * @memberof replitproto.LintResult
             * @instance
             */
            LintResult.prototype.type = "";
    
            /**
             * Creates a new LintResult instance using the specified properties.
             * @function create
             * @memberof replitproto.LintResult
             * @static
             * @param {replitproto.ILintResult=} [properties] Properties to set
             * @returns {replitproto.LintResult} LintResult instance
             */
            LintResult.create = function create(properties) {
                return new LintResult(properties);
            };
    
            /**
             * Encodes the specified LintResult message. Does not implicitly {@link replitproto.LintResult.verify|verify} messages.
             * @function encode
             * @memberof replitproto.LintResult
             * @static
             * @param {replitproto.ILintResult} message LintResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LintResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && message.hasOwnProperty("text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.row != null && message.hasOwnProperty("row"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.row);
                if (message.column != null && message.hasOwnProperty("column"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.column);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
                return writer;
            };
    
            /**
             * Encodes the specified LintResult message, length delimited. Does not implicitly {@link replitproto.LintResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.LintResult
             * @static
             * @param {replitproto.ILintResult} message LintResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LintResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LintResult message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.LintResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.LintResult} LintResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LintResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.LintResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.text = reader.string();
                        break;
                    case 2:
                        message.row = reader.int32();
                        break;
                    case 3:
                        message.column = reader.int32();
                        break;
                    case 4:
                        message.type = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LintResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.LintResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.LintResult} LintResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LintResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LintResult message.
             * @function verify
             * @memberof replitproto.LintResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LintResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.row != null && message.hasOwnProperty("row"))
                    if (!$util.isInteger(message.row))
                        return "row: integer expected";
                if (message.column != null && message.hasOwnProperty("column"))
                    if (!$util.isInteger(message.column))
                        return "column: integer expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                return null;
            };
    
            /**
             * Creates a LintResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.LintResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.LintResult} LintResult
             */
            LintResult.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.LintResult)
                    return object;
                var message = new $root.replitproto.LintResult();
                if (object.text != null)
                    message.text = String(object.text);
                if (object.row != null)
                    message.row = object.row | 0;
                if (object.column != null)
                    message.column = object.column | 0;
                if (object.type != null)
                    message.type = String(object.type);
                return message;
            };
    
            /**
             * Creates a plain object from a LintResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.LintResult
             * @static
             * @param {replitproto.LintResult} message LintResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LintResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.text = "";
                    object.row = 0;
                    object.column = 0;
                    object.type = "";
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.row != null && message.hasOwnProperty("row"))
                    object.row = message.row;
                if (message.column != null && message.hasOwnProperty("column"))
                    object.column = message.column;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                return object;
            };
    
            /**
             * Converts this LintResult to JSON.
             * @function toJSON
             * @memberof replitproto.LintResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LintResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LintResult;
        })();
    
        replitproto.OK = (function() {
    
            /**
             * Properties of a OK.
             * @memberof replitproto
             * @interface IOK
             */
    
            /**
             * Constructs a new OK.
             * @memberof replitproto
             * @classdesc Represents a OK.
             * @implements IOK
             * @constructor
             * @param {replitproto.IOK=} [properties] Properties to set
             */
            function OK(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new OK instance using the specified properties.
             * @function create
             * @memberof replitproto.OK
             * @static
             * @param {replitproto.IOK=} [properties] Properties to set
             * @returns {replitproto.OK} OK instance
             */
            OK.create = function create(properties) {
                return new OK(properties);
            };
    
            /**
             * Encodes the specified OK message. Does not implicitly {@link replitproto.OK.verify|verify} messages.
             * @function encode
             * @memberof replitproto.OK
             * @static
             * @param {replitproto.IOK} message OK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified OK message, length delimited. Does not implicitly {@link replitproto.OK.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.OK
             * @static
             * @param {replitproto.IOK} message OK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OK.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a OK message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.OK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.OK} OK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.OK();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a OK message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.OK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.OK} OK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OK.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a OK message.
             * @function verify
             * @memberof replitproto.OK
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OK.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a OK message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.OK
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.OK} OK
             */
            OK.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.OK)
                    return object;
                return new $root.replitproto.OK();
            };
    
            /**
             * Creates a plain object from a OK message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.OK
             * @static
             * @param {replitproto.OK} message OK
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OK.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this OK to JSON.
             * @function toJSON
             * @memberof replitproto.OK
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OK.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OK;
        })();
    
        replitproto.Move = (function() {
    
            /**
             * Properties of a Move.
             * @memberof replitproto
             * @interface IMove
             * @property {string|null} [oldPath] Move oldPath
             * @property {string|null} [newPath] Move newPath
             */
    
            /**
             * Constructs a new Move.
             * @memberof replitproto
             * @classdesc Represents a Move.
             * @implements IMove
             * @constructor
             * @param {replitproto.IMove=} [properties] Properties to set
             */
            function Move(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Move oldPath.
             * @member {string} oldPath
             * @memberof replitproto.Move
             * @instance
             */
            Move.prototype.oldPath = "";
    
            /**
             * Move newPath.
             * @member {string} newPath
             * @memberof replitproto.Move
             * @instance
             */
            Move.prototype.newPath = "";
    
            /**
             * Creates a new Move instance using the specified properties.
             * @function create
             * @memberof replitproto.Move
             * @static
             * @param {replitproto.IMove=} [properties] Properties to set
             * @returns {replitproto.Move} Move instance
             */
            Move.create = function create(properties) {
                return new Move(properties);
            };
    
            /**
             * Encodes the specified Move message. Does not implicitly {@link replitproto.Move.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Move
             * @static
             * @param {replitproto.IMove} message Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Move.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.oldPath != null && message.hasOwnProperty("oldPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.oldPath);
                if (message.newPath != null && message.hasOwnProperty("newPath"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.newPath);
                return writer;
            };
    
            /**
             * Encodes the specified Move message, length delimited. Does not implicitly {@link replitproto.Move.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Move
             * @static
             * @param {replitproto.IMove} message Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Move.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Move message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Move} Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Move.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Move();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.oldPath = reader.string();
                        break;
                    case 2:
                        message.newPath = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Move message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Move} Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Move.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Move message.
             * @function verify
             * @memberof replitproto.Move
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Move.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.oldPath != null && message.hasOwnProperty("oldPath"))
                    if (!$util.isString(message.oldPath))
                        return "oldPath: string expected";
                if (message.newPath != null && message.hasOwnProperty("newPath"))
                    if (!$util.isString(message.newPath))
                        return "newPath: string expected";
                return null;
            };
    
            /**
             * Creates a Move message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Move
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Move} Move
             */
            Move.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Move)
                    return object;
                var message = new $root.replitproto.Move();
                if (object.oldPath != null)
                    message.oldPath = String(object.oldPath);
                if (object.newPath != null)
                    message.newPath = String(object.newPath);
                return message;
            };
    
            /**
             * Creates a plain object from a Move message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Move
             * @static
             * @param {replitproto.Move} message Move
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Move.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.oldPath = "";
                    object.newPath = "";
                }
                if (message.oldPath != null && message.hasOwnProperty("oldPath"))
                    object.oldPath = message.oldPath;
                if (message.newPath != null && message.hasOwnProperty("newPath"))
                    object.newPath = message.newPath;
                return object;
            };
    
            /**
             * Converts this Move to JSON.
             * @function toJSON
             * @memberof replitproto.Move
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Move.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Move;
        })();
    
        replitproto.Files = (function() {
    
            /**
             * Properties of a Files.
             * @memberof replitproto
             * @interface IFiles
             * @property {Array.<replitproto.IFile>|null} [files] Files files
             */
    
            /**
             * Constructs a new Files.
             * @memberof replitproto
             * @classdesc Represents a Files.
             * @implements IFiles
             * @constructor
             * @param {replitproto.IFiles=} [properties] Properties to set
             */
            function Files(properties) {
                this.files = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Files files.
             * @member {Array.<replitproto.IFile>} files
             * @memberof replitproto.Files
             * @instance
             */
            Files.prototype.files = $util.emptyArray;
    
            /**
             * Creates a new Files instance using the specified properties.
             * @function create
             * @memberof replitproto.Files
             * @static
             * @param {replitproto.IFiles=} [properties] Properties to set
             * @returns {replitproto.Files} Files instance
             */
            Files.create = function create(properties) {
                return new Files(properties);
            };
    
            /**
             * Encodes the specified Files message. Does not implicitly {@link replitproto.Files.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Files
             * @static
             * @param {replitproto.IFiles} message Files message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Files.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.files != null && message.files.length)
                    for (var i = 0; i < message.files.length; ++i)
                        $root.replitproto.File.encode(message.files[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Files message, length delimited. Does not implicitly {@link replitproto.Files.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Files
             * @static
             * @param {replitproto.IFiles} message Files message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Files.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Files message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Files
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Files} Files
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Files.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Files();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.files && message.files.length))
                            message.files = [];
                        message.files.push($root.replitproto.File.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Files message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Files
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Files} Files
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Files.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Files message.
             * @function verify
             * @memberof replitproto.Files
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Files.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.files != null && message.hasOwnProperty("files")) {
                    if (!Array.isArray(message.files))
                        return "files: array expected";
                    for (var i = 0; i < message.files.length; ++i) {
                        var error = $root.replitproto.File.verify(message.files[i]);
                        if (error)
                            return "files." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Files message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Files
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Files} Files
             */
            Files.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Files)
                    return object;
                var message = new $root.replitproto.Files();
                if (object.files) {
                    if (!Array.isArray(object.files))
                        throw TypeError(".replitproto.Files.files: array expected");
                    message.files = [];
                    for (var i = 0; i < object.files.length; ++i) {
                        if (typeof object.files[i] !== "object")
                            throw TypeError(".replitproto.Files.files: object expected");
                        message.files[i] = $root.replitproto.File.fromObject(object.files[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Files message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Files
             * @static
             * @param {replitproto.Files} message Files
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Files.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.files = [];
                if (message.files && message.files.length) {
                    object.files = [];
                    for (var j = 0; j < message.files.length; ++j)
                        object.files[j] = $root.replitproto.File.toObject(message.files[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Files to JSON.
             * @function toJSON
             * @memberof replitproto.Files
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Files.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Files;
        })();
    
        replitproto.File = (function() {
    
            /**
             * Properties of a File.
             * @memberof replitproto
             * @interface IFile
             * @property {string|null} [path] File path
             * @property {replitproto.File.Type|null} [type] File type
             * @property {Uint8Array|null} [content] File content
             */
    
            /**
             * Constructs a new File.
             * @memberof replitproto
             * @classdesc Represents a File.
             * @implements IFile
             * @constructor
             * @param {replitproto.IFile=} [properties] Properties to set
             */
            function File(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * File path.
             * @member {string} path
             * @memberof replitproto.File
             * @instance
             */
            File.prototype.path = "";
    
            /**
             * File type.
             * @member {replitproto.File.Type} type
             * @memberof replitproto.File
             * @instance
             */
            File.prototype.type = 0;
    
            /**
             * File content.
             * @member {Uint8Array} content
             * @memberof replitproto.File
             * @instance
             */
            File.prototype.content = $util.newBuffer([]);
    
            /**
             * Creates a new File instance using the specified properties.
             * @function create
             * @memberof replitproto.File
             * @static
             * @param {replitproto.IFile=} [properties] Properties to set
             * @returns {replitproto.File} File instance
             */
            File.create = function create(properties) {
                return new File(properties);
            };
    
            /**
             * Encodes the specified File message. Does not implicitly {@link replitproto.File.verify|verify} messages.
             * @function encode
             * @memberof replitproto.File
             * @static
             * @param {replitproto.IFile} message File message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            File.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.path != null && message.hasOwnProperty("path"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.content != null && message.hasOwnProperty("content"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.content);
                return writer;
            };
    
            /**
             * Encodes the specified File message, length delimited. Does not implicitly {@link replitproto.File.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.File
             * @static
             * @param {replitproto.IFile} message File message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            File.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a File message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.File
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.File} File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            File.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.File();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.path = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.content = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a File message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.File
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.File} File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            File.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a File message.
             * @function verify
             * @memberof replitproto.File
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            File.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                        return "content: buffer expected";
                return null;
            };
    
            /**
             * Creates a File message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.File
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.File} File
             */
            File.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.File)
                    return object;
                var message = new $root.replitproto.File();
                if (object.path != null)
                    message.path = String(object.path);
                switch (object.type) {
                case "REGULAR":
                case 0:
                    message.type = 0;
                    break;
                case "DIRECTORY":
                case 1:
                    message.type = 1;
                    break;
                }
                if (object.content != null)
                    if (typeof object.content === "string")
                        $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                    else if (object.content.length)
                        message.content = object.content;
                return message;
            };
    
            /**
             * Creates a plain object from a File message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.File
             * @static
             * @param {replitproto.File} message File
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            File.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.path = "";
                    object.type = options.enums === String ? "REGULAR" : 0;
                    if (options.bytes === String)
                        object.content = "";
                    else {
                        object.content = [];
                        if (options.bytes !== Array)
                            object.content = $util.newBuffer(object.content);
                    }
                }
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.replitproto.File.Type[message.type] : message.type;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
                return object;
            };
    
            /**
             * Converts this File to JSON.
             * @function toJSON
             * @memberof replitproto.File
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            File.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Type enum.
             * @name replitproto.File.Type
             * @enum {string}
             * @property {number} REGULAR=0 REGULAR value
             * @property {number} DIRECTORY=1 DIRECTORY value
             */
            File.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "REGULAR"] = 0;
                values[valuesById[1] = "DIRECTORY"] = 1;
                return values;
            })();
    
            return File;
        })();
    
        replitproto.Clear = (function() {
    
            /**
             * Properties of a Clear.
             * @memberof replitproto
             * @interface IClear
             */
    
            /**
             * Constructs a new Clear.
             * @memberof replitproto
             * @classdesc Represents a Clear.
             * @implements IClear
             * @constructor
             * @param {replitproto.IClear=} [properties] Properties to set
             */
            function Clear(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Clear instance using the specified properties.
             * @function create
             * @memberof replitproto.Clear
             * @static
             * @param {replitproto.IClear=} [properties] Properties to set
             * @returns {replitproto.Clear} Clear instance
             */
            Clear.create = function create(properties) {
                return new Clear(properties);
            };
    
            /**
             * Encodes the specified Clear message. Does not implicitly {@link replitproto.Clear.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Clear
             * @static
             * @param {replitproto.IClear} message Clear message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Clear.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Clear message, length delimited. Does not implicitly {@link replitproto.Clear.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Clear
             * @static
             * @param {replitproto.IClear} message Clear message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Clear.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Clear message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Clear
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Clear} Clear
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Clear.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Clear();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Clear message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Clear
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Clear} Clear
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Clear.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Clear message.
             * @function verify
             * @memberof replitproto.Clear
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Clear.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Clear message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Clear
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Clear} Clear
             */
            Clear.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Clear)
                    return object;
                return new $root.replitproto.Clear();
            };
    
            /**
             * Creates a plain object from a Clear message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Clear
             * @static
             * @param {replitproto.Clear} message Clear
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Clear.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Clear to JSON.
             * @function toJSON
             * @memberof replitproto.Clear
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Clear.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Clear;
        })();
    
        replitproto.Toast = (function() {
    
            /**
             * Properties of a Toast.
             * @memberof replitproto
             * @interface IToast
             * @property {string|null} [text] Toast text
             */
    
            /**
             * Constructs a new Toast.
             * @memberof replitproto
             * @classdesc Represents a Toast.
             * @implements IToast
             * @constructor
             * @param {replitproto.IToast=} [properties] Properties to set
             */
            function Toast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Toast text.
             * @member {string} text
             * @memberof replitproto.Toast
             * @instance
             */
            Toast.prototype.text = "";
    
            /**
             * Creates a new Toast instance using the specified properties.
             * @function create
             * @memberof replitproto.Toast
             * @static
             * @param {replitproto.IToast=} [properties] Properties to set
             * @returns {replitproto.Toast} Toast instance
             */
            Toast.create = function create(properties) {
                return new Toast(properties);
            };
    
            /**
             * Encodes the specified Toast message. Does not implicitly {@link replitproto.Toast.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Toast
             * @static
             * @param {replitproto.IToast} message Toast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Toast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && message.hasOwnProperty("text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                return writer;
            };
    
            /**
             * Encodes the specified Toast message, length delimited. Does not implicitly {@link replitproto.Toast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Toast
             * @static
             * @param {replitproto.IToast} message Toast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Toast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Toast message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Toast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Toast} Toast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Toast.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Toast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.text = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Toast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Toast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Toast} Toast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Toast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Toast message.
             * @function verify
             * @memberof replitproto.Toast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Toast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                return null;
            };
    
            /**
             * Creates a Toast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Toast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Toast} Toast
             */
            Toast.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Toast)
                    return object;
                var message = new $root.replitproto.Toast();
                if (object.text != null)
                    message.text = String(object.text);
                return message;
            };
    
            /**
             * Creates a plain object from a Toast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Toast
             * @static
             * @param {replitproto.Toast} message Toast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Toast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.text = "";
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                return object;
            };
    
            /**
             * Converts this Toast to JSON.
             * @function toJSON
             * @memberof replitproto.Toast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Toast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Toast;
        })();
    
        replitproto.RunMain = (function() {
    
            /**
             * Properties of a RunMain.
             * @memberof replitproto
             * @interface IRunMain
             */
    
            /**
             * Constructs a new RunMain.
             * @memberof replitproto
             * @classdesc Represents a RunMain.
             * @implements IRunMain
             * @constructor
             * @param {replitproto.IRunMain=} [properties] Properties to set
             */
            function RunMain(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new RunMain instance using the specified properties.
             * @function create
             * @memberof replitproto.RunMain
             * @static
             * @param {replitproto.IRunMain=} [properties] Properties to set
             * @returns {replitproto.RunMain} RunMain instance
             */
            RunMain.create = function create(properties) {
                return new RunMain(properties);
            };
    
            /**
             * Encodes the specified RunMain message. Does not implicitly {@link replitproto.RunMain.verify|verify} messages.
             * @function encode
             * @memberof replitproto.RunMain
             * @static
             * @param {replitproto.IRunMain} message RunMain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunMain.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified RunMain message, length delimited. Does not implicitly {@link replitproto.RunMain.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.RunMain
             * @static
             * @param {replitproto.IRunMain} message RunMain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RunMain.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RunMain message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.RunMain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.RunMain} RunMain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunMain.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.RunMain();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RunMain message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.RunMain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.RunMain} RunMain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RunMain.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RunMain message.
             * @function verify
             * @memberof replitproto.RunMain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RunMain.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a RunMain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.RunMain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.RunMain} RunMain
             */
            RunMain.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.RunMain)
                    return object;
                return new $root.replitproto.RunMain();
            };
    
            /**
             * Creates a plain object from a RunMain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.RunMain
             * @static
             * @param {replitproto.RunMain} message RunMain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RunMain.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this RunMain to JSON.
             * @function toJSON
             * @memberof replitproto.RunMain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RunMain.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RunMain;
        })();
    
        replitproto.OpenChannel = (function() {
    
            /**
             * Properties of an OpenChannel.
             * @memberof replitproto
             * @interface IOpenChannel
             * @property {string|null} [service] OpenChannel service
             * @property {string|null} [name] OpenChannel name
             * @property {replitproto.OpenChannel.Action|null} [action] OpenChannel action
             * @property {number|null} [id] OpenChannel id
             */
    
            /**
             * Constructs a new OpenChannel.
             * @memberof replitproto
             * @classdesc Represents an OpenChannel.
             * @implements IOpenChannel
             * @constructor
             * @param {replitproto.IOpenChannel=} [properties] Properties to set
             */
            function OpenChannel(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OpenChannel service.
             * @member {string} service
             * @memberof replitproto.OpenChannel
             * @instance
             */
            OpenChannel.prototype.service = "";
    
            /**
             * OpenChannel name.
             * @member {string} name
             * @memberof replitproto.OpenChannel
             * @instance
             */
            OpenChannel.prototype.name = "";
    
            /**
             * OpenChannel action.
             * @member {replitproto.OpenChannel.Action} action
             * @memberof replitproto.OpenChannel
             * @instance
             */
            OpenChannel.prototype.action = 0;
    
            /**
             * OpenChannel id.
             * @member {number} id
             * @memberof replitproto.OpenChannel
             * @instance
             */
            OpenChannel.prototype.id = 0;
    
            /**
             * Creates a new OpenChannel instance using the specified properties.
             * @function create
             * @memberof replitproto.OpenChannel
             * @static
             * @param {replitproto.IOpenChannel=} [properties] Properties to set
             * @returns {replitproto.OpenChannel} OpenChannel instance
             */
            OpenChannel.create = function create(properties) {
                return new OpenChannel(properties);
            };
    
            /**
             * Encodes the specified OpenChannel message. Does not implicitly {@link replitproto.OpenChannel.verify|verify} messages.
             * @function encode
             * @memberof replitproto.OpenChannel
             * @static
             * @param {replitproto.IOpenChannel} message OpenChannel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenChannel.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.service != null && message.hasOwnProperty("service"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.service);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.action != null && message.hasOwnProperty("action"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.action);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.id);
                return writer;
            };
    
            /**
             * Encodes the specified OpenChannel message, length delimited. Does not implicitly {@link replitproto.OpenChannel.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.OpenChannel
             * @static
             * @param {replitproto.IOpenChannel} message OpenChannel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenChannel.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OpenChannel message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.OpenChannel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.OpenChannel} OpenChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenChannel.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.OpenChannel();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.service = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.action = reader.int32();
                        break;
                    case 4:
                        message.id = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OpenChannel message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.OpenChannel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.OpenChannel} OpenChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenChannel.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OpenChannel message.
             * @function verify
             * @memberof replitproto.OpenChannel
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenChannel.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.service != null && message.hasOwnProperty("service"))
                    if (!$util.isString(message.service))
                        return "service: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.action != null && message.hasOwnProperty("action"))
                    switch (message.action) {
                    default:
                        return "action: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                return null;
            };
    
            /**
             * Creates an OpenChannel message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.OpenChannel
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.OpenChannel} OpenChannel
             */
            OpenChannel.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.OpenChannel)
                    return object;
                var message = new $root.replitproto.OpenChannel();
                if (object.service != null)
                    message.service = String(object.service);
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.action) {
                case "CREATE":
                case 0:
                    message.action = 0;
                    break;
                case "ATTACH":
                case 1:
                    message.action = 1;
                    break;
                case "ATTACH_OR_CREATE":
                case 2:
                    message.action = 2;
                    break;
                }
                if (object.id != null)
                    message.id = object.id | 0;
                return message;
            };
    
            /**
             * Creates a plain object from an OpenChannel message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.OpenChannel
             * @static
             * @param {replitproto.OpenChannel} message OpenChannel
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenChannel.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.service = "";
                    object.name = "";
                    object.action = options.enums === String ? "CREATE" : 0;
                    object.id = 0;
                }
                if (message.service != null && message.hasOwnProperty("service"))
                    object.service = message.service;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.action != null && message.hasOwnProperty("action"))
                    object.action = options.enums === String ? $root.replitproto.OpenChannel.Action[message.action] : message.action;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };
    
            /**
             * Converts this OpenChannel to JSON.
             * @function toJSON
             * @memberof replitproto.OpenChannel
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenChannel.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Action enum.
             * @name replitproto.OpenChannel.Action
             * @enum {string}
             * @property {number} CREATE=0 CREATE value
             * @property {number} ATTACH=1 ATTACH value
             * @property {number} ATTACH_OR_CREATE=2 ATTACH_OR_CREATE value
             */
            OpenChannel.Action = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CREATE"] = 0;
                values[valuesById[1] = "ATTACH"] = 1;
                values[valuesById[2] = "ATTACH_OR_CREATE"] = 2;
                return values;
            })();
    
            return OpenChannel;
        })();
    
        replitproto.OpenChannelRes = (function() {
    
            /**
             * Properties of an OpenChannelRes.
             * @memberof replitproto
             * @interface IOpenChannelRes
             * @property {number|null} [id] OpenChannelRes id
             * @property {replitproto.OpenChannelRes.State|null} [state] OpenChannelRes state
             * @property {string|null} [error] OpenChannelRes error
             */
    
            /**
             * Constructs a new OpenChannelRes.
             * @memberof replitproto
             * @classdesc Represents an OpenChannelRes.
             * @implements IOpenChannelRes
             * @constructor
             * @param {replitproto.IOpenChannelRes=} [properties] Properties to set
             */
            function OpenChannelRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OpenChannelRes id.
             * @member {number} id
             * @memberof replitproto.OpenChannelRes
             * @instance
             */
            OpenChannelRes.prototype.id = 0;
    
            /**
             * OpenChannelRes state.
             * @member {replitproto.OpenChannelRes.State} state
             * @memberof replitproto.OpenChannelRes
             * @instance
             */
            OpenChannelRes.prototype.state = 0;
    
            /**
             * OpenChannelRes error.
             * @member {string} error
             * @memberof replitproto.OpenChannelRes
             * @instance
             */
            OpenChannelRes.prototype.error = "";
    
            /**
             * Creates a new OpenChannelRes instance using the specified properties.
             * @function create
             * @memberof replitproto.OpenChannelRes
             * @static
             * @param {replitproto.IOpenChannelRes=} [properties] Properties to set
             * @returns {replitproto.OpenChannelRes} OpenChannelRes instance
             */
            OpenChannelRes.create = function create(properties) {
                return new OpenChannelRes(properties);
            };
    
            /**
             * Encodes the specified OpenChannelRes message. Does not implicitly {@link replitproto.OpenChannelRes.verify|verify} messages.
             * @function encode
             * @memberof replitproto.OpenChannelRes
             * @static
             * @param {replitproto.IOpenChannelRes} message OpenChannelRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenChannelRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.error);
                return writer;
            };
    
            /**
             * Encodes the specified OpenChannelRes message, length delimited. Does not implicitly {@link replitproto.OpenChannelRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.OpenChannelRes
             * @static
             * @param {replitproto.IOpenChannelRes} message OpenChannelRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenChannelRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OpenChannelRes message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.OpenChannelRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.OpenChannelRes} OpenChannelRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenChannelRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.OpenChannelRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.state = reader.int32();
                        break;
                    case 3:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OpenChannelRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.OpenChannelRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.OpenChannelRes} OpenChannelRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenChannelRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OpenChannelRes message.
             * @function verify
             * @memberof replitproto.OpenChannelRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenChannelRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    switch (message.state) {
                    default:
                        return "state: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };
    
            /**
             * Creates an OpenChannelRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.OpenChannelRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.OpenChannelRes} OpenChannelRes
             */
            OpenChannelRes.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.OpenChannelRes)
                    return object;
                var message = new $root.replitproto.OpenChannelRes();
                if (object.id != null)
                    message.id = object.id | 0;
                switch (object.state) {
                case "CREATED":
                case 0:
                    message.state = 0;
                    break;
                case "ATTACHED":
                case 1:
                    message.state = 1;
                    break;
                case "ERROR":
                case 2:
                    message.state = 2;
                    break;
                }
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };
    
            /**
             * Creates a plain object from an OpenChannelRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.OpenChannelRes
             * @static
             * @param {replitproto.OpenChannelRes} message OpenChannelRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenChannelRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.state = options.enums === String ? "CREATED" : 0;
                    object.error = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = options.enums === String ? $root.replitproto.OpenChannelRes.State[message.state] : message.state;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };
    
            /**
             * Converts this OpenChannelRes to JSON.
             * @function toJSON
             * @memberof replitproto.OpenChannelRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenChannelRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * State enum.
             * @name replitproto.OpenChannelRes.State
             * @enum {string}
             * @property {number} CREATED=0 CREATED value
             * @property {number} ATTACHED=1 ATTACHED value
             * @property {number} ERROR=2 ERROR value
             */
            OpenChannelRes.State = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CREATED"] = 0;
                values[valuesById[1] = "ATTACHED"] = 1;
                values[valuesById[2] = "ERROR"] = 2;
                return values;
            })();
    
            return OpenChannelRes;
        })();
    
        replitproto.CloseChannel = (function() {
    
            /**
             * Properties of a CloseChannel.
             * @memberof replitproto
             * @interface ICloseChannel
             * @property {number|null} [id] CloseChannel id
             * @property {replitproto.CloseChannel.Action|null} [action] CloseChannel action
             */
    
            /**
             * Constructs a new CloseChannel.
             * @memberof replitproto
             * @classdesc Represents a CloseChannel.
             * @implements ICloseChannel
             * @constructor
             * @param {replitproto.ICloseChannel=} [properties] Properties to set
             */
            function CloseChannel(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CloseChannel id.
             * @member {number} id
             * @memberof replitproto.CloseChannel
             * @instance
             */
            CloseChannel.prototype.id = 0;
    
            /**
             * CloseChannel action.
             * @member {replitproto.CloseChannel.Action} action
             * @memberof replitproto.CloseChannel
             * @instance
             */
            CloseChannel.prototype.action = 0;
    
            /**
             * Creates a new CloseChannel instance using the specified properties.
             * @function create
             * @memberof replitproto.CloseChannel
             * @static
             * @param {replitproto.ICloseChannel=} [properties] Properties to set
             * @returns {replitproto.CloseChannel} CloseChannel instance
             */
            CloseChannel.create = function create(properties) {
                return new CloseChannel(properties);
            };
    
            /**
             * Encodes the specified CloseChannel message. Does not implicitly {@link replitproto.CloseChannel.verify|verify} messages.
             * @function encode
             * @memberof replitproto.CloseChannel
             * @static
             * @param {replitproto.ICloseChannel} message CloseChannel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseChannel.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.action != null && message.hasOwnProperty("action"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
                return writer;
            };
    
            /**
             * Encodes the specified CloseChannel message, length delimited. Does not implicitly {@link replitproto.CloseChannel.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.CloseChannel
             * @static
             * @param {replitproto.ICloseChannel} message CloseChannel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseChannel.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CloseChannel message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.CloseChannel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.CloseChannel} CloseChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseChannel.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.CloseChannel();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.action = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CloseChannel message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.CloseChannel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.CloseChannel} CloseChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseChannel.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CloseChannel message.
             * @function verify
             * @memberof replitproto.CloseChannel
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CloseChannel.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.action != null && message.hasOwnProperty("action"))
                    switch (message.action) {
                    default:
                        return "action: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a CloseChannel message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.CloseChannel
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.CloseChannel} CloseChannel
             */
            CloseChannel.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.CloseChannel)
                    return object;
                var message = new $root.replitproto.CloseChannel();
                if (object.id != null)
                    message.id = object.id | 0;
                switch (object.action) {
                case "DISCONNECT":
                case 0:
                    message.action = 0;
                    break;
                case "TRY_CLOSE":
                case 1:
                    message.action = 1;
                    break;
                case "CLOSE":
                case 2:
                    message.action = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CloseChannel message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.CloseChannel
             * @static
             * @param {replitproto.CloseChannel} message CloseChannel
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CloseChannel.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.action = options.enums === String ? "DISCONNECT" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.action != null && message.hasOwnProperty("action"))
                    object.action = options.enums === String ? $root.replitproto.CloseChannel.Action[message.action] : message.action;
                return object;
            };
    
            /**
             * Converts this CloseChannel to JSON.
             * @function toJSON
             * @memberof replitproto.CloseChannel
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CloseChannel.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Action enum.
             * @name replitproto.CloseChannel.Action
             * @enum {string}
             * @property {number} DISCONNECT=0 DISCONNECT value
             * @property {number} TRY_CLOSE=1 TRY_CLOSE value
             * @property {number} CLOSE=2 CLOSE value
             */
            CloseChannel.Action = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DISCONNECT"] = 0;
                values[valuesById[1] = "TRY_CLOSE"] = 1;
                values[valuesById[2] = "CLOSE"] = 2;
                return values;
            })();
    
            return CloseChannel;
        })();
    
        replitproto.CloseChannelRes = (function() {
    
            /**
             * Properties of a CloseChannelRes.
             * @memberof replitproto
             * @interface ICloseChannelRes
             * @property {number|null} [id] CloseChannelRes id
             * @property {replitproto.CloseChannelRes.Status|null} [status] CloseChannelRes status
             */
    
            /**
             * Constructs a new CloseChannelRes.
             * @memberof replitproto
             * @classdesc Represents a CloseChannelRes.
             * @implements ICloseChannelRes
             * @constructor
             * @param {replitproto.ICloseChannelRes=} [properties] Properties to set
             */
            function CloseChannelRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CloseChannelRes id.
             * @member {number} id
             * @memberof replitproto.CloseChannelRes
             * @instance
             */
            CloseChannelRes.prototype.id = 0;
    
            /**
             * CloseChannelRes status.
             * @member {replitproto.CloseChannelRes.Status} status
             * @memberof replitproto.CloseChannelRes
             * @instance
             */
            CloseChannelRes.prototype.status = 0;
    
            /**
             * Creates a new CloseChannelRes instance using the specified properties.
             * @function create
             * @memberof replitproto.CloseChannelRes
             * @static
             * @param {replitproto.ICloseChannelRes=} [properties] Properties to set
             * @returns {replitproto.CloseChannelRes} CloseChannelRes instance
             */
            CloseChannelRes.create = function create(properties) {
                return new CloseChannelRes(properties);
            };
    
            /**
             * Encodes the specified CloseChannelRes message. Does not implicitly {@link replitproto.CloseChannelRes.verify|verify} messages.
             * @function encode
             * @memberof replitproto.CloseChannelRes
             * @static
             * @param {replitproto.ICloseChannelRes} message CloseChannelRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseChannelRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                return writer;
            };
    
            /**
             * Encodes the specified CloseChannelRes message, length delimited. Does not implicitly {@link replitproto.CloseChannelRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.CloseChannelRes
             * @static
             * @param {replitproto.ICloseChannelRes} message CloseChannelRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseChannelRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CloseChannelRes message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.CloseChannelRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.CloseChannelRes} CloseChannelRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseChannelRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.CloseChannelRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.status = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CloseChannelRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.CloseChannelRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.CloseChannelRes} CloseChannelRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseChannelRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CloseChannelRes message.
             * @function verify
             * @memberof replitproto.CloseChannelRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CloseChannelRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a CloseChannelRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.CloseChannelRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.CloseChannelRes} CloseChannelRes
             */
            CloseChannelRes.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.CloseChannelRes)
                    return object;
                var message = new $root.replitproto.CloseChannelRes();
                if (object.id != null)
                    message.id = object.id | 0;
                switch (object.status) {
                case "DISCONNECT":
                case 0:
                    message.status = 0;
                    break;
                case "CLOSE":
                case 1:
                    message.status = 1;
                    break;
                case "NOTHING":
                case 2:
                    message.status = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CloseChannelRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.CloseChannelRes
             * @static
             * @param {replitproto.CloseChannelRes} message CloseChannelRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CloseChannelRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.status = options.enums === String ? "DISCONNECT" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.replitproto.CloseChannelRes.Status[message.status] : message.status;
                return object;
            };
    
            /**
             * Converts this CloseChannelRes to JSON.
             * @function toJSON
             * @memberof replitproto.CloseChannelRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CloseChannelRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Status enum.
             * @name replitproto.CloseChannelRes.Status
             * @enum {string}
             * @property {number} DISCONNECT=0 DISCONNECT value
             * @property {number} CLOSE=1 CLOSE value
             * @property {number} NOTHING=2 NOTHING value
             */
            CloseChannelRes.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DISCONNECT"] = 0;
                values[valuesById[1] = "CLOSE"] = 1;
                values[valuesById[2] = "NOTHING"] = 2;
                return values;
            })();
    
            return CloseChannelRes;
        })();
    
        replitproto.ContainerState = (function() {
    
            /**
             * Properties of a ContainerState.
             * @memberof replitproto
             * @interface IContainerState
             * @property {replitproto.ContainerState.State|null} [state] ContainerState state
             */
    
            /**
             * Constructs a new ContainerState.
             * @memberof replitproto
             * @classdesc Represents a ContainerState.
             * @implements IContainerState
             * @constructor
             * @param {replitproto.IContainerState=} [properties] Properties to set
             */
            function ContainerState(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ContainerState state.
             * @member {replitproto.ContainerState.State} state
             * @memberof replitproto.ContainerState
             * @instance
             */
            ContainerState.prototype.state = 0;
    
            /**
             * Creates a new ContainerState instance using the specified properties.
             * @function create
             * @memberof replitproto.ContainerState
             * @static
             * @param {replitproto.IContainerState=} [properties] Properties to set
             * @returns {replitproto.ContainerState} ContainerState instance
             */
            ContainerState.create = function create(properties) {
                return new ContainerState(properties);
            };
    
            /**
             * Encodes the specified ContainerState message. Does not implicitly {@link replitproto.ContainerState.verify|verify} messages.
             * @function encode
             * @memberof replitproto.ContainerState
             * @static
             * @param {replitproto.IContainerState} message ContainerState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContainerState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                return writer;
            };
    
            /**
             * Encodes the specified ContainerState message, length delimited. Does not implicitly {@link replitproto.ContainerState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.ContainerState
             * @static
             * @param {replitproto.IContainerState} message ContainerState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContainerState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ContainerState message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.ContainerState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.ContainerState} ContainerState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContainerState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.ContainerState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.state = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ContainerState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.ContainerState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.ContainerState} ContainerState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContainerState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ContainerState message.
             * @function verify
             * @memberof replitproto.ContainerState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ContainerState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    switch (message.state) {
                    default:
                        return "state: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a ContainerState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.ContainerState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.ContainerState} ContainerState
             */
            ContainerState.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.ContainerState)
                    return object;
                var message = new $root.replitproto.ContainerState();
                switch (object.state) {
                case "SLEEP":
                case 0:
                    message.state = 0;
                    break;
                case "READY":
                case 1:
                    message.state = 1;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ContainerState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.ContainerState
             * @static
             * @param {replitproto.ContainerState} message ContainerState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ContainerState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.state = options.enums === String ? "SLEEP" : 0;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = options.enums === String ? $root.replitproto.ContainerState.State[message.state] : message.state;
                return object;
            };
    
            /**
             * Converts this ContainerState to JSON.
             * @function toJSON
             * @memberof replitproto.ContainerState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ContainerState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * State enum.
             * @name replitproto.ContainerState.State
             * @enum {string}
             * @property {number} SLEEP=0 SLEEP value
             * @property {number} READY=1 READY value
             */
            ContainerState.State = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SLEEP"] = 0;
                values[valuesById[1] = "READY"] = 1;
                return values;
            })();
    
            return ContainerState;
        })();
    
        replitproto.PortOpen = (function() {
    
            /**
             * Properties of a PortOpen.
             * @memberof replitproto
             * @interface IPortOpen
             * @property {boolean|null} [forwarded] PortOpen forwarded
             * @property {number|null} [port] PortOpen port
             * @property {string|null} [address] PortOpen address
             */
    
            /**
             * Constructs a new PortOpen.
             * @memberof replitproto
             * @classdesc Represents a PortOpen.
             * @implements IPortOpen
             * @constructor
             * @param {replitproto.IPortOpen=} [properties] Properties to set
             */
            function PortOpen(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PortOpen forwarded.
             * @member {boolean} forwarded
             * @memberof replitproto.PortOpen
             * @instance
             */
            PortOpen.prototype.forwarded = false;
    
            /**
             * PortOpen port.
             * @member {number} port
             * @memberof replitproto.PortOpen
             * @instance
             */
            PortOpen.prototype.port = 0;
    
            /**
             * PortOpen address.
             * @member {string} address
             * @memberof replitproto.PortOpen
             * @instance
             */
            PortOpen.prototype.address = "";
    
            /**
             * Creates a new PortOpen instance using the specified properties.
             * @function create
             * @memberof replitproto.PortOpen
             * @static
             * @param {replitproto.IPortOpen=} [properties] Properties to set
             * @returns {replitproto.PortOpen} PortOpen instance
             */
            PortOpen.create = function create(properties) {
                return new PortOpen(properties);
            };
    
            /**
             * Encodes the specified PortOpen message. Does not implicitly {@link replitproto.PortOpen.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PortOpen
             * @static
             * @param {replitproto.IPortOpen} message PortOpen message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PortOpen.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.forwarded != null && message.hasOwnProperty("forwarded"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.forwarded);
                if (message.port != null && message.hasOwnProperty("port"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.port);
                if (message.address != null && message.hasOwnProperty("address"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.address);
                return writer;
            };
    
            /**
             * Encodes the specified PortOpen message, length delimited. Does not implicitly {@link replitproto.PortOpen.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PortOpen
             * @static
             * @param {replitproto.IPortOpen} message PortOpen message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PortOpen.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PortOpen message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PortOpen
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PortOpen} PortOpen
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PortOpen.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PortOpen();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.forwarded = reader.bool();
                        break;
                    case 2:
                        message.port = reader.uint32();
                        break;
                    case 3:
                        message.address = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PortOpen message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PortOpen
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PortOpen} PortOpen
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PortOpen.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PortOpen message.
             * @function verify
             * @memberof replitproto.PortOpen
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PortOpen.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.forwarded != null && message.hasOwnProperty("forwarded"))
                    if (typeof message.forwarded !== "boolean")
                        return "forwarded: boolean expected";
                if (message.port != null && message.hasOwnProperty("port"))
                    if (!$util.isInteger(message.port))
                        return "port: integer expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                return null;
            };
    
            /**
             * Creates a PortOpen message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PortOpen
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PortOpen} PortOpen
             */
            PortOpen.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PortOpen)
                    return object;
                var message = new $root.replitproto.PortOpen();
                if (object.forwarded != null)
                    message.forwarded = Boolean(object.forwarded);
                if (object.port != null)
                    message.port = object.port >>> 0;
                if (object.address != null)
                    message.address = String(object.address);
                return message;
            };
    
            /**
             * Creates a plain object from a PortOpen message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PortOpen
             * @static
             * @param {replitproto.PortOpen} message PortOpen
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PortOpen.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.forwarded = false;
                    object.port = 0;
                    object.address = "";
                }
                if (message.forwarded != null && message.hasOwnProperty("forwarded"))
                    object.forwarded = message.forwarded;
                if (message.port != null && message.hasOwnProperty("port"))
                    object.port = message.port;
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                return object;
            };
    
            /**
             * Converts this PortOpen to JSON.
             * @function toJSON
             * @memberof replitproto.PortOpen
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PortOpen.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PortOpen;
        })();
    
        replitproto.OTPacket = (function() {
    
            /**
             * Properties of a OTPacket.
             * @memberof replitproto
             * @interface IOTPacket
             * @property {number|null} [version] OTPacket version
             * @property {Array.<replitproto.IOTRuneTransformOp>|null} [ops] OTPacket ops
             * @property {number|null} [crc32] OTPacket crc32
             */
    
            /**
             * Constructs a new OTPacket.
             * @memberof replitproto
             * @classdesc Represents a OTPacket.
             * @implements IOTPacket
             * @constructor
             * @param {replitproto.IOTPacket=} [properties] Properties to set
             */
            function OTPacket(properties) {
                this.ops = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OTPacket version.
             * @member {number} version
             * @memberof replitproto.OTPacket
             * @instance
             */
            OTPacket.prototype.version = 0;
    
            /**
             * OTPacket ops.
             * @member {Array.<replitproto.IOTRuneTransformOp>} ops
             * @memberof replitproto.OTPacket
             * @instance
             */
            OTPacket.prototype.ops = $util.emptyArray;
    
            /**
             * OTPacket crc32.
             * @member {number} crc32
             * @memberof replitproto.OTPacket
             * @instance
             */
            OTPacket.prototype.crc32 = 0;
    
            /**
             * Creates a new OTPacket instance using the specified properties.
             * @function create
             * @memberof replitproto.OTPacket
             * @static
             * @param {replitproto.IOTPacket=} [properties] Properties to set
             * @returns {replitproto.OTPacket} OTPacket instance
             */
            OTPacket.create = function create(properties) {
                return new OTPacket(properties);
            };
    
            /**
             * Encodes the specified OTPacket message. Does not implicitly {@link replitproto.OTPacket.verify|verify} messages.
             * @function encode
             * @memberof replitproto.OTPacket
             * @static
             * @param {replitproto.IOTPacket} message OTPacket message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTPacket.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
                if (message.ops != null && message.ops.length)
                    for (var i = 0; i < message.ops.length; ++i)
                        $root.replitproto.OTRuneTransformOp.encode(message.ops[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.crc32 != null && message.hasOwnProperty("crc32"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.crc32);
                return writer;
            };
    
            /**
             * Encodes the specified OTPacket message, length delimited. Does not implicitly {@link replitproto.OTPacket.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.OTPacket
             * @static
             * @param {replitproto.IOTPacket} message OTPacket message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTPacket.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a OTPacket message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.OTPacket
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.OTPacket} OTPacket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTPacket.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.OTPacket();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.version = reader.uint32();
                        break;
                    case 2:
                        if (!(message.ops && message.ops.length))
                            message.ops = [];
                        message.ops.push($root.replitproto.OTRuneTransformOp.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.crc32 = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a OTPacket message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.OTPacket
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.OTPacket} OTPacket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTPacket.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a OTPacket message.
             * @function verify
             * @memberof replitproto.OTPacket
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OTPacket.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isInteger(message.version))
                        return "version: integer expected";
                if (message.ops != null && message.hasOwnProperty("ops")) {
                    if (!Array.isArray(message.ops))
                        return "ops: array expected";
                    for (var i = 0; i < message.ops.length; ++i) {
                        var error = $root.replitproto.OTRuneTransformOp.verify(message.ops[i]);
                        if (error)
                            return "ops." + error;
                    }
                }
                if (message.crc32 != null && message.hasOwnProperty("crc32"))
                    if (!$util.isInteger(message.crc32))
                        return "crc32: integer expected";
                return null;
            };
    
            /**
             * Creates a OTPacket message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.OTPacket
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.OTPacket} OTPacket
             */
            OTPacket.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.OTPacket)
                    return object;
                var message = new $root.replitproto.OTPacket();
                if (object.version != null)
                    message.version = object.version >>> 0;
                if (object.ops) {
                    if (!Array.isArray(object.ops))
                        throw TypeError(".replitproto.OTPacket.ops: array expected");
                    message.ops = [];
                    for (var i = 0; i < object.ops.length; ++i) {
                        if (typeof object.ops[i] !== "object")
                            throw TypeError(".replitproto.OTPacket.ops: object expected");
                        message.ops[i] = $root.replitproto.OTRuneTransformOp.fromObject(object.ops[i]);
                    }
                }
                if (object.crc32 != null)
                    message.crc32 = object.crc32 >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a OTPacket message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.OTPacket
             * @static
             * @param {replitproto.OTPacket} message OTPacket
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OTPacket.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.ops = [];
                if (options.defaults) {
                    object.version = 0;
                    object.crc32 = 0;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.ops && message.ops.length) {
                    object.ops = [];
                    for (var j = 0; j < message.ops.length; ++j)
                        object.ops[j] = $root.replitproto.OTRuneTransformOp.toObject(message.ops[j], options);
                }
                if (message.crc32 != null && message.hasOwnProperty("crc32"))
                    object.crc32 = message.crc32;
                return object;
            };
    
            /**
             * Converts this OTPacket to JSON.
             * @function toJSON
             * @memberof replitproto.OTPacket
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OTPacket.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OTPacket;
        })();
    
        replitproto.OTRuneTransformOp = (function() {
    
            /**
             * Properties of a OTRuneTransformOp.
             * @memberof replitproto
             * @interface IOTRuneTransformOp
             * @property {number|null} [skip] OTRuneTransformOp skip
             * @property {number|null} ["delete"] OTRuneTransformOp delete
             * @property {string|null} [insert] OTRuneTransformOp insert
             */
    
            /**
             * Constructs a new OTRuneTransformOp.
             * @memberof replitproto
             * @classdesc Represents a OTRuneTransformOp.
             * @implements IOTRuneTransformOp
             * @constructor
             * @param {replitproto.IOTRuneTransformOp=} [properties] Properties to set
             */
            function OTRuneTransformOp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OTRuneTransformOp skip.
             * @member {number} skip
             * @memberof replitproto.OTRuneTransformOp
             * @instance
             */
            OTRuneTransformOp.prototype.skip = 0;
    
            /**
             * OTRuneTransformOp delete.
             * @member {number} delete
             * @memberof replitproto.OTRuneTransformOp
             * @instance
             */
            OTRuneTransformOp.prototype["delete"] = 0;
    
            /**
             * OTRuneTransformOp insert.
             * @member {string} insert
             * @memberof replitproto.OTRuneTransformOp
             * @instance
             */
            OTRuneTransformOp.prototype.insert = "";
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * OTRuneTransformOp op.
             * @member {"skip"|"delete"|"insert"|undefined} op
             * @memberof replitproto.OTRuneTransformOp
             * @instance
             */
            Object.defineProperty(OTRuneTransformOp.prototype, "op", {
                get: $util.oneOfGetter($oneOfFields = ["skip", "delete", "insert"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new OTRuneTransformOp instance using the specified properties.
             * @function create
             * @memberof replitproto.OTRuneTransformOp
             * @static
             * @param {replitproto.IOTRuneTransformOp=} [properties] Properties to set
             * @returns {replitproto.OTRuneTransformOp} OTRuneTransformOp instance
             */
            OTRuneTransformOp.create = function create(properties) {
                return new OTRuneTransformOp(properties);
            };
    
            /**
             * Encodes the specified OTRuneTransformOp message. Does not implicitly {@link replitproto.OTRuneTransformOp.verify|verify} messages.
             * @function encode
             * @memberof replitproto.OTRuneTransformOp
             * @static
             * @param {replitproto.IOTRuneTransformOp} message OTRuneTransformOp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTRuneTransformOp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.skip != null && message.hasOwnProperty("skip"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.skip);
                if (message["delete"] != null && message.hasOwnProperty("delete"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message["delete"]);
                if (message.insert != null && message.hasOwnProperty("insert"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.insert);
                return writer;
            };
    
            /**
             * Encodes the specified OTRuneTransformOp message, length delimited. Does not implicitly {@link replitproto.OTRuneTransformOp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.OTRuneTransformOp
             * @static
             * @param {replitproto.IOTRuneTransformOp} message OTRuneTransformOp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTRuneTransformOp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a OTRuneTransformOp message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.OTRuneTransformOp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.OTRuneTransformOp} OTRuneTransformOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTRuneTransformOp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.OTRuneTransformOp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.skip = reader.uint32();
                        break;
                    case 2:
                        message["delete"] = reader.uint32();
                        break;
                    case 3:
                        message.insert = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a OTRuneTransformOp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.OTRuneTransformOp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.OTRuneTransformOp} OTRuneTransformOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTRuneTransformOp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a OTRuneTransformOp message.
             * @function verify
             * @memberof replitproto.OTRuneTransformOp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OTRuneTransformOp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.skip != null && message.hasOwnProperty("skip")) {
                    properties.op = 1;
                    if (!$util.isInteger(message.skip))
                        return "skip: integer expected";
                }
                if (message["delete"] != null && message.hasOwnProperty("delete")) {
                    if (properties.op === 1)
                        return "op: multiple values";
                    properties.op = 1;
                    if (!$util.isInteger(message["delete"]))
                        return "delete: integer expected";
                }
                if (message.insert != null && message.hasOwnProperty("insert")) {
                    if (properties.op === 1)
                        return "op: multiple values";
                    properties.op = 1;
                    if (!$util.isString(message.insert))
                        return "insert: string expected";
                }
                return null;
            };
    
            /**
             * Creates a OTRuneTransformOp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.OTRuneTransformOp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.OTRuneTransformOp} OTRuneTransformOp
             */
            OTRuneTransformOp.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.OTRuneTransformOp)
                    return object;
                var message = new $root.replitproto.OTRuneTransformOp();
                if (object.skip != null)
                    message.skip = object.skip >>> 0;
                if (object["delete"] != null)
                    message["delete"] = object["delete"] >>> 0;
                if (object.insert != null)
                    message.insert = String(object.insert);
                return message;
            };
    
            /**
             * Creates a plain object from a OTRuneTransformOp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.OTRuneTransformOp
             * @static
             * @param {replitproto.OTRuneTransformOp} message OTRuneTransformOp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OTRuneTransformOp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.skip != null && message.hasOwnProperty("skip")) {
                    object.skip = message.skip;
                    if (options.oneofs)
                        object.op = "skip";
                }
                if (message["delete"] != null && message.hasOwnProperty("delete")) {
                    object["delete"] = message["delete"];
                    if (options.oneofs)
                        object.op = "delete";
                }
                if (message.insert != null && message.hasOwnProperty("insert")) {
                    object.insert = message.insert;
                    if (options.oneofs)
                        object.op = "insert";
                }
                return object;
            };
    
            /**
             * Converts this OTRuneTransformOp to JSON.
             * @function toJSON
             * @memberof replitproto.OTRuneTransformOp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OTRuneTransformOp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OTRuneTransformOp;
        })();
    
        replitproto.OTStatus = (function() {
    
            /**
             * Properties of a OTStatus.
             * @memberof replitproto
             * @interface IOTStatus
             * @property {string|null} [contents] OTStatus contents
             * @property {number|null} [version] OTStatus version
             * @property {replitproto.IFile|null} [linkedFile] OTStatus linkedFile
             * @property {Array.<replitproto.IOTCursor>|null} [cursors] OTStatus cursors
             */
    
            /**
             * Constructs a new OTStatus.
             * @memberof replitproto
             * @classdesc Represents a OTStatus.
             * @implements IOTStatus
             * @constructor
             * @param {replitproto.IOTStatus=} [properties] Properties to set
             */
            function OTStatus(properties) {
                this.cursors = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OTStatus contents.
             * @member {string} contents
             * @memberof replitproto.OTStatus
             * @instance
             */
            OTStatus.prototype.contents = "";
    
            /**
             * OTStatus version.
             * @member {number} version
             * @memberof replitproto.OTStatus
             * @instance
             */
            OTStatus.prototype.version = 0;
    
            /**
             * OTStatus linkedFile.
             * @member {replitproto.IFile|null|undefined} linkedFile
             * @memberof replitproto.OTStatus
             * @instance
             */
            OTStatus.prototype.linkedFile = null;
    
            /**
             * OTStatus cursors.
             * @member {Array.<replitproto.IOTCursor>} cursors
             * @memberof replitproto.OTStatus
             * @instance
             */
            OTStatus.prototype.cursors = $util.emptyArray;
    
            /**
             * Creates a new OTStatus instance using the specified properties.
             * @function create
             * @memberof replitproto.OTStatus
             * @static
             * @param {replitproto.IOTStatus=} [properties] Properties to set
             * @returns {replitproto.OTStatus} OTStatus instance
             */
            OTStatus.create = function create(properties) {
                return new OTStatus(properties);
            };
    
            /**
             * Encodes the specified OTStatus message. Does not implicitly {@link replitproto.OTStatus.verify|verify} messages.
             * @function encode
             * @memberof replitproto.OTStatus
             * @static
             * @param {replitproto.IOTStatus} message OTStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.contents != null && message.hasOwnProperty("contents"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.contents);
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.version);
                if (message.linkedFile != null && message.hasOwnProperty("linkedFile"))
                    $root.replitproto.File.encode(message.linkedFile, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.cursors != null && message.cursors.length)
                    for (var i = 0; i < message.cursors.length; ++i)
                        $root.replitproto.OTCursor.encode(message.cursors[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified OTStatus message, length delimited. Does not implicitly {@link replitproto.OTStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.OTStatus
             * @static
             * @param {replitproto.IOTStatus} message OTStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a OTStatus message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.OTStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.OTStatus} OTStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.OTStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.contents = reader.string();
                        break;
                    case 2:
                        message.version = reader.uint32();
                        break;
                    case 3:
                        message.linkedFile = $root.replitproto.File.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.cursors && message.cursors.length))
                            message.cursors = [];
                        message.cursors.push($root.replitproto.OTCursor.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a OTStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.OTStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.OTStatus} OTStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a OTStatus message.
             * @function verify
             * @memberof replitproto.OTStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OTStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.contents != null && message.hasOwnProperty("contents"))
                    if (!$util.isString(message.contents))
                        return "contents: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isInteger(message.version))
                        return "version: integer expected";
                if (message.linkedFile != null && message.hasOwnProperty("linkedFile")) {
                    var error = $root.replitproto.File.verify(message.linkedFile);
                    if (error)
                        return "linkedFile." + error;
                }
                if (message.cursors != null && message.hasOwnProperty("cursors")) {
                    if (!Array.isArray(message.cursors))
                        return "cursors: array expected";
                    for (var i = 0; i < message.cursors.length; ++i) {
                        var error = $root.replitproto.OTCursor.verify(message.cursors[i]);
                        if (error)
                            return "cursors." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a OTStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.OTStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.OTStatus} OTStatus
             */
            OTStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.OTStatus)
                    return object;
                var message = new $root.replitproto.OTStatus();
                if (object.contents != null)
                    message.contents = String(object.contents);
                if (object.version != null)
                    message.version = object.version >>> 0;
                if (object.linkedFile != null) {
                    if (typeof object.linkedFile !== "object")
                        throw TypeError(".replitproto.OTStatus.linkedFile: object expected");
                    message.linkedFile = $root.replitproto.File.fromObject(object.linkedFile);
                }
                if (object.cursors) {
                    if (!Array.isArray(object.cursors))
                        throw TypeError(".replitproto.OTStatus.cursors: array expected");
                    message.cursors = [];
                    for (var i = 0; i < object.cursors.length; ++i) {
                        if (typeof object.cursors[i] !== "object")
                            throw TypeError(".replitproto.OTStatus.cursors: object expected");
                        message.cursors[i] = $root.replitproto.OTCursor.fromObject(object.cursors[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a OTStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.OTStatus
             * @static
             * @param {replitproto.OTStatus} message OTStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OTStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cursors = [];
                if (options.defaults) {
                    object.contents = "";
                    object.version = 0;
                    object.linkedFile = null;
                }
                if (message.contents != null && message.hasOwnProperty("contents"))
                    object.contents = message.contents;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.linkedFile != null && message.hasOwnProperty("linkedFile"))
                    object.linkedFile = $root.replitproto.File.toObject(message.linkedFile, options);
                if (message.cursors && message.cursors.length) {
                    object.cursors = [];
                    for (var j = 0; j < message.cursors.length; ++j)
                        object.cursors[j] = $root.replitproto.OTCursor.toObject(message.cursors[j], options);
                }
                return object;
            };
    
            /**
             * Converts this OTStatus to JSON.
             * @function toJSON
             * @memberof replitproto.OTStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OTStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OTStatus;
        })();
    
        replitproto.OTCursor = (function() {
    
            /**
             * Properties of a OTCursor.
             * @memberof replitproto
             * @interface IOTCursor
             * @property {number|null} [position] OTCursor position
             * @property {number|null} [selectionStart] OTCursor selectionStart
             * @property {number|null} [selectionEnd] OTCursor selectionEnd
             * @property {replitproto.IUser|null} [user] OTCursor user
             * @property {string|null} [id] OTCursor id
             */
    
            /**
             * Constructs a new OTCursor.
             * @memberof replitproto
             * @classdesc Represents a OTCursor.
             * @implements IOTCursor
             * @constructor
             * @param {replitproto.IOTCursor=} [properties] Properties to set
             */
            function OTCursor(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OTCursor position.
             * @member {number} position
             * @memberof replitproto.OTCursor
             * @instance
             */
            OTCursor.prototype.position = 0;
    
            /**
             * OTCursor selectionStart.
             * @member {number} selectionStart
             * @memberof replitproto.OTCursor
             * @instance
             */
            OTCursor.prototype.selectionStart = 0;
    
            /**
             * OTCursor selectionEnd.
             * @member {number} selectionEnd
             * @memberof replitproto.OTCursor
             * @instance
             */
            OTCursor.prototype.selectionEnd = 0;
    
            /**
             * OTCursor user.
             * @member {replitproto.IUser|null|undefined} user
             * @memberof replitproto.OTCursor
             * @instance
             */
            OTCursor.prototype.user = null;
    
            /**
             * OTCursor id.
             * @member {string} id
             * @memberof replitproto.OTCursor
             * @instance
             */
            OTCursor.prototype.id = "";
    
            /**
             * Creates a new OTCursor instance using the specified properties.
             * @function create
             * @memberof replitproto.OTCursor
             * @static
             * @param {replitproto.IOTCursor=} [properties] Properties to set
             * @returns {replitproto.OTCursor} OTCursor instance
             */
            OTCursor.create = function create(properties) {
                return new OTCursor(properties);
            };
    
            /**
             * Encodes the specified OTCursor message. Does not implicitly {@link replitproto.OTCursor.verify|verify} messages.
             * @function encode
             * @memberof replitproto.OTCursor
             * @static
             * @param {replitproto.IOTCursor} message OTCursor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTCursor.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.position != null && message.hasOwnProperty("position"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.position);
                if (message.selectionStart != null && message.hasOwnProperty("selectionStart"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.selectionStart);
                if (message.selectionEnd != null && message.hasOwnProperty("selectionEnd"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.selectionEnd);
                if (message.user != null && message.hasOwnProperty("user"))
                    $root.replitproto.User.encode(message.user, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.id);
                return writer;
            };
    
            /**
             * Encodes the specified OTCursor message, length delimited. Does not implicitly {@link replitproto.OTCursor.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.OTCursor
             * @static
             * @param {replitproto.IOTCursor} message OTCursor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OTCursor.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a OTCursor message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.OTCursor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.OTCursor} OTCursor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTCursor.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.OTCursor();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.position = reader.uint32();
                        break;
                    case 2:
                        message.selectionStart = reader.uint32();
                        break;
                    case 3:
                        message.selectionEnd = reader.uint32();
                        break;
                    case 4:
                        message.user = $root.replitproto.User.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a OTCursor message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.OTCursor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.OTCursor} OTCursor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OTCursor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a OTCursor message.
             * @function verify
             * @memberof replitproto.OTCursor
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OTCursor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.position != null && message.hasOwnProperty("position"))
                    if (!$util.isInteger(message.position))
                        return "position: integer expected";
                if (message.selectionStart != null && message.hasOwnProperty("selectionStart"))
                    if (!$util.isInteger(message.selectionStart))
                        return "selectionStart: integer expected";
                if (message.selectionEnd != null && message.hasOwnProperty("selectionEnd"))
                    if (!$util.isInteger(message.selectionEnd))
                        return "selectionEnd: integer expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.replitproto.User.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };
    
            /**
             * Creates a OTCursor message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.OTCursor
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.OTCursor} OTCursor
             */
            OTCursor.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.OTCursor)
                    return object;
                var message = new $root.replitproto.OTCursor();
                if (object.position != null)
                    message.position = object.position >>> 0;
                if (object.selectionStart != null)
                    message.selectionStart = object.selectionStart >>> 0;
                if (object.selectionEnd != null)
                    message.selectionEnd = object.selectionEnd >>> 0;
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".replitproto.OTCursor.user: object expected");
                    message.user = $root.replitproto.User.fromObject(object.user);
                }
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };
    
            /**
             * Creates a plain object from a OTCursor message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.OTCursor
             * @static
             * @param {replitproto.OTCursor} message OTCursor
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OTCursor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.position = 0;
                    object.selectionStart = 0;
                    object.selectionEnd = 0;
                    object.user = null;
                    object.id = "";
                }
                if (message.position != null && message.hasOwnProperty("position"))
                    object.position = message.position;
                if (message.selectionStart != null && message.hasOwnProperty("selectionStart"))
                    object.selectionStart = message.selectionStart;
                if (message.selectionEnd != null && message.hasOwnProperty("selectionEnd"))
                    object.selectionEnd = message.selectionEnd;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.replitproto.User.toObject(message.user, options);
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };
    
            /**
             * Converts this OTCursor to JSON.
             * @function toJSON
             * @memberof replitproto.OTCursor
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OTCursor.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OTCursor;
        })();
    
        replitproto.ChatMessage = (function() {
    
            /**
             * Properties of a ChatMessage.
             * @memberof replitproto
             * @interface IChatMessage
             * @property {string|null} [username] ChatMessage username
             * @property {string|null} [text] ChatMessage text
             */
    
            /**
             * Constructs a new ChatMessage.
             * @memberof replitproto
             * @classdesc Represents a ChatMessage.
             * @implements IChatMessage
             * @constructor
             * @param {replitproto.IChatMessage=} [properties] Properties to set
             */
            function ChatMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChatMessage username.
             * @member {string} username
             * @memberof replitproto.ChatMessage
             * @instance
             */
            ChatMessage.prototype.username = "";
    
            /**
             * ChatMessage text.
             * @member {string} text
             * @memberof replitproto.ChatMessage
             * @instance
             */
            ChatMessage.prototype.text = "";
    
            /**
             * Creates a new ChatMessage instance using the specified properties.
             * @function create
             * @memberof replitproto.ChatMessage
             * @static
             * @param {replitproto.IChatMessage=} [properties] Properties to set
             * @returns {replitproto.ChatMessage} ChatMessage instance
             */
            ChatMessage.create = function create(properties) {
                return new ChatMessage(properties);
            };
    
            /**
             * Encodes the specified ChatMessage message. Does not implicitly {@link replitproto.ChatMessage.verify|verify} messages.
             * @function encode
             * @memberof replitproto.ChatMessage
             * @static
             * @param {replitproto.IChatMessage} message ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && message.hasOwnProperty("username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.text != null && message.hasOwnProperty("text"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                return writer;
            };
    
            /**
             * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link replitproto.ChatMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.ChatMessage
             * @static
             * @param {replitproto.IChatMessage} message ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChatMessage message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.ChatMessage} ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.ChatMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.username = reader.string();
                        break;
                    case 2:
                        message.text = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.ChatMessage} ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChatMessage message.
             * @function verify
             * @memberof replitproto.ChatMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                return null;
            };
    
            /**
             * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.ChatMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.ChatMessage} ChatMessage
             */
            ChatMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.ChatMessage)
                    return object;
                var message = new $root.replitproto.ChatMessage();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.text != null)
                    message.text = String(object.text);
                return message;
            };
    
            /**
             * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.ChatMessage
             * @static
             * @param {replitproto.ChatMessage} message ChatMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.text = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                return object;
            };
    
            /**
             * Converts this ChatMessage to JSON.
             * @function toJSON
             * @memberof replitproto.ChatMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChatMessage;
        })();
    
        replitproto.ChatTyping = (function() {
    
            /**
             * Properties of a ChatTyping.
             * @memberof replitproto
             * @interface IChatTyping
             * @property {string|null} [username] ChatTyping username
             * @property {boolean|null} [typing] ChatTyping typing
             */
    
            /**
             * Constructs a new ChatTyping.
             * @memberof replitproto
             * @classdesc Represents a ChatTyping.
             * @implements IChatTyping
             * @constructor
             * @param {replitproto.IChatTyping=} [properties] Properties to set
             */
            function ChatTyping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChatTyping username.
             * @member {string} username
             * @memberof replitproto.ChatTyping
             * @instance
             */
            ChatTyping.prototype.username = "";
    
            /**
             * ChatTyping typing.
             * @member {boolean} typing
             * @memberof replitproto.ChatTyping
             * @instance
             */
            ChatTyping.prototype.typing = false;
    
            /**
             * Creates a new ChatTyping instance using the specified properties.
             * @function create
             * @memberof replitproto.ChatTyping
             * @static
             * @param {replitproto.IChatTyping=} [properties] Properties to set
             * @returns {replitproto.ChatTyping} ChatTyping instance
             */
            ChatTyping.create = function create(properties) {
                return new ChatTyping(properties);
            };
    
            /**
             * Encodes the specified ChatTyping message. Does not implicitly {@link replitproto.ChatTyping.verify|verify} messages.
             * @function encode
             * @memberof replitproto.ChatTyping
             * @static
             * @param {replitproto.IChatTyping} message ChatTyping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatTyping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && message.hasOwnProperty("username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.typing != null && message.hasOwnProperty("typing"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.typing);
                return writer;
            };
    
            /**
             * Encodes the specified ChatTyping message, length delimited. Does not implicitly {@link replitproto.ChatTyping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.ChatTyping
             * @static
             * @param {replitproto.IChatTyping} message ChatTyping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatTyping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChatTyping message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.ChatTyping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.ChatTyping} ChatTyping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatTyping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.ChatTyping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.username = reader.string();
                        break;
                    case 2:
                        message.typing = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ChatTyping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.ChatTyping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.ChatTyping} ChatTyping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatTyping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChatTyping message.
             * @function verify
             * @memberof replitproto.ChatTyping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatTyping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.typing != null && message.hasOwnProperty("typing"))
                    if (typeof message.typing !== "boolean")
                        return "typing: boolean expected";
                return null;
            };
    
            /**
             * Creates a ChatTyping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.ChatTyping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.ChatTyping} ChatTyping
             */
            ChatTyping.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.ChatTyping)
                    return object;
                var message = new $root.replitproto.ChatTyping();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.typing != null)
                    message.typing = Boolean(object.typing);
                return message;
            };
    
            /**
             * Creates a plain object from a ChatTyping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.ChatTyping
             * @static
             * @param {replitproto.ChatTyping} message ChatTyping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatTyping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.typing = false;
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.typing != null && message.hasOwnProperty("typing"))
                    object.typing = message.typing;
                return object;
            };
    
            /**
             * Converts this ChatTyping to JSON.
             * @function toJSON
             * @memberof replitproto.ChatTyping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatTyping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChatTyping;
        })();
    
        replitproto.User = (function() {
    
            /**
             * Properties of a User.
             * @memberof replitproto
             * @interface IUser
             * @property {number|null} [id] User id
             * @property {string|null} [name] User name
             * @property {Array.<string>|null} [roles] User roles
             * @property {number|null} [session] User session
             */
    
            /**
             * Constructs a new User.
             * @memberof replitproto
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {replitproto.IUser=} [properties] Properties to set
             */
            function User(properties) {
                this.roles = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User id.
             * @member {number} id
             * @memberof replitproto.User
             * @instance
             */
            User.prototype.id = 0;
    
            /**
             * User name.
             * @member {string} name
             * @memberof replitproto.User
             * @instance
             */
            User.prototype.name = "";
    
            /**
             * User roles.
             * @member {Array.<string>} roles
             * @memberof replitproto.User
             * @instance
             */
            User.prototype.roles = $util.emptyArray;
    
            /**
             * User session.
             * @member {number} session
             * @memberof replitproto.User
             * @instance
             */
            User.prototype.session = 0;
    
            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof replitproto.User
             * @static
             * @param {replitproto.IUser=} [properties] Properties to set
             * @returns {replitproto.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message. Does not implicitly {@link replitproto.User.verify|verify} messages.
             * @function encode
             * @memberof replitproto.User
             * @static
             * @param {replitproto.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.roles != null && message.roles.length)
                    for (var i = 0; i < message.roles.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.roles[i]);
                if (message.session != null && message.hasOwnProperty("session"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.session);
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link replitproto.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.User
             * @static
             * @param {replitproto.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        if (!(message.roles && message.roles.length))
                            message.roles = [];
                        message.roles.push(reader.string());
                        break;
                    case 4:
                        message.session = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @function verify
             * @memberof replitproto.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.roles != null && message.hasOwnProperty("roles")) {
                    if (!Array.isArray(message.roles))
                        return "roles: array expected";
                    for (var i = 0; i < message.roles.length; ++i)
                        if (!$util.isString(message.roles[i]))
                            return "roles: string[] expected";
                }
                if (message.session != null && message.hasOwnProperty("session"))
                    if (!$util.isInteger(message.session))
                        return "session: integer expected";
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.User)
                    return object;
                var message = new $root.replitproto.User();
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.roles) {
                    if (!Array.isArray(object.roles))
                        throw TypeError(".replitproto.User.roles: array expected");
                    message.roles = [];
                    for (var i = 0; i < object.roles.length; ++i)
                        message.roles[i] = String(object.roles[i]);
                }
                if (object.session != null)
                    message.session = object.session | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.User
             * @static
             * @param {replitproto.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.roles = [];
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                    object.session = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.roles && message.roles.length) {
                    object.roles = [];
                    for (var j = 0; j < message.roles.length; ++j)
                        object.roles[j] = message.roles[j];
                }
                if (message.session != null && message.hasOwnProperty("session"))
                    object.session = message.session;
                return object;
            };
    
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof replitproto.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return User;
        })();
    
        replitproto.Roster = (function() {
    
            /**
             * Properties of a Roster.
             * @memberof replitproto
             * @interface IRoster
             * @property {Array.<replitproto.IUser>|null} [user] Roster user
             */
    
            /**
             * Constructs a new Roster.
             * @memberof replitproto
             * @classdesc Represents a Roster.
             * @implements IRoster
             * @constructor
             * @param {replitproto.IRoster=} [properties] Properties to set
             */
            function Roster(properties) {
                this.user = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Roster user.
             * @member {Array.<replitproto.IUser>} user
             * @memberof replitproto.Roster
             * @instance
             */
            Roster.prototype.user = $util.emptyArray;
    
            /**
             * Creates a new Roster instance using the specified properties.
             * @function create
             * @memberof replitproto.Roster
             * @static
             * @param {replitproto.IRoster=} [properties] Properties to set
             * @returns {replitproto.Roster} Roster instance
             */
            Roster.create = function create(properties) {
                return new Roster(properties);
            };
    
            /**
             * Encodes the specified Roster message. Does not implicitly {@link replitproto.Roster.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Roster
             * @static
             * @param {replitproto.IRoster} message Roster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Roster.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && message.user.length)
                    for (var i = 0; i < message.user.length; ++i)
                        $root.replitproto.User.encode(message.user[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Roster message, length delimited. Does not implicitly {@link replitproto.Roster.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Roster
             * @static
             * @param {replitproto.IRoster} message Roster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Roster.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Roster message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Roster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Roster} Roster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Roster.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Roster();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.user && message.user.length))
                            message.user = [];
                        message.user.push($root.replitproto.User.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Roster message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Roster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Roster} Roster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Roster.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Roster message.
             * @function verify
             * @memberof replitproto.Roster
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Roster.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    if (!Array.isArray(message.user))
                        return "user: array expected";
                    for (var i = 0; i < message.user.length; ++i) {
                        var error = $root.replitproto.User.verify(message.user[i]);
                        if (error)
                            return "user." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Roster message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Roster
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Roster} Roster
             */
            Roster.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Roster)
                    return object;
                var message = new $root.replitproto.Roster();
                if (object.user) {
                    if (!Array.isArray(object.user))
                        throw TypeError(".replitproto.Roster.user: array expected");
                    message.user = [];
                    for (var i = 0; i < object.user.length; ++i) {
                        if (typeof object.user[i] !== "object")
                            throw TypeError(".replitproto.Roster.user: object expected");
                        message.user[i] = $root.replitproto.User.fromObject(object.user[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Roster message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Roster
             * @static
             * @param {replitproto.Roster} message Roster
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Roster.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.user = [];
                if (message.user && message.user.length) {
                    object.user = [];
                    for (var j = 0; j < message.user.length; ++j)
                        object.user[j] = $root.replitproto.User.toObject(message.user[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Roster to JSON.
             * @function toJSON
             * @memberof replitproto.Roster
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Roster.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Roster;
        })();
    
        replitproto.Exec = (function() {
    
            /**
             * Properties of an Exec.
             * @memberof replitproto
             * @interface IExec
             * @property {Array.<string>|null} [args] Exec args
             * @property {Object.<string,string>|null} [env] Exec env
             * @property {boolean|null} [blocking] Exec blocking
             */
    
            /**
             * Constructs a new Exec.
             * @memberof replitproto
             * @classdesc Represents an Exec.
             * @implements IExec
             * @constructor
             * @param {replitproto.IExec=} [properties] Properties to set
             */
            function Exec(properties) {
                this.args = [];
                this.env = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Exec args.
             * @member {Array.<string>} args
             * @memberof replitproto.Exec
             * @instance
             */
            Exec.prototype.args = $util.emptyArray;
    
            /**
             * Exec env.
             * @member {Object.<string,string>} env
             * @memberof replitproto.Exec
             * @instance
             */
            Exec.prototype.env = $util.emptyObject;
    
            /**
             * Exec blocking.
             * @member {boolean} blocking
             * @memberof replitproto.Exec
             * @instance
             */
            Exec.prototype.blocking = false;
    
            /**
             * Creates a new Exec instance using the specified properties.
             * @function create
             * @memberof replitproto.Exec
             * @static
             * @param {replitproto.IExec=} [properties] Properties to set
             * @returns {replitproto.Exec} Exec instance
             */
            Exec.create = function create(properties) {
                return new Exec(properties);
            };
    
            /**
             * Encodes the specified Exec message. Does not implicitly {@link replitproto.Exec.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Exec
             * @static
             * @param {replitproto.IExec} message Exec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Exec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.args != null && message.args.length)
                    for (var i = 0; i < message.args.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.args[i]);
                if (message.env != null && message.hasOwnProperty("env"))
                    for (var keys = Object.keys(message.env), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.env[keys[i]]).ldelim();
                if (message.blocking != null && message.hasOwnProperty("blocking"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.blocking);
                return writer;
            };
    
            /**
             * Encodes the specified Exec message, length delimited. Does not implicitly {@link replitproto.Exec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Exec
             * @static
             * @param {replitproto.IExec} message Exec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Exec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Exec message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Exec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Exec} Exec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Exec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Exec(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.args && message.args.length))
                            message.args = [];
                        message.args.push(reader.string());
                        break;
                    case 2:
                        reader.skip().pos++;
                        if (message.env === $util.emptyObject)
                            message.env = {};
                        key = reader.string();
                        reader.pos++;
                        message.env[key] = reader.string();
                        break;
                    case 3:
                        message.blocking = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Exec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Exec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Exec} Exec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Exec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Exec message.
             * @function verify
             * @memberof replitproto.Exec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Exec.verify = function verify(message) {
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
                if (message.blocking != null && message.hasOwnProperty("blocking"))
                    if (typeof message.blocking !== "boolean")
                        return "blocking: boolean expected";
                return null;
            };
    
            /**
             * Creates an Exec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Exec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Exec} Exec
             */
            Exec.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Exec)
                    return object;
                var message = new $root.replitproto.Exec();
                if (object.args) {
                    if (!Array.isArray(object.args))
                        throw TypeError(".replitproto.Exec.args: array expected");
                    message.args = [];
                    for (var i = 0; i < object.args.length; ++i)
                        message.args[i] = String(object.args[i]);
                }
                if (object.env) {
                    if (typeof object.env !== "object")
                        throw TypeError(".replitproto.Exec.env: object expected");
                    message.env = {};
                    for (var keys = Object.keys(object.env), i = 0; i < keys.length; ++i)
                        message.env[keys[i]] = String(object.env[keys[i]]);
                }
                if (object.blocking != null)
                    message.blocking = Boolean(object.blocking);
                return message;
            };
    
            /**
             * Creates a plain object from an Exec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Exec
             * @static
             * @param {replitproto.Exec} message Exec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Exec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.args = [];
                if (options.objects || options.defaults)
                    object.env = {};
                if (options.defaults)
                    object.blocking = false;
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
                if (message.blocking != null && message.hasOwnProperty("blocking"))
                    object.blocking = message.blocking;
                return object;
            };
    
            /**
             * Converts this Exec to JSON.
             * @function toJSON
             * @memberof replitproto.Exec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Exec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Exec;
        })();
    
        replitproto.Package = (function() {
    
            /**
             * Properties of a Package.
             * @memberof replitproto
             * @interface IPackage
             * @property {string|null} [name] Package name
             * @property {string|null} [spec] Package spec
             * @property {string|null} [description] Package description
             * @property {string|null} [version] Package version
             * @property {string|null} [homepageURL] Package homepageURL
             * @property {string|null} [documentationURL] Package documentationURL
             * @property {string|null} [sourceCodeURL] Package sourceCodeURL
             * @property {string|null} [bugTrackerURL] Package bugTrackerURL
             * @property {string|null} [author] Package author
             * @property {string|null} [license] Package license
             * @property {Array.<replitproto.IPackage>|null} [dependencies] Package dependencies
             */
    
            /**
             * Constructs a new Package.
             * @memberof replitproto
             * @classdesc Represents a Package.
             * @implements IPackage
             * @constructor
             * @param {replitproto.IPackage=} [properties] Properties to set
             */
            function Package(properties) {
                this.dependencies = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Package name.
             * @member {string} name
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.name = "";
    
            /**
             * Package spec.
             * @member {string} spec
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.spec = "";
    
            /**
             * Package description.
             * @member {string} description
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.description = "";
    
            /**
             * Package version.
             * @member {string} version
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.version = "";
    
            /**
             * Package homepageURL.
             * @member {string} homepageURL
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.homepageURL = "";
    
            /**
             * Package documentationURL.
             * @member {string} documentationURL
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.documentationURL = "";
    
            /**
             * Package sourceCodeURL.
             * @member {string} sourceCodeURL
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.sourceCodeURL = "";
    
            /**
             * Package bugTrackerURL.
             * @member {string} bugTrackerURL
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.bugTrackerURL = "";
    
            /**
             * Package author.
             * @member {string} author
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.author = "";
    
            /**
             * Package license.
             * @member {string} license
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.license = "";
    
            /**
             * Package dependencies.
             * @member {Array.<replitproto.IPackage>} dependencies
             * @memberof replitproto.Package
             * @instance
             */
            Package.prototype.dependencies = $util.emptyArray;
    
            /**
             * Creates a new Package instance using the specified properties.
             * @function create
             * @memberof replitproto.Package
             * @static
             * @param {replitproto.IPackage=} [properties] Properties to set
             * @returns {replitproto.Package} Package instance
             */
            Package.create = function create(properties) {
                return new Package(properties);
            };
    
            /**
             * Encodes the specified Package message. Does not implicitly {@link replitproto.Package.verify|verify} messages.
             * @function encode
             * @memberof replitproto.Package
             * @static
             * @param {replitproto.IPackage} message Package message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Package.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.spec != null && message.hasOwnProperty("spec"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.spec);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.description);
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.version);
                if (message.homepageURL != null && message.hasOwnProperty("homepageURL"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.homepageURL);
                if (message.documentationURL != null && message.hasOwnProperty("documentationURL"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.documentationURL);
                if (message.sourceCodeURL != null && message.hasOwnProperty("sourceCodeURL"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.sourceCodeURL);
                if (message.bugTrackerURL != null && message.hasOwnProperty("bugTrackerURL"))
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.bugTrackerURL);
                if (message.author != null && message.hasOwnProperty("author"))
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.author);
                if (message.license != null && message.hasOwnProperty("license"))
                    writer.uint32(/* id 17, wireType 2 =*/138).string(message.license);
                if (message.dependencies != null && message.dependencies.length)
                    for (var i = 0; i < message.dependencies.length; ++i)
                        $root.replitproto.Package.encode(message.dependencies[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Package message, length delimited. Does not implicitly {@link replitproto.Package.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.Package
             * @static
             * @param {replitproto.IPackage} message Package message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Package.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Package message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.Package
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.Package} Package
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Package.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.Package();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.spec = reader.string();
                        break;
                    case 10:
                        message.description = reader.string();
                        break;
                    case 11:
                        message.version = reader.string();
                        break;
                    case 12:
                        message.homepageURL = reader.string();
                        break;
                    case 13:
                        message.documentationURL = reader.string();
                        break;
                    case 14:
                        message.sourceCodeURL = reader.string();
                        break;
                    case 15:
                        message.bugTrackerURL = reader.string();
                        break;
                    case 16:
                        message.author = reader.string();
                        break;
                    case 17:
                        message.license = reader.string();
                        break;
                    case 18:
                        if (!(message.dependencies && message.dependencies.length))
                            message.dependencies = [];
                        message.dependencies.push($root.replitproto.Package.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Package message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.Package
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.Package} Package
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Package.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Package message.
             * @function verify
             * @memberof replitproto.Package
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Package.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.spec != null && message.hasOwnProperty("spec"))
                    if (!$util.isString(message.spec))
                        return "spec: string expected";
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.homepageURL != null && message.hasOwnProperty("homepageURL"))
                    if (!$util.isString(message.homepageURL))
                        return "homepageURL: string expected";
                if (message.documentationURL != null && message.hasOwnProperty("documentationURL"))
                    if (!$util.isString(message.documentationURL))
                        return "documentationURL: string expected";
                if (message.sourceCodeURL != null && message.hasOwnProperty("sourceCodeURL"))
                    if (!$util.isString(message.sourceCodeURL))
                        return "sourceCodeURL: string expected";
                if (message.bugTrackerURL != null && message.hasOwnProperty("bugTrackerURL"))
                    if (!$util.isString(message.bugTrackerURL))
                        return "bugTrackerURL: string expected";
                if (message.author != null && message.hasOwnProperty("author"))
                    if (!$util.isString(message.author))
                        return "author: string expected";
                if (message.license != null && message.hasOwnProperty("license"))
                    if (!$util.isString(message.license))
                        return "license: string expected";
                if (message.dependencies != null && message.hasOwnProperty("dependencies")) {
                    if (!Array.isArray(message.dependencies))
                        return "dependencies: array expected";
                    for (var i = 0; i < message.dependencies.length; ++i) {
                        var error = $root.replitproto.Package.verify(message.dependencies[i]);
                        if (error)
                            return "dependencies." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Package message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.Package
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.Package} Package
             */
            Package.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.Package)
                    return object;
                var message = new $root.replitproto.Package();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.spec != null)
                    message.spec = String(object.spec);
                if (object.description != null)
                    message.description = String(object.description);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.homepageURL != null)
                    message.homepageURL = String(object.homepageURL);
                if (object.documentationURL != null)
                    message.documentationURL = String(object.documentationURL);
                if (object.sourceCodeURL != null)
                    message.sourceCodeURL = String(object.sourceCodeURL);
                if (object.bugTrackerURL != null)
                    message.bugTrackerURL = String(object.bugTrackerURL);
                if (object.author != null)
                    message.author = String(object.author);
                if (object.license != null)
                    message.license = String(object.license);
                if (object.dependencies) {
                    if (!Array.isArray(object.dependencies))
                        throw TypeError(".replitproto.Package.dependencies: array expected");
                    message.dependencies = [];
                    for (var i = 0; i < object.dependencies.length; ++i) {
                        if (typeof object.dependencies[i] !== "object")
                            throw TypeError(".replitproto.Package.dependencies: object expected");
                        message.dependencies[i] = $root.replitproto.Package.fromObject(object.dependencies[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Package message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.Package
             * @static
             * @param {replitproto.Package} message Package
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Package.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.dependencies = [];
                if (options.defaults) {
                    object.name = "";
                    object.spec = "";
                    object.description = "";
                    object.version = "";
                    object.homepageURL = "";
                    object.documentationURL = "";
                    object.sourceCodeURL = "";
                    object.bugTrackerURL = "";
                    object.author = "";
                    object.license = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.spec != null && message.hasOwnProperty("spec"))
                    object.spec = message.spec;
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.homepageURL != null && message.hasOwnProperty("homepageURL"))
                    object.homepageURL = message.homepageURL;
                if (message.documentationURL != null && message.hasOwnProperty("documentationURL"))
                    object.documentationURL = message.documentationURL;
                if (message.sourceCodeURL != null && message.hasOwnProperty("sourceCodeURL"))
                    object.sourceCodeURL = message.sourceCodeURL;
                if (message.bugTrackerURL != null && message.hasOwnProperty("bugTrackerURL"))
                    object.bugTrackerURL = message.bugTrackerURL;
                if (message.author != null && message.hasOwnProperty("author"))
                    object.author = message.author;
                if (message.license != null && message.hasOwnProperty("license"))
                    object.license = message.license;
                if (message.dependencies && message.dependencies.length) {
                    object.dependencies = [];
                    for (var j = 0; j < message.dependencies.length; ++j)
                        object.dependencies[j] = $root.replitproto.Package.toObject(message.dependencies[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Package to JSON.
             * @function toJSON
             * @memberof replitproto.Package
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Package.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Package;
        })();
    
        replitproto.PackageSearch = (function() {
    
            /**
             * Properties of a PackageSearch.
             * @memberof replitproto
             * @interface IPackageSearch
             * @property {string|null} [query] PackageSearch query
             */
    
            /**
             * Constructs a new PackageSearch.
             * @memberof replitproto
             * @classdesc Represents a PackageSearch.
             * @implements IPackageSearch
             * @constructor
             * @param {replitproto.IPackageSearch=} [properties] Properties to set
             */
            function PackageSearch(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PackageSearch query.
             * @member {string} query
             * @memberof replitproto.PackageSearch
             * @instance
             */
            PackageSearch.prototype.query = "";
    
            /**
             * Creates a new PackageSearch instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageSearch
             * @static
             * @param {replitproto.IPackageSearch=} [properties] Properties to set
             * @returns {replitproto.PackageSearch} PackageSearch instance
             */
            PackageSearch.create = function create(properties) {
                return new PackageSearch(properties);
            };
    
            /**
             * Encodes the specified PackageSearch message. Does not implicitly {@link replitproto.PackageSearch.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageSearch
             * @static
             * @param {replitproto.IPackageSearch} message PackageSearch message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageSearch.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.query != null && message.hasOwnProperty("query"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
                return writer;
            };
    
            /**
             * Encodes the specified PackageSearch message, length delimited. Does not implicitly {@link replitproto.PackageSearch.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageSearch
             * @static
             * @param {replitproto.IPackageSearch} message PackageSearch message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageSearch.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageSearch message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageSearch
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageSearch} PackageSearch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageSearch.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageSearch();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.query = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageSearch message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageSearch
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageSearch} PackageSearch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageSearch.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageSearch message.
             * @function verify
             * @memberof replitproto.PackageSearch
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageSearch.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.query != null && message.hasOwnProperty("query"))
                    if (!$util.isString(message.query))
                        return "query: string expected";
                return null;
            };
    
            /**
             * Creates a PackageSearch message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageSearch
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageSearch} PackageSearch
             */
            PackageSearch.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageSearch)
                    return object;
                var message = new $root.replitproto.PackageSearch();
                if (object.query != null)
                    message.query = String(object.query);
                return message;
            };
    
            /**
             * Creates a plain object from a PackageSearch message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageSearch
             * @static
             * @param {replitproto.PackageSearch} message PackageSearch
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageSearch.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.query = "";
                if (message.query != null && message.hasOwnProperty("query"))
                    object.query = message.query;
                return object;
            };
    
            /**
             * Converts this PackageSearch to JSON.
             * @function toJSON
             * @memberof replitproto.PackageSearch
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageSearch.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageSearch;
        })();
    
        replitproto.PackageSearchResp = (function() {
    
            /**
             * Properties of a PackageSearchResp.
             * @memberof replitproto
             * @interface IPackageSearchResp
             * @property {Array.<replitproto.IPackage>|null} [results] PackageSearchResp results
             */
    
            /**
             * Constructs a new PackageSearchResp.
             * @memberof replitproto
             * @classdesc Represents a PackageSearchResp.
             * @implements IPackageSearchResp
             * @constructor
             * @param {replitproto.IPackageSearchResp=} [properties] Properties to set
             */
            function PackageSearchResp(properties) {
                this.results = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PackageSearchResp results.
             * @member {Array.<replitproto.IPackage>} results
             * @memberof replitproto.PackageSearchResp
             * @instance
             */
            PackageSearchResp.prototype.results = $util.emptyArray;
    
            /**
             * Creates a new PackageSearchResp instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageSearchResp
             * @static
             * @param {replitproto.IPackageSearchResp=} [properties] Properties to set
             * @returns {replitproto.PackageSearchResp} PackageSearchResp instance
             */
            PackageSearchResp.create = function create(properties) {
                return new PackageSearchResp(properties);
            };
    
            /**
             * Encodes the specified PackageSearchResp message. Does not implicitly {@link replitproto.PackageSearchResp.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageSearchResp
             * @static
             * @param {replitproto.IPackageSearchResp} message PackageSearchResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageSearchResp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.results != null && message.results.length)
                    for (var i = 0; i < message.results.length; ++i)
                        $root.replitproto.Package.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PackageSearchResp message, length delimited. Does not implicitly {@link replitproto.PackageSearchResp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageSearchResp
             * @static
             * @param {replitproto.IPackageSearchResp} message PackageSearchResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageSearchResp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageSearchResp message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageSearchResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageSearchResp} PackageSearchResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageSearchResp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageSearchResp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.results && message.results.length))
                            message.results = [];
                        message.results.push($root.replitproto.Package.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageSearchResp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageSearchResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageSearchResp} PackageSearchResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageSearchResp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageSearchResp message.
             * @function verify
             * @memberof replitproto.PackageSearchResp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageSearchResp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.results != null && message.hasOwnProperty("results")) {
                    if (!Array.isArray(message.results))
                        return "results: array expected";
                    for (var i = 0; i < message.results.length; ++i) {
                        var error = $root.replitproto.Package.verify(message.results[i]);
                        if (error)
                            return "results." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a PackageSearchResp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageSearchResp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageSearchResp} PackageSearchResp
             */
            PackageSearchResp.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageSearchResp)
                    return object;
                var message = new $root.replitproto.PackageSearchResp();
                if (object.results) {
                    if (!Array.isArray(object.results))
                        throw TypeError(".replitproto.PackageSearchResp.results: array expected");
                    message.results = [];
                    for (var i = 0; i < object.results.length; ++i) {
                        if (typeof object.results[i] !== "object")
                            throw TypeError(".replitproto.PackageSearchResp.results: object expected");
                        message.results[i] = $root.replitproto.Package.fromObject(object.results[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PackageSearchResp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageSearchResp
             * @static
             * @param {replitproto.PackageSearchResp} message PackageSearchResp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageSearchResp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.results = [];
                if (message.results && message.results.length) {
                    object.results = [];
                    for (var j = 0; j < message.results.length; ++j)
                        object.results[j] = $root.replitproto.Package.toObject(message.results[j], options);
                }
                return object;
            };
    
            /**
             * Converts this PackageSearchResp to JSON.
             * @function toJSON
             * @memberof replitproto.PackageSearchResp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageSearchResp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageSearchResp;
        })();
    
        replitproto.PackageInfo = (function() {
    
            /**
             * Properties of a PackageInfo.
             * @memberof replitproto
             * @interface IPackageInfo
             * @property {replitproto.IPackage|null} [pkg] PackageInfo pkg
             */
    
            /**
             * Constructs a new PackageInfo.
             * @memberof replitproto
             * @classdesc Represents a PackageInfo.
             * @implements IPackageInfo
             * @constructor
             * @param {replitproto.IPackageInfo=} [properties] Properties to set
             */
            function PackageInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PackageInfo pkg.
             * @member {replitproto.IPackage|null|undefined} pkg
             * @memberof replitproto.PackageInfo
             * @instance
             */
            PackageInfo.prototype.pkg = null;
    
            /**
             * Creates a new PackageInfo instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageInfo
             * @static
             * @param {replitproto.IPackageInfo=} [properties] Properties to set
             * @returns {replitproto.PackageInfo} PackageInfo instance
             */
            PackageInfo.create = function create(properties) {
                return new PackageInfo(properties);
            };
    
            /**
             * Encodes the specified PackageInfo message. Does not implicitly {@link replitproto.PackageInfo.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageInfo
             * @static
             * @param {replitproto.IPackageInfo} message PackageInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pkg != null && message.hasOwnProperty("pkg"))
                    $root.replitproto.Package.encode(message.pkg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PackageInfo message, length delimited. Does not implicitly {@link replitproto.PackageInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageInfo
             * @static
             * @param {replitproto.IPackageInfo} message PackageInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageInfo message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageInfo} PackageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.pkg = $root.replitproto.Package.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageInfo} PackageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageInfo message.
             * @function verify
             * @memberof replitproto.PackageInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pkg != null && message.hasOwnProperty("pkg")) {
                    var error = $root.replitproto.Package.verify(message.pkg);
                    if (error)
                        return "pkg." + error;
                }
                return null;
            };
    
            /**
             * Creates a PackageInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageInfo} PackageInfo
             */
            PackageInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageInfo)
                    return object;
                var message = new $root.replitproto.PackageInfo();
                if (object.pkg != null) {
                    if (typeof object.pkg !== "object")
                        throw TypeError(".replitproto.PackageInfo.pkg: object expected");
                    message.pkg = $root.replitproto.Package.fromObject(object.pkg);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PackageInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageInfo
             * @static
             * @param {replitproto.PackageInfo} message PackageInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.pkg = null;
                if (message.pkg != null && message.hasOwnProperty("pkg"))
                    object.pkg = $root.replitproto.Package.toObject(message.pkg, options);
                return object;
            };
    
            /**
             * Converts this PackageInfo to JSON.
             * @function toJSON
             * @memberof replitproto.PackageInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageInfo;
        })();
    
        replitproto.PackageInfoResp = (function() {
    
            /**
             * Properties of a PackageInfoResp.
             * @memberof replitproto
             * @interface IPackageInfoResp
             * @property {replitproto.IPackage|null} [pkg] PackageInfoResp pkg
             */
    
            /**
             * Constructs a new PackageInfoResp.
             * @memberof replitproto
             * @classdesc Represents a PackageInfoResp.
             * @implements IPackageInfoResp
             * @constructor
             * @param {replitproto.IPackageInfoResp=} [properties] Properties to set
             */
            function PackageInfoResp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PackageInfoResp pkg.
             * @member {replitproto.IPackage|null|undefined} pkg
             * @memberof replitproto.PackageInfoResp
             * @instance
             */
            PackageInfoResp.prototype.pkg = null;
    
            /**
             * Creates a new PackageInfoResp instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageInfoResp
             * @static
             * @param {replitproto.IPackageInfoResp=} [properties] Properties to set
             * @returns {replitproto.PackageInfoResp} PackageInfoResp instance
             */
            PackageInfoResp.create = function create(properties) {
                return new PackageInfoResp(properties);
            };
    
            /**
             * Encodes the specified PackageInfoResp message. Does not implicitly {@link replitproto.PackageInfoResp.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageInfoResp
             * @static
             * @param {replitproto.IPackageInfoResp} message PackageInfoResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageInfoResp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pkg != null && message.hasOwnProperty("pkg"))
                    $root.replitproto.Package.encode(message.pkg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PackageInfoResp message, length delimited. Does not implicitly {@link replitproto.PackageInfoResp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageInfoResp
             * @static
             * @param {replitproto.IPackageInfoResp} message PackageInfoResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageInfoResp message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageInfoResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageInfoResp} PackageInfoResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageInfoResp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageInfoResp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.pkg = $root.replitproto.Package.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageInfoResp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageInfoResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageInfoResp} PackageInfoResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageInfoResp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageInfoResp message.
             * @function verify
             * @memberof replitproto.PackageInfoResp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageInfoResp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pkg != null && message.hasOwnProperty("pkg")) {
                    var error = $root.replitproto.Package.verify(message.pkg);
                    if (error)
                        return "pkg." + error;
                }
                return null;
            };
    
            /**
             * Creates a PackageInfoResp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageInfoResp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageInfoResp} PackageInfoResp
             */
            PackageInfoResp.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageInfoResp)
                    return object;
                var message = new $root.replitproto.PackageInfoResp();
                if (object.pkg != null) {
                    if (typeof object.pkg !== "object")
                        throw TypeError(".replitproto.PackageInfoResp.pkg: object expected");
                    message.pkg = $root.replitproto.Package.fromObject(object.pkg);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PackageInfoResp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageInfoResp
             * @static
             * @param {replitproto.PackageInfoResp} message PackageInfoResp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageInfoResp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.pkg = null;
                if (message.pkg != null && message.hasOwnProperty("pkg"))
                    object.pkg = $root.replitproto.Package.toObject(message.pkg, options);
                return object;
            };
    
            /**
             * Converts this PackageInfoResp to JSON.
             * @function toJSON
             * @memberof replitproto.PackageInfoResp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageInfoResp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageInfoResp;
        })();
    
        replitproto.PackageAdd = (function() {
    
            /**
             * Properties of a PackageAdd.
             * @memberof replitproto
             * @interface IPackageAdd
             * @property {Array.<replitproto.IPackage>|null} [pkgs] PackageAdd pkgs
             */
    
            /**
             * Constructs a new PackageAdd.
             * @memberof replitproto
             * @classdesc Represents a PackageAdd.
             * @implements IPackageAdd
             * @constructor
             * @param {replitproto.IPackageAdd=} [properties] Properties to set
             */
            function PackageAdd(properties) {
                this.pkgs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PackageAdd pkgs.
             * @member {Array.<replitproto.IPackage>} pkgs
             * @memberof replitproto.PackageAdd
             * @instance
             */
            PackageAdd.prototype.pkgs = $util.emptyArray;
    
            /**
             * Creates a new PackageAdd instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageAdd
             * @static
             * @param {replitproto.IPackageAdd=} [properties] Properties to set
             * @returns {replitproto.PackageAdd} PackageAdd instance
             */
            PackageAdd.create = function create(properties) {
                return new PackageAdd(properties);
            };
    
            /**
             * Encodes the specified PackageAdd message. Does not implicitly {@link replitproto.PackageAdd.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageAdd
             * @static
             * @param {replitproto.IPackageAdd} message PackageAdd message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageAdd.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pkgs != null && message.pkgs.length)
                    for (var i = 0; i < message.pkgs.length; ++i)
                        $root.replitproto.Package.encode(message.pkgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PackageAdd message, length delimited. Does not implicitly {@link replitproto.PackageAdd.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageAdd
             * @static
             * @param {replitproto.IPackageAdd} message PackageAdd message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageAdd.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageAdd message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageAdd
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageAdd} PackageAdd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageAdd.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageAdd();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.pkgs && message.pkgs.length))
                            message.pkgs = [];
                        message.pkgs.push($root.replitproto.Package.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageAdd message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageAdd
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageAdd} PackageAdd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageAdd.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageAdd message.
             * @function verify
             * @memberof replitproto.PackageAdd
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageAdd.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pkgs != null && message.hasOwnProperty("pkgs")) {
                    if (!Array.isArray(message.pkgs))
                        return "pkgs: array expected";
                    for (var i = 0; i < message.pkgs.length; ++i) {
                        var error = $root.replitproto.Package.verify(message.pkgs[i]);
                        if (error)
                            return "pkgs." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a PackageAdd message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageAdd
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageAdd} PackageAdd
             */
            PackageAdd.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageAdd)
                    return object;
                var message = new $root.replitproto.PackageAdd();
                if (object.pkgs) {
                    if (!Array.isArray(object.pkgs))
                        throw TypeError(".replitproto.PackageAdd.pkgs: array expected");
                    message.pkgs = [];
                    for (var i = 0; i < object.pkgs.length; ++i) {
                        if (typeof object.pkgs[i] !== "object")
                            throw TypeError(".replitproto.PackageAdd.pkgs: object expected");
                        message.pkgs[i] = $root.replitproto.Package.fromObject(object.pkgs[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PackageAdd message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageAdd
             * @static
             * @param {replitproto.PackageAdd} message PackageAdd
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageAdd.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.pkgs = [];
                if (message.pkgs && message.pkgs.length) {
                    object.pkgs = [];
                    for (var j = 0; j < message.pkgs.length; ++j)
                        object.pkgs[j] = $root.replitproto.Package.toObject(message.pkgs[j], options);
                }
                return object;
            };
    
            /**
             * Converts this PackageAdd to JSON.
             * @function toJSON
             * @memberof replitproto.PackageAdd
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageAdd.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageAdd;
        })();
    
        replitproto.PackageRemove = (function() {
    
            /**
             * Properties of a PackageRemove.
             * @memberof replitproto
             * @interface IPackageRemove
             * @property {Array.<replitproto.IPackage>|null} [pkgs] PackageRemove pkgs
             */
    
            /**
             * Constructs a new PackageRemove.
             * @memberof replitproto
             * @classdesc Represents a PackageRemove.
             * @implements IPackageRemove
             * @constructor
             * @param {replitproto.IPackageRemove=} [properties] Properties to set
             */
            function PackageRemove(properties) {
                this.pkgs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PackageRemove pkgs.
             * @member {Array.<replitproto.IPackage>} pkgs
             * @memberof replitproto.PackageRemove
             * @instance
             */
            PackageRemove.prototype.pkgs = $util.emptyArray;
    
            /**
             * Creates a new PackageRemove instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageRemove
             * @static
             * @param {replitproto.IPackageRemove=} [properties] Properties to set
             * @returns {replitproto.PackageRemove} PackageRemove instance
             */
            PackageRemove.create = function create(properties) {
                return new PackageRemove(properties);
            };
    
            /**
             * Encodes the specified PackageRemove message. Does not implicitly {@link replitproto.PackageRemove.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageRemove
             * @static
             * @param {replitproto.IPackageRemove} message PackageRemove message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageRemove.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pkgs != null && message.pkgs.length)
                    for (var i = 0; i < message.pkgs.length; ++i)
                        $root.replitproto.Package.encode(message.pkgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PackageRemove message, length delimited. Does not implicitly {@link replitproto.PackageRemove.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageRemove
             * @static
             * @param {replitproto.IPackageRemove} message PackageRemove message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageRemove.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageRemove message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageRemove
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageRemove} PackageRemove
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageRemove.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageRemove();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.pkgs && message.pkgs.length))
                            message.pkgs = [];
                        message.pkgs.push($root.replitproto.Package.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageRemove message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageRemove
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageRemove} PackageRemove
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageRemove.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageRemove message.
             * @function verify
             * @memberof replitproto.PackageRemove
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageRemove.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pkgs != null && message.hasOwnProperty("pkgs")) {
                    if (!Array.isArray(message.pkgs))
                        return "pkgs: array expected";
                    for (var i = 0; i < message.pkgs.length; ++i) {
                        var error = $root.replitproto.Package.verify(message.pkgs[i]);
                        if (error)
                            return "pkgs." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a PackageRemove message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageRemove
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageRemove} PackageRemove
             */
            PackageRemove.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageRemove)
                    return object;
                var message = new $root.replitproto.PackageRemove();
                if (object.pkgs) {
                    if (!Array.isArray(object.pkgs))
                        throw TypeError(".replitproto.PackageRemove.pkgs: array expected");
                    message.pkgs = [];
                    for (var i = 0; i < object.pkgs.length; ++i) {
                        if (typeof object.pkgs[i] !== "object")
                            throw TypeError(".replitproto.PackageRemove.pkgs: object expected");
                        message.pkgs[i] = $root.replitproto.Package.fromObject(object.pkgs[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PackageRemove message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageRemove
             * @static
             * @param {replitproto.PackageRemove} message PackageRemove
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageRemove.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.pkgs = [];
                if (message.pkgs && message.pkgs.length) {
                    object.pkgs = [];
                    for (var j = 0; j < message.pkgs.length; ++j)
                        object.pkgs[j] = $root.replitproto.Package.toObject(message.pkgs[j], options);
                }
                return object;
            };
    
            /**
             * Converts this PackageRemove to JSON.
             * @function toJSON
             * @memberof replitproto.PackageRemove
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageRemove.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageRemove;
        })();
    
        replitproto.PackageInstall = (function() {
    
            /**
             * Properties of a PackageInstall.
             * @memberof replitproto
             * @interface IPackageInstall
             */
    
            /**
             * Constructs a new PackageInstall.
             * @memberof replitproto
             * @classdesc Represents a PackageInstall.
             * @implements IPackageInstall
             * @constructor
             * @param {replitproto.IPackageInstall=} [properties] Properties to set
             */
            function PackageInstall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new PackageInstall instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageInstall
             * @static
             * @param {replitproto.IPackageInstall=} [properties] Properties to set
             * @returns {replitproto.PackageInstall} PackageInstall instance
             */
            PackageInstall.create = function create(properties) {
                return new PackageInstall(properties);
            };
    
            /**
             * Encodes the specified PackageInstall message. Does not implicitly {@link replitproto.PackageInstall.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageInstall
             * @static
             * @param {replitproto.IPackageInstall} message PackageInstall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageInstall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified PackageInstall message, length delimited. Does not implicitly {@link replitproto.PackageInstall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageInstall
             * @static
             * @param {replitproto.IPackageInstall} message PackageInstall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageInstall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageInstall message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageInstall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageInstall} PackageInstall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageInstall.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageInstall();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageInstall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageInstall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageInstall} PackageInstall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageInstall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageInstall message.
             * @function verify
             * @memberof replitproto.PackageInstall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageInstall.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a PackageInstall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageInstall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageInstall} PackageInstall
             */
            PackageInstall.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageInstall)
                    return object;
                return new $root.replitproto.PackageInstall();
            };
    
            /**
             * Creates a plain object from a PackageInstall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageInstall
             * @static
             * @param {replitproto.PackageInstall} message PackageInstall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageInstall.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this PackageInstall to JSON.
             * @function toJSON
             * @memberof replitproto.PackageInstall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageInstall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageInstall;
        })();
    
        replitproto.PackageListSpecfile = (function() {
    
            /**
             * Properties of a PackageListSpecfile.
             * @memberof replitproto
             * @interface IPackageListSpecfile
             */
    
            /**
             * Constructs a new PackageListSpecfile.
             * @memberof replitproto
             * @classdesc Represents a PackageListSpecfile.
             * @implements IPackageListSpecfile
             * @constructor
             * @param {replitproto.IPackageListSpecfile=} [properties] Properties to set
             */
            function PackageListSpecfile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new PackageListSpecfile instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageListSpecfile
             * @static
             * @param {replitproto.IPackageListSpecfile=} [properties] Properties to set
             * @returns {replitproto.PackageListSpecfile} PackageListSpecfile instance
             */
            PackageListSpecfile.create = function create(properties) {
                return new PackageListSpecfile(properties);
            };
    
            /**
             * Encodes the specified PackageListSpecfile message. Does not implicitly {@link replitproto.PackageListSpecfile.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageListSpecfile
             * @static
             * @param {replitproto.IPackageListSpecfile} message PackageListSpecfile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageListSpecfile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified PackageListSpecfile message, length delimited. Does not implicitly {@link replitproto.PackageListSpecfile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageListSpecfile
             * @static
             * @param {replitproto.IPackageListSpecfile} message PackageListSpecfile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageListSpecfile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageListSpecfile message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageListSpecfile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageListSpecfile} PackageListSpecfile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageListSpecfile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageListSpecfile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageListSpecfile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageListSpecfile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageListSpecfile} PackageListSpecfile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageListSpecfile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageListSpecfile message.
             * @function verify
             * @memberof replitproto.PackageListSpecfile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageListSpecfile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a PackageListSpecfile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageListSpecfile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageListSpecfile} PackageListSpecfile
             */
            PackageListSpecfile.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageListSpecfile)
                    return object;
                return new $root.replitproto.PackageListSpecfile();
            };
    
            /**
             * Creates a plain object from a PackageListSpecfile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageListSpecfile
             * @static
             * @param {replitproto.PackageListSpecfile} message PackageListSpecfile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageListSpecfile.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this PackageListSpecfile to JSON.
             * @function toJSON
             * @memberof replitproto.PackageListSpecfile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageListSpecfile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageListSpecfile;
        })();
    
        replitproto.PackageListSpecfileResp = (function() {
    
            /**
             * Properties of a PackageListSpecfileResp.
             * @memberof replitproto
             * @interface IPackageListSpecfileResp
             * @property {Array.<replitproto.IPackage>|null} [pkgs] PackageListSpecfileResp pkgs
             */
    
            /**
             * Constructs a new PackageListSpecfileResp.
             * @memberof replitproto
             * @classdesc Represents a PackageListSpecfileResp.
             * @implements IPackageListSpecfileResp
             * @constructor
             * @param {replitproto.IPackageListSpecfileResp=} [properties] Properties to set
             */
            function PackageListSpecfileResp(properties) {
                this.pkgs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PackageListSpecfileResp pkgs.
             * @member {Array.<replitproto.IPackage>} pkgs
             * @memberof replitproto.PackageListSpecfileResp
             * @instance
             */
            PackageListSpecfileResp.prototype.pkgs = $util.emptyArray;
    
            /**
             * Creates a new PackageListSpecfileResp instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageListSpecfileResp
             * @static
             * @param {replitproto.IPackageListSpecfileResp=} [properties] Properties to set
             * @returns {replitproto.PackageListSpecfileResp} PackageListSpecfileResp instance
             */
            PackageListSpecfileResp.create = function create(properties) {
                return new PackageListSpecfileResp(properties);
            };
    
            /**
             * Encodes the specified PackageListSpecfileResp message. Does not implicitly {@link replitproto.PackageListSpecfileResp.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageListSpecfileResp
             * @static
             * @param {replitproto.IPackageListSpecfileResp} message PackageListSpecfileResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageListSpecfileResp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pkgs != null && message.pkgs.length)
                    for (var i = 0; i < message.pkgs.length; ++i)
                        $root.replitproto.Package.encode(message.pkgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PackageListSpecfileResp message, length delimited. Does not implicitly {@link replitproto.PackageListSpecfileResp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageListSpecfileResp
             * @static
             * @param {replitproto.IPackageListSpecfileResp} message PackageListSpecfileResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageListSpecfileResp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageListSpecfileResp message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageListSpecfileResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageListSpecfileResp} PackageListSpecfileResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageListSpecfileResp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageListSpecfileResp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.pkgs && message.pkgs.length))
                            message.pkgs = [];
                        message.pkgs.push($root.replitproto.Package.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageListSpecfileResp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageListSpecfileResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageListSpecfileResp} PackageListSpecfileResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageListSpecfileResp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageListSpecfileResp message.
             * @function verify
             * @memberof replitproto.PackageListSpecfileResp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageListSpecfileResp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pkgs != null && message.hasOwnProperty("pkgs")) {
                    if (!Array.isArray(message.pkgs))
                        return "pkgs: array expected";
                    for (var i = 0; i < message.pkgs.length; ++i) {
                        var error = $root.replitproto.Package.verify(message.pkgs[i]);
                        if (error)
                            return "pkgs." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a PackageListSpecfileResp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageListSpecfileResp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageListSpecfileResp} PackageListSpecfileResp
             */
            PackageListSpecfileResp.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageListSpecfileResp)
                    return object;
                var message = new $root.replitproto.PackageListSpecfileResp();
                if (object.pkgs) {
                    if (!Array.isArray(object.pkgs))
                        throw TypeError(".replitproto.PackageListSpecfileResp.pkgs: array expected");
                    message.pkgs = [];
                    for (var i = 0; i < object.pkgs.length; ++i) {
                        if (typeof object.pkgs[i] !== "object")
                            throw TypeError(".replitproto.PackageListSpecfileResp.pkgs: object expected");
                        message.pkgs[i] = $root.replitproto.Package.fromObject(object.pkgs[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PackageListSpecfileResp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageListSpecfileResp
             * @static
             * @param {replitproto.PackageListSpecfileResp} message PackageListSpecfileResp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageListSpecfileResp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.pkgs = [];
                if (message.pkgs && message.pkgs.length) {
                    object.pkgs = [];
                    for (var j = 0; j < message.pkgs.length; ++j)
                        object.pkgs[j] = $root.replitproto.Package.toObject(message.pkgs[j], options);
                }
                return object;
            };
    
            /**
             * Converts this PackageListSpecfileResp to JSON.
             * @function toJSON
             * @memberof replitproto.PackageListSpecfileResp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageListSpecfileResp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageListSpecfileResp;
        })();
    
        replitproto.PackageCacheSave = (function() {
    
            /**
             * Properties of a PackageCacheSave.
             * @memberof replitproto
             * @interface IPackageCacheSave
             */
    
            /**
             * Constructs a new PackageCacheSave.
             * @memberof replitproto
             * @classdesc Represents a PackageCacheSave.
             * @implements IPackageCacheSave
             * @constructor
             * @param {replitproto.IPackageCacheSave=} [properties] Properties to set
             */
            function PackageCacheSave(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new PackageCacheSave instance using the specified properties.
             * @function create
             * @memberof replitproto.PackageCacheSave
             * @static
             * @param {replitproto.IPackageCacheSave=} [properties] Properties to set
             * @returns {replitproto.PackageCacheSave} PackageCacheSave instance
             */
            PackageCacheSave.create = function create(properties) {
                return new PackageCacheSave(properties);
            };
    
            /**
             * Encodes the specified PackageCacheSave message. Does not implicitly {@link replitproto.PackageCacheSave.verify|verify} messages.
             * @function encode
             * @memberof replitproto.PackageCacheSave
             * @static
             * @param {replitproto.IPackageCacheSave} message PackageCacheSave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageCacheSave.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified PackageCacheSave message, length delimited. Does not implicitly {@link replitproto.PackageCacheSave.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.PackageCacheSave
             * @static
             * @param {replitproto.IPackageCacheSave} message PackageCacheSave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PackageCacheSave.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PackageCacheSave message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.PackageCacheSave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.PackageCacheSave} PackageCacheSave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageCacheSave.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.PackageCacheSave();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PackageCacheSave message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.PackageCacheSave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.PackageCacheSave} PackageCacheSave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PackageCacheSave.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PackageCacheSave message.
             * @function verify
             * @memberof replitproto.PackageCacheSave
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PackageCacheSave.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a PackageCacheSave message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.PackageCacheSave
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.PackageCacheSave} PackageCacheSave
             */
            PackageCacheSave.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.PackageCacheSave)
                    return object;
                return new $root.replitproto.PackageCacheSave();
            };
    
            /**
             * Creates a plain object from a PackageCacheSave message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.PackageCacheSave
             * @static
             * @param {replitproto.PackageCacheSave} message PackageCacheSave
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PackageCacheSave.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this PackageCacheSave to JSON.
             * @function toJSON
             * @memberof replitproto.PackageCacheSave
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PackageCacheSave.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PackageCacheSave;
        })();
    
        replitproto.ChatScrollback = (function() {
    
            /**
             * Properties of a ChatScrollback.
             * @memberof replitproto
             * @interface IChatScrollback
             * @property {Array.<replitproto.IChatMessage>|null} [scrollback] ChatScrollback scrollback
             */
    
            /**
             * Constructs a new ChatScrollback.
             * @memberof replitproto
             * @classdesc Represents a ChatScrollback.
             * @implements IChatScrollback
             * @constructor
             * @param {replitproto.IChatScrollback=} [properties] Properties to set
             */
            function ChatScrollback(properties) {
                this.scrollback = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChatScrollback scrollback.
             * @member {Array.<replitproto.IChatMessage>} scrollback
             * @memberof replitproto.ChatScrollback
             * @instance
             */
            ChatScrollback.prototype.scrollback = $util.emptyArray;
    
            /**
             * Creates a new ChatScrollback instance using the specified properties.
             * @function create
             * @memberof replitproto.ChatScrollback
             * @static
             * @param {replitproto.IChatScrollback=} [properties] Properties to set
             * @returns {replitproto.ChatScrollback} ChatScrollback instance
             */
            ChatScrollback.create = function create(properties) {
                return new ChatScrollback(properties);
            };
    
            /**
             * Encodes the specified ChatScrollback message. Does not implicitly {@link replitproto.ChatScrollback.verify|verify} messages.
             * @function encode
             * @memberof replitproto.ChatScrollback
             * @static
             * @param {replitproto.IChatScrollback} message ChatScrollback message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatScrollback.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.scrollback != null && message.scrollback.length)
                    for (var i = 0; i < message.scrollback.length; ++i)
                        $root.replitproto.ChatMessage.encode(message.scrollback[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ChatScrollback message, length delimited. Does not implicitly {@link replitproto.ChatScrollback.verify|verify} messages.
             * @function encodeDelimited
             * @memberof replitproto.ChatScrollback
             * @static
             * @param {replitproto.IChatScrollback} message ChatScrollback message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatScrollback.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChatScrollback message from the specified reader or buffer.
             * @function decode
             * @memberof replitproto.ChatScrollback
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {replitproto.ChatScrollback} ChatScrollback
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatScrollback.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.replitproto.ChatScrollback();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.scrollback && message.scrollback.length))
                            message.scrollback = [];
                        message.scrollback.push($root.replitproto.ChatMessage.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ChatScrollback message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof replitproto.ChatScrollback
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {replitproto.ChatScrollback} ChatScrollback
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatScrollback.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChatScrollback message.
             * @function verify
             * @memberof replitproto.ChatScrollback
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatScrollback.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.scrollback != null && message.hasOwnProperty("scrollback")) {
                    if (!Array.isArray(message.scrollback))
                        return "scrollback: array expected";
                    for (var i = 0; i < message.scrollback.length; ++i) {
                        var error = $root.replitproto.ChatMessage.verify(message.scrollback[i]);
                        if (error)
                            return "scrollback." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a ChatScrollback message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof replitproto.ChatScrollback
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {replitproto.ChatScrollback} ChatScrollback
             */
            ChatScrollback.fromObject = function fromObject(object) {
                if (object instanceof $root.replitproto.ChatScrollback)
                    return object;
                var message = new $root.replitproto.ChatScrollback();
                if (object.scrollback) {
                    if (!Array.isArray(object.scrollback))
                        throw TypeError(".replitproto.ChatScrollback.scrollback: array expected");
                    message.scrollback = [];
                    for (var i = 0; i < object.scrollback.length; ++i) {
                        if (typeof object.scrollback[i] !== "object")
                            throw TypeError(".replitproto.ChatScrollback.scrollback: object expected");
                        message.scrollback[i] = $root.replitproto.ChatMessage.fromObject(object.scrollback[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ChatScrollback message. Also converts values to other types if specified.
             * @function toObject
             * @memberof replitproto.ChatScrollback
             * @static
             * @param {replitproto.ChatScrollback} message ChatScrollback
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatScrollback.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.scrollback = [];
                if (message.scrollback && message.scrollback.length) {
                    object.scrollback = [];
                    for (var j = 0; j < message.scrollback.length; ++j)
                        object.scrollback[j] = $root.replitproto.ChatMessage.toObject(message.scrollback[j], options);
                }
                return object;
            };
    
            /**
             * Converts this ChatScrollback to JSON.
             * @function toJSON
             * @memberof replitproto.ChatScrollback
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatScrollback.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChatScrollback;
        })();
    
        return replitproto;
    })();

    return $root;
});
