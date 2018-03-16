import React, { Component } from "react";
import { ListView, FlatList, View } from "react-native";
import RepoListItem from "./RepoListItem";
import { Card } from "./common";

class RepoList extends Component {
  constructor() {
    super();
    this.state = { navigation: {} };
  }
  componentDidMount() {
    this.setState({ navigation: this.props.navigation });
  }
 
  renderRow({ item }) {
    return <RepoListItem navigation={this.props.navigation} repo={item}  onSelect={this.props.onSelect}/>;
  }
  render() {
    return (
      <View style={{ marginTop: 5 }}>
        <FlatList
          data={this.props.repoList}
          renderItem={this.renderRow.bind(this)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default RepoList;
