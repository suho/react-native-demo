import React, { Component } from 'react';
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
} from 'react-native';
import Define from './define';
import Config from './config/config';
import TestRow from './components/rows';

export default class ReactNativeDemo extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      text: '',
      shopId: 0,
      shopName: '',
      menus: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    return fetch('http://104.154.229.21/api/v1/shops/1')
      .then((response) => response.json())
      .then((json) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let data = json.data
        this.setState({
          shopId: data.id,
          shopName: data.name,
          menus: ds.cloneWithRows(data.menus[0].menuItems)
        }, function () { });
      })
      .catch((error) => {
        Alert.alert(error);
      });
  }

  reverse(s) {
    return s.split("").reverse().join("");
  }

  clearText = () => {
    this._textInput.setNativeProps({ text: '' });
  }

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
          <TextInput
            style={{ height: 40, width: Define.Sizes.screen.width, textAlign: 'center' }}
            placeholder="Please type..."
            onChangeText={(text) => this.setState({ text })}
            ref={component => this._textInput = component}
          />
          <Button
            onPress={() => {
              Alert.alert('Clear text');
              this.setState((prevState) => {
                return { text: '' };
              });
              this.clearText();
            }}
            title='Press Me'
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.reverse(this.state.text)}
          </Text>
        </View>
        <ListView style={{ backgroundColor: '#BBDEFB', width: Define.Sizes.screen.width }}
          enableEmptySections={true}
          dataSource={this.state.menus}
          renderRow={(rowData) => <TestRow id={rowData.id} cover={rowData.item.cover} name={rowData.item.name} price={rowData.price.unitPrice} />}
        />
        {/* <FlatList style={{ backgroundColor: '#BBDEFB', width: Define.Sizes.screen.width }}
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <TestRow name={item.key} />}
        /> */}
      </View >
    );
  }
}
