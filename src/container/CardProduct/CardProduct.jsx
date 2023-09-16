import React, { Component } from "react";

class CardProduct extends Component {
  state = {
    older: 0,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handleMinus = () => {
    if (this.state.older > 0) {
      this.setState(
        {
          older: this.state.older - 1,
        },
        () => {
          this.handleCounterChange(this.state.older);
        }
      );
    }
  };

  handlePlus = () => {
    this.setState(
      {
        older: this.state.older + 1,
      },
      () => {
        this.handleCounterChange(this.state.older);
      }
    );
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://etanee.id/static/media/salad_sayur.df18ccc9.jpg"
            alt="produk-prod"
          />
        </div>
        <p className="product-title">Aneka Sayuran</p>
        <p className="product-price">Rp 10.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.older} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
