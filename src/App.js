import React from "react";
import axios from "axios";

import SearchBar from "./Components/SearchBar/SearchBar";
import CompanyCard from "./Components/CompanyCard";
import Paper from "@material-ui/core/Paper";
import { Fade } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: [],
    fetchError: false
  };
  // onSearchSubmit = async name => {
  //   const firma = await axios.get(
  //     "https://data.brreg.no/enhetsregisteret/api/enheter?navn=" + `${name}`
  //   );
  //   this.setState({ data: firma.data._embedded.enheter });
  // };
  onSearchSubmit = async name => {
    // try {
    //   const firma = await axios.get(
    //     "https://data.brreg.no/enhetsregisteret/api/enheter?navn=" + `${name}`
    //   );
    //   this.setState({ data: firma.data._embedded.enheter });
    // } catch (error) {
    //   console.error("Error in fetchin data: ", error);
    //   this.setState({ fetchError: true });
    //   console.log("Fetch error state are:", this.state.fetchError);
    // }
    const firma = await axios.get(
      "https://data.brreg.no/enhetsregisteret/api/enheter?navn=" + `${name}`
    );

    if (firma.data._embedded) {
      this.setState({ data: firma.data._embedded.enheter });
      console.log("Logas is fetcho....", firma.data._embedded.enheter);
    } else {
      this.setState({ fetchError: true });
      setTimeout(() => {
        this.setState({ fetchError: false });
      }, 3000);
    }
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />

        {this.state.fetchError ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Paper
              style={{
                padding: 5,
                width: 400,
                height: 50,
                margin: 15,
                background: "#990000",
                color: "#ffffff",
                textAlign: "center",
                lineHeight: "40px"
              }}
            >
              Unable to fetch data!!! Check Company Name!
            </Paper>
          </div>
        ) : (
          <CompanyCard duomenys={this.state.data} />
        )}
      </div>
    );
  }
}

export default App;
