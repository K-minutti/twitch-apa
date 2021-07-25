import { Credentials } from "./spotifyCredentials";
import { Buffer } from "buffer";
import axios from "axios";

export class SpotifyApiWrapper {
  clientId: string = "";
  clientSecret: string = "";
  redirectURI: string = "";
  scopes: string = "";
  tokenType: string = "";
  accessToken: string = "";
  refreshToken: string = "";
  expiresIn: number = 0;
  accountURL: string = "https://accounts.spotify.com/";
  servicesURL: string = "https://api.spotify.com/v1/";

  constructor(credentials: Credentials) {
    this.clientId = credentials.clientId;
    this.clientSecret = credentials.clientSecret;
    this.redirectURI = credentials.redirectURI;
    this.scopes = credentials.scopes;
  }

  getAuthorizeURL(): string {
    return (
      this.accountURL +
      "authorize" +
      "?response_type=code" +
      "&client_id=" +
      this.clientId +
      "&scope=" +
      encodeURIComponent(this.scopes) +
      "&redirect_uri=" +
      encodeURIComponent(this.redirectURI)
    );
  }

  getAccessToken(code: string): void {
    axios({
      url: this.accountURL + "api/token",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: this.redirectURI,
        client_id: this.clientId,
        client_secret: this.clientSecret,
      },
    })
      .then((response) => {
        this.accessToken = response.data["access_token"];
        this.refreshToken = response.data["refresh_token"];
        this.expiresIn = response.data["expires_in"];
        this.tokenType = response.data["token_type"];
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  refreshAccessToken(): void {
    axios({
      url: this.accountURL + "api/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(this.clientId + ":" + this.clientSecret).toString(
            "base64"
          ),
      },
      params: {
        grant_type: "refresh_token",
        refresh_token: this.refreshToken,
      },
    })
      .then((response) => {
        this.accessToken = response.data["access_token"];
        this.refreshToken = response.data["refresh_token"];
        this.expiresIn = response.data["expires_in"];
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  isUserAuthorized(): boolean {
    const authorized: boolean =
      this.accessToken != "" && this.refreshToken != "" && this.expiresIn != 0;
    return authorized;
  }

  resetAccess(): void {
    this.accessToken = "";
    this.refreshToken = "";
    this.tokenType = "";
    this.expiresIn = 0;
  }
}
