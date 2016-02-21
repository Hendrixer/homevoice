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
import Splash from './app/containers/Splash';
import Auth from './app/containers/Auth';
import { Provider } from 'react-redux';
import store from './app/store/store';
import * as routes from './app/utils/routes';

class App extends Component {
  _renderScene = (route, navigator) => {
    if (route.name === routes.SPLASH) {
      return <Splash route={route} nav={navigator}/>

    } else if (route.name === routes.AUTH) {
      return <Auth route={route} nav={navigator}/>

    } else {
      return <Splash route={route} nav={navigator}/>
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
      <Provider store={store}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navView}>
          <Navigator
            initialRoute={{name: routes.SPLASH, title: 'Main'}}
            renderScene={this._renderScene}
          />
        </DrawerLayoutAndroid>
      </Provider>
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
