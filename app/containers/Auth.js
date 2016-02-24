import React, {
  Component,
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import gradients from '../utils/gradients';
import { update_form } from '../actions/actions';
import Button from '../components/Button';
import colors from 'material-colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HOME } from '../utils/routes';
const screen = Dimensions.get('window');

class Auth extends Component {
  handleSubmit = () => {
    this.props.nav.replace({
      name: HOME,
      title: 'Hello'
    });
  };

  render() {
    const navbar = this.props.navbar;
    return(
      <LinearGradient
      style={styles.gradient}
      colors={gradients.apple}
      locations={gradients.locations.MID}>
        <View style={styles.inputs}>
          <Icon
            name='weekend'
            size={75}
            color={colors.blueGrey[900]}
          />
          <Text style={styles.logo}>HomeVoice</Text>
          <TextInput
            style={styles.input}
            placeholder='email'
            underlineColorAndroid={colors.blueGrey[900]}
            placeholderTextColor={colors.blueGrey[700]}
            keyboardType='email-address'
            selectionColor={colors.blueGrey[900]}
            value={this.props.form.email}
            onChangeText={email => this.props.update_form({email})}
          />

          <TextInput
            style={styles.input}
            placeholder='password'
            placeholderTextColor={colors.blueGrey[700]}
            underlineColorAndroid={colors.blueGrey[900]}
            secureTextEntry={true}
            selectionColor={colors.blueGrey[900]}
            value={this.props.form.password}
            onChangeText={password => this.props.update_form({password})}
          />
        </View>
        <View style={styles.actions}>
          <Button
            onPress={this.handleSubmit}
            style={styles.buttonActive}
            styleDisabled={styles.buttonDisabled}
            containerStyle={styles.buttonContainer}
            underColor={colors.blueGrey[800]}
            activeOpacity={0.8}>
            Enter
          </Button>
        </View>
        <View style={{flex: 1}}>
          <Text
          style={{fontWeight: 'bold', color: colors.blueGrey[900], fontSize: 18}}>
            Don't have an account?
          </Text>
        </View>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  buttonActive: {
    color: 'white',
    textAlign: 'center'
  },
  buttonDisabled: {
    textAlign: 'center',
    color: 'white'
  },
  buttonContainer: {
    backgroundColor: colors.blueGrey[900],
    width: screen.width - 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  gradient: {
    alignItems: 'center',
    flex: 1,
    borderRadius: 0,
    justifyContent: 'center'
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screen.height / 6
  },
  actions: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: screen.width - 80
  },
  logo: {
    fontSize: 36,
    color: '#fff'
  },
  input: {
    flex: 1,
    height: 80,
    color: colors.blueGrey[900],
    fontSize: 24,
    width: screen.width - 80,
    borderColor: 'white'
  }
});

const selectState = (state, props) => {
  return {
    is_fetching: state.app.is_fetching,
    message: state.app.message,
    form: state.app.forms.sign_in
  };
};

const selectActions = (dispatch, props) => {
  return {
    update_form(inputs) {
      dispatch(update_form('sign_in', inputs));
    }
  };
};

export default connect(selectState, selectActions)(Auth);
