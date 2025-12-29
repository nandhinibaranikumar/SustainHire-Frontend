// Toggle chatbot open / close
function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}

// Send message from input
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addUserMessage(text);
  input.value = "";

  setTimeout(() => {
    botReply(text);
  }, 400);
}

// Add user message
function addUserMessage(text) {
  const chat = document.getElementById("chatBody");
  const msg = document.createElement("div");
  msg.className = "user-msg";
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Add bot message
function addBotMessage(text) {
  const chat = document.getElementById("chatBody");
  const msg = document.createElement("div");
  msg.className = "bot-msg";
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Show buttons again
function showOptions() {
  const chat = document.getElementById("chatBody");
  const options = document.createElement("div");
  options.className = "options";

  options.innerHTML = `
    <button onclick="quickReply('account')">How do I create an account?</button>
    <button onclick="quickReply('apply')">How do I apply for an internship?</button>
    <button onclick="quickReply('events')">Where can I find events?</button>
    <button onclick="quickReply('support')">I need help</button>
  `;

  chat.appendChild(options);
  chat.scrollTop = chat.scrollHeight;
}

// Handle predefined buttons
function quickReply(type) {
  let response = "";

  if (type === "account")
    response = "Click on Sign Up, fill in your details, and create your account.";
  else if (type === "apply")
    response = "Go to the 'Begin Your Path' section and apply for internships.";
  else if (type === "events")
    response = "You can find upcoming workshops and events in the Events section.";
  else if (type === "support")
    response = "Please reach out through the support section or contact us directly.";

  addBotMessage(response);
  showOptions();
}

// Bot reply for typed input
function botReply(text) {
  let reply = "Thanks for your message! Our team will assist you shortly 🌱";

  if (text.toLowerCase().includes("intern"))
    reply = "You can explore internships under the 'Begin Your Path' section.";
  else if (text.toLowerCase().includes("login"))
    reply = "Use the 'Forgot Password' option to recover your account.";
  else if (text.toLowerCase().includes("event"))
    reply = "Check the Events page to see upcoming programs.";

  addBotMessage(reply);
  showOptions();
}
