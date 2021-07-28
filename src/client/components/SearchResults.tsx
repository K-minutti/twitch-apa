import React from "react";
import TrackCard from "./TrackCard";
import {
  Track,
  TracksResponse,
  EmptySearchResults,
} from "../controllers/types";
import { useStyles } from "./styles/SearchResults.styles";

type Props = {
  resultItems: TracksResponse | EmptySearchResults;
  setTrack: (track: Track) => void;
};

const SearchResults: React.FC<Props> = ({ resultItems, setTrack }) => {
  const classes = useStyles();
  return (
    <div className={classes.searchResultsContainer}>
      {resultItems &&
        resultItems["items"].map((track: Track) => {
          return <TrackCard track={track} setTrack={setTrack} />;
        })}
    </div>
  );
};

export default SearchResults;
