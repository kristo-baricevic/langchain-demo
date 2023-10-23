import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";

import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
});

// const res = await model.call([
//     new SystemMessage(
//         "You are a helpful assistant that translates English to Afrikaans."
//     ),
//     new HumanMessage(
//         "Translate this sentence from English to Afrikaans. I love programming."
//     ),
// ]);

const res = await  model.generate(
    [
        [
            new SystemMessage(
                "You are a helpful assistant that translates English to Afrikaans."
            ),
            new HumanMessage(
                "Translate this sentence from English to Afrikaans. I love programming."
            ),
        ],
        [
            new SystemMessage(
                "You are a helpful assistant that translates English to French."
            ),
            new HumanMessage(
                "Translate this sentence from English to French. I love programming."
            ),
        ],
    ]
);

console.log(res.generations);