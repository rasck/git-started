import React, { Component } from "react";
import { ListView, FlatList, View } from "react-native";
import RepoListItem from "./RepoListItem";
import { Card } from "./common";

class RepoList extends Component {
  renderRow({ item }) {
    return <RepoListItem attraction={item} />;
  }
  render() {
    return (
      <View style={{ marginTop: 5 }}>
        <FlatList
          data={this.props.repoList}
          renderItem={this.renderRow}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default RepoList;
