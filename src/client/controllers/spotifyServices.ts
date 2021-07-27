import axios from "axios";
import { TracksResponse, EmptySearchResults } from "./types";

export const getSpotifySearchResults = (
  query: string
): Promise<TracksResponse | EmptySearchResults> => {
  return axios.get(`/api/search/${query}`).then((response) => {
    if (response.data.error) return { items: [] };
    return response.data["tracks"];
  });
};
