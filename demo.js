import {OpenAI } from 'langchain/llms/openai';

require('dotenv').config()

const model = new OpenAI({
    openAIApiKey: "",
    temperature: 0.9,
})