function chatbot(query) {
  const responses = {
    hi: "Hello! I am your Weather Info Bot. Ask me about weather conditions.",
    hello: "Hi there! How can I help you with weather updates?",
    weather: "The weather is sunny today! ☀",
    rain: "There is a chance of rain today. Carry an umbrella! ☔",
    temperature: "The temperature is around 28°C.",
    bye: "Goodbye! Have a great day!",
  };

  query = query.toLowerCase();
  return responses[query] || "Sorry, I don't understand.";
}

module.exports = chatbot;
