import React from "react";
import TrackCard from "./TrackCard";
import Grid from "@material-ui/core/Grid";
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
    <Grid container className={classes.searchResultsContainer}>
      {resultItems &&
        resultItems["items"].map((track: Track) => {
          return <TrackCard key={track.id} track={track} setTrack={setTrack} />;
        })}
    </Grid>
  );
};

export default SearchResults;
