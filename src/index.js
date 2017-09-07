import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Splash from "./containers/splash";
import { Router } from "react-native-router-flux";

export default class ReactNativeDemo extends Component {
  render() {
    return <Splash />;
  }
}
