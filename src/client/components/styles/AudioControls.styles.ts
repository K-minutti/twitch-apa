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
      padding: "0px 4px",
      flexGrow: 1,
    },
    volumeContainer: {
      flexGrow: 0,
      [theme.breakpoints.down(520)]: {
        display: "none",
      },
    },
    vol: {
      width: 200,
    },
    progressSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: "0px 8px",
      [theme.breakpoints.down(480)]: {
        display: "none",
      },
    },

    trackProgress: {
      width: "100%",
    },
    colorGreen: {
      fill: "#37EFBA",
    },
  })
);
