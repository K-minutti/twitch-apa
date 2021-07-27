import React, { useState, useEffect, useCallback } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import AudioPlayer from "./AudioPlayer";
import { getSpotifySearchResults } from "../controllers/spotifyServices";
import { EmptySearchResults, Track, EmptyTrack } from "../controllers/types";

const MusicConsole: React.FC = () => {
  const initialResultsState: EmptySearchResults = { items: [] };
  const initialTrackState: EmptyTrack = { preview_url: "" };
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(initialResultsState);
  const [currentTrack, setCurrentTrack] = useState<Track | EmptyTrack>(
    initialTrackState
  );

  useEffect(() => {
    getSpotifySearchResults(searchQuery).then(setSearchResults);
  }, [searchQuery]);

  const searchSpotify = useCallback(
    (event) => setSearchQuery(event.target.value),
    []
  );

  const setTrack = useCallback((track) => {
    console.log("TRACK SET-->", track);
    setCurrentTrack(track);
  }, []);

  return (
    <div>
      <Search search={searchSpotify} searchQuery={searchQuery} />
      <SearchResults resultItems={searchResults} setTrack={setTrack} />
      <AudioPlayer currentTrack={currentTrack} />
    </div>
  );
};

export default MusicConsole;
