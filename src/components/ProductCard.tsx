import { Component } from "react";
import AddToCartBtn from "./AddToCartBtn";
import Badge from "./Badge";
// import ViewItemBtn from "./ViewItemBtn";

type ProductCardProps = {
  itemDetails: {
    itemId?: string;
    itemName?: string;
    itemImageLink: string;
    pricePerItem?: number;
    inStock: boolean;
  };
};

type ProductCardState = {};

export default class ProductCard extends Component<
  ProductCardProps,
  ProductCardState
> {
  state = {};

  render() {
    return (
      <div className="rounded bg-white shadow-2xl p-4 cursor-pointer w-full">
        <Badge inStock={this.props.itemDetails.inStock} />
        <img
          src={this.props.itemDetails.itemImageLink}
          className="w-full"
          alt="nespray"
        />
        <span className="flex justify-between my-2">
          <span className="font-medium">{this.props.itemDetails.itemName}</span>
          <span className="font-medium">
            Rs. {this.props.itemDetails.pricePerItem?.toFixed(2)}
          </span>
        </span>
        <span className="flex flex-col space-y-2">
          <AddToCartBtn />
          {/* <ViewItemBtn /> */}
        </span>
      </div>
    );
  }
}
