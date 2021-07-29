import React from "react";
import { useStyles } from "./styles/TrackDetailCard.styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

type Props = {
  image: string;
  title: string;
  artist: string;
};

const TrackDetailCard: React.FC<Props> = ({ image, title, artist }) => {
  const classes = useStyles();
  return (
    <Card className={classes.container} variant="outlined">
      <img
        src={image}
        alt={`Image of song ${title} playing now`}
        height="60px"
        width="60px"
      />
      <CardContent>
        <h5>{title}</h5>
        <h6>{artist}</h6>
      </CardContent>
    </Card>
  );
};

export default TrackDetailCard;
