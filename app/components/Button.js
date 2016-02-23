import React, {
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Component
} from 'react-native';
import coalesceNonElementChildren from '../utils/methods';

const systemButtonOpacity = 0.2;

class Button extends Component {
  static propTypes =  {
    ...TouchableHighlight.propTypes,
    containerStyle: View.propTypes.style,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
    styleDisabled: Text.propTypes.style,
    underColor: PropTypes.string
  };

  render() {
    const touchableProps = {
      activeOpacity: this._computeActiveOpacity(),
      underlayColor: this.props.underColor || '#fff'
    };
    if (!this.props.disabled) {
      touchableProps.onPress = this.props.onPress;
      touchableProps.onPressIn = this.props.onPressIn;
      touchableProps.onPressOut = this.props.onPressOut;
      touchableProps.onLongPress = this.props.onLongPress;
      touchableProps.onHideUnderlay = this.props.onHideUnderlay;
      touchableProps.onShowUnderlay = this.props.onShowUnderlay;
    }

    return (
      <TouchableHighlight {...touchableProps} testID={this.props.testID} style={this.props.containerStyle}>
        {this._renderGroupedChildren()}
      </TouchableHighlight>
    );
  }

  _renderGroupedChildren() {
    const {disabled} = this.props
    const style = [
      styles.text,
      disabled ? styles.disabledText : null,
      this.props.style,
      disabled ? this.props.styleDisabled : null,
    ];

    const children = coalesceNonElementChildren(this.props.children, (children, index) => {
      return (
        <Text key={index} style={style}>
          {children}
        </Text>
      );
    });

    switch (children.length) {
      case 0:
        return null;
      case 1:
        return children[0];
      default:
        return <View style={styles.group}>{children}</View>;
    }
  }

  _computeActiveOpacity() {
    if (this.props.disabled) {
      return 1;
    }
    return this.props.activeOpacity != null ?
      this.props.activeOpacity :
      systemButtonOpacity;
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#007aff',
    fontFamily: '.HelveticaNeueInterface-MediumP4',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledText: {
    color: '#dcdcdc',
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Button;
