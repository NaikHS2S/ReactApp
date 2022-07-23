import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    transforms: [
        encryptTransform({
          secretKey: 'my-super-secret-key',
          onError: function (error) {
            // Handle the error.
          },
        }),
      ],
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
   
  export const store = configureStore({
    reducer: {
        loginReducer: persistedReducer,
    },
    middleware: [thunk]
  })

  export const persistor = persistStore(store)