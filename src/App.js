import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

  return (
          <div className='app_wrapper'>
              <Header/>
              <Navbar/>
              <div className='app_content_wrapper'>
                  <Route path='/profile'>
                      <Profile store={props.store}/>
                  </Route>
                  <Route path='/dialogs'>
                      <Dialogs store={props.store}/>
                  </Route>
                  <Route path='/news'>
                      <News/>
                  </Route>
                  <Route path='/music'>
                      <Music/>
                  </Route>
                  <Route path='/settings'>
                      <Settings/>
                  </Route>
              </div>
          </div>
  )
};

export default App;
