import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./styles/TrackCard.styles";
import { Track } from "../controllers/types";

type Props = {
  track: Track;
  setTrack: (track: Track) => void;
};

const TrackCard: React.FC<Props> = ({ track, setTrack }) => {
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const classes = useStyles();

  return (
    <Card className={classes.container} key={track.id}>
      <img src={track.album.images[1].url} height="60px" width="60px" />
      <CardContent>
        <h4>{track.name}</h4>
        <h5>{track.artists[0].name}</h5>
        {showPlayIcon && <button onClick={() => setTrack(track)}>Play</button>}
      </CardContent>
    </Card>
  );
};

export default TrackCard;
