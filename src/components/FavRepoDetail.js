import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fetchRepo } from "../actions";
import RepoDetail from "./RepoDetail";

class FavRepoDetails extends Component {
  componentDidMount() {
    this.props.fetchRepo(this.props.repo);
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
        <RepoDetail
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
  fetchRepo: repo => dispatch(fetchRepo(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavRepoDetails);
