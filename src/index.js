import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Splash from "./containers/splash";
import Home from "./containers/home";
import { Router, Scene, Drawer } from "react-native-router-flux";

export default class ReactNativeDemo extends Component {
  render() {
    return (
      <Router>
        <Drawer key="drawer" contentComponent={Splash}>
          <Scene
            key="home"
            initial
            component={Home}
            drawerImage={require("./images/navi/ic_menu_button.png")}
            navigationBarTitleImage={require("./images/navi/lux-stay.png")}
            navigationBarStyle={{ backgroundColor: "white" }}
            navigationBarTitleImageStyle={{ resizeMode: "cover" }}
            rightButtonImage={require("./images/navi/ic_message.png")}
            onRight={() => {}}
          />
        </Drawer>
      </Router>
    );
  }
}
