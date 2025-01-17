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
  // alert(path.slice(40, path.length));
  path += "/presets";
  getPreviewNames(path);
})();

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

// get filenames of preview content
function getPreviewNames(thisPath) {
  var presetNames = undefined;
  var csInterface = new CSInterface();
  csInterface.evalScript('getPreviewPaths("' + thisPath +'")', function(res){
    presetNames = JSON.parse(res);
  });

  // due to async nature of loading this may take anywhere from 200ms to 2000ms
  // change the timeout depending on the size (gb) of the "presets" folder
  setTimeout(function () {
    generatePreviews(presetNames);
  }, 200);
}

// generate the preview content
function generatePreviews(names) {
  var previewSection = document.getElementById("previewSection");
  var thisImage;

  for (var i = 0; i < names.length; i++) {
    thisImage = document.createElement("IMG");
    thisImage.src = names[i];
    thisImage.setAttribute("id", names[i].slice(0, names[i].length - 3));
    thisImage.setAttribute("onmouseover", "mouseHover(this)");
    previewSection.appendChild(thisImage);
  }
}

// converts {filename}.png to {filename}.mp4
// swaps the html element to load the .mp4
function mouseHover(currentImage) {
  var parent = currentImage.parentNode;
  var video = document.createElement("VIDEO");
  var tempPath = currentImage.id;
  if (tempPath.lastIndexOf(".") < tempPath.length - 1) {
    tempPath = tempPath.slice(0, tempPath.length - 3);
  }
  parent.removeChild(currentImage);
  video.src = tempPath += "mp4";
  video.setAttribute("id", tempPath);
  video.setAttribute("onmouseout", "mouseUnhover(this)");
  video.play();
  parent.insertBefore(video, parent.childNodes[0]);
}

// converts {filename}.mp4 to {filename}.png
// swaps the html element back to load the .png
function mouseUnhover(currentVideo) {
  var parent = currentVideo.parentNode;
  var image = document.createElement("IMG");
  var tempPath = currentVideo.id;
  tempPath = tempPath.slice(0, tempPath.length - 3);
  parent.removeChild(currentVideo);
  image.src = tempPath += "png";
  image.setAttribute("id", tempPath);
  image.setAttribute("onmouseover", "moveHover(this)");
  parent.insertBefore(image, parent.childNodes[0]);
}
