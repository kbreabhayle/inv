// Dummy messages array
let messages = [];

// Send message
function sendMessage() {
  const username = document.getElementById('username').value.trim();
  const message = document.getElementById('message').value.trim();

  if (username && message) {
    const fullMessage = `${username}: ${message}`;
    messages.push(fullMessage);
    updateChatBox();
    document.getElementById('message').value = '';
  }
}

// Update chat box
function updateChatBox() {
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML = '';

  messages.forEach(msg => {
    const div = document.createElement('div');
    div.textContent = msg;
    chatBox.appendChild(div);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}
