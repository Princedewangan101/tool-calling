import 'dotenv/config';
import { FunctionResponse, GoogleGenAI, Type } from '@google/genai';
import { calculateExponent, calculateProduct, calculateSum, exponentOfNumber, productOfNumber, sumOfTwoNumber } from './tool.js';



const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY : ""
});


async function modelCall(contents: any[]) {
    try {

        return await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: contents,
            config: {
                tools: [{
                    functionDeclarations: [
                        sumOfTwoNumber, productOfNumber, exponentOfNumber
                    ],
                }],
            },
        });

    } catch (error: any) {
        console.log(" API CALL FAILED (Network/Timeout) :", error.message);

    }
}

const contents: any[] = []
const result: any[] = [];

async function start() {
    try {

        contents.push(
            {
                role: "user", parts: [{ text: "first calculate 3 + 4, then multiply the result by 2, then raise it to the power of 2" }]
            },
        )

        const res1 = await modelCall(contents)
        result.push(res1)

        while (result.length > 0) {

            const res = result.shift();

            if (!res) {
                console.log("❌ EXECUTION STOPS : RECEIVE EMTY RES.");
                break;
            }

            if (res.functionCalls && res.functionCalls.length > 0) {

                if (!res.functionCalls) { return console.log("FUNCTION CALL ARRAY NOT FOUND"); }
                if (!res.functionCalls[0]) { return console.log("FIRST INDEX OF FUNCTION CALL ARRAY NOT FOUND"); }
                if (!res.functionCalls[0].args) { return console.log("ARGUMENTS OF FUNCTION CALL ARRAY NOT FOUND"); }

                console.log("res.functionCalls[0].name :", res.functionCalls[0].name);
                console.log("res.functionCalls[0].ARG :", res.functionCalls[0].args);

                switch (res.functionCalls[0].name) {
                    case "sum":
                        console.log("CALLING SUM TOOL ...");
                        const toolcallResult = calculateSum(res.functionCalls[0].args.firstNumber, res.functionCalls[0].args.secondNumber)

                        console.log("toolcallResult :", toolcallResult);

                        if (!res.candidates) { return console.log(-1); }
                        if (!res.candidates[0]) { return console.log(-1); }

                        contents.push(res.candidates[0].content)
                        contents.push({ role: "user", parts: [{ functionResponse: { name: res.functionCalls[0].name, response: { output: toolcallResult } } }] })

                        console.log("res.candidates[0].content :", res.candidates[0].content);
                        console.log("THIS CONTENT WE ARE PASSING TO MODEL FOR FINAL RESPONCE:", contents);

                        console.log("CALLING MODEL (SUM) ...");
                        const res2 = await modelCall(contents)
                        console.log("PUSHING RESULT 2 ...");
                        result.push(res2)
                        break;

                    case "product":
                        console.log("CALLING PRODUCT TOOL ...");
                        const toolcallResult2 = calculateProduct(res.functionCalls[0].args.resultfromsum)
                        console.log("toolcallResult", toolcallResult2);

                        if (!res.candidates) { return console.log(-1); }
                        if (!res.candidates[0]) { return console.log(-1); }

                        contents.push(res.candidates[0].content)
                        contents.push({ role: "user", parts: [{ functionResponse: { name: res.functionCalls[0].name, response: { output: toolcallResult2 } } }] })

                        console.log("res.candidates[0].content :", res.candidates[0].content);
                        console.log("THIS CONTENT WE ARE PASSING TO MODEL FOR FINAL RESPONCE:", contents);

                        console.log("CALLING MODEL (PRODUCT) ...");
                        const res3 = await modelCall(contents)
                        console.log("PUSHING RESULT 3 ...");
                        result.push(res3)
                        break;

                    case "exponent":
                        console.log("CALLING EXPONENT TOOL ...");
                        const toolcallResult3 = calculateExponent(res.functionCalls[0].args.resultfromPRODUCT)

                        console.log("toolcallResult", toolcallResult3);

                        if (!res.candidates) { return console.log(-1); }
                        if (!res.candidates[0]) { return console.log(-1); }

                        contents.push(res.candidates[0].content)
                        contents.push({ role: "user", parts: [{ functionResponse: { name: res.functionCalls[0].name, response: { output: toolcallResult3 } } }] })

                        console.log("res.candidates[0].content :", res.candidates[0].content);
                        console.log("THIS CONTENT WE ARE PASSING TO MODEL FOR FINAL RESPONCE:", contents);

                        console.log("CALLING MODEL (EXPONENT) ...");
                        const res4 = await modelCall(contents)
                        console.log("PUSHING RESULT 4 ...");
                        result.push(res4)
                        break;

                    default:
                        break;
                }

            } else {
                console.log("DIRECT RESPONSE :", res.text);
            }

        }
    } catch (error: any) {
        console.log("CRITICAL RUNTIME ERROR :", error.message);
    }

}


start()







