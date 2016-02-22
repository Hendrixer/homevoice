import React, {
  Component,
  View,
  Image,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';
import LinearGradient from 'react-native-linear-gradient';
import gradients from '../utils/gradients';
import Input from '../components/Input';
import { update_form } from '../actions/actions';

class Auth extends Component {
  render() {
    return(
      <LinearGradient
      style={styles.gradient}
      colors={gradients.redBlue}
      locations={gradients.locations.HIGH}>
        <View style={styles.container}>
          <Text style={styles.logo}>Home Voice</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder='email'
              placeholderTextColor='white'
              keyboardType='email-address'
              selectionColor='white'
              value={this.props.form.email}
              onChangeText={email => this.props.update_form({email})}
            />

            <TextInput
              style={styles.input}
              placeholder='password'
              placeholderTextColor='white'
              secureTextEntry={true}
              selectionColor='white'
              value={this.props.form.password}
              onChangeText={password => this.props.update_form({password})}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  gradient: {
    alignItems: 'center',
    flex: 1,
    borderRadius: 0,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontSize: 36,
    color: '#fff'
  },
  input: {
    flex: 1,
    color: 'white',
    width: 300,
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
