import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import AudioPlayerControls from "./AudioPlayerControls";
import TrackDetailCard from "./TrackDetailCard";
import { Track } from "../controllers/types";
import { useStyles } from "./styles/AudioPlayer.styles";

type Props = {
  currentTrack: Track;
};

/*AUDIO COMPONENT -  ALL AUDIO IS PLAYED VIA THIS DOM NODE*/
const Audio = document.createElement("audio");

const AudioPlayer: React.FC<Props> = ({ currentTrack }) => {
  const classes = useStyles();
  const [trackIsPlaying, setTrackIsPlaying] = useState(false);
  const [trackTimeProgress, setTrackTimeProgress] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (
      currentTrack["preview_url"] != null &&
      currentTrack["preview_url"] != ""
    ) {
      loadTrack(currentTrack);
      Audio.onloadeddata = () => setTrackDuration(Audio.duration);
      play();
    }
  }, [currentTrack]);

  useEffect(() => {
    setTrackTimeProgress(timeElapsed / (trackDuration / 100));
  }, [timeElapsed, trackDuration]);

  useEffect(() => {
    Audio.volume = volume / 100;
  }, [volume]);

  Audio.ontimeupdate = () => {
    setTimeElapsed(Audio.currentTime);
  };

  Audio.onended = () => {
    setTrackIsPlaying(false);
  };

  //AUDIO CONTROLLER FUNCS
  const loadTrack = (track: Track): void => {
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

  const toggle = (): void => {
    if (trackIsPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleVolumeChange = (
    event: object,
    value: number | number[]
  ): void => {
    setVolume(value as number);
  };

  const handleSeek = (event: object, value: number | number[]): void => {
    Audio.currentTime = (Number(value) * trackDuration) / 100;
    setTrackTimeProgress(Number(value));
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        {currentTrack["preview_url"] != "" ? (
          <TrackDetailCard
            image={currentTrack.album.images[2].url}
            title={currentTrack.name}
            artist={currentTrack.artists[0].name}
          />
        ) : (
          <TrackDetailCard
            image={"../../assets/voidImage.png"}
            title={""}
            artist={""}
          />
        )}
        <AudioPlayerControls
          disabled={currentTrack["preview_url"] === ""}
          togglePlayPause={toggle}
          trackIsPlaying={trackIsPlaying}
          trackDuration={trackDuration}
          trackTimeProgress={trackTimeProgress}
          changeVolume={handleVolumeChange}
          changeTrackProgress={handleSeek}
        />
      </AppBar>
    </React.Fragment>
  );
};

export default AudioPlayer;
