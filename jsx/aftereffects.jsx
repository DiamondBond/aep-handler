#include "json2.js"

function getPreviewPaths(path) {
    var thisFolder = Folder(path);
    var files = thisFolder.getFiles();

    var fileNames = [];

    for(var i = 0; i < files.length; i++){
        fileNames.push(files[i].fsName);
    }

    return JSON.stringify(fileNames);
    }

function osCheck() {
        var os = $.os;
        var match = os.indexOf("Windows");
        if(match != (-1)) {
                var userOS = "PC";
            } else {
                 var userOS = "MAC";
                }
            return userOS;
    }