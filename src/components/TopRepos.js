import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import RepoList from "./RepoList";
import { topReposFetch, filterRepos } from "../actions";
import { SearchBar } from "react-native-elements";
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

  renderHeader = () => {
    return <SearchBar placeholder="Not implemented..." lightTheme round />;
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RepoList
          navigation={this.props.navigation}
          repoList={this.props.data}
          onSelect={this.onSelectRepo.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
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
  filterRepos: searchString => dispatch(filterRepos(searchString))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRepos);
