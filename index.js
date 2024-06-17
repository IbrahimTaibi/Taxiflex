/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// Ensure you configure it once, ideally in your entry point file
GoogleSignin.configure({
  webClientId:
    '953641349211-b06anbd29atvns5mbfnllcs5s3afaqqr.apps.googleusercontent.com', // Replace with your webClientId
});
AppRegistry.registerComponent(appName, () => App);
