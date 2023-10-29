import * as dotenv from "dotenv";
dotenv.config();

import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { initializeAgentExecutorWithOptions } from "langchain/agents";

//initiate a new OpenAI model
const model = new OpenAI({
    temperature: 0
});

//set tools to create a new instance of SerpAPI to surf the internet
const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
        hl: 'en',
        gl: "us",
    }),
    new Calculator(),
];


const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: true,
})
console.log("loaded the agent...");

//call api with a prompt
const res = await executor.call({
    input: "Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?"
});

//log the response
console.log(res.output);