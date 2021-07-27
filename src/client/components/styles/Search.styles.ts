import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    searchBar: {
      border: "solid blue 2px",
      height: "45px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "10px 30px",
    },
  })
);
