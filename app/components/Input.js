import React, {
  Component,
  TextInput,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Input extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={this.props.icon}
          size={30}
          color={'white'}
        />
        <TextInput placeholder={'email'} style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  input: {
    borderColor: 'white',
    color: 'white',
    flex: 6,
    width: 200
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});
