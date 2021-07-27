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
    <form>
      <TextField
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
    </form>
  );
};

export default Search;
