/**
* MeshCentral wdVncPlugin
*/

module.exports.wdVncPlugin = function (pluginHandler) {
     var obj = {};
    obj.parent = parent;
    obj.meshServer = parent.parent;
    obj.debug = obj.meshServer.debug;
    obj.onlineNodes = [];

    obj.server_startup = function() {
    };

    obj.hook_processAgentData = function() {
    };

    obj.hook_userLoggedIn = function(user) {
    };

    obj.hook_agentCoreIsStable = function(myparent, gp) { // check for remaps when an agent logs in
    };

    obj.uiCustomEvent = function(command, parent) {
        console.log( "uiCustomEvent. Element: "+command.element+" User: "+
    };  
    return obj;

};
