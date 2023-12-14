import { instance } from "../instance/instance";

interface CommentData {}
export const createComment = async (commentData: CommentData) => {
  const { data } = await instance.post(`/comment`, commentData);
  console.log(data);
  return data;
};

export const getComments = async (productId: number) => {
  const { data } = await instance.get(`/comment/${productId}`);
  console.log(data);
  return data;
};

export const deleteComment = async (commentId: number) => {
  const { data } = await instance.delete(`/comment/${commentId}`);
  console.log(data);
  return data;
};
