import {OpenAI } from 'langchain/llms/openai';

const model = new OpenAI({
    openAIApiKey: "";
    temperature: 0.9,
})