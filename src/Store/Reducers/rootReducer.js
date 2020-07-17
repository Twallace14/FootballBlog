import authReducer from './authReducer';
import reportReducer from './reportReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    user: authReducer,
    report: reportReducer,
    firestore: firestoreReducer,
    firebaseS: firebaseReducer
});

export default rootReducer;