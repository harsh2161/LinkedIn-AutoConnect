var _background = chrome.extension.getBackgroundPage();
let totalConnections = 10;
var numberText = document.getElementById("number");

function injectTheScript() {
    totalConnections = 10;
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['LinkedinSendRequest.js']});
    });
}

document.getElementById('StartStopButton').addEventListener('click', injectTheScript);
var progressBar = document.getElementsByTagName('svg');

chrome.runtime.onMessage.addListener(handleBackgroundMessages);
function handleBackgroundMessages(message)
{
    numberText.innerText = message.numbers;
    var strokeValue = 472 -  (472 / totalConnections) * message.numbers;
    progressBar[0].style.strokeDashoffset = strokeValue;
}