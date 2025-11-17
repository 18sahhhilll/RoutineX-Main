// src/types/openrouter.ts
export type OpenRouterMessage = {
    role: 'system' | 'user' | 'assistant';
    content: string;
    name?: string;
  };
  
  export type OpenRouterCompletionParams = {
    model: string;
    messages: OpenRouterMessage[];
    parameters?: {
      temperature?: number;
      max_tokens?: number;
      top_p?: number;
      frequency_penalty?: number;
      presence_penalty?: number;
      stop?: string[];
      stream?: boolean;
    };
  };
  
  export type OpenRouterCompletionResponse = {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: {
      index: number;
      message: {
        role: string;
        content: string;
      };
      finish_reason: string;
    }[];
    usage: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
    };
  };