import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sagaPlugin from 'reactotron-redux-saga';
import { NativeModules } from 'react-native';
// Reactotron
let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}
const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    host: scriptHostname
  }) // controls connection & communication settings
  .use(sagaPlugin()) // <-- sweet
  .use(reactotronRedux()) //  <- here i am!
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
tron = Reactotron;
export default reactotron;