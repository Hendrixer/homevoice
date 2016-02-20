/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Image,
  DrawerLayoutAndroid,
  Text,
  View
} from 'react-native';



class Main extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>
          {this.props.route.title}
        </Text>
      </View>
    );
  }
}

class App extends Component {
  _renderScene = (route, navigator) => {
    if (route.id === 1) {
      return <Main route={route}/>
    } else {
      return (
        <View>
          <Text>
            Default
          </Text>
        </View>
      );
    }
  };

  render() {
    const navView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{textAlign: 'left', margin: 10, fontSize: 15}}>
          Hello
        </Text>
      </View>
    );
    return (

      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navView}>
        <Navigator
          initialRoute={{id: 1, title: 'Main'}}
          renderScene={this._renderScene}
        />
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 },
 thumbnail: {
  width: 53,
  height: 81
 }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
