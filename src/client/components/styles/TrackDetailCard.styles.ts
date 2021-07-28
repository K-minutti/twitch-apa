import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "66px",
      width: "360px",
      color: "#565656",
      border: "solid #cecece 1px",
      borderRadius: "5px",
      padding: "0px 4px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      overflowX: "clip",
      justifyContent: "flex-start",
    },
  })
);
