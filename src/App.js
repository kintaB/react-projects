import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Content from "./components/Content/Content";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Content />} />
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route exact path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
