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