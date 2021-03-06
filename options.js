document.querySelectorAll(".colors").forEach((color) => {
    color.addEventListener("click", (e) => {
        var options = {
            color: e.target.style.backgroundColor
        }
        chrome.storage.local.set(options, function(){
            console.log("Saving setting");
        });
    });
});

document.querySelector("#clear").addEventListener("click", function(){
    chrome.storage.local.clear();
    console.log("Storage cleared");
})