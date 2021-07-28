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

const SearchResults: React.FC<Props> = ({ resultItems, setTrack }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "112px",
        bottom: "96px",
        left: "0px",
        right: "0px",
        overflow: "auto",
        padding: "12px 0px",
        borderTop: "solid #212121 1px",
      }}
    >
      {resultItems &&
        resultItems["items"].map((track: Track) => {
          return (
            <div key={track.id}>
              <img
                src={track.album.images[1].url}
                height="135px"
                width="135px"
              />
              <h5>{track.name}</h5>
              <h6>{track.artists[0].name}</h6>
              <button onClick={() => setTrack(track)}>Play</button>
            </div>
          );
        })}
    </div>
  );
};

export default SearchResults;
