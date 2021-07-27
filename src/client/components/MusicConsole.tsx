import React, { useState, useEffect, useCallback } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { getSpotifySearchResults } from "../controllers/spotifyServices";
import { EmptySearchResults } from "../controllers/types";

const MusicConsole: React.FC = () => {
  const initialResultsState: EmptySearchResults = { items: [] };
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(initialResultsState);
  const [currentTrack, setCurrentTrack] = useState({ preview_url: "" });

  const searchSpotify = useCallback(
    (event) => setSearchQuery(event.target.value),
    []
  );

  const setTrack = useCallback((track) => {
    console.log("TRACK Played", track);
    setCurrentTrack(track);
  }, []);

  useEffect(() => {
    if (searchQuery != "") {
      getSpotifySearchResults(searchQuery).then(setSearchResults);
    }
  }, [searchQuery]);

  //useEffect on track change play track
  // <AudioPlayer currentTrack={currentTrack}> ->

  return (
    <div>
      <Search search={searchSpotify} searchQuery={searchQuery} />
      <SearchResults resultItems={searchResults} setTrack={setTrack} />
      <figure>
        <figcaption>Spotify preview url test</figcaption>
        <audio controls src={currentTrack.preview_url}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </div>
  );
};

export default MusicConsole;
