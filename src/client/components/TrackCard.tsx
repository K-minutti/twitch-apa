import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { PlayArrowRounded } from "@material-ui/icons/";
import { useStyles } from "./styles/TrackCard.styles";
import { Track } from "../controllers/types";

type Props = {
  track: Track;
  setTrack: (track: Track) => void;
};

const TrackCard: React.FC<Props> = ({ track, setTrack }) => {
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const classes = useStyles();

  const previewNullDisableButton: boolean = track.preview_url === null;

  return (
    <Card
      className={classes.container}
      raised
      onMouseEnter={() => setShowPlayIcon(true)}
      onMouseOver={() => setShowPlayIcon(true)}
      onMouseLeave={() => setShowPlayIcon(false)}
    >
      <div className={classes.imageContainer}>
        <img
          alt={`Image of song titled ${track.name}`}
          src={track.album.images[1].url}
          height="120px"
          width="120px"
        />
      </div>
      <CardContent>
        <h4
          aria-label={`Display text of track ${track.name}`}
          className={classes.title}
        >
          {track.name}
        </h4>
        <h5
          aria-label={`Display text of artists for track ${track.name}`}
          className={classes.name}
        >
          {track.artists[0].name}
        </h5>
      </CardContent>
      {showPlayIcon && (
        <button
          className={classes.playButton}
          onClick={() => setTrack(track)}
          disabled={previewNullDisableButton}
          onMouseLeave={() => setShowPlayIcon(false)}
          aria-label={`${
            previewNullDisableButton
              ? "This song is not playable"
              : "Click on button to play track this track from search results."
          }`}
        >
          <PlayArrowRounded className={classes.playIcon} />
          Play
        </button>
      )}
    </Card>
  );
};

export default TrackCard;
