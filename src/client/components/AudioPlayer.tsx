import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Track, EmptyTrack } from "../controllers/types";
import { useEffect } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
    },
  })
);

type Props = {
  currentTrack: Track | EmptyTrack;
};

type SelectedTrack = Track | EmptyTrack;

const Audio = document.createElement("audio");

const AudioPlayer: React.FC<Props> = ({ currentTrack }) => {
  const classes = useStyles();
  const [trackIsPlaying, setTrackIsPlaying] = useState(false);

  useEffect(() => {
    if (!trackIsPlaying && currentTrack["preview_url"] != "") {
      loadTrack(currentTrack);
      play();
    }
  }, [currentTrack]);

  const loadTrack = (track: SelectedTrack): void => {
    Audio.src = track["preview_url"];
    Audio.load();
  };

  const play = (): void => {
    Audio.play();
    setTrackIsPlaying(true);
  };

  const pause = (): void => {
    Audio.pause();
    setTrackIsPlaying(false);
  };

  //Audio "https://p.scdn.co/mp3-preview/f4eb81aee870f719442004e9d66e9c2603ea4819?cid=774b29d4f13844c495f206cafdad9c86"
  //ui-controls input[slider] - songDuration, volume, button[toggle] - play/pause,
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <button onClick={() => pause()}>Pause</button>
      </AppBar>
    </React.Fragment>
  );
};

export default AudioPlayer;
