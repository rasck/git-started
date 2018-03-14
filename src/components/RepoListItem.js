import React, { Component } from "react";
import { Text, View } from "react-native";
import { CardSection } from "./common";

class RepoListItem extends Component {
  onRowPress() {
    Actions.repoDetailsView({ repo: this.props.repo });
  }
  render() {
    const { name, stars } = this.props.attraction;

    return (
      <View>
        <CardSection>
          <View>
            <Text>{name}</Text>
            <Text>{stars}</Text>
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
