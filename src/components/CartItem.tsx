import { Component } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

type CartItemProps = {
  cartItemDetails: {
    itemId: string;
    itemName: string;
    itemImageLink: string;
    qty: number;
    pricePerItem: number;
    totalAmount: number;
  };
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveQuantity: (itemId: string) => void;
};

type CartItemState = {};

export default class CartItem extends Component<CartItemProps, CartItemState> {
  constructor(props: CartItemProps) {
    super(props);
    this.state = {};
    this.addQuantity = this.addQuantity.bind(this);
    this.removeQuantity = this.removeQuantity.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
  }

  addQuantity() {
    let newQty = this.props.cartItemDetails.qty + 1;
    this.props.onUpdateQuantity(this.props.cartItemDetails.itemId, newQty);
  }

  removeQuantity() {
    if (this.props.cartItemDetails.qty > 1) {
      let newQty = this.props.cartItemDetails.qty - 1;
      this.props.onUpdateQuantity(this.props.cartItemDetails.itemId, newQty);
    }
  }

  removeCartItem() {
    this.props.onRemoveQuantity(this.props.cartItemDetails.itemId);
  }

  render() {
    return (
      <div className="w-full bg-white flex py-2 px-6 items-center rounded shadow-xl">
        <div className="w-2/5">
          <span className="flex justify-around items-center space-x-2">
            <img
              className="w-20 h-20"
              src={this.props.cartItemDetails.itemImageLink}
              alt="nespray"
            />
            <span> x {this.props.cartItemDetails.qty}</span>
            <span className="flex space-x-1 justify-center items-center">
              <button
                className="border border-slate-600 rounded"
                onClick={this.addQuantity}
              >
                <AddIcon />
              </button>
              <button
                disabled={this.props.cartItemDetails.qty === 1}
                className="border border-slate-600 rounded"
                onClick={this.removeQuantity}
              >
                <RemoveIcon />
              </button>
            </span>
          </span>
        </div>
        <div className="w-2/5">{this.props.cartItemDetails.itemName}</div>
        <div className="w-1/5 flex justify-between">
          <span>Rs. {this.props.cartItemDetails.totalAmount.toFixed(2)}</span>
          <button onClick={this.removeCartItem}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  }
}
