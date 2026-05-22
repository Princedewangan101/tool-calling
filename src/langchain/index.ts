import "dotenv/config";
import { createAgent } from 'langchain';
import { power, product, sum } from './tool.js';

process.env.GOOGLE_API_KEY = "AIzaSyAagTKz_WYkWulcajk_EoDf9YCXWRd31-U";


const agent = createAgent({
    model: "google-genai:gemini-2.5-flash-lite",
    tools: [sum, product, power]
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
        console.log("[EVENT-STREAM] :", eventStream);

        for await (const chunk of eventStream) {
            console.log("chunk :", chunk);

            if (chunk.model_request?.messages) {
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


// // CHUNK {
// //   model_request: {
// //     messages: [
// //       AIMessage {
// //         "id": "bcfe2348-d3f1-4229-b997-70526af97e3c",
// //         "content": [
// //           {
// //             "type": "functionCall",
// //             "functionCall": {
// //               "name": "sum",
// //               "args": "[Object]"
// //             }
// //           }
// //         ],
// //         "name": "model",
// //         "additional_kwargs": {
// //           "finishReason": "STOP",
// //           "index": 0,
// //           "finishMessage": "Model generated function call(s).",
// //           "__gemini_function_call_thought_signatures__": {}
// //         },
// //         "response_metadata": {
// //           "tokenUsage": {
// //             "promptTokens": 177,
// //             "completionTokens": 18,
// //             "totalTokens": 195
// //           },
// //           "finishReason": "STOP",
// //           "index": 0,
// //           "finishMessage": "Model generated function call(s)."
// //         },
// //         "tool_calls": [
// //           {
// //             "type": "tool_call",
// //             "id": "d80c007f-4c11-49ef-a8fe-55239d406d7a",
// //             "name": "sum",
// //             "args": {
// //               "m": 4,
// //               "n": 3
// //             }
// //           }
// //         ],
// //         "invalid_tool_calls": [],
// //         "usage_metadata": {
// //           "input_tokens": 177,
// //           "output_tokens": 18,
// //           "total_tokens": 195
// //         }
// //       }
// //     ]
// //   }
// // }



// // [EVENT-STREAM] : ReadableStream { locked: false, state: 'readable', supportsBYOB: false }

// // CHUNK : {
// //   tools: {
// //     messages: [
// //       ToolMessage {
// //         "id": "10a6d531-ed32-4c33-85e8-8342deac17b8",
// //         "content": "SUM OF NUMBERS IS 7",
// //         "name": "sum",
// //         "additional_kwargs": {},
// //         "response_metadata": {},
// //         "tool_call_id": "f114d30b-f952-4b57-83a6-79270453484f"
// //       }
// //     ]
// //   }
// // }