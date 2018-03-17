import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { ListItem } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

class RepoListItem extends Component {
  onRowPress() {
    const repo = this.props.repo;
    this.props.onSelect(repo);
  }
  render() {
    const { name, stargazers_count } = this.props.repo;

    return (
      <TouchableHighlight onPress={this.onRowPress.bind(this)}>
        <ListItem
          title={name}
          subtitle={
            <Text style={styles.starStyle}>
              <Ionicons name="ios-star" size={12} color="black" />{" "}
              {stargazers_count}
            </Text>
          }
        />
      </TouchableHighlight>
    );
  }
}

const styles = {
  starStyle: {
    fontSize: 12
  },
  textStyle: {
    fontWeight: "600",
    fontSize: 18
  }
};

export default RepoListItem;
