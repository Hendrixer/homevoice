import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import gradients from '../utils/gradients';
import RadialMenu from 'react-native-radial-menu';
const screen = Dimensions.get('window');

class Home extends Component {
  renderItems = (count) => {
    return [...Array(count)].map((_, i) => {
      return (
        <View style={styles.item} key={i}
          onSelect={() => {}}>
          <Text>{i}</Text>
        </View>
      );
    })
  };

  render() {
    return(
      <LinearGradient
        style={styles.view}
        colors={gradients.lightning}>
        <RadialMenu
        spreadAngle={360}
        style={styles.menu}
        itemRadius={60}
        menuRadius={60}
        startAngle={0}>
          <View style={[styles.item, styles.root]}>
            <Text>MENU</Text>
          </View>
          {this.renderItems(5)}
        </RadialMenu>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({

  view: {
    flex: 1,
    borderRadius: 0,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  item: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  },
  root: {
    backgroundColor: 'transparent'
  },
  menu: {
    // width: screen.width,
    // height: screen.height
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    width: screen.width,
    height: screen.height,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const selectState = (state, props) => {
  return {

  };
};

const selectActions = (dispatch, props) => {
  return {

  };
};

export default connect(selectState, selectActions)(Home);
