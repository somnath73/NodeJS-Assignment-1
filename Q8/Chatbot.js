const readline = require('readline');
const chatbot = require('../Q3/Chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("BackendBot - Ask me anything about backend technologies!\n(Type 'bye' to exit)");

function chat() {
    rl.question('You: ', (input) => {
        const response = chatbot.getResponse(input);
        console.log('Bot:', response);

        if (input.toLowerCase().includes('bye')) {
            rl.close();
        } else {
            chat();
        }
    });
}

chat();