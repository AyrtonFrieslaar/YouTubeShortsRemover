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

//Found someone who's done a better job than I did. Not quite surprised we took pretty much the same approach to doing this.
function removeUIElements() {

  // Remove the Shorts button from the sidebar
  const shortsButton = document.querySelector(
    'ytd-mini-guide-entry-renderer[aria-label="Shorts"]'
  );
  if (shortsButton) {
    shortsButton.remove();
  }

  // Remove the Shorts carousel drawer
  const carousels = document.querySelectorAll("ytd-rich-section-renderer");
  carousels.forEach((carousel) => {
    // Add specific condition to target Shorts carousel if needed
    carousel.remove();
  });

  
  const otherShortsButtons = document.querySelectorAll('[title="Shorts"]');
  otherShortsButtons.forEach(node => node.remove());
}

// Remove the UI elements on initial page load
removeUIElements();

// Use a MutationObserver to handle dynamic content/AJAX
const observer = new MutationObserver((mutations) => {
  let shouldRemoveElements = false;
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      shouldRemoveElements = true;
      break;
    }
  }

  if (shouldRemoveElements) {
    removeUIElements();
  }
});

// Start observing the target node for configured mutations
observer.observe(document.body, { childList: true, subtree: true });
