chrome.storage.sync.get(['state'], function(result) {

    if(result.state == false)
        return;

    document.getElementById("page-manager").style.display = "none";
});