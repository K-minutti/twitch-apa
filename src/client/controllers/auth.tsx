import axios from "axios";

type AuthResponse = {
  authorized: boolean;
};

export const isLoggedIn = async (): Promise<boolean> => {
  return axios
    .get<AuthResponse>("/auth")
    .then((response) => response.data["authorized"]);
};
