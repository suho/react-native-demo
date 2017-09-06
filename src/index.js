import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  ScrollView,
  Button,
  Alert,
  FlatList,
  ListView
} from "react-native";
import Define from "./define";
import Config from "./config/config";
import TestRow from "./components/rows";
import { createStore } from "redux";

// State
let appState = { number: 1 };

// Action
const add = {
  type: "ADD",
  value: 1
};

const sub = {
  type: "SUB",
  value: 1
};

// Reducer
const numberReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state.number += action.value;
      break;
    case "SUB":
      state.number -= action.value;
      break;
  }
  return state;
};

// Store
const store = createStore(numberReducer, appState);

// Test

store.subscribe(() => {
  console.log("State Updated", store.getState());
});

store.dispatch(add);
store.dispatch(add);

export default class ReactNativeDemo extends Component {
  ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      shopId: 0,
      shopName: "",
      menus: this.ds.cloneWithRows([])
    };
  }

  loadServices() {
    return fetch("http://104.154.229.21/api/v1/shops/1")
      .then(response => response.json())
      .then(json => {
        let data = json.data;
        this.setState(
          {
            shopId: data.id,
            shopName: data.name,
            menus: this.ds.cloneWithRows(data.menus[0].menuItems)
          },
          function() {}
        );
      })
      .catch(error => {
        Alert.alert(error);
      });
  }

  reverse(s) {
    return s
      .split("")
      .reverse()
      .join("");
  }

  clearText = () => {
    this._textInput.setNativeProps({ text: "" });
  };

  render() {
    return (
      <View style={[Define.Styles.container, Define.Styles.containerCentered]}>
        <View style={[Define.Styles.containerCentered]}>
          <Text style={[Define.Styles.testText]}>
            Welcome to React Native! ({Define.Strings.platform[Platform.OS]})
          </Text>
          <Text style={[Define.Styles.testText]}>
            App's name: {Config.appName}
          </Text>
          <Button
            onPress={() => {
              this.loadServices();
            }}
            title="Press To Load Services"
          />
          <Button
            onPress={() => {
              this.setState({
                menus: this.ds.cloneWithRows([])
              });
            }}
            title="Press To Clear Data"
          />
        </View>
        <ListView
          style={{
            backgroundColor: "#BBDEFB",
            width: Define.Sizes.screen.width
          }}
          enableEmptySections={true}
          dataSource={this.state.menus}
          renderRow={rowData => (
            <TestRow
              id={rowData.id}
              cover={rowData.item.cover}
              name={rowData.item.name}
              price={rowData.price.unitPrice}
            />
          )}
        />
      </View>
    );
  }
}
