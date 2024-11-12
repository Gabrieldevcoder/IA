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

async function generateChatbotResponse(userInput) {
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_OPENAI_API_KEY`
    },
    body: JSON.stringify({
      prompt: userInput,
      max_tokens: 150
    })
  });

  const data = await response.json();
  const botResponse = data.choices[0].text.trim();

  addMessageToChatbox('Chatbot: ' + botResponse);
}

