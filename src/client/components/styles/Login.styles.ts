import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    landingContainer: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      background: "linear-gradient(-75deg, #fbfbfb, #fff, #dbdbdb, #fefefe)",
      backgroundSize: "200% 200%",
    },
    apalanding: {
      paddingTop: "20%",
    },
    imgLogo: {
      width: "auto",
      height: "auto",
    },
    loginButton: {
      width: "320px",
      height: "68px",
      textTransform: "none",
      background: "#000",
      borderRadius: "40px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      "& .MuiButton-label": {
        display: "row",
      },
    },
    text: {
      fontSize: "22px",
      color: "white",
      padding: 0,
      margin: 0,
      "& .text:hover": {
        color: "#000",
      },
    },
    spotifyLogo: {
      height: "40px",
      marginRight: "16px",
      width: "auto",
    },
    waves: {
      width: "100%",
      alignSelf: "flex-end",
    },
  })
);
