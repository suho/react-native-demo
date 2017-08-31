import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import Define from './define';
import Config from './config/config';

export default class ReactNativeDemo extends Component {
  render() {
    return (
      <View style={[Define.Styles.container, Define.Styles.containerCentered]}>
        <Text style={[Define.Styles.testText]}>
          Welcome to React Native! ({Define.Strings.platform[Platform.OS]})
        </Text>
        <Text style={[Define.Styles.testText]}>
          App's name: {Config.appName}
        </Text>
      </View >
    );
  }
}
