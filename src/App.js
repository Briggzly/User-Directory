import React from "react";
import UserCard from "./UserCard";
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className="navBar">Home</nav>
        <UserCard />
      </div>
    );
  }
}

export default App;
