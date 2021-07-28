import axios from "axios";
import { TracksResponse, EmptySearchResults } from "./types";

export const getSpotifySearchResults = (
  query: string
): Promise<TracksResponse | EmptySearchResults> => {
  return axios
    .get(`/api/search/${query}`)
    .then((response) => {
      return response.data["tracks"];
    })
    .catch(() => {
      return { items: [] };
    });
};
