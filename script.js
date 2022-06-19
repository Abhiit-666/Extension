setInterval(function(){
    var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
    if(skipButton != undefined && skipButton.length>0){
        console.log("Ad detected");
        skipButton[0].click();
    }

},1);

chrome=require("chrome")
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {cancel: details.url.indexOf("://www.evil.com/") != -1};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );