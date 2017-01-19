/*
Open a new tab, and load "githunt.html" into it.
*/
function openMyPage() {
  console.log("injecting");
   browser.tabs.create({
     "url": "/githunt.html"
   });
}


/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openMyPage);
