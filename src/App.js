
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SigninAndSignupPage from './pages/signin-and-signup-page/signin-and-signup-page.component';
import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
       if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapshot =>{
           this.setState({
             currentUser:{
             id: snapshot.id,
             ...snapshot.data()
             }
           });
         });
       }

       this.setState({currentUser:userAuth});

    });
  }

  componentWillUnmount(){
     this.unsubscribeFromAuth();
  }

  render()
  {
      return (
        <>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route exact path="/signin" component={SigninAndSignupPage}/>
        </Switch>
        </>
      );
   }
}

export default App;
