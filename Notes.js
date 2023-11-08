//In manifest.json:
//"js": [ "jquery.js","myScripts.js"] -- the jquery.js should be loaded first so that it can be used in myScripts.js

/**********************/

//found here: https://stackoverflow.com/questions/67993145/how-to-get-current-tab-url-using-manifest-v3
//I found this function extremely useful, although I had no reason to make use of it.
async function getTab() {
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    return tabs[0].url;
  }

//Calling this function produces a Promise with the result of the url of the tab.
getTab().then(url => {
console.log(url);
})