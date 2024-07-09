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
    onSuccess: (d) => {
      alert("로그인 성공");
      console.log("ㅎ히히히히", d);
      // localStorage.setItem();
      setIsLoggedIn(true);
    },
    onError: () => {
      alert("로그인 실패");
    },
  });
};
