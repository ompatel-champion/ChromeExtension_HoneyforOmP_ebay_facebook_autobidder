chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id,{
        code: 'window.location.href;'
    },receiveText);
});

//tabs.executeScript() returns the results of the executed script
//  in an array of results, one entry per frame in which the script
//  was injected.
function receiveText(resultsArray){
    currentUrl = resultsArray[0];
    alert(currentUrl);
}