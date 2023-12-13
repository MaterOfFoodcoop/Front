export interface Question{
    id: number;
    title: string;
    createdDate: string;
    Answer: Answer;
    content: string;
}

export interface Answer{
    id: number;
    content: string;
}

