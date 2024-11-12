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
  var response = 'Chatbot: ' + getResponse(userInput);
  setTimeout(function() {
    addMessageToChatbox(response);
  }, 1000);
}

function getResponse(userInput) {
  // Regras simples de resposta
  const lowerCaseInput = userInput.toLowerCase();
  if (lowerCaseInput.includes('olá') || lowerCaseInput.includes('oi')) {
    return "Olá! Como posso ajudar?";
  } else if (lowerCaseInput.includes('como você está')) {
    return "Estou bem, obrigado por perguntar! E você?";
  } else if (lowerCaseInput.includes('adeus') || lowerCaseInput.includes('tchau')) {
    return "Até mais! Foi bom conversar com você.";
  } else {
    return "Desculpe, não entendi. Pode reformular?";
  }
}


