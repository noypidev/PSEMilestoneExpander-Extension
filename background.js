// Copyright (c) 2016 Remus Victuelles
// Author Email: remus.victuelles@gmail.com

chrome.browserAction.onClicked.addListener(function(tab) {
    if (chrome.runtime.openOptionsPage) {
        // New way to open options pages, if supported (Chrome 42+).
        chrome.runtime.openOptionsPage();
    } else {
        // Reasonable fallback.
        window.open(chrome.runtime.getURL('options.html'));
    }
});