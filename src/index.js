import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Projects from './components/projects/projects'
import './index.css'
import Contact from './components/contact/contact'
import {Route, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom'
import Footer from './components/footer/footer'
import Art from './components/projects/art/art'
import NotFound from './components/notFound/notFound'
import BalanceVR from './components/projects/balanceVR/balanceVR'
import NavigationBar from './components/navBar/navBar'
import Home from './components/home/home';
import JazzChords from './components/projects/jazzChords/jazzChords'
import Resume from './components/resume/resume';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBaq4K_rkIxEIyfNQaor-P5MBlzGUcVX_0",
  authDomain: "damian-chavira.firebaseapp.com",
  databaseURL: "https://damian-chavira.firebaseio.com",
  projectId: "damian-chavira",
  storageBucket: "damian-chavira.appspot.com",
  messagingSenderId: "1095815552186",
  appId: "1:1095815552186:web:0f425474f830d75a487683",
  measurementId: "G-SBZNJQ365K"
};
firebase.initializeApp(firebaseConfig);
const analytics=firebase.analytics()
const logCurrentPage = () => {
  analytics.setCurrentScreen(window.location.pathname)
  analytics.logEvent('screen_view')
  analytics.logEvent()
};

const AnalyticsComponent = () => {
  const history = useHistory();
  useEffect(() => {
    logCurrentPage(); // log the first page visit
    history.listen(() => {
      logCurrentPage();
    });
  }, [history]);
  return (<div></div>);
};
class App extends React.Component{
  
  
  render(){
    console.log(window.screen.availHeight)
    return(
      <Router>
        <AnalyticsComponent />
        <NavigationBar/>
        <Switch>{// eslint-disable-next-line
}          <Route exact path='/' component={NavigationBar,Home}/>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/resume'>
            <Resume/>
          </Route>
          <Route path='/projects'>
            <Projects/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/jazzchords'>
            <JazzChords/>
          </Route>
          <Route path='/balancevr'>
            <BalanceVR/>
          </Route>
          <Route path='/art'>
            <Art/>
          </Route>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
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
