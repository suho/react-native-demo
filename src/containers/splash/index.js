import React, { Component } from "react";
import { View, Button } from "react-native";
import Define from "../../define";

export default class Splash extends Component {
  state = {};
  render() {
    return (
      <View style={Define.Styles.containerCentered}>
        <Button onPress={() => {}} title="Go To Home" />
      </View>
    );
  }
}
