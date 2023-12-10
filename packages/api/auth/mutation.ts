import { useMutation } from "react-query";
import { login } from "./api";

interface LoginData {
  email: string;
  password: string;
}

export const useLoginMutation = (loginUserData: LoginData) => {
  return useMutation(() => login(loginUserData), {
    onSuccess: () => {
      alert("로그인 성공");
    },
    onError: () => {
      alert("로그인 실패");
    },
  });
};
