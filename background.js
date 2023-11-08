chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){

    if(changeInfo.url.includes("/shorts/")){//The function should only be called if the url of the tab matches */shorts/*
        
        chrome.tabs.goBack(tabId).then(response => {// I'm not sure if a variable that is not being used is nescessary for the short hand function in this promise catch
            console.log("go back here!"); //debug
        }, nonresponse => {//if promise is unsuccessful
            //I am uncertain on the correct approach here.
            
            console.log("redirect to home here!"); //debug
            //The current tab will be redirected.
            chrome.tabs.update({url: "http://www.youtube.com"});
        });                
        }

})