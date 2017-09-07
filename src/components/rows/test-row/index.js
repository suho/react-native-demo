import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

class TestRow extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: this.props.cover }}
        />
        <View style={{ flexDirection: 'column', paddingBottom: 10 }}>
          <Text>{this.props.id}</Text>
          <Text>{this.props.name}</Text>
          <Text>{this.props.price}</Text>
        </View>
      </View>
    );
  }
}

export default TestRow;