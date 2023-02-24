var numberText = document.getElementById("number");

const setDOMInfo = info => {
    document.getElementById('StartStopButton').textContent = info.returnText + "aya";
};

function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {from: 'popup', subject: 'DOMInfo'},setDOMInfo);
        chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['LinkedinSendRequest.js']});
    });
}

document.getElementById('StartStopButton').addEventListener('click', injectTheScript)