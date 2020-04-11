const conversation = new Conversation(box);

conversation.addMessage([
  { author: pabloProfile, text: "¡Hola a todos! ¿Qué tal están?" },
  { author: profesorProfile, text: "Muy bien, ¡gracias!" },
  { author: alumnoProfile, text: "Yo también muy bien" },
  {
    author: pabloProfile,
    text: "El robot habla con un acento un tanto raro...",
  },
  { author: alumnoProfile, text: "Es que soy del norte" },
]);