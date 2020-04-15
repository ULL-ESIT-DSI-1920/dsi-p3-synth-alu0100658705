export default class Conversation {
    constructor(chat) {
        this.chat = chat;
    }
  
    addMessage(conversa) {
        conversa.map((frase) => {
            let msg = new SpeechSynthesisUtterance();
            msg.text = frase.text;
            msg.voice = frase.author.voice;
            msg.pitch = frase.author.pitch;
            msg.rate = frase.author.rate;
            msg.volume = frase.author.volume;
            msg.onstart = () => {
                console.log(this.chat)
                this.chat.innerHTML += `<div class="frase" style="color: ${frase.author.color}"> <img src="${frase.author.avatar}" width=\"150px\" height=\"150px\"> ${frase.author.nombre}: ${msg.text}</div>`;
            }
            speechSynthesis.speak(msg); 
        });
    }

    wordToWord(conversa) {
        conversa.map((frase, i) => {
            let msg = new SpeechSynthesisUtterance();        
            msg.text = frase.text;
            msg.voice = frase.author.voice;
            msg.pitch = frase.author.pitch;
            msg.rate = frase.author.rate;
            msg.volume = frase.author.volume;

            msg.onstart = () => this.chat.innerHTML += `<div class="frase" style="color: ${frase.author.color}"> <img src="${frase.author.avatar}" width=\"150px\" height=\"150px\"> ${frase.author.nombre}: <div id="fill${i}" style="display: inline-block"></div>  </div></div>`;
            msg.onboundary = (event) => document.querySelector(`#fill${i}`).innerHTML = msg.text.substring(0, event.charIndex+event.charLength+1);
        
            speechSynthesis.speak(msg);
        });
    }
}