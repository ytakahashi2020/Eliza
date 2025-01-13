# 0 Preparation

### 1 get openAI api key

(other AI api key is ok (For example OpenRouter))

### 2 node version is 23

# 1 prepare for the character

### 1 git clone

`git clone https://github.com/ai16z/eliza.git`

in this lesson, I use this repository

### 2 install

`pnpm install --no-frozen-lockfile`

`https://github.com/ytakahashi2020/eliza_temp`

### 3 set .env information

`OPENAI_API_KEY`

### 4 create a simple character

# 2 create the simple action

### 1 create the action outline

`export const cheerUp: Action ={}`

`import { Action } from "@elizaos/core";`

### 2 create easy fields

#### 1 name

```
name: "CHEER_UP",
```

#### 2 name

```
similes: ["GIVE_ENCOURAGEMENT", "MOTIVATE"],
```

#### 3 description

```
description: "Responds with short message like Fight!!! Yuki!!",
```

#### 4 examples

```
examples: [
    [
        {
            user: "{{user1}}",
            content: { text: "My name is Yuki. Cheer me up" },
        },
        {
            user: "{{agent}}",
            content: { text: "Fight!!! Yuki!!", action: "CHEER_UP" },
        },
    ],
]
```

### 3 create a validator field

In this lesson, pass all

```
validate: async (\_runtime: IAgentRuntime, \_message: Memory) => {
    return true;
},
```

### 4 create a handler

#### 1 create an outline

`handler: async (runtime: IAgentRuntime, message: Memory) => {}`

#### 2 get a text from the message

`const text = message.content.text;`

#### 3 create a simple logic

```
const trimmedText = text.replace(/^My name is\s\*/i, "");
const finalResponse = `Fight!!! ${trimmedText}`;
```

#### 4 return

```
return {
user: "agent",
content: { text: finalResponse },
action: "CHEER_UP"
};
```

# 3 set to index.ts

### 1 import

`import { cheerUp } from "./simpleAction.ts";`

### 2 set to actions

`actions: [cheerUp],`

# 4 start the agent

### 1 build

`pnpm build`

### 2 Start the agent

`pnpm start --character="characters/yuki.character.json"`

### 3 start client

`pnpm start:client`

```

```
