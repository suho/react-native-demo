import React, { Component } from "react";
import { View, Button } from "react-native";
import Define from "./define";
import TestRow from "./components/rows/test-row";
import FoodsView from "./components/list-view";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// State
let appState = { number: 1, errorMessage: "" };

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
const numberReducer = (state = appState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        number: state.number + action.value
      };
      break;
    case "SUB":
      state = {
        ...state,
        number: state.number - action.value
      };
      break;
  }
  return state;
};

const errorReducer = (state = appState, action) => {
  switch (action.type) {
    case "GREATER_THAN_FIVE":
      state = {
        ...state,
        errorMessage: "Number can not be greater than five"
      };
      break;
  }
  return state;
};

// Middleware
const logger = store => next => action => {
  console.log("State", store.getState());
  next(action);
  console.log("State Updated", store.getState());
  alert("Status Updated", store.getState());
};

const checkNumber = store => next => action => {
  const number = store.getState().number.number;
  if (number > 5) {
    next({ type: "GREATER_THAN_FIVE" });
  } else {
    next(action);
  }
  console.log("Current Number", number);
};

// Store
const reducers = combineReducers({
  number: numberReducer,
  error: errorReducer
});

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger, checkNumber)
);

// Test
// store.subscribe(() => {
//   console.log("State Updated", store.getState());
// });

// store.dispatch(add);

const addAfter3s = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(add);
    }, 3000);
  };
};

store.dispatch(addAfter3s());

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
