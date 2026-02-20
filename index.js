/**
 * @format
 */

// CRITICAL: Initialize gesture handler FIRST
import 'react-native-gesture-handler';

// Then enable screens with proper error handling
import { enableScreens } from 'react-native-screens';

try {
  enableScreens(true);
} catch (e) {
  console.warn('Failed to enable screens:', e);
}

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import "./global.css"

AppRegistry.registerComponent(appName, () => App);
