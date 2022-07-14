// if color is saved in local, change color of button to selected
var optionClr = chrome.storage.local.get("color");
console.log(optionClr);
// if (optionClr){
//     document.getElementById("change").style.backgroundColor = optionClr;
//     document.getElementsByClassName("Slider").style.backgroundColor = optionClr;
// }

document.getElementById("change").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changeColor,
    });
});

function changeColor(){
    current = document.body;
    chrome.storage.local.get(null, (options) => {
        if (current.style.backgroundColor !== options.color){
            current.style.backgroundColor = options.color;
        } else {
            current.style.backgroundColor = "";
        }
    });
}