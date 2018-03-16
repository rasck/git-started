import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { CardSection } from "./common";
import { Ionicons } from "@expo/vector-icons";

class RepoListItem extends Component {
  onRowPress() {
    const repo = this.props.repo;
    this.props.onSelect(repo);
    this.props.navigation.navigate("RepoDetails", { repo });
  }
  render() {
    const { full_name, stargazers_count } = this.props.repo;

    return (
      <TouchableHighlight onPress={this.onRowPress.bind(this)}>
        <CardSection>
          <View>
            <Text style={styles.textStyle}>{full_name}</Text>
            <Text style={styles.starStyle}>
              <Ionicons name="ios-star" size={18} color="black" />
              {stargazers_count}
            </Text>
          </View>
        </CardSection>
      </TouchableHighlight>
    );
  }
}

const styles = {
  starStyle: {
    fontSize: 18
  },
  textStyle: {
    fontWeight: "600"
  }
};

export default RepoListItem;
