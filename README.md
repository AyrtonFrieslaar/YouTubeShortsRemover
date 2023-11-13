# YouTubeShortsRemover
This is my first attempt at creating a Chrome extension.
The only reason I made this was to avoid watching YouTube Shorts as I found them disctracting when I'm on YouTube.

At the time I started this small project I am not too familiar with using javascript to this extent although it isn't complicated, I feel like the code should be revised at a point when I feel like it.
I've put comments on most of the javascript I've coded here to help me understand it better. At this point it does the job of removing all the elements ascociated with YouTube Shorts and redirects you when trying to view one, but I should 100% revise this project when I feel like it.

## Notes on project files.
I only made this because I wanted a break from YT Shorts. I don't have much experience using javascript, but I was able to do this in a day since theres quite a bit documentation you can find on building extensions for chrome browsers.
Hopefully I'll come back to creating different browser extension that are a bit more useful as well as functional.

While working on this project I found a repo done by someone who has done this exact project found here: https://github.com/cphoover/youtube-shorts-remover/tree/main . After reviewing it, it helped me simplfy my code and make use of MutationObserver correctly.

### background.js
As I understand it, background.js is used to respond to events that happen in your broswer.
I've added an event listener to check for any changes to the url of the browser that matches "/shorts/" so that you can be redirected away from the bad YouTube Shorts.

### myScripts.js
These scripts are used to remove html elements associated with YT Shorts.
I was looking for a way to dynamically remove elements as they get added to the page, I found a way to make use of MutationObserver to find the associated elements as the document "mutates".

### jquery.js
I thought I would need jquery in this project, although I did use it it was not really necessary.

## Conclusion
At the moment, this does exactly what I wanted from it. I plan to atleast create a feature to allow you to enable this extension(should be pretty simple boolean slider in html) in the very near future.
This was okay for a first attempt at creating a Chrome extension, if I find a useful need in a browser hopefully next time I can create something much more complex and useful.
