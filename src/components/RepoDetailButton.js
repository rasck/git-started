import React, { Component } from "react";
import { View, Button } from "react-native";

class RepoDetailButton extends Component {
  onPress(isFav, repo) {
    if (isFav) {
      this.props.remove(repo);
    } else {
      this.props.add(repo);
    }
  }

  renderButton(isFav, repo) {
    switch (isFav) {
      case true:
        return (
          <Button
            onPress={this.onPress.bind(this, isFav, repo)}
            title="Remove from favourites"
            color="#03A9F4"
            accessibilityLabel="Remove this repo from your favourites"
          />
        );
      case false:
        return (
          <Button
            onPress={this.onPress.bind(this, isFav, repo)}
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
    return (
      <View style={styles.buttonContainer}>
        {this.renderButton(this.props.isFav, this.props.repo)}
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    flex: 0.1,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "center"
  }
};

export default RepoDetailButton;
