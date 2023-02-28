import { Component } from "react";

type CartItemProps = {
  cartItemDetails: {
    itemId: string;
    itemName: string;
    itemImageLink: string;
    qty: number;
    pricePerItem: number;
    totalAmount: number;
  };
};

type CartItemState = {};

export default class CartItem extends Component<CartItemProps, CartItemState> {
  state = {};

  render() {
    return (
      <div className="w-full bg-white flex py-2 px-6 items-center rounded shadow-xl">
        <div className="w-1/4">
          <span className="flex items-center space-x-2">
            <img
              className="w-20 h-20"
              src={this.props.cartItemDetails.itemImageLink}
              alt="nespray"
            />
            <span> x {this.props.cartItemDetails.qty}</span>
          </span>
        </div>
        <div className="w-2/4">{this.props.cartItemDetails.itemName}</div>
        <div className="w-1/4 font-bold">
          Rs. {this.props.cartItemDetails.totalAmount.toFixed(2)}
        </div>
      </div>
    );
  }
}
