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
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
        <Text style={{ padding: 10, fontSize: 18, height: 44 }}>{this.props.name}</Text>
      </View>
    );
  }
}

export default TestRow;