import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    streaming: true,
    callbacks: [
        {
            handleLLMNewToken(token){
                process.stdout.write(token)
            }
        }
    ]
});

await model.call([
    new HumanMessage("write a song about communist hockey players.")
]);