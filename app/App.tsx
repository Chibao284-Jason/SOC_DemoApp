import * as React from 'react';
import {ActivityIndicator, StyleSheet, StatusBar} from 'react-native';
import Navigator from './navigation';
import configureStore from '@store/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi');
interface AppProps {}

const {persistor, store} = configureStore();
const App = (props: AppProps) => {
  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
