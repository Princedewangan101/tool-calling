import "dotenv/config";
import { createAgent, toolStrategy } from 'langchain';
import { power, product, sum } from './tool.js';
import * as z from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";


process.env.GOOGLE_API_KEY = process.env.GEMINI_API_KEY

const rawSchema = z.object({
    noOfToolCall: z.boolean().describe("it is a count of how many tool u have called"),
    finalAns: z.string().describe("final ans of the question"),
})


const agent = createAgent({
    model: "google-genai:gemini-2.5-flash-lite",
    tools: [sum, product, power],
    responseFormat: toolStrategy(rawSchema)
})


async function start() {
    try {
        console.log(1);

        const config = { configurable: { thread_id: crypto.randomUUID() } };
        console.log(2);
        const eventStream = await agent.stream(
            {
                messages: [{ role: "user", content: "first calculate 3 + 4, then multiply the result by 2, then raise it to the power of 2" }],
            },
            { ...config, streamMode: "updates" },

        )
        console.log(3);


        for await (const chunk of eventStream) {
            console.log("🔥 CHUNK :", chunk);

            if (chunk.model_request?.messages) {

                if (chunk.model_request.structuredResponse) {
                    console.log("🔥STRUCTURED RESPONSE🔥 : " , chunk.model_request.structuredResponse);
                }

                const messages = chunk.model_request.messages;
                const lastMessage = messages[messages.length - 1];

                if (lastMessage?.tool_calls && lastMessage.tool_calls.length > 0) {
                    const toolCall = lastMessage.tool_calls[0];

                    console.log('MODEL REQUESTING TO USE THIS TOOL -');
                    console.log('TOOL-NAME :', toolCall.name);
                    console.log('TOOL-ARGS :', toolCall.args);
                    console.log("\n");
                }
            }

            if (chunk.tools?.messages) {
                const messages = chunk.tools.messages;
                const lastMessage = messages[messages.length - 1];

                if (lastMessage) {
                    console.log("RUNNING TOOL ...");
                    console.log("TOOL :", lastMessage.name || "Tool Output");
                    console.log("RESPONSE :", lastMessage.content);
                    console.log("\n");
                }
            }
        }
    } catch (error: any) {
        console.log("ERROR :", error.message);
    }

}

start()


