import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Define from "../../define";
import { Actions } from "react-native-router-flux";

export default class Home extends Component {
  render() {
    return (
      <View style={Define.Styles.containerCentered}>
        <Text>Home</Text>
      </View>
    );
  }
}
