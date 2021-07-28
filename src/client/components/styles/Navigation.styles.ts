import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    nav: {
      top: 0,
      height: 50,
      position: "fixed",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "10px 30px",
      background: "white",
    },

    logout: {
      right: 50,
      position: "fixed",
      left: "auto",
      fontSize: 18,
    },
  })
);
