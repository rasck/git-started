import React, { Component } from "react";
import { Text, View } from "react-native";
import { CardSection } from "./common";

class RepoListItem extends Component {
  onRowPress() {
    Actions.repoDetailsView({ repo: this.props.repo });
  }
  render() {
    const { full_name, stargazers_count } = this.props.attraction;

    return (
      <View>
        <CardSection>
          <View>
            <Text>Repo: {full_name}</Text>
            <Text>Stars: {stargazers_count}</Text>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default RepoListItem;
