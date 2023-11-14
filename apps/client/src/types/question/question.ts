export interface Question{
    id: number;
    title: string;
    createdDate: string;
    isAnswered: boolean;
    content: string;
}

export interface Answer{
    id: number;
    content: string;
}

