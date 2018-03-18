import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fetchRepo } from "../actions";
import RepoDetails from "./RepoDetails";

class FetchRepoDetails extends Component {
  componentDidMount() {
    this.props.fetchRepo(this.props.navigation.state.params.repo);
  }

  renderListOrActivityLoader() {
    //Todo: handle error
    if (this.props.isLoading) {
      return (
        <ActivityIndicator
          animating={this.props.isLoading}
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1
          }}
          size="large"
          color="#0000ff"
        />
      );
    } else {
      return (
        <RepoDetails
          repo={this.props.updatedRepo}
          navigation={this.props.navigation}
        />
      );
    }
  }

  render() {
    return this.renderListOrActivityLoader();
  }
}

const mapStateToProps = state => {
  const { repo, error, isLoading } = state.repo;
  return {
    updatedRepo: repo,
    error,
    isLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRepo: (repo, props) => dispatch(fetchRepo(repo, props))
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchRepoDetails);
