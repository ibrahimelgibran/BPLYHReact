import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    older: 0,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      older: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="box">
          <div className="header">
            <div className="logo">
              <img
                src="https://admin.etanee.id/img/icon/etanee_logo_white.svg"
                alt=""
              />
            </div>
            <div className="troley">
              <img
                src="https://etanee.id/static/media/basket-blue.937a12ce.svg"
                alt=""
              />
              <div className="count">{this.state.older}</div>
            </div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
