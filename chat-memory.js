import { ChatOpenAI } from "langchain/chat_models/openai";
import { 
    SystemMessagePromptTemplate, 
    HumanMessagePromptTemplate, 
    ChatPromptTemplate,
    MessagesPlaceholder
} from "langchain/prompts";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";

import * as dotenv from "dotenv";
dotenv.config();

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
        "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know."
    ),
    new MessagesPlaceholder(
        "history"
    ),
    HumanMessagePromptTemplate.fromTemplate(
        "{input}"
    ),
]);

const model = new ChatOpenAI({});

const chain = new ConversationChain(
    {
        memory: new BufferMemory({
            returnMessages: true,
            memoryKey: "history", // this matches the parameter passed to MessagesPlaceholder
        }),
        prompt: chatPrompt,
        llm: model,
    }
);

const res = await chain.call({
    input: "Hell from South Africa!",
});

console.log(res);

const res2 = await chain.call({
    input: "Do you know I am right now?",
});

console.log(res2);