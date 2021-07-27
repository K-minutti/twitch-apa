import axios from "axios";
import { AuthenticationResponse } from "./types";

export const isLoggedIn = async (): Promise<boolean> => {
  return axios
    .get<AuthenticationResponse>("/auth")
    .then((response) => response.data["authorized"]);
};
