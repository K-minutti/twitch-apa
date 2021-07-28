import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchResultsContainer: {
      position: "absolute",
      top: "112px",
      bottom: "96px",
      left: 0,
      right: 0,
      overflow: "auto",
      padding: "20px",
      borderTop: "solid #212121 1px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  })
);
