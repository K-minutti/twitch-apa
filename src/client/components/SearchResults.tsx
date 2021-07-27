import React from "react";
import {
  Track,
  TracksResponse,
  EmptySearchResults,
} from "../controllers/types";

type Props = {
  resultItems: TracksResponse | EmptySearchResults;
  setTrack: (track: Track) => void;
};

// Convert Material ui display card , nicely styled passin function to set track as current track
//searchResults["items"]
const SearchResults: React.FC<Props> = ({ resultItems, setTrack }) => {
  return (
    <div>
      {resultItems &&
        resultItems["items"].map((track: Track) => {
          return (
            <div key={track.id}>
              <img
                src={track.album.images[1].url}
                height="150px"
                width="150px"
              />
              <h4>{track.name}</h4>
              <h5>{track.artists[0].name}</h5>
              <button onClick={() => setTrack(track)}>Play</button>
            </div>
          );
        })}
    </div>
  );
};

export default SearchResults;
