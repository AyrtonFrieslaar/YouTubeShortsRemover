function removeShortsElements(){

    //Removes Youtube shorts container on Main page.
    const shortsContainer = $('ytd-rich-section-renderer'); //I am not sure if there is a better way find the YouTube Shorts on the home page as there might be other containers that are not Shorts specific using the same element.
    if(shortsContainer){
        shortsContainer.remove();
    }
    const shortsIcon = $('ytd-mini-guide-entry-renderer[aria-label="Shorts"]');
    if(shortsIcon){
        shortsIcon.remove();
    }
}

//Remove elements once page loads.
$(document).ready(function(){
    removeShortsElements();
});