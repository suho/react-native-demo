import React, { Component } from "react";
import { View, Text } from "react-native";
import Define from "../../define";
import { Actions } from "react-native-router-flux";

export default class Splash extends Component {
  render() {
    return (
      <View style={Define.Styles.containerCentered}>
        <Text>Side Menu</Text>
      </View>
    );
  }
}
