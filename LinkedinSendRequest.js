(async function sendRequest() {
    try{
        let connections = document.querySelectorAll('.artdeco-button--2.artdeco-button--secondary');
        console.log(connections.length);
        var noOfConnectionRequest = 0;
        for(var i = 0; i < connections.length; i = i + 1)
        {
            try{
                let getTextFromChild = connections[i].querySelectorAll('.artdeco-button__text');
                let getTextValue = getTextFromChild[0].innerText;
                if(getTextValue == "Connect")
                {
                    connections[i].click();
                    await new Promise(resolve => setTimeout(resolve, 500));
                    let sendNow = document.querySelectorAll('.artdeco-button--2.artdeco-button--primary.ml1');
                    sendNow[0].click();
                    noOfConnectionRequest = noOfConnectionRequest + 1;
                    console.log("Number of connection : " + noOfConnectionRequest);
                    chrome.runtime.sendMessage(
                        noOfConnectionRequest,
                        (response) => {
                            console.log(response);
                        }
                    )
                    await new Promise(resolve => setTimeout(resolve, 3000));
                }
            }
            catch(err) { 
                console.log(err.message) 
            }
        }
    }
    catch(err) {
        alert(""+err.message);
    }
})();