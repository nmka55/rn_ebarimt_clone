/**
 * @format
 */

import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
