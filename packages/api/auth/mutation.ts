import { useMutation } from "react-query";
import { login } from "./api";
import { useContext } from "react";
import { UserContext } from "client/context/UserContext";
interface LoginData {
  email: string;
  password: string;
}

export const useLoginMutation = (loginUserData: LoginData) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return useMutation(() => login(loginUserData), {
    onSuccess: () => {
      alert("로그인 성공");
      setIsLoggedIn(true);
    },
    onError: () => {
      alert("로그인 실패");
    },
  });
};
