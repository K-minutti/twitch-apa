import axios from "axios";
import { TracksResponse, EmptySearchResults } from "./types";
import { CookiesParam } from "./auth";

export const getSpotifySearchResults = (
  query: string
): Promise<TracksResponse | EmptySearchResults> => {
  const servicesURL: string = "https://api.spotify.com/v1/";
  const accessTokenArray: CookiesParam =
    document.cookie.match(/token=([^;]*).*$/);
  const accessToken: unknown = accessTokenArray ? accessTokenArray[1] : null;

  return axios({
    url: servicesURL + "search?",
    method: "GET",
    headers: { Authorization: "Bearer" + " " + accessToken },
    params: {
      query: query,
      type: "track",
      market: "from_token",
      limit: "50",
    },
  })
    .then((response) => response.data["tracks"])
    .catch(() => {
      return { items: [] };
    });
};
