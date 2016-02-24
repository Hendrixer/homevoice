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

export default class Banner extends Component {
  static defaultProps = {
    animated: true
  };
  componentDidMount() {
    if (this.props.animated) {
      Animated.spring(this.animateY, {
        toValue: {
          x: 0, y: 0
        },
        velocity: 10,
        tension: 20
      }).start()
    }
  }

  render() {
    this.animateY = this.animateY ||
      new Animated.ValueXY({x: 0, y: -100});


    return (
      <Animated.View style={[styles.container, {
        transform: this.animateY.getTranslateTransform()
      }]}>
        <View style={styles.content}>
          <Text style={styles.text}>{this.props.message}</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: 'rgba(245, 245, 245, 0.1)',
  },
  content: {
    flex: 1,
    marginTop: 10
  },
  text: {
    color: 'white',
    fontSize: 34,
    textAlign: 'center'
  }
});
