import axios from "axios";
import { AuthenticationResponse } from "./types/controllers";

export const isLoggedIn = async (): Promise<boolean> => {
  return axios
    .get<AuthenticationResponse>("/auth")
    .then((response) => response.data["authorized"]);
};
