import React, { Component } from "react";
import { View, Button } from "react-native";
import Define from "./define";
import TestRow from "./components/rows/test-row";
import FoodsView from "./components/list-view";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// State
let appState = {
  menus: [
    {
      id: -1,
      item: {
        cover: "https://unsplash.it/300/300",
        name: "Test"
      },
      price: {
        unitPrice: 10000
      }
    }
  ]
};

// Reducer
const foodsReducer = (state = appState, action) => {
  switch (action.type) {
    case "LOAD_FOODS":
      state = {
        ...state,
        menus: [
          {
            id: -1,
            item: {
              cover: "https://unsplash.it/300/300",
              name: "Test"
            },
            price: {
              unitPrice: 10000
            }
          },
          {
            id: -2,
            item: {
              cover: "https://unsplash.it/300/300",
              name: "Test Test"
            },
            price: {
              unitPrice: 20000
            }
          }
        ]
      };
      break;
    case "CLEAR_FOODS":
      state = {
        ...state,
        menus: []
      };
      break;
  }
  return state;
};

// Middleware

// Store
const store = createStore(foodsReducer, appState);

const loadMenus = () => {
  fetch("http://104.154.229.21/api/v1/shops/1")
    .then(response => response.json())
    .then(json => {
      let data = json.data;
      return data.menus[0].menuItems;
    })
    .catch(error => {
      alert(error);
    });
};

export default class ReactNativeDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <FoodsView />
      </Provider>
    );
  }
}
