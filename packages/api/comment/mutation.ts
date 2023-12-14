import { useMutation } from "react-query";
import { CommentData, createComment } from "./api";

export const useCommentMutation = (commentData: CommentData) => {
  return useMutation(() => createComment(commentData), {
    onSuccess: () => {
      alert("댓글 등록 성공");
    },
    onError: () => {
      alert("댓글 등록 실패");
    },
  });
};
