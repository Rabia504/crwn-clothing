
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SigninAndSignupPage from './pages/signin-and-signup-page/signin-and-signup-page.component';
import {Switch, Route} from 'react-router-dom';

function App() {
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

export default App;
