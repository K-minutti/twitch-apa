import axios from "axios";

export type CookiesParam = RegExpMatchArray | null;

export const loginSuccessful = (): boolean => {
  const accessToken: CookiesParam = document.cookie.match(/token=([^;]*).*$/);
  return accessToken ? true : false;
};

export const refreshTokens = (): void => {
  const refreshTokenArray: CookiesParam =
    document.cookie.match(/refresh=([^;]*).*$/);
  if (refreshTokenArray) {
    const refreshToken: string = refreshTokenArray[1];
    axios
      .get("/refresh?refreshToken=" + refreshToken)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
