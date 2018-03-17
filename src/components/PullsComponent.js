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
import { addPullRequests } from "../actions";

class PullsComponent extends Component {
  componentDidMount() {
    this.props.fetchPulls(this.props.repo);
  }

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

  renderListOrActivityLoader() {
    if (this.props.pullsIsLoading) {
      return (
        <ActivityIndicator
          animating={this.props.pullsIsLoading}
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
          data={this.props.pulls}
          renderItem={({ item }) => <RenderRow repo={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.pullsContainer}>
        <Text style={styles.pullsTextStyle}>Pulls</Text>
        {this.renderListOrActivityLoader()}
      </View>
    );
  }
}

const RenderRow = ({ repo }) => (
  <View>
    <Text>Title: {repo.title}</Text>
    <Text>Number: {repo.number}</Text>
    <Text>State: {repo.status}</Text>
    <Text>Author: {repo.author}</Text>
  </View>
);

const styles = {
  pullsTextStyle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600"
  },
  pullsContainer: {
    flex: 1,
    paddingTop: 5
  }
};

const mapStateToProps = state => {
  const { data, error, isLoading } = state.pulls;
  return {
    pulls: data,
    pullsError: error,
    pullsIsLoading: isLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPulls: repo => dispatch(addPullRequests(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PullsComponent);
