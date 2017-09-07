import React from "react";
import { StyleSheet } from "react-native";
import Define from "../../define";

const styles = StyleSheet.create({
  listView: {
    backgroundColor: Define.Colors.blue73,
    width: Define.Sizes.screen.width
  }
});

export default {
  ...StyleSheet.flatten(styles.listView)
};
