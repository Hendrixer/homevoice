import React, {
  Component,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';

class Auth extends Component {
  render() {
    return(
      <View style={styles.view}>
        <Text>Auth!!</Text>
      </View>
    );
  }
};

const styles = {
  view: {
    backgroundColor: 'lawngreen',
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

  };
};

export default connect(selectState, selectActions)(Auth);
