// PS C:\Users\OWNER\Desktop\proj\toolcalling> npm run dev

// > toolcalling@1.0.0 dev
// > tsx src/index.ts

// res.functionCalls[0].name : sum
// res.functionCalls[0].ARG : { firstNumber: 3, secondNumber: 4 }
// CALLING SUM TOOL ...
// toolcallResult : SUM OF 3 AND 4 IS 7
// res.candidates[0].content : {
//   parts: [
//     {
//       functionCall: [Object],
//       thoughtSignature: 'CugHAQw51sehIo6KndwQD6tTeVDw0cEj7VGqcHnatDQMCVwl++Gz060592ZrXtI/Xy67cgfn8voG3Qz56q08xEatz/qhWYwzHQn7mJoxMTx0mHBPj1V5ifXvR0Zv8/3XDKhkPKwFG+htZbsuKUCYoZBr0OhaBqTcJA2uEQFJ3U/jJ4jSuTgDhdXSwX6sisrtaB3Pb37I1k7rsigJy9PDc6M0nspfeP6IzU443elc/H/awfm+1sSlDD/bxlRplknAO+k/onkNjJitY0zEPM4qMeqtE8459lTcdGaa3DU67aVIVmlbFpzbuIL2tqu2R4HSOb58fL5gKfAWmwYPPWkmfAaK15TEhFKSiVe74hlMPl1M6Q+eHhoL9fT9r1JqqHRdCln88yZqahkC6OhZeLaKWasoP1n7Xnd+crNWeawq7o8Nhp7TVuoD/j+5hl+Ciln+CE89s7e/AufoqZ4Nup7wJtK8D0izOc/gPaqee6972I/r2d6c6hdK6DSEc2d9J57N329jnH/Zsgtbv9HE+qlJsD5F8EHJ63k24ks1X/YoNw+qA4XF/0K7KPqYaODkSEYkTDxbbOSyZrwXQLwOBJ2S3Kog5EWtAZvjPsfpRQPkiKdo5JIrv3TS3EiJEoehtqHQNDX1N+QJBLxRlbJ9DAnCd9PFhsSU3fAkn0x52YE+pgwhfc8oGGZcGIqOkzB00EFJiU166pKdFcfS7eDAwjmcOGNVTtHNYwNVR8dvi1dOo2G49UDGujH8x1g/cgREp6TXW3PgIHh7VSwbdIfEoPoEe63ofO71y5d5tn7IBd7dHpFzb+EkOCmnElxg59v/020nCnPlzozjdDJPGtRxGLQr7hUZYrwRrvZVzW9KG0Bg5/jNtT2ywP7WGLFwjxxO5/i0xnJTckoBvWAAQZ5YHA0pwGOZ1muMeCBvgsDG7FgH+1A1ltYnfwIdxJBoUIe8INwDbEBx1OOmXrIUAPKOqHFHw6NsowSPFb6GKdF3wuniAg7/5fMtwLGL3zeCxPiL9TMlftgml+UAOF4KQN0W7J98a6e2L4NpB83b+3y31bHK0y2ecQA3eHGh06C39aXxH99vDDUbX18XvlvnjAxb6RSIKCuXcxalZstuBt8Tc9nRJhIDJhTxuJJ/IJ3Q3HnLWxHjYkcdUDejrhevMETji/2ZZVnBXrQ2qDDNFjrupdRKzsIeCndGUqdkWDTFyOAs1xZB7p6zfPof2qedJobrZorGfAR6BZajd9q1oDNcUVVbEyUMLBBu0QbCeDgqXsLXcnz5wNDp9viIJse7cau+15dnFH9BQ9GxKbXEoVhdvywkzNjug0B9iH4MmIEJeg=='
//     }
//   ],
//   role: 'model'
// }
// THIS CONTENT WE ARE PASSING TO MODEL FOR FINAL RESPONCE: [
//   { role: 'user', parts: [ [Object] ] },
//   { parts: [ [Object] ], role: 'model' },
//   { role: 'user', parts: [ [Object] ] }
// ]
// CALLING MODEL (SUM) ...
// PUSHING RESULT 2 ...
// res.functionCalls[0].name : product
// res.functionCalls[0].ARG : { resultfromsum: 7 }
// CALLING PRODUCT TOOL ...
// toolcallResult PRODUCT IS 14
// res.candidates[0].content : {
//   parts: [
//     {
//       functionCall: [Object],
//       thoughtSignature: 'CvcBAQw51sflpxMntB87KYHS7Cf1CEIr4SRhrItyyP+yj1oZWju/KPxl34/p2go5lbUgeQAlCID4mwmWyX3NqOOpD6GzgzDQSA+/y79TGdkcQSlE1loXyH8R0FRKUnaGvs61mD+nyAr0AecJncmYifQft/cn9iFLjhV2XxnZhWyQTHF7tUpMw8QrsgHlOoNeZLQRcfibGWfni1rZUG90wZ/M/sJVniXmNvVzxPxYpZroZ0mZfiwvqWIf3oH1y29sISYv/bjNLkTVHJoz0HMqTsHy/JYa8sKagNHw3W127MAr9USqSfArfXgFqT8J62XOkYFtL4mq8VmhIw=='
//     }
//   ],
//   role: 'model'
// }
// THIS CONTENT WE ARE PASSING TO MODEL FOR FINAL RESPONCE: [
//   { role: 'user', parts: [ [Object] ] },
//   { parts: [ [Object] ], role: 'model' },
//   { role: 'user', parts: [ [Object] ] },
//   { parts: [ [Object] ], role: 'model' },
//   { role: 'user', parts: [ [Object] ] }
// ]
// CALLING MODEL (PRODUCT) ...
// PUSHING RESULT 3 ...
// res.functionCalls[0].name : exponent
// res.functionCalls[0].ARG : { resultfromPRODUCT: 14 }
// CALLING EXPONENT TOOL ...
// toolcallResult FINAL RESULT IS 196
// res.candidates[0].content : {
//   parts: [
//     {
//       functionCall: [Object],
//       thoughtSignature: 'CpcCAQw51sdOJdw4GBOQUc0b2wWBMyEUqOdklh6HZl2EUnpALmTY0POEiTFSTx3PElOPda9+0JZxVUcJEzQ8xhKZq33MR5+Er+GsBk657r3um+8tzzRzoh53ARpdAE/LgNrffBHiM5tC4NjToJ3UPZWWHHHkWs9zVGtgBLEkPLt/D2gDfzNriVHp5soT7XCKtTGh8OrJH6Rh+ntmYj+kwc2w+E0aiWbzbPP9Yc5Q4/awZc38LfwYKOAyzYnOoa5DTqVpdlFAUc4bFJpl1ZHMAwTWApk6LN2cV0LbK1JlJMvgk0ps87DIXZliGeyHXS9fDaKBgHRTi+R8c9kPotjge48OrTxHr9FhipU1UYaswExCq04HsETDHE6h'
//     }
//   ],
//   role: 'model'
// }
// THIS CONTENT WE ARE PASSING TO MODEL FOR FINAL RESPONCE: [
//   { role: 'user', parts: [ [Object] ] },
//   { parts: [ [Object] ], role: 'model' },
//   { role: 'user', parts: [ [Object] ] },
//   { parts: [ [Object] ], role: 'model' },
//   { role: 'user', parts: [ [Object] ] },
//   { parts: [ [Object] ], role: 'model' },
//   { role: 'user', parts: [ [Object] ] }
// ]
// CALLING MODEL (EXPONENT) ...
// PUSHING RESULT 4 ...
// DIRECT RESPONSE : The final answer is 196.