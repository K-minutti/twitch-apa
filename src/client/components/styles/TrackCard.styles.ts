import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "240px",
      width: "220px",
      color: "#565656",
      textAlign: "center",
      margin: "26px",
      display: "flex",
      position: "relative",
      zIndex: 1,
      flexDirection: "column",
      alighItems: "center",
      justifyContent: "center",
      "&:hover": {
        background: "#F4F4F4",
      },
    },
    imageContainer: {
      width: "100%",
    },
    title: {
      color: "#212121",
    },
    name: {
      color: "#565656",
    },
    playButton: {
      backgroundColor: "#1EB980",
      fontWeight: "bold",
      color: "#fff",
      height: "36px",
      width: "88px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      position: "absolute",
      right: "16px",
      top: "50%",
      zIndex: 2,
      background: "#f1f1f1",
      "&:disabled": {
        backgroundColor: "#565656",
      },
    },
    playIcon: {
      fill: "#fff",
    },
  })
);
