import React, {
  Component,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';
import { load_jwt } from '../actions/creators';
import { AUTH } from '../utils/routes';
import { toggle_fetch } from '../actions/actions';
import LinearGradient from 'react-native-linear-gradient';
import gradients from '../utils/gradients';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.startSplash();
    const navigator = this.props.nav;
    // setTimeout(() => {

    // }, 3000);
    this.props.load_jwt()
    .then(jwt => {
      if (!jwt) {
        navigator.replace({
          name: AUTH,
          title: 'Sign in'
        });
      }
    })
    .done();
  }

  render() {
    return(
      <LinearGradient
        style={styles.view}
        colors={gradients.america}>
        <View styl={styles.logoContainer}>
          <Text style={styles.logo}>Logo here</Text>
        </View>
        <View styl={styles.spinner}>
          <Spinner
            isVisible={this.props.is_fetching}
            color={'#fff'}
            size={80}
            type={'ThreeBounce'}/>
            <Text style={styles.message}>
              {this.props.message}
            </Text>
        </View>
      </LinearGradient>
    );
  }
};

const styles = {
  view: {
    flex: 1,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    flex: 1
  },
  logo: {
    fontSize: 24,
    color: 'white'
  },
  message: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
};

const selectState = (state, props) => {
  return {
    is_fetching: state.app.is_fetching,
    message: state.app.message
  };
};

const selectActions = (dispatch, props) => {
  return {
    load_jwt() {
      return dispatch(load_jwt());
    },
    startSplash() {
      return dispatch(toggle_fetch(true, 'Loading...'));
    }
  };
};

export default connect(selectState, selectActions)(Splash);
