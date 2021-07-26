import axios from "axios";
import { SearchResults } from "./types/spotifyServices";

export class SpotifyServices {
  servicesURL: string = "https://api.spotify.com/v1/";

  getUser(authorizatonParameter: string): string {
    return "Josh";
  }

  // limit is 50 per spotify api
  search(
    authorizatonParameter: string,
    queryParamters: string
  ): Promise<SearchResults> {
    return axios({
      url: this.servicesURL + "search?",
      method: "GET",
      headers: { Authorization: authorizatonParameter },
      params: {
        query: queryParamters,
        type: "track",
        market: "from_token",
        limit: "40",
      },
    }).then((response) => response.data);
  }
}
