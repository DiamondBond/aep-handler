(function () {
  "use strict";
  var path, slash;
  path = location.href;
  if (getOS() == "MAC") {
    slash = "/";
    path = path.substring(0, path.length - 11);
  }
  if (getOS() == "WIN") {
    slash = "/";
    path = path.substring(8, path.length - 11);
  }

  path += "/presets";
  //   alert(path);
  //   alert(path.slice(40, path.length));
  generatePreviews(path);
})();

function generatePreviews(thisPath) {
  var presetNames = undefined;
  var csInterface = new CSInterface();
  csInterface.evalScript("getPreviewPaths(" + thisPath + ")", function (res) {
    presetNames = JSON.parse(res);
  });

  // due to async nature of loading this may take anywhere from 200ms to 20000ms
  // change the timeout depending on the size of the "presets" folder
  setTimeout(function () {
    alert(presetNames);
  }, 200);
}

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    os = null;

  if (macosPlatforms.indexOf(platform) != -1) {
    os = "MAC";
  } else if (windowsPlatforms.indexOf(platform) != -1) {
    os = "WIN";
  }
  return os;
}
