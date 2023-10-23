import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
});

const res = await  model.call([
    new HumanMessage(
        "Translate this sentence from English to Afrikaans. I love programming."
        ),
]);

console.log(res);