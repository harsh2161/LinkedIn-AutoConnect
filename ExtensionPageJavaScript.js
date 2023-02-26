var _background = chrome.extension.getBackgroundPage();
let totalConnections = 10;
var numberText = document.getElementById("number");

var progressBar = document.getElementsByTagName('svg');
progressBar[0].style.strokeDashoffset = 472;

function injectTheScript() {
    totalConnections = 10;
    progressBar[0].style.strokeDashoffset = 472;
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['LinkedinSendRequest.js']});
    });
}

document.getElementById('StartStopButton').addEventListener('click', injectTheScript);

chrome.runtime.onMessage.addListener(handleBackgroundMessages);
function handleBackgroundMessages(message)
{
    numberText.innerText = message.numbers;
    var strokeValue = 472 -  (472 / totalConnections) * message.numbers;
    progressBar[0].style.strokeDashoffset = strokeValue;
}
