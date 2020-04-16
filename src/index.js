import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Projects from './components/projects/projects'

import Contact from './components/contact/contact'
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom'



import NavigationBar from './components/navBar/navBar'
import Home from './components/home/home';
class App extends React.Component{
  
  render(){
    console.log(window.screen.availHeight)
    return(
      <Router>
        <NavigationBar/>
        <Switch>{// eslint-disable-next-line
}          <Route exact path='/' component={NavigationBar,Home}/>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/projects'>
            <Projects/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </Router>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
