import axios from "axios";

type tracksResponse = {
  href: string;
  items: any[];
  limit: number;
  next: string;
  offset: number;
  pervious: null | string;
  total: number;
};

type searchResults = {
  tracks: tracksResponse;
};

export class SpotifyServices {
  servicesURL: string = "https://api.spotify.com/v1/";

  getUser(authorizatonParameter: string): string {
    return "Josh";
  }

  // 50 is max limit per spotify
  search(
    authorizatonParameter: string,
    queryParamters: string
  ): Promise<searchResults> {
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
