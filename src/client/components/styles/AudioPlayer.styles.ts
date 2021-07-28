import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
      height: 96,
      width: "100%",
      padding: "6px 24px",
      borderTop: "1px solid #212121",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
