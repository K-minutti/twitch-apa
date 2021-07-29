import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles/Search.styles";
type Props = {
  search: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

const Search: React.FC<Props> = ({ search, searchQuery }) => {
  const classes = useStyles();
  return (
    <form className={classes.searchControls}>
      <TextField
        fullWidth
        className={classes.searchBar}
        type="search"
        aria-label="Search bar enter text to search for a song using"
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
    </form>
  );
};

export default Search;
