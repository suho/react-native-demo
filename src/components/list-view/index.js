import React, { Component } from "react";
import { ListView, Button, View } from "react-native";
import TestRow from "../rows/test-row";
import Styles from "./styles";
import Define from "../../define";
import { connect } from "react-redux";

class FoodsView extends Component {
  ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  render() {
    const { menus, loadServices, clearData } = this.props;
    return (
      <View style={[Define.Styles.container, Define.Styles.containerCentered]}>
        <Button
          onPress={() => {
            loadServices();
          }}
          title={Define.Strings.button.title.loadServices}
        />
        <Button
          onPress={() => {
            clearData();
          }}
          title={Define.Strings.button.title.clearData}
        />

        <ListView
          style={{ ...Styles }}
          enableEmptySections={true}
          dataSource={this.ds.cloneWithRows(menus)}
          renderRow={data => (
            <TestRow
              id={data.id}
              cover={data.item.cover}
              name={data.item.name}
              price={data.price.unitPrice}
            />
          )}
        />
      </View>
    );
  }
}

// Action
const loadFoods = () => {
  return {
    type: "LOAD_FOODS"
  };
};

const clearFoods = () => {
  return {
    type: "CLEAR_FOODS"
  };
};

export default connect(
  state => {
    return {
      menus: state.menus
    };
  },
  dispatch => {
    return {
      loadServices: () => dispatch(loadFoods()),
      clearData: () => dispatch(clearFoods())
    };
  }
)(FoodsView);
