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
      <AppBar
        position="fixed"
        color="primary"
        className={classes.appBar}
      ></AppBar>
    </React.Fragment>
  );
};

export default AudioPlayer;
