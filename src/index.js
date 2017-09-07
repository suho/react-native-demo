import React, { Component } from "react";
import { View, Button } from "react-native";
import Define from "./define";
import TestRow from "./components/rows/test-row";
import FoodsView from "./components/list-view";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// State

// Action

// Reducer

// Middleware

// Store

export default class ReactNativeDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  loadServices() {
    return fetch("http://104.154.229.21/api/v1/shops/1")
      .then(response => response.json())
      .then(json => {
        let data = json.data;
        this.setState({
          menus: data.menus[0].menuItems
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <View style={[Define.Styles.container, Define.Styles.containerCentered]}>
        <Button
          onPress={() => {
            this.loadServices();
          }}
          title={Define.Strings.button.title.loadServices}
        />
        <Button
          onPress={() => {
            this.setState({
              menus: []
            });
          }}
          title={Define.Strings.button.title.clearData}
        />
        <FoodsView menus={this.state.menus} />
      </View>
    );
  }
}
