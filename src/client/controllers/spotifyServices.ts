import axios from "axios";
import { TracksResponse, EmptySearchResults } from "./types";

export const getSpotifySearchResults = (
  query: string,
  token: string
): Promise<TracksResponse | EmptySearchResults> => {
  const servicesURL: string = "https://api.spotify.com/v1/";
  return axios({
    url: servicesURL + `search?q=${query}`,
    method: "GET",
    headers: { Authorization: "Bearer" + " " + token },
    params: {
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
