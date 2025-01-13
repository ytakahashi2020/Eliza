import {
  type Action,
  IAgentRuntime,
  Memory,
  ActionExample,
} from "@elizaos/core";

export const cheerUp: Action = {
  name: CHEER_UP,
  similes: ["GIVE_ENCOURAGEMENT", "MOTIVATE"],
  validate: async (_runtime: IAgentRuntime, _message: Memory) => {
    return true; //return isCreateAndBuyContent(runtime, message.content);
  },
  description: "Responds with short message like Fight!!! Yuki!!",
  handler: async (runtime: IAgentRuntime, message: Memory) => {
    // 返すメッセージ

    const text = message.content.text;
    const trimmedText = text.replace(/^My name is\s*/i, "");

    // responseに結合
    const finalResponse = `Fight!!! ${trimmedText}`;

    // メッセージとして返す
    return {
      user: "Agent", // エージェントが送る
      content: { text: finalResponse },
      action: "CHEER_UP", // アクション名を指定
    };
  },

  examples: [
    [
      {
        user: "{{user1}}", // ユーザー1のメッセージ
        content: { text: "My name is Yuki. Cheer me up" }, // 例えば、「元気をください！」というメッセージ
      },
      {
        user: "{{agent}}", // エージェントの返答
        content: { text: "Fight!!! Yuki!!", action: "CHEER_UP" }, // 「Fight!!!」を返す
      },
    ],
    [
      {
        user: "{{user1}}", // ユーザー1のメッセージ
        content: { text: "My name is Taro. Cheer me up " }, // 例えば、「元気をください！」というメッセージ
      },
      {
        user: "{{agent}}", // エージェントの返答
        content: { text: "Fight!!! Taro!!", action: "CHEER_UP" }, // 「Fight!!!」を返す
      },
    ],
    [
      {
        user: "{{user1}}", // ユーザー1のメッセージ
        content: { text: "My name is Hanako. Cheer me up" }, // 例えば、「元気をください！」というメッセージ
      },
      {
        user: "{{agent}}", // エージェントの返答
        content: { text: "Fight!!! Hanako!!", action: "CHEER_UP" }, // 「Fight!!!」を返す
      },
    ],
    [
      {
        user: "{{user1}}", // ユーザー1のメッセージ
        content: { text: "My name is Haruko.Cheer me up" }, // 例えば、「元気をください！」というメッセージ
      },
      {
        user: "{{agent}}", // エージェントの返答
        content: { text: "Fight!!! Haruko!!", action: "CHEER_UP" }, // 「Fight!!!」を返す
      },
    ],
    [
      {
        user: "{{user1}}", // ユーザー1のメッセージ
        content: { text: "My name is Kaede.Cheer me up" }, // 例えば、「元気をください！」というメッセージ
      },
      {
        user: "{{agent}}", // エージェントの返答
        content: { text: "Fight!!! Kaede!!", action: "CHEER_UP" }, // 「Fight!!!」を返す
      },
    ],
    [
      {
        user: "{{user1}}", // ユーザー1のメッセージ
        content: { text: "My name is Gori.Cheer me up" }, // 例えば、「元気をください！」というメッセージ
      },
      {
        user: "{{agent}}", // エージェントの返答
        content: { text: "Fight!!! Gori!!", action: "CHEER_UP" }, // 「Fight!!!」を返す
      },
    ],
    [
      {
        user: "{{user1}}", // ユーザー1のメッセージ
        content: { text: "My name is Ryota.Cheer me up" }, // 例えば、「元気をください！」というメッセージ
      },
      {
        user: "{{agent}}", // エージェントの返答
        content: { text: "Fight!!! Ryota!!", action: "CHEER_UP" }, // 「Fight!!!」を返す
      },
    ],
    [
      {
        user: "{{user1}}", // ユーザー1のメッセージ
        content: { text: "My name is Haruko.Cheer me up" }, // 例えば、「元気をください！」というメッセージ
      },
      {
        user: "{{agent}}", // エージェントの返答
        content: { text: "Fight!!! Haruko!!", action: "CHEER_UP" }, // 「Fight!!!」を返す
      },
    ],
  ] as ActionExample[][],
} as Action;
