import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component.js';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component.js';




function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />

      </Switch>

    </div>
  );
}

export default App;
