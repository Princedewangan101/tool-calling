import 'dotenv/config';
import { GoogleGenAI, Type } from '@google/genai';
import readline from 'node:readline/promises'

// console.log("process.env.GEMINI_API_KEY :", process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY : ""
});

const sumOfTwoNumber = {
    name: "sum",
    description: "it adds the two numbers, for example - lets take first number be 3 and second number be 7 this tool adds 3 and 7 the result will be 10",
    parameters: {
        type: "object",
        properties: {
            firstNumber: {
                type: "object",
                description: "this is the first number"
            },
            secondNumber: {
                type: "object",
                description: "this is the first number"
            }
        },
        required: ["firstNumber", "secondNumber"],
    },
};

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// const userPrompt = await rl.question('Ask Gemini something : ');

const userPrompt = "can u add this 2 no. 33 and 67 ?";

const res = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userPrompt,
    config: {
        tools: [{
            functionDeclarations: [
                sumOfTwoNumber
            ],
        }],
    },
});

console.log("res :", res);
console.log("-------------------------------");

console.log("Function to call:", res.functionCalls[0].name);
console.log("Arguments provided:", res.functionCalls[0].args);



