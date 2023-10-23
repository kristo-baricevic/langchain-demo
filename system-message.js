import { ChatOpenAI } from "langchain/chat_models/openai";
import { 
    SystemMessagePromptTemplate, 
    HumanMessagePromptTemplate, 
    ChatPromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import * as dotenv from "dotenv";
dotenv.config();

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
        "You are a helpful assistant that translates {input_language} to {output_language}."
    ),
    HumanMessagePromptTemplate.fromTemplate(
        "{text}"
    ),
]);

// const formattedPrompt = await translationPrompt.formatPromptValue({
//     input_language: "english",
//     output_language: "french",
//     text: "I love programming",
// });

const model = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
});

// const res = await model.generatePrompt([
//     formattedPrompt
// ]);

const chain = new LLMChain({
    prompt: translationPrompt,
    llm: model,
});

const res = await chain.call({
    input_language: "English",
    output_language: "French",
    text: "I love programming",
});

console.log(res);