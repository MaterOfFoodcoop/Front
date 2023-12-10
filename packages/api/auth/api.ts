import { instance } from "../instance/instance";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (loginData: LoginData): Promise<string> => {
  const { data } = await instance.post(`/login`, loginData);
  console.log(data);
  localStorage.setItem("token", data.token);
  return data;
};
