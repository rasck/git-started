import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import RepoList from "./RepoList";
import { topReposFetch, selectRepo } from "../actions";
import { Card } from "./common";

class TopRepos extends Component {
  constructor() {
    super();
    this.state = { dataSource: null };
  }
  static navigationOptions = {
    title: "Top repositories"
  };

  onSelectRepo(repo) {
    console.log("selecting top repo");
    console.log(repo.full_name);
    this.props.selectRepo(repo);
    this.props.navigation.navigate("RepoDetails", {
      repo
    });
  }

  componentDidMount() {
    this.props.service();
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.data !== null) {
      this.setState({ dataSource: nextprops.data });
    }
    if (nextprops.error !== undefined) {
      //TODO make an error modal or sth with reload capability
      console.log(nextprops.error);
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RepoList
          navigation={this.props.navigation}
          repoList={this.state.dataSource}
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
  service: () => dispatch(topReposFetch()),
  selectRepo: repo => dispatch(selectRepo(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRepos);
