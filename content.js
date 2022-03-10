console.log("----------- Ferramenta iniciada ----------")
alert("Aplicação iniciada");
let textArea, sendButton, mensagens, lastWord = '';

function checkForRepetions(mensagens){
    const parsedArray = Array.from(mensagens)
    const parsedMessages = parsedArray.map((message) => String(message.innerText).toLowerCase());
    console.log(parsedMessages);
    if(parsedMessages.length >= 3) {
        const trigger = parsedMessages.slice(-3).every( (val, i, arr) => val === arr[0])
        if(trigger) {
            return parsedMessages.slice(-1)[0];
        } else {
            lastWord = '';
        }
    }
    return null;
}

const interval = setInterval(() => {
    if(!textArea || !sendButton) {
        console.log("Procurando elementos HTML...")
        textArea = document.getElementsByTagName("textArea").chatTextInput
        sendButton = document.querySelector("button.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.Cs0vCd")
    } else {
        console.log("Escutando o chat... ");
        mensagens = document.querySelectorAll("div.Zmm6We");
        const word = checkForRepetions(mensagens);
        if(word) {
            if(lastWord !== word) {
                lastWord = word;
                console.log("----------- Presença registrada: ", word);
                textArea.value = word;
                sendButton.disabled = false;
                sendButton.click();
            }
        }
    }
}, 2000)