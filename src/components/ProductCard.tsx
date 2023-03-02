import { Component } from "react";
import AddToCartBtn from "./AddToCartBtn";
import Badge from "./Badge";
// import ViewItemBtn from "./ViewItemBtn";

type ItemDetails = {
  itemId: string;
  itemName: string;
  itemImageLink: string;
  pricePerItem: number;
  inStock: boolean;
};

type ProductCardProps = {
  itemDetails: ItemDetails;
};

type ProductCardState = {};

export default class ProductCard extends Component<
  ProductCardProps,
  ProductCardState
> {
  constructor(props: ProductCardProps) {
    super(props);
    this.state = {};
    this.handleClickAddItem = this.handleClickAddItem.bind(this);
  }

  handleClickAddItem(itemDetails: ItemDetails) {
    let cartItems = [];
    let localData = localStorage.getItem("cartItems");
    if (localData) {
      // parse the current items
      cartItems = JSON.parse(localData);

      // check whether cart-items already has this item.
      // if so, its qty should increment by one
      let cartItemsQtyUpdated = cartItems.map((obj: any) => {
        if (obj.itemId === itemDetails.itemId) {
          obj.qty = obj.qty + 1;
          return true;
        } else {
          return false;
        }
      });

      // if number of qty is not updated regarding to cartItems,
      // that means, current item is not in cart.
      // then, you should add it as a new cart item
      if (!cartItemsQtyUpdated.includes(true)) {
        cartItems.push({
          itemId: itemDetails.itemId,
          itemName: itemDetails.itemName,
          itemImageLink: itemDetails.itemImageLink,
          qty: 1,
          pricePerItem: itemDetails.pricePerItem,
        });
      }

      // save in localstorage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      // here the cart-items array is emplty. Then add the item
      cartItems.push({
        itemId: itemDetails.itemId,
        itemName: itemDetails.itemName,
        itemImageLink: itemDetails.itemImageLink,
        qty: 1,
        pricePerItem: itemDetails.pricePerItem,
      });

      // save in localstorage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }

  render() {
    return (
      <div
        className="rounded bg-white shadow-2xl p-4 cursor-pointer w-full"
        onClick={() => this.handleClickAddItem(this.props.itemDetails)}
      >
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
