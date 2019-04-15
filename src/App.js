import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import { Segment, Header } from "semantic-ui-react";
import Results from "./components/Results";
import { callApi } from "./util";

class App extends Component {
  state = { showResults: false, weatherData: null };

  toggleResults = opt => {
    this.setState({ showResults: opt });
  };

  getResults = query => {
    callApi(query)
      .then(response => this.setState({ weatherData: response.data }))
      .catch(err => {
        console.log(err);
        this.setState({ weatherData: null });
      });
  };

  render() {
    const { showResults, weatherData } = this.state;
    return (
      <Segment>
        <Header>Weather React App</Header>
        <p>
          Search by typing the city name and the country code, e.g. "Athens, GR"
        </p>
        <Searchbar
          toggleResults={this.toggleResults}
          getResults={this.getResults}
        />
        {showResults && <Results data={weatherData} />}
      </Segment>
    );
  }
}

export default App;
