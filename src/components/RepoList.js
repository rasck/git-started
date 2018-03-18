import React, { Component } from "react";
import { ListView, FlatList, View, Text } from "react-native";
import { List } from "react-native-elements";
import RepoListItem from "./RepoListItem";

class RepoList extends Component {
  empty = () => null;
  renderRow({ item }) {
    return (
      <RepoListItem
        navigation={this.props.navigation}
        repo={item}
        selectedRepo={this.props.repo}
        onSelect={this.props.onSelect}
      />
    );
  }
  render() {
    return (
      <List>
        <FlatList
          data={this.props.repoList}
          renderItem={this.renderRow.bind(this)}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.props.renderHeader || this.empty}
        />
      </List>
    );
  }
}

export default RepoList;
