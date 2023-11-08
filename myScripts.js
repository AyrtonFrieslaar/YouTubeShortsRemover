$(document).ready(function(e){
    if(window.location.href.includes("shorts")){
        chrome.tabs.update({url: "http://www.youtube.com"});
        console.log("redirect here!")
    }

});
