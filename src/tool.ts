import { Type, type FunctionDeclaration } from "@google/genai";

export const calculateSum = (firstNumber: number, secondNumber: number) => {
    return `SUM OF ${firstNumber} AND ${secondNumber} IS ${firstNumber + secondNumber}`
}

export const calculateProduct = (resultfromsum: number) => {
    return `PRODUCT IS ${resultfromsum * 2}`
}

export const calculateExponent = (resultfromPRODUCT: number) => {
    return `FINAL RESULT IS ${resultfromPRODUCT * resultfromPRODUCT}`
}

export const sumOfTwoNumber: FunctionDeclaration = {
    name: "sum",
    description: "it adds the two numbers, for example - lets take first number be 3 and second number be 7 this tool adds 3 and 7 the result will be 10",
    parameters: {
        type: Type.OBJECT,
        properties: {
            firstNumber: {
                type: Type.NUMBER,
                description: "this is the first number"
            },
            secondNumber: {
                type: Type.NUMBER,
                description: "this is the first number"
            }
        },
        required: ["firstNumber", "secondNumber"],
    },
};

export const productOfNumber: FunctionDeclaration = {
    name: "product",
    description: "it multiplies the number with 2, for example - lets take the number be 3 so after multipling the result will be 6",
    parameters: {
        type: Type.OBJECT,
        properties: {
            resultfromsum: {
                type: Type.NUMBER,
                description: "this is the result from the sumOfTwoNumber function"
            },
        },
        required: ["resultfromsum"],
    },
};

export const exponentOfNumber: FunctionDeclaration = {
    name: "exponent",
    description: "it raise the power of number with 2, for example - lets take the number be 3 so after raising it power with 2 the result will be 9 ",
    parameters: {
        type: Type.OBJECT,
        properties: {
            resultfromPRODUCT: {
                type: Type.NUMBER,
                description: "this is the result from the resultfromPRODUCT function"
            },
        },
        required: ["resultfromPRODUCT"],
    },
};
