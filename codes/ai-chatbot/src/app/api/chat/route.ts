import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText, UIMessage } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const lmStudio = createOpenAICompatible({
  name: "lmstudio",
  // Paste this URL from LM Studio console - it could be starting with 192.168.*.* or it could be 172.*.*.*
  baseURL: "http://172.20.10.2:1234/v1",
});
const modelId = "gemma-3-4b-it";
const model = lmStudio(modelId);

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model,
    system:
      "You are a helpful assistant. Who can sing along to the song i want it that way.",
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
