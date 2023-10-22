export interface ChatGptDtoRequest {
    role: string;
    content: string;
}
export interface ChatGPTDtoResponse {
    choices: Choice[];
    created: number;
    id:      string;
    model:   string;
    object:  string;
    usage:   Usage;
    error?: errorGptResponse;
}

export interface Choice {
    finish_reason: string;
    index:         number;
    message:       Message;
}

export interface Message {
    content: string;
    role:    string;
}

export interface Usage {
    completion_tokens: number;
    prompt_tokens:     number;
    total_tokens:      number;
}

export interface errorGptResponse{
    error: errorMessage;
}

export interface errorMessage{
    code: string;
    message: string;
    param: any;
    type: string;
}
