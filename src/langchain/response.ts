// PS C:\Users\OWNER\Desktop\proj\toolcalling> npm run dev

// > toolcalling@1.0.0 dev
// > tsx src/langchain/index.ts

// 1
// 2
// 3
// chunk : {
//   model_request: {
//     messages: [
//       AIMessage {
//         "id": "90f74d87-1cbf-4c6b-b98a-05495b894921",
//         "content": [
//           {
//             "type": "functionCall",
//             "functionCall": {
//               "name": "sum",
//               "args": "[Object]"
//             }
//           }
//         ],
//         "name": "model",
//         "additional_kwargs": {
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s).",
//           "__gemini_function_call_thought_signatures__": {}
//         },
//         "response_metadata": {
//           "tokenUsage": {
//             "promptTokens": 254,
//             "completionTokens": 18,
//             "totalTokens": 272
//           },
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s)."
//         },
//         "tool_calls": [
//           {
//             "type": "tool_call",
//             "id": "5ef5eb04-746d-49a4-bf12-6ca868666f5d",
//             "name": "sum",
//             "args": {
//               "n": 3,
//               "m": 4
//             }
//           }
//         ],
//         "invalid_tool_calls": [],
//         "usage_metadata": {
//           "input_tokens": 254,
//           "output_tokens": 18,
//           "total_tokens": 272
//         }
//       }
//     ]
//   }
// }
// MODEL REQUESTING TO USE THIS TOOL -
// TOOL-NAME : sum
// TOOL-ARGS : { n: 3, m: 4 }


// chunk : {
//   tools: {
//     messages: [
//       ToolMessage {
//         "id": "fc41bb75-7aac-47fc-ba26-7a4263171362",
//         "content": "SUM OF NUMBERS IS 7",
//         "name": "sum",
//         "additional_kwargs": {},
//         "response_metadata": {},
//         "tool_call_id": "5ef5eb04-746d-49a4-bf12-6ca868666f5d"
//       }
//     ]
//   }
// }
// RUNNING TOOL ...
// TOOL : sum
// RESPONSE : SUM OF NUMBERS IS 7


// chunk : {
//   model_request: {
//     messages: [
//       AIMessage {
//         "id": "54017b4a-da91-455c-9fe8-a055f3aa91b7",
//         "content": [
//           {
//             "type": "functionCall",
//             "functionCall": {
//               "name": "product",
//               "args": "[Object]"
//             }
//           }
//         ],
//         "name": "model",
//         "additional_kwargs": {
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s).",
//           "__gemini_function_call_thought_signatures__": {}
//         },
//         "response_metadata": {
//           "tokenUsage": {
//             "promptTokens": 291,
//             "completionTokens": 16,
//             "totalTokens": 307
//           },
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s)."
//         },
//         "tool_calls": [
//           {
//             "type": "tool_call",
//             "id": "ca0586af-f2df-447e-8400-9b227908d84d",
//             "name": "product",
//             "args": {
//               "resultFromSumTool": 7
//             }
//           }
//         ],
//         "invalid_tool_calls": [],
//         "usage_metadata": {
//           "input_tokens": 291,
//           "output_tokens": 16,
//           "total_tokens": 307
//         }
//       }
//     ]
//   }
// }
// MODEL REQUESTING TO USE THIS TOOL -
// TOOL-NAME : product
// TOOL-ARGS : { resultFromSumTool: 7 }


// chunk : {
//   tools: {
//     messages: [
//       ToolMessage {
//         "id": "867d57b1-f3b6-4ef4-9bed-8f4b70f1f658",
//         "content": "PRODUCT OF NUMBERS IS 14",
//         "name": "product",
//         "additional_kwargs": {},
//         "response_metadata": {},
//         "tool_call_id": "ca0586af-f2df-447e-8400-9b227908d84d"
//       }
//     ]
//   }
// }
// RUNNING TOOL ...
// TOOL : product
// RESPONSE : PRODUCT OF NUMBERS IS 14


// chunk : {
//   model_request: {
//     messages: [
//       AIMessage {
//         "id": "e6ac7af4-932b-4dc7-bfe0-36a71bfb464d",
//         "content": [
//           {
//             "type": "functionCall",
//             "functionCall": {
//               "name": "power",
//               "args": "[Object]"
//             }
//           }
//         ],
//         "name": "model",
//         "additional_kwargs": {
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s).",
//           "__gemini_function_call_thought_signatures__": {}
//         },
//         "response_metadata": {
//           "tokenUsage": {
//             "promptTokens": 327,
//             "completionTokens": 17,
//             "totalTokens": 344
//           },
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s)."
//         },
//         "tool_calls": [
//           {
//             "type": "tool_call",
//             "id": "494e7aac-91b8-4ec6-9589-02883742c0c9",
//             "name": "power",
//             "args": {
//               "resultFromProductTool": 14
//             }
//           }
//         ],
//         "invalid_tool_calls": [],
//         "usage_metadata": {
//           "input_tokens": 327,
//           "output_tokens": 17,
//           "total_tokens": 344
//         }
//       }
//     ]
//   }
// }
// MODEL REQUESTING TO USE THIS TOOL -
// TOOL-NAME : power
// TOOL-ARGS : { resultFromProductTool: 14 }


// chunk : {
//   tools: {
//     messages: [
//       ToolMessage {
//         "id": "836f8a3e-5bec-4f3e-9896-ddde0f61a83a",
//         "content": "POWER OF NUMBERS IS 196",
//         "name": "power",
//         "additional_kwargs": {},
//         "response_metadata": {},
//         "tool_call_id": "494e7aac-91b8-4ec6-9589-02883742c0c9"
//       }
//     ]
//   }
// }
// RUNNING TOOL ...
// TOOL : power
// RESPONSE : POWER OF NUMBERS IS 196


// chunk : {
//   model_request: {
//     messages: [
//       HumanMessage {
//         "id": "24f07627-b62f-4e30-ba42-1e4cae18f253",
//         "content": "first calculate 3 + 4, then multiply the result by 2, then raise it to the power of 2",
//         "additional_kwargs": {},
//         "response_metadata": {}
//       },
//       AIMessage {
//         "id": "90f74d87-1cbf-4c6b-b98a-05495b894921",
//         "content": [
//           {
//             "type": "functionCall",
//             "functionCall": {
//               "name": "sum",
//               "args": "[Object]"
//             }
//           }
//         ],
//         "name": "model",
//         "additional_kwargs": {
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s).",
//           "__gemini_function_call_thought_signatures__": {}
//         },
//         "response_metadata": {
//           "tokenUsage": {
//             "promptTokens": 254,
//             "completionTokens": 18,
//             "totalTokens": 272
//           },
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s)."
//         },
//         "tool_calls": [
//           {
//             "type": "tool_call",
//             "id": "5ef5eb04-746d-49a4-bf12-6ca868666f5d",
//             "name": "sum",
//             "args": {
//               "n": 3,
//               "m": 4
//             }
//           }
//         ],
//         "invalid_tool_calls": [],
//         "usage_metadata": {
//           "input_tokens": 254,
//           "output_tokens": 18,
//           "total_tokens": 272
//         }
//       },
//       ToolMessage {
//         "id": "fc41bb75-7aac-47fc-ba26-7a4263171362",
//         "content": "SUM OF NUMBERS IS 7",
//         "name": "sum",
//         "additional_kwargs": {},
//         "response_metadata": {},
//         "tool_call_id": "5ef5eb04-746d-49a4-bf12-6ca868666f5d"
//       },
//       AIMessage {
//         "id": "54017b4a-da91-455c-9fe8-a055f3aa91b7",
//         "content": [
//           {
//             "type": "functionCall",
//             "functionCall": {
//               "name": "product",
//               "args": "[Object]"
//             }
//           }
//         ],
//         "name": "model",
//         "additional_kwargs": {
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s).",
//           "__gemini_function_call_thought_signatures__": {}
//         },
//         "response_metadata": {
//           "tokenUsage": {
//             "promptTokens": 291,
//             "completionTokens": 16,
//             "totalTokens": 307
//           },
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s)."
//         },
//         "tool_calls": [
//           {
//             "type": "tool_call",
//             "id": "ca0586af-f2df-447e-8400-9b227908d84d",
//             "name": "product",
//             "args": {
//               "resultFromSumTool": 7
//             }
//           }
//         ],
//         "invalid_tool_calls": [],
//         "usage_metadata": {
//           "input_tokens": 291,
//           "output_tokens": 16,
//           "total_tokens": 307
//         }
//       },
//       ToolMessage {
//         "id": "867d57b1-f3b6-4ef4-9bed-8f4b70f1f658",
//         "content": "PRODUCT OF NUMBERS IS 14",
//         "name": "product",
//         "additional_kwargs": {},
//         "response_metadata": {},
//         "tool_call_id": "ca0586af-f2df-447e-8400-9b227908d84d"
//       },
//       AIMessage {
//         "id": "e6ac7af4-932b-4dc7-bfe0-36a71bfb464d",
//         "content": [
//           {
//             "type": "functionCall",
//             "functionCall": {
//               "name": "power",
//               "args": "[Object]"
//             }
//           }
//         ],
//         "name": "model",
//         "additional_kwargs": {
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s).",
//           "__gemini_function_call_thought_signatures__": {}
//         },
//         "response_metadata": {
//           "tokenUsage": {
//             "promptTokens": 327,
//             "completionTokens": 17,
//             "totalTokens": 344
//           },
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s)."
//         },
//         "tool_calls": [
//           {
//             "type": "tool_call",
//             "id": "494e7aac-91b8-4ec6-9589-02883742c0c9",
//             "name": "power",
//             "args": {
//               "resultFromProductTool": 14
//             }
//           }
//         ],
//         "invalid_tool_calls": [],
//         "usage_metadata": {
//           "input_tokens": 327,
//           "output_tokens": 17,
//           "total_tokens": 344
//         }
//       },
//       ToolMessage {
//         "id": "836f8a3e-5bec-4f3e-9896-ddde0f61a83a",
//         "content": "POWER OF NUMBERS IS 196",
//         "name": "power",
//         "additional_kwargs": {},
//         "response_metadata": {},
//         "tool_call_id": "494e7aac-91b8-4ec6-9589-02883742c0c9"
//       },
//       AIMessage {
//         "id": "ddf1e54e-1ada-47be-83f6-4b617fa306ed",
//         "content": [
//           {
//             "type": "functionCall",
//             "functionCall": {
//               "name": "extract-1",
//               "args": "[Object]"
//             }
//           }
//         ],
//         "additional_kwargs": {
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s).",
//           "__gemini_function_call_thought_signatures__": {}
//         },
//         "response_metadata": {
//           "tokenUsage": {
//             "promptTokens": 365,
//             "completionTokens": 25,
//             "totalTokens": 390
//           },
//           "finishReason": "STOP",
//           "index": 0,
//           "finishMessage": "Model generated function call(s)."
//         },
//         "tool_calls": [
//           {
//             "type": "tool_call",
//             "id": "90e84239-d165-4f4a-ae16-d07ed3c691c7",
//             "name": "extract-1",
//             "args": {
//               "noOfToolCall": true,
//               "finalAns": "196"
//             }
//           }
//         ],
//         "invalid_tool_calls": [],
//         "usage_metadata": {
//           "input_tokens": 365,
//           "output_tokens": 25,
//           "total_tokens": 390
//         }
//       },
//       ToolMessage {
//         "id": "b8a8ccac-d285-4c0c-9ce8-0acf07dfd108",
//         "content": "{\"noOfToolCall\":true,\"finalAns\":\"196\"}",
//         "name": "extract-1",
//         "additional_kwargs": {},
//         "response_metadata": {},
//         "tool_call_id": "90e84239-d165-4f4a-ae16-d07ed3c691c7"
//       },
//       AIMessage {
//         "id": "239ba126-180e-4900-b96a-5179db2eccf9",
//         "content": "Returning structured response: {\"noOfToolCall\":true,\"finalAns\":\"196\"}",
//         "additional_kwargs": {},
//         "response_metadata": {},
//         "tool_calls": [],
//         "invalid_tool_calls": []
//       }
//     ],
//     structuredResponse: { noOfToolCall: true, finalAns: '196' }
//   }
// }
// PS C:\Users\OWNER\Desktop\proj\toolcalling>
