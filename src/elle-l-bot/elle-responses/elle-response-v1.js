const OpenAI = require("openai");



async function main() {


  console.log(chatCompletion.choices);
}





const elleResponseV1 = async ({ text }) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, 
      });
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `what would a playful and teasing AI assistant say in response to this text: "${text}"` }],
        model: 'gpt-3.5-turbo',
    });
    return chatCompletion;
}

module.exports = elleResponseV1