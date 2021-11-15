import * as React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import Navigator from './navigation';
import configureStore from '@store/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
interface AppProps {}

const {persistor, store} = configureStore();
const App = (props: AppProps) => {
  return (
    <Provider store={store}>
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
