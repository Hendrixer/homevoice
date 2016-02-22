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

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.startSplash();
    setTimeout(() => {
      this.props.load_jwt()
      .then(jwt => {
        if (!jwt) {
          this.props.nav.push({
            name: AUTH,
            title: 'Sign in'
          });
        }
      })
      .done();
    }, 3000);
  }
  render() {
    return(
      <View style={styles.view}>
        <View styl={styles.logoContainer}>
          <Text style={styles.logo}>Splash</Text>
        </View>
        <View styl={styles.spinner}>
          <Spinner
            isVisible={this.props.is_fetching}
            color={'#000'}
            size={50}
            type={'ThreeBounce'}/>
            <Text>
              {this.props.message}
            </Text>
        </View>
      </View>
    );
  }
};

const styles = {
  view: {
    backgroundColor: 'gold',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    flex: 1
  },
  logo: {
    fontSize: 24
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
