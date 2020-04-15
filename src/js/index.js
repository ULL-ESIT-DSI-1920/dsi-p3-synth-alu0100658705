import Profile from './Profile.js';
import Conversation from './Conversation.js';

var Pablo_voice;
var Prof_voice;
var Alumno_voice;

var img1 = "https://theawesomer.com/photos/2013/09/hyper_light_drifter_t.jpg"
var img2 = "https://st-listas.20minutos.es/images/2009-11/163746/1824010_640px.jpg"
var img3 = "https://vignette.wikia.nocookie.net/simpsons/images/f/f1/Fausto.jpg/revision/latest?cb=20071204005410"

speechSynthesis.onvoiceschanged = function () {
    var voices = this.getVoices().forEach(voice => {
        if (voice.name === 'Microsoft Helena Desktop - Spanish (Spain)') {
            Pablo_voice = voice
        } 
        if (voice.name === 'Google español') {
            Prof_voice = voice
        }
        if (voice.name === 'Google português do Brasil') {
            Alumno_voice = voice
        }
    });

    const Pablo = new Profile("Pablo", img1, Pablo_voice, {
        rate: 2.0, 
        pitch: 1.0, 
        color: "#000000", 
        volume: 1
    });
    
    const Profesor = new Profile("Profesor", img2, Prof_voice, {
        rate: 1.0, 
        pitch: 0.5, 
        color: "#B8860B", 
        volume: 1
    });
    
    const Alumno = new Profile("Alumno", img3, Alumno_voice, {
        rate: 1.0, 
        pitch: 0.5, 
        color: "#ADD8E6", 
        volume: 1
    });
    
    
    
    const conversation = new Conversation(document.querySelector('#chat'));
    
    document.querySelector("button").onclick = () => {
        document.querySelector('button').style.visibility = 'hidden';
        document.querySelector('#button_w').style.visibility = 'hidden';
        document.querySelector('#chat').style.visibility = 'visible';
        
        conversation.addMessage([
            { author: Pablo, text: "Parece que la práctica comienza a funcionar correctamente" },
            { author: Profesor, text: "Tiene buena pinta" },
            { author: Pablo, text: "Las voces se están pasando bien" },
            { author: Profesor, text: "De eso no estoy tan seguro, a ver; habla alumno portugués" },
            { author: Alumno, text: "Todo corrrecto, tengo asento brasileiro" },
            { author: Profesor, text: "Parece que si, todo correcto." },
            { author: Pablo, text: "Genial, pues a otra cosa." },
        ]);
    };

    document.querySelector("#button_w").onclick = () => {
        document.querySelector('button').style.visibility = 'hidden';
        document.querySelector('#button_w').style.visibility = 'hidden';
        document.querySelector('#chat').style.visibility = 'visible';
        
        conversation.wordToWord([
            { author: Pablo, text: "Esto es una prueba del funcionamiento palabra por palabra" },
        ]);
    };
}



