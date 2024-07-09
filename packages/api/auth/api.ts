import { instance } from "../instance/instance";
import Cookies from "js-cookie";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (loginData: LoginData): Promise<string> => {
  const { data } = await instance.post(`/login`, loginData);

  Cookies.set("token", data);

  return data;
};

export const loginCheck = async (): Promise<boolean> => {
  const token = localStorage.getItem("token");

  if (token) {
    console.log("로그인 상태");
    return true;
  } else {
    console.log("미로그인 상태");
    return false;
  }
};
