import React from "react";
import TextField from "@material-ui/core/TextField";

import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  state = { name: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    console.log("Submitas veikia. State value yra: ", this.state.name);
  };

  render() {
    return (
      <div className={styles.searchBar}>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            id="outlined-search"
            label="Search for company's data"
            type="search"
            margin="normal"
            variant="outlined"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            style={{ width: "70vw" }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
