import React from "react";
import { FormControl } from "react-bootstrap";
import styles from "./SearchBar.module.scss";

interface searchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<searchBarProps> = ({ placeholder }) => {
  return (
    <div>
      <FormControl
        type="search"
        className={styles.searchBar}
        placeholder={placeholder || "Type anything here"}
      />
    </div>
  );
};

export default SearchBar;
