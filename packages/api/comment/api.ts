import { instance } from "../instance/instance";

export interface CommentData {
  content: string;
  productId: number;
}

export const createComment = async (commentData: CommentData) => {
  const { data } = await instance.post(`/comment`, commentData);
  return data;
};

export const getComments = async (productId: number) => {
  const { data } = await instance.get(`/comment/${productId}`);
  return data;
};

export const deleteComment = async (commentId: number) => {
  const { data } = await instance.delete(`/comment/${commentId}`);
  console.log(data);
  return data;
};
