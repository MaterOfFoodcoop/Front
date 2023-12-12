import { instance } from "../instance/instance";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (loginData: LoginData): Promise<string> => {
  const { data } = await instance.post(`/login`, loginData);
  console.log(data);
  localStorage.setItem("token", data);
  return data;
};

export const loginCheck = async (): Promise<boolean> => {
  const token = localStorage.getItem("token");
  
  if (token) {
    console.log('로그인 상태');
    return true;
  } else {
    console.log('미로그인 상태');
    return false;
  }
};
