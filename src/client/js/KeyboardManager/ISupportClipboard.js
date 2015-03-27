/*globals define, _, requirejs, WebGMEGlobal*/

define([], function () {

    "use strict";

    var ISupportClipboard;

    ISupportClipboard = function () {
    };

    ISupportClipboard.prototype.onCopy = function () {
        this.logger.warn("ISupportClipboard.prototype.onCopy IS NOT IMPLEMENTED!!!");
        return undefined;
    };

    ISupportClipboard.prototype.onPaste = function (data) {
        this.logger.warn("ISupportClipboard.prototype.onPaste IS NOT IMPLEMENTED!!! DATA: " + data);
    };

    return ISupportClipboard;
});