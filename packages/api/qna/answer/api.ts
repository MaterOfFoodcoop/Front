import { instance } from "../../instance/instance";

export const postAnswer = async ({ content, questionId }) => {
    const response = await instance.post('/qna/answer', { content, questionId }, {
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiIwIiwiaWF0IjoxNzAyNDc1Njg0LCJleHAiOjE3MDI4MzU2ODR9.LF_zLUg36jorKfkGrdIFTOgF64naMk9ZBmAJMzCBWFU`
    }});
    return response.data;
};