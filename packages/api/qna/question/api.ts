import { instance } from "../../instance/instance";

export const postQuestion = async ({ title, content }) => {
    const response = await instance.post(`qna/question`, {title, content});
    return response.data;
};