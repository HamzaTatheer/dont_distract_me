document.getElementById("toggle-button").addEventListener("click", onToggle);


function updateState(){
    chrome.storage.sync.get(['state'], function(result) {
        if(result.state == true)
            document.getElementById("toggle-state").innerHTML = "Enabled";
        else
            document.getElementById("toggle-state").innerHTML = "Disabled";
    });
}

updateState();

function onToggle(){

    chrome.storage.sync.get(['state'], function(result) {
        if(result.state == undefined){
            result.state = true;            
        }

        chrome.storage.sync.set({state:!result.state}, function() {
            updateState();
        });
    });



}