chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "./firstpage.html"}, function (tab) {
    });
});