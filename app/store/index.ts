import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../config/ReactotronConfig'
import rootReducers from '@store/reducers'; // where reducers is a object of reducers
import rootSaga from '@store/saga';

const config = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['languageReducer', 'loginReducer'],
  debug: true, //to get useful logging
};

const sagaMonitor = Reactotron.createSagaMonitor()

const middleware = [];
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);



const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig: any = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers, Reactotron.createEnhancer()));
const persistor = persistStore(store, persistConfig, () => {
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(rootSaga);

export default configureStore;
