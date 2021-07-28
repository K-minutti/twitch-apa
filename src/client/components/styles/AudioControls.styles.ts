import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    audioControlsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    toggleButton: {
      height: 50,
      width: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#212121",
      border: "none",
      outline: "none",
      borderRadius: "50%",
    },
    progressAndToggleContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifySelf: "center",
      flexGrow: 1,
    },
    volumeContainer: {
      flexGrow: 0,
    },
    vol: {
      width: 200,
    },
    progressSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0px 8px",
    },

    trackProgress: {
      width: "100%",
    },
    colorGreen: {
      fill: "#37EFBA",
    },
  })
);
