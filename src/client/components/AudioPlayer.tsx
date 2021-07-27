import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Track } from "../controllers/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
    },
  })
);

const AudioPlayer: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <figure>
          <figcaption>Spotify preview url test</figcaption>
          <audio
            controls
            src="https://p.scdn.co/mp3-preview/f4eb81aee870f719442004e9d66e9c2603ea4819?cid=774b29d4f13844c495f206cafdad9c86"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </AppBar>
    </React.Fragment>
  );
};

export default AudioPlayer;
