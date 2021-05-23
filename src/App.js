
import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SigninAndSignupPage from './pages/signin-and-signup-page/signin-and-signup-page.component';

import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux'; 
import {setCurrentUser} from './redux/user/user.actions';


class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
       if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapshot =>{
          setCurrentUser({
             currentUser:{
             id: snapshot.id,
             ...snapshot.data()
             }
           });
         });
       }

       setCurrentUser(userAuth);

    });
  }

  componentWillUnmount(){
     this.unsubscribeFromAuth();
  }

  render()
  {
      return (
        <>
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route exact path="/signin" component={SigninAndSignupPage}/>
        </Switch>
        </>
      );
   }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
 });
 export default connect(null, mapDispatchToProps)(App);
