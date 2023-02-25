chrome.runtime.onMessage.addListener((msg, sender, response) => {
    chrome.runtime.sendMessage( { numbers: msg } );
    response("response updated : "+msg);
});