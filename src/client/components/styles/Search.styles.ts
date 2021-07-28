import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchControls: {
      backgroundColor: "white",
      position: "fixed",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: 64,
      width: "100%",
      top: 48,
    },
    searchBar: {
      height: 44,
      width: 680,
      "& .MuiOutlinedInput-input": {
        padding: "4px 14px",
      },
    },
  })
);
