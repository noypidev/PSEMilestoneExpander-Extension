var tcEntries = document.getElementsByTagName("select");
for (var i = 0, len = tcEntries.length; i < len; i++) {
    var tcEntry = tcEntries[i];
    if (tcEntry.id == "tcMilestoneSelectList") {
    	tcEntry.style.width = "400px";
    }
}
