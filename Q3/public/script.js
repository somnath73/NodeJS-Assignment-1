const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.classList.add("p-2", "rounded", "max-w-xs", "text-sm");

  if (sender === "You") {
    msg.classList.add("bg-blue-100", "self-end", "ml-auto");
  } else {
    msg.classList.add("bg-gray-200", "self-start", "mr-auto");
  }

  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Fake chatbot logic (like your Node version)
function getBotResponse(input) {
  const msg = input.toLowerCase();
  const responses = {
    hi: "Hello! I am your Weather Info Bot. Ask me about weather conditions.",
    hello: "Hi there! How can I help you with weather updates?",
    weather: "The weather is sunny today! ☀",
    rain: "There is a chance of rain today. Carry an umbrella! ☔",
    temperature: "The temperature is around 28°C.",
    bye: "Goodbye! Have a great day!",
  };
  return responses[msg] || "Sorry, I don't understand.";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = input.value.trim();
  if (userInput === "") return;

  appendMessage("You", userInput);
  const botReply = getBotResponse(userInput);
  setTimeout(() => appendMessage("Bot", botReply), 500);

  input.value = "";
});
