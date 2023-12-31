function removeShortsElements(){
    //Removes Youtube shorts container on Main page.
    const shortsContainer = $('ytd-rich-section-renderer'); //I am not sure if there is a better way find the YouTube Shorts on the home page as there might be other containers that are not Shorts specific using the same element.
    const shortReelContainer = $('ytd-reel-shelf-renderer'); //Seems like the only element that contains Shorts when searching.
    if(shortsContainer.length || shortReelContainer.length){
        shortsContainer.remove();
        shortReelContainer.remove();//I should remove this in its own condition.
    }

    const shortsIcon = $('yt-formatted-string:contains(Shorts)');
    if(shortsIcon.text() == "Shorts"){
        shortsIcon.parents().eq(1).remove();//According to my understanding, only the element referrenced in the if condition parents 2 levels up will be removed
    }
}
//Remove elements once page loads.
$(document).ready(function(){
    removeShortsElements();
});
//At this point I realise I need to somehow dynamically remove containers
//Found the answer from someone who has already done this. 
const observer = new MutationObserver((mutations) => {
    let shouldRemoveElements = false;
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        shouldRemoveElements = true;
        break;
      }
    }  
    if (shouldRemoveElements) {
        removeShortsElements();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });