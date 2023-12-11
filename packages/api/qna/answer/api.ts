import { instance } from "../../instance/instance";

export const postAnswer = async ({ answer, id }) => {
    const response = await instance.post('/api/answer', { answer, id });
    return response.data;
};