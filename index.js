/**
 * @format
 */
// According to react navigation installation instructions (and gesture-handler's)
// this NEEDS to be the first thing in our app
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
