import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfileCont from "./components/Profile/ProfileCont";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/UsersListCont";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {

  return (
          <div className='app_wrapper'>
              <HeaderContainer/>
              <Navbar/>
              <div className='app_content_wrapper'>
                  <Route path='/profile/:userId?'>
                      <ProfileCont/>
                  </Route>
                  <Route path='/dialogs'>
                      <Dialogs/>
                  </Route>
                  <Route path='/users'>
                      <Users />
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
