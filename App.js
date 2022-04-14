import { StatusBar } from 'expo-status-bar';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import React from 'react';
import AppLoading from 'expo-app-loading';
import UserNavigator from './navigation/UserNavigator';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer
});

const storee = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  
  return (
   <Provider store={storee}>
          <UserNavigator/> 

   </Provider>
    
      
  );
}


