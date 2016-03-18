import React, {
  Component,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from './Button';
const Screen = Dimensions.get('window');

export default class FrostBit extends Component {
  static defaultProps = {
    height: 80,
    width: 80,
    icon: 'add',
    color: 'white',
    animated: true,
    animationDelay: false,
    label: ''
  };

  constructor(prop) {
    super(prop);
  }

  componentDidMount() {
    if (this.props.animated) {
      this.startAnimation();
    }
  }

  startAnimation = () => {
    const sequence = [
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 500
      })
    ];
    this.props.animationDelay && sequence.unshift(Animated.delay(this.props.animationDelay));
    Animated.sequence(sequence).start();
  };

  render() {
    this.opacity = this.opacity || new Animated.Value(0);

    const _styles = {
      height: this.props.height,
      width: this.props.width,
      borderRadius: ((this.props.height * this.props.width) / 2) / 2,
      backgroundColor: 'transparent',
      borderColor: 'rgba(200, 200, 200, 0.1)',
      borderWidth: 6,
    };
    return (
      <Animated.View
      style={[styles.animation, {
        opacity: this.opacity
      }]}>
        <Button
        underColor={'rgba(200, 200, 200, 0.1)'}
        containerStyle={[styles.view, _styles, this.props.style]}>
          <Icon
            name={this.props.icon}
            size={32}
            color={this.props.color}
            style={styles.icon}
          />
        </Button>
        {this.props.label && <Text style={styles.label}>{this.props.label.toUpperCase()}</Text>}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  animation: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  label: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  }
});
