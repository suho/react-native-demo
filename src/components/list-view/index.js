import React, { Component } from "react";
import { ListView } from "react-native";
import TestRow from "../rows/test-row";
import Styles from "./styles";

export default class FoodsView extends Component {
  ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  constructor(props) {
    super(props);
    this.state = {
      menus: this.ds.cloneWithRows(props.menus)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      menus: this.ds.cloneWithRows(nextProps.menus)
    });
  }

  render() {
    return (
      <ListView
        style={{ ...Styles }}
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
    );
  }
}
