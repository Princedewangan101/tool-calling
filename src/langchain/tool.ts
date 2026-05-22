import { tool } from "langchain";
import * as z from 'zod';

export const sum = tool(
    async ({ n, m }) => { return `SUM OF NUMBERS IS ${n + m}` },
    {
        name: "sum",
        description: "it adds two numbers",
        schema: z.object({
            n: z.number().describe("first number for the sum"),
            m: z.number().describe("second number for the sum")
        })
    }
);

export const product = tool(
    async ({ resultFromSumTool }) => { return `PRODUCT OF NUMBERS IS ${resultFromSumTool * 2}` },
    {
        name: "product",
        description: "it multiplies the number from 2",
        schema: z.object({
            resultFromSumTool: z.number().describe("this is the number from the product"),
        })
    }
);

export const power = tool(
    async ({ resultFromProductTool }) => { return `POWER OF NUMBERS IS ${resultFromProductTool * resultFromProductTool}` },
    {
        name: "power",
        description: "it raise to the power 2",
        schema: z.object({
            resultFromProductTool: z.number().describe("this is the number for power tool"),
        })
    }
);

