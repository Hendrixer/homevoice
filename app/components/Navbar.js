import React, {
  Component,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Screen = Dimensions.get('window');

export default class Navbar extends Component {
  static defaultProps = {
    device: 'android',
    onBack(){},
    onForward(){},
    title: 'Home'
  };

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>back</Text>
        <Text style={styles.text}>{this.props.title}</Text>
        <Text style={styles.text}>next</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 15,
    width: Screen.width,
    height: 60,
    backgroundColor: 'rgba(245, 245, 245, 0.3)',
  },
  content: {
    flex: 1,
    marginTop: 20
  },
  text: {
    color: 'white',
    fontSize: 24
  }
});
