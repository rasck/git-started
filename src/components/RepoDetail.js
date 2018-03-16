import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  FlatList,
  ActivityIndicator,
  Button
} from "react-native";
import { connect } from "react-redux";
import { addRepoToFav, removeRepoFromFav, updateRepoInFav } from "../actions";

// Too much logic and state in this component... Some state handling should be moved to redux and the component could be split into sub components
class RepoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null
    };
  }
  componentDidMount() {
    const repo = this.props.navigation.state.params.repo;
    if (repo.shouldUpdate) this.props.update(repo);

    // TODO: Could move to redux. But for now it is only used internally
    this.makeRemoteRequest();
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

  makeRemoteRequest = () => {
    const repo = this.props.navigation.state.params.repo;
    const url = sanitizePullsUrl(repo.pulls_url);
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // Could also filter by cretad date...
        res.splice(10);
        this.setState({
          data: res,
          error: res.error || null,
          loading: false
        });
      })
      .catch(error => {
        //TODO: Handle error state
        this.setState({ error, loading: false });
      });
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  onPress() {
    const repo = this.props.navigation.state.params.repo;
    const isFav = this.isSelectedReopInFavourite();
    if (isFav) {
      this.props.remove(repo);
    } else {
      this.props.add(repo);
    }
  }

  renderListOrActivityLoader() {
    if (this.state.loading) {
      return (
        <ActivityIndicator
          animating={this.state.loading}
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
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      );
    }
  }

  renderButton() {
    const isFav = this.isSelectedReopInFavourite();
    switch (isFav) {
      case true:
        return (
          <Button
            onPress={() => this.onPress()}
            title="Remove from favourites"
            color="#03A9F4"
            accessibilityLabel="Remove this repo from your favourites"
          />
        );
      case false:
        return (
          <Button
            onPress={() => this.onPress()}
            title="Add to favourites"
            color="#03A9F4"
            accessibilityLabel="Add this repo to your favourites"
          />
        );
      default:
        break;
    }
  }

  render() {
    console.log("render repo details");
    // ToDo integrate navigation into redux, this get too cumbersome, errorprone and ugly...
    const repo = this.props.navigation.state.params.repo;
    const { open_issues, owner, name, stargazers_count } = repo;
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
          <View style={styles.pullsContainer}>
            <Text style={styles.pullsTextStyle}>Pulls</Text>
            {this.renderListOrActivityLoader()}
          </View>
          <View style={styles.buttonContainer} />
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const sanitizePullsUrl = string => string.replace("{/number}", "");

const Row = ({ label, children }) => {
  return (
    <View style={styles.rowStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
};

const styles = {
  pullsTextStyle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600"
  },
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
  pullsContainer: {
    flex: 1,
    paddingTop: 5
  },
  buttonContainer: {
    flex: 0.1,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "center"
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
  const { data } = state.fav;
  return { favList: data };
};

const mapDispatchToProps = dispatch => ({
  add: repo => dispatch(addRepoToFav(repo)),
  remove: repo => dispatch(removeRepoFromFav(repo)),
  update: repo => dispatch(updateRepoInFav(repo.url))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
