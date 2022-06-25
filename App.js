import { StatusBar } from 'expo-status-bar';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import React from 'react';
import AppLoading from 'expo-app-loading';
import UserNavigator from './navigation/UserNavigator';
import authReducer from './store/reducers/auth';
import addShopReducer from './store/reducers/addShop';
import addItemReducer from './store/reducers/addItem';
import orderReducer from './store/reducers/order';
import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey : "AIzaSyBcqTPv1woelu6Bjk5jQ2iIwIOvpmE-0aA",
  authDomain : "com.namal.OMS",
  projectId: "oms-fyp-a8be4",
  storageBucket: "oms-fyp-a8be4.appspot.com",
  messagingSenderId: "336511317970",
  appId: "1:336511317970:android:036ec26aa17c9a713c3a0b"
}

//initializing firebase app
initializeApp(firebaseConfig);
const rootReducer = combineReducers({
  auth: authReducer,
  shops: addShopReducer,
  items: addItemReducer,
  orders: orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  
  return (
   <Provider store={store}>
          <UserNavigator/> 

   </Provider>
    
      
  );
}


