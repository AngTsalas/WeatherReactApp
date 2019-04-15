import React from "react";
import { Input } from "semantic-ui-react";

class Searchbar extends React.Component {
  state = { showResults: false };

  onChange = e => {
    const { toggleResults, getResults } = this.props;
    const query = e.target.value;
    query === "" ? toggleResults(false) : toggleResults(true);
    getResults(query);
  };

  render() {
    return <Input placeholder="Search..." onChange={this.onChange} />;
  }
}

export default Searchbar;
