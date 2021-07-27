import React from "react";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";

const theme = createTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      width: "800px",
    },
  })
);

//call function in home to call our api service and return a list of render tracks
//
type Props = {
  search: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

const Search: React.FC<Props> = ({ search, searchQuery }) => {
  const classes = useStyles();
  return (
    <form>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          type="search"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          placeholder="Search for songs by title, artist ..."
          onChange={search}
          value={searchQuery}
          inputProps={{
            "aria-label": "new text field",
            style: { fontSize: 20 },
          }}
        />
      </ThemeProvider>
    </form>
  );
};

export default Search;
