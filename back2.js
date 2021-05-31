chrome.runtime.onInstalled.addListener(function (object) {
    alert('You just made the best decision of today, by installing Repalce Google!\n\nWe will now redirect you to basic setting page to get text you want to replace with google.');
    chrome.tabs.create({url: "popup.html"}, function (tab) {
        console.log("New tab launched with popup.html");
    });
});