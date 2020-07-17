import React from 'react';
import './App.css';
import Navbar from './Navagation/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import CreateReport from './Reports/CreateReport';
import FullReport from './Reports/FullReport'
import Login from './pages/Login';
import {connect} from 'react-redux'
import {auth, createUserProfileDocument} from './Firebase/fbConfig';
import {setCurrentUser} from './Store/Actions/authAction'
import ArticlesPage from './pages/ArticlesPage';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);


        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
    
        <Navbar />
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route  path="/createReport" render={ () => this.props.currentUser ? (<CreateReport/>) : (<Redirect to="/Login"/>)}
        />
        <Route path='/article/:id' component={FullReport} />
        <Route exact path='/articles' component={ArticlesPage} />
        <Route 
            exact
            path="/Login"
            render={ () => 
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (

                <Login />
              )
            }

          />


        </Switch>
  
      </div>
    );
  }
}

const mapStateToProps = ({ user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
