document.getElementById('send-button').addEventListener('click', function() {
  var userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== "") {
    addMessageToChatbox('Você: ' + userInput);
    generateChatbotResponse(userInput);
    document.getElementById('user-input').value = "";
  }
});

function addMessageToChatbox(message) {
  var chatbox = document.getElementById('chatbox');
  var messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function generateChatbotResponse(userInput) {
  var response = 'Chatbot: ' + generateResponse(userInput);
  setTimeout(function() {
    addMessageToChatbox(response);
  }, 1000);
}

function generateResponse(userInput) {
  // Logica simples para gerar respostas
  var responses = [
    "Olá! Como posso ajudar?",
    "Estou aqui para te ajudar!",
    "Que interessante! Pode me contar mais?",
    "Desculpe, não entendi. Pode reformular?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
