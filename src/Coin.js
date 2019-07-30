import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  static defaultProps = {
    title: "Coin Toss Challenge",
    images: [
      "https://s3.amazonaws.com/ngccoin-production/world-coin-price-guide/101509f.jpg",
      "https://s3.amazonaws.com/ngccoin-production/world-coin-price-guide/101509b.jpg"
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return (
      <section className="Coin">
        <h1>{this.props.title}</h1>
        <div>
          <img src={this.props.images[0]} alt="head" className="Coin-face" />
          <img src={this.props.images[1]} alt="head" className="Coin-face" />
        </div>
        <button onClick={this.handleClick}>Flip the coin!</button>
        <p>Amount of flip: {this.state.counter}</p>
      </section>
    );
  }
}

export default Coin;
