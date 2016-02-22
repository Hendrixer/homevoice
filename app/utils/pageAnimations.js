import { Navigator } from 'react-native';
import Dimensions from 'Dimensions';


const BaseConfig = Navigator.SceneConfigs.FloatFromRight;

const leftToRight = {
  ...BaseConfig.gestures.pop,
  snapVelocity: 8,
  edgeHitWidth: Dimensions.get('window').width
};

export default function(animation) {
  return {
    ...BaseConfig,
    springTension: 100,
    springFriction: 1,
    gestures: {
      pop: leftToRight
    }
  }
}
