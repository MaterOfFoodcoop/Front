import { useMutation } from "react-query";
import { CommentData, createComment, deleteComment } from "./api";

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

export const useDeleteCommentMutation = (deleteCommentId: number) => {
  return useMutation(() => deleteComment(deleteCommentId), {
    onSuccess: () => {
      alert("댓글 삭제 성공");
    },
    onError: () => {
      alert("댓글 삭제 실패");
    },
  });
};
