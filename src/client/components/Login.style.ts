import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "solid red 2px",
  },
  imgLogo: {
    width: "auto",
    height: "auto",
  },
  root: {
    border: 0,
    borderRadius: 32,
    height: 68,
    width: 310,
    padding: "0 16px",
    fontSize: 22,
    textTransform: "none",
  },
  spotifyLogo: {
    height: "40px",
    marginRight: "10px",
    width: "auto",
  },
});
