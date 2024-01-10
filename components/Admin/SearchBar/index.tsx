import React from "react";
import { FormControl } from "react-bootstrap";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div>
      <FormControl
        type="search"
        className={styles.searchBar}
        placeholder="Type anything here"
      />
    </div>
  );
};

export default SearchBar;
