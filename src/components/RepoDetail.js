import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import PullsComponent from "./PullsComponent";
import RepoDetailButton from "./RepoDetailButton";
import { connect } from "react-redux";
import { addRepoToFav, removeRepoFromFav, updateRepoInFav } from "../actions";

class RepoDetail extends Component {
  componentDidMount() {
    const repo = this.props.navigation.state.params.repo;
    if (repo.shouldUpdate) this.props.update(repo);
  }

  isSelectedReopInFavourite() {
    if (this.props.favList) {
      const repo = this.props.navigation.state.params.repo;
      const result = this.props.favList.find(r => r.id === repo.id);
      if (result) return true;
      else return false;
    }
    return false;
  }

  render() {
    console.log("render repo details");
    // ToDo integrate navigation into redux, this get too cumbersome, errorprone and ugly...
    const repo = this.props.navigation.state.params.repo;
    const { open_issues, owner, name, stargazers_count } = repo;
    const isFav = this.isSelectedReopInFavourite(repo);
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={styles.avatarStyle}
          source={{ uri: owner.avatar_url + ".png" }}
        />
        <View style={{ flex: 1, padding: 15 }}>
          <View style={styles.infoContainer}>
            <Text style={styles.headerStyle}>
              {capitalizeFirstLetter(name)}
            </Text>
            <Row label="Author:">{owner.login}</Row>
            <Row label="Stars:">{stargazers_count}</Row>
            <Row label="Issues:">{open_issues}</Row>
          </View>
          <PullsComponent repo={repo} />
          <RepoDetailButton
            repo={repo}
            isFav={isFav}
            remove={this.props.remove}
            add={this.props.add}
          />
        </View>
      </View>
    );
  }
}

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Row = ({ label, children }) => {
  return (
    <View style={styles.rowStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
};

const styles = {
  avatarStyle: {
    width: 150,
    height: 150,
    alignSelf: "center",
    margin: 5,
    marginTop: 25
  },
  infoContainer: {
    flex: 0.3,
    marginBottom: 5
  },
  rowStyle: {
    flexDirection: "row"
  },
  labelStyle: {
    paddingRight: 15,
    fontSize: 15,
    flex: 0.2
  },
  headerStyle: {
    fontSize: 25,
    fontWeight: "800"
  },
  textStyle: { fontSize: 15, flex: 0.8, textAlign: "left" }
};

const mapStateToProps = state => {
  return {
    favList: state.fav.data
  };
};

const mapDispatchToProps = dispatch => ({
  add: repo => dispatch(addRepoToFav(repo)),
  remove: repo => dispatch(removeRepoFromFav(repo)),
  update: repo => dispatch(updateRepoInFav(repo.url))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
