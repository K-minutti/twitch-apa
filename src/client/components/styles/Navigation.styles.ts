import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    nav: {
      height: "45px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "10px 30px",
    },

    logout: {
      position: "absolute",
      right: 50,
      left: "auto",
      fontSize: 20,
    },
  })
);
