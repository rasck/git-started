import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import RepoList from "./RepoList";
import { topReposFetch } from "../actions";
import { Card } from "./common";
class TopRepos extends Component {
  componentDidMount() {
    console.log("mounting...");
    console.log(this.props);
    this.props.topReposFetch();
  }

  componentWillReceiveProps(nextProps) {
    console.log("getting next props");
    console.log(nextProps);
  }
  renderRow({ item }) {
    return <RepoListItem attraction={item} />;
  }
  renderList() {
    if (this.props.data) {
      return <RepoList repoList={this.props.data} />;
    } else if (this.props.error) {
      //TODO: add logging
      console.log(error);
      return <Text>Data from github is unvailable</Text>;
    } else if (this.props.isLoading) {
      return <Text>Insert fancy loading spinner</Text>;
    } else {
      //TODO: add logging
      console.log("could not render list");
      console.log(this.props);
      return <Text>No data is available</Text>;
    }
  }
  render() {
    return <View style={{ flex: 1, marginTop: 5 }}>{this.renderList()}</View>;
  }
}

const mapStateToProps = state => {
  const { data, error, isLoading } = state.repos;

  return { data, error, isLoading };
};

const mapDispatchToProps = dispatch => ({
  topReposFetch: () => dispatch(topReposFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRepos);
