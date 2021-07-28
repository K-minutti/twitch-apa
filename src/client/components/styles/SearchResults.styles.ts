import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchResultsContainer: {
      position: "absolute",
      top: "112px",
      bottom: "96px",
      left: "0px",
      right: "0px",
      overflow: "auto",
      padding: "12px 0px",
      borderTop: "solid #212121 1px",
    },
  })
);
