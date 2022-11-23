// import {combineReducers} from 'redux';
import { patientReducer } from './reducers/patientReducer';
// import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit/';

// const initialState={
//     patient:localStorage.getItem('patient') ? JSON.parse(localStorage.getItem('patient')):[]
// }

// const reducer=combineReducers({
//     patient:patientReducer
// })

// const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default configureStore({reducer:{patient:patientReducer}});