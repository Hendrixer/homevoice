import React, {
  Component,
  View,
  Text,
  StyleSheet,
  ListView,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import gradients from '../utils/gradients';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import _ from 'lodash';
import FrostBite from '../components/FrostBite';

const screen = Dimensions.get('window');
const iconMap = {
  lights: 'lightbulb-outline',
  switches: 'power',
  contactSensors: 'touch-app',
  locks: 'lock',
  garages: 'directions-car',
  locators: 'gps-fixed',
  thermostats: 'ac-unit',
  motionSensors: 'directions-walk'
};

class Home extends Component {
  static defaultProps = {
    devices: {}
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    const data = _.reduce(this.props.devices, (list, devices, type) => {
      list.push({
        type,
        count: devices.length,
        icon: iconMap[type]
      })
      return list;
    });
    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
  }
  _renderRow = (deviceGroup, section, i) => {
    const delay = i * 150;
    return (<FrostBite animationDelay={delay} style={styles.item} icon={deviceGroup.icon}/>);
  };

  render() {
    return (
      <LinearGradient
        style={[styles.view, this.props.style]}
        colors={gradients.pinkDust}>
        <Navbar />
        <Banner style={styles.banner} message={'Devices'}/>
        <ListView
          pageSize={3}
          initialListSize={12}
          contentContainerStyle={styles.content}
          dataSource={this.state.dataSource}
          style={styles.scrollview}
          renderRow={this._renderRow}>
        </ListView>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  banner: {
    flex: 1,
    height: screen.height / 4
  },
  item: {
    width: screen.width / 4,
    height: screen.width / 4,
    margin: screen.width / 24
  },
  scrollview: {
    flex: 4
  },
  content: {
    marginTop: 30,
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

const selectState = (state, props) => {
  return {
    devices: state.devices
  };
};

const selectActions = (dispatch, props) => {
  return {

  };
};

export default connect(selectState, selectActions)(Home);
