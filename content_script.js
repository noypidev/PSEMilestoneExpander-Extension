// Copyright (c) 2016 Remus Victuelles
// Author Email: remus.victuelles@gmail.com

var MutationObserver;
var storage;
var milestones;
var projects;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    storage.get({
        // just in case there's no value, set the default width
        projWidth: '330',
        milesWidth: '380'
    }, function(items) {

        for (var i = 0, len = projects.length; i < len; i++) {
            // var project = projects[i];
            // if (project.class == "tcMilestoneSelectList") {
            projects[i].style.width = items.projWidth + "px";
            // }
        }

        for (var i = 0, len = milestones.length; i < len; i++) {
            var milestone = milestones[i];
            if (milestone.id == "tcMilestoneSelectList") {
                milestone.style.width = items.milesWidth + "px";
            }
        }
    });
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
if (document.readyState == "interactive") {
    if (typeof MutationObserver == 'undefined') {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    }
    if (typeof storage == 'undefined') {
        storage = chrome.storage.sync;
    }
    if (typeof milestones == 'undefined') {
        milestones = document.getElementsByTagName("select");
    }
    if (typeof projects == 'undefined') {
        projects = document.getElementsByClassName("projAssigNameDiv");
    }
    observer.observe(document, {
        subtree: true,
        childList: true
    });
}
