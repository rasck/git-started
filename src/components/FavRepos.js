import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import RepoList from "./RepoList";
import { selectAndupdateRepoInFav } from "../actions";
class FavRepos extends Component {
  static navigationOptions = {
    title: "Favourite repositories"
  };

  renderRow({ item }) {
    return <RepoListItem attraction={item} />;
  }
  onSelectRepo(repo) {
    console.log("selecting fav repo");
    console.log(repo.full_name);
    // The update does make the repo detail re-render, but it does not
    // update the item in the navigation
    this.props.update(repo);

    this.props.navigation.navigate("FavRepoDetail", {
      repo,
      navigation: this.props.navigation
    });
  }

  render() {
    console.log("render fav repos");
    //   console.log(this.props.dataSource);
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
  const { data, selectedRepo } = state.fav;
  return { dataSource: data, repo: selectedRepo };
};

const mapDispatchToProps = dispatch => ({
  update: repo => dispatch(selectAndupdateRepoInFav(repo.url))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavRepos);
