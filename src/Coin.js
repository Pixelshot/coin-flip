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
      array: [],
      counter: 0,
      heads: 0,
      tails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // flipCoin() {
  //   const result = Math.floor(Math.random() * this.props.images.length) + 1;
  // }

  handleClick() {
    const result = Math.floor(Math.random() * this.props.images.length) + 1;

    this.setState({
      array: result,
      counter: this.state.counter + 1
    });
    if (this.state.array === 1) {
      this.setState({
        heads: this.state.heads + 1
      });
      return (
        <img src={this.props.images[0]} alt="heads" className="Coin-face" />
      );
    } else {
      this.setState({
        tails: this.state.tails + 1
      });
      return (
        <img src={this.props.images[1]} alt="tails" className="Coin-face" />
      );
    }
  }
  render() {
    return (
      <section className="Coin">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.array === 1 ? (
            <img src={this.props.images[0]} alt="heads" className="Coin-face" />
          ) : (
            <img src={this.props.images[1]} alt="tails" className="Coin-face" />
          )}
        </div>
        <button onClick={this.handleClick}>Flip the coin!</button>
        <p>Amount of flip: {this.state.counter}</p>
        <p>Amount of heads flipped: {this.state.heads}</p>
        <p>Amount of tails flipped: {this.state.tails}</p>
      </section>
    );
  }
}

export default Coin;
