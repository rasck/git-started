import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import RepoList from "./RepoList";
class FavRepos extends Component {
  static navigationOptions = {
    title: "Favourite repositories"
  };

  onSelectRepo(repo) {
    this.props.navigation.navigate("FetchRepoDetails", {
      repo
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RepoList
          navigation={this.props.navigation}
          repoList={this.props.dataSource}
          onSelect={this.onSelectRepo.bind(this)}
          repo={this.props.repo}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { data } = state.fav;
  return { dataSource: data };
};

export default connect(mapStateToProps)(FavRepos);
