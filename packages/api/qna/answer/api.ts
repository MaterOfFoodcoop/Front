import { instance } from "../../instance/instance";
import Cookies from "js-cookie";

export const postAnswer = async ({ content, questionId }) => {
  const token = Cookies.get("token");

  const response = await instance.post(
    "/qna/answer",
    { content, questionId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
