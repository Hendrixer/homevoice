/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StatusBar,
  StyleSheet,
  View,
  BackAndroid
} from 'react-native';
import Splash from './app/containers/Splash';
import Auth from './app/containers/Auth';
import Home from './app/containers/Home';
import { Provider } from 'react-redux';
import store from './app/store/store';
import * as routes from './app/utils/routes';
import PageAnimation from './app/utils/pageAnimations';
import Navbar from './app/components/Navbar';

class App extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
      } else {
        return false;
      }
    });
  }

  _createScene = (Page, route, nav) => {
    return (
      <Page route={route} nav={nav} style={{flex: 1}}/>
    );
  };
  _renderScene = (route, navigator) => {
    if (route.name === routes.SPLASH) {
      return this._createScene(Splash, route, navigator);

    } else if (route.name === routes.AUTH) {
      return this._createScene(Auth, route, navigator);

    } else if (route.name === routes.HOME) {
      return this._createScene(Home, route, navigator);

    } else {
      return this._createScene(Splash, route, navigator);
    }
  };

  _configureScene = () => {
    return PageAnimation();
  };

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar
            translucent={true}
            hidden={false}
            backgroundColor={'transparent'}
          />
          <Navigator
            style={{flex: 1}}
            ref={nav => this.navigator = nav}
            initialRoute={{name: routes.SPLASH, title: 'Main'}}
            renderScene={this._renderScene}
            configureScene={this._configureScene}
          />
        </View>
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
