import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import RepoList from "./RepoList";
import { topReposFetch } from "../actions";
import { Card } from "./common";

class TopRepos extends Component {
  static navigationOptions = {
    title: "Top repositories"
  };

  onSelectRepo(repo) {
    this.props.navigation.navigate("RepoDetails", {
      repo
    });
  }

  componentDidMount() {
    this.props.service();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RepoList
          navigation={this.props.navigation}
          repoList={this.props.data}
          onSelect={this.onSelectRepo.bind(this)}
        />
        <ActivityIndicator
          animating={this.props.isLoading}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
          size="large"
          color="#0000ff"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { data, error, isLoading } = state.repos;
  return { data, error, isLoading };
};

const mapDispatchToProps = dispatch => ({
  service: () => dispatch(topReposFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRepos);
