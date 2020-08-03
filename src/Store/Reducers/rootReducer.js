import authReducer from './authReducer';
import reportReducer from './reportReducer';
import adminReducer from './adminReducer'
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    user: authReducer,
    report: reportReducer,
    admin: adminReducer,
    firestore: firestoreReducer,
    firebaseS: firebaseReducer
});

export default rootReducer;