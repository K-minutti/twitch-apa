import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles/Search.styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { apaTheme } from "./styles/Theme.styles";
type Props = {
  search: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

const Search: React.FC<Props> = ({ search, searchQuery }) => {
  const classes = useStyles();
  return (
    <form className={classes.searchControls}>
      <ThemeProvider theme={apaTheme}>
        <TextField
          fullWidth
          className={classes.searchBar}
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
