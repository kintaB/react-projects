import "./App.css";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Navbar/Nav";
import ContentContainer from "./components/Content/ContentContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/login/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ContentContainer />} />
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
