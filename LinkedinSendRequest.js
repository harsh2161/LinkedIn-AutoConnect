(async function sendRequest() {
    try{
        let connections = document.querySelectorAll('.artdeco-button--2.artdeco-button--secondary');
        console.log(connections);

        for(var i = 0; i < connections.length; i = i + 1)
        {
            try{
                let getTextFromChild = connections[i].querySelectorAll('.artdeco-button__text');
                let getTextValue = getTextFromChild[0].innerText;
                console.log(getTextValue);
                if(getTextValue == "Connect")
                {
                    connections[i].click();
                    await new Promise(resolve => setTimeout(resolve, 500));
                    let sendNow = document.querySelectorAll('.artdeco-button--2.artdeco-button--primary.ml1');
                    sendNow[0].click();
                    await new Promise(resolve => setTimeout(resolve, 3000));
                }
            }catch(err) { console.log(err.message) }
        }
    }
    catch(err) {
        alert(""+err.message);
    }
})();

chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
      var domInfo = {
        returnText :"harsh pandey in linkedin js"
        };
      response(domInfo);
    }
});