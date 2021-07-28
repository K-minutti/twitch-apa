import React from "react";
import { Slider, Grid } from "@material-ui/core";
import {
  VolumeUpRounded,
  PauseRounded,
  PlayArrowRounded,
} from "@material-ui/icons/";
import { useStyles } from "./styles/AudioControls.styles";

type Props = {
  disabled: boolean;
  trackIsPlaying: boolean;
  trackTimeProgress: number;
  trackDuration: number;
  togglePlayPause: () => void;
  changeVolume: (event: object, value: number | number[]) => void;
  changeTrackProgress: (event: object, value: number | number[]) => void;
};

const AudioPlayerControls: React.FC<Props> = ({
  disabled,
  trackIsPlaying,
  togglePlayPause,
  trackTimeProgress,
  changeVolume,
  trackDuration,
  changeTrackProgress,
}) => {
  const classes = useStyles();

  const formatTime = (timeInSeconds: number): string => {
    const date: Date = new Date(timeInSeconds * 1000);
    const timeAsString: string = date.toTimeString().split(" ")[0];
    return timeAsString.substring(4);
  };

  return (
    <Grid container className={classes.audioControlsContainer}>
      <Grid item className={classes.progressAndToggleContainer}>
        <button
          className={classes.toggleButton}
          onClick={togglePlayPause}
          disabled={disabled}
        >
          {trackIsPlaying ? (
            <PauseRounded className={classes.colorGreen} />
          ) : (
            <PlayArrowRounded className={classes.colorGreen} />
          )}
        </button>
        <Grid container spacing={3} className={classes.progressSection}>
          <p>
            {trackTimeProgress
              ? formatTime(trackDuration * (trackTimeProgress / 100))
              : "0:00"}
          </p>
          <Grid item xs={8}>
            <Slider
              className={classes.trackProgress}
              value={trackTimeProgress}
              onChange={changeTrackProgress}
            />
          </Grid>

          <p>{formatTime(trackDuration)}</p>
        </Grid>
      </Grid>
      <Grid className={classes.volumeContainer} item>
        <VolumeUpRounded />
        <Slider
          className={classes.vol}
          defaultValue={50}
          onChange={changeVolume}
          aria-labelledby="continuous-slider"
          max={100}
          min={0}
        />
      </Grid>
    </Grid>
  );
};

export default AudioPlayerControls;
