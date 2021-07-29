import { credentials } from "./spotifyCredentials";
import { Buffer } from "buffer";
import axios from "axios";

export class SpotifyApiWrapper {
  clientId: string = "";
  clientSecret: string = "";
  redirectURI: string = "";
  tokenType: string = "Brearer";
  scopes: string = "";
  accountURL: string = "https://accounts.spotify.com/";

  constructor() {
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

  getAccessToken(code: string): Promise<any> {
    return axios({
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
    });
  }

  refreshAccessToken(refreshToken: string): Promise<any> {
    return axios({
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
        refresh_token: refreshToken,
      },
    });
  }
}
