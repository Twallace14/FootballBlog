import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Store/Reducers/rootReducer'
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import firebaseConfig from './Firebase/fbConfig'
import firebase from 'firebase/app';
import logger from "redux-logger";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }), logger ),
        reduxFirestore(firebaseConfig),

    )
    
);

const profileSpecificProps = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false
}



const rrfProps = {
    firebase,
    config: firebaseConfig, profileSpecificProps,
    dispatch: store.dispatch,
    createFirestoreInstance
};
const AuthIsLoaded = ({ children }) => {
    const auth = useSelector(state => state.firebaseS.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
    return children
}



ReactDOM.render(

    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
