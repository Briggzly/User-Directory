import React from "react";
import data from "./data";
import "./UserCard.css";

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  nextCard = () => {
    if (this.state.index < data.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };

  previousCard = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    } else {
      this.setState({ index: data.length - 1 });
    }
  };

  render() {
    return (
      <div className="userCard">
        <div className="card">
          <h1 className="cardPosition">
            {this.state.index + 1}/{data.length}
          </h1>
          <h1 className="name">
            {data[this.state.index].name.first}{" "}
            {data[this.state.index].name.last}
          </h1>
          <h3 className="title">
            From: {data[this.state.index].city},{" "}
            {data[this.state.index].country}
          </h3>
          <h3 className="title">Job Title: {data[this.state.index].title}</h3>
          <h3 className="title">Employer: {data[this.state.index].employer}</h3>
          <br />
          <div>
            <h3 className="title">Favorite Movies:</h3>
            <ol className="list">
              <li className="listItem">
                {data[this.state.index].favoriteMovies[0]}
              </li>
              <li className="listItem">
                {data[this.state.index].favoriteMovies[1]}
              </li>
              <li className="listItem">
                {data[this.state.index].favoriteMovies[2]}
              </li>
            </ol>
          </div>
        </div>
        <div className="btns">
          <button onClick={this.previousCard} className="arrowBtn" id="pBtn">
            &lt; Previous
          </button>
          <button className="btn">Edit</button>
          <button className="btn">Delete</button>
          <button className="btn">New</button>
          <button onClick={this.nextCard} className="arrowBtn" id="nBtn">
            Next &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default UserCard;
