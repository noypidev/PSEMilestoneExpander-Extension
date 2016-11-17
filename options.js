// Copyright (c) 2016 Remus Victuelles
// Author Email: remus.victuelles@gmail.com

// Saves options to chrome.storage
function save_options() {
  var _projWidth = document.getElementById('projWidth').value;
  var _milesWidth = document.getElementById('milesWidth').value;
  chrome.storage.sync.set({
    projWidth: _projWidth,
    milesWidth: _milesWidth
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // just in case there's no value, set the default width
  chrome.storage.sync.get({
    projWidth: '330',
    milesWidth: '380'
  }, function(items) {
    console.log(items);

    document.getElementById('projWidth').value = parseInt(items.projWidth);
    document.getElementById('milesWidth').value = parseInt(items.milesWidth);
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);