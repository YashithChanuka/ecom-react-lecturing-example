import { Component } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Title from "../components/Title";

type CartItemDetails = {
  itemId: string;
  itemName: string;
  itemImageLink: string;
  qty: number;
  pricePerItem: number;
  totalAmount: number;
};

type CartProps = {};

type CartState = {
  cartItems: CartItemDetails[];
  totalOrderAmount: number;
};

export default class Cart extends Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props);

    this.state = {
      cartItems: [],
      totalOrderAmount: 0,
    };
  }

  componentDidMount(): void {
    const cartDetails = localStorage.getItem("cartItems");
    if (cartDetails) {
      const parsedCartDetails: CartItemDetails[] = JSON.parse(cartDetails);
      this.calculateTotalOrderAmount(parsedCartDetails);
    }
  }

  // common method for re-adjusting localstorage
  setCartItemsToLocalStorage(cartItemsList: CartItemDetails[]) {
    localStorage.setItem("cartItems", JSON.stringify(cartItemsList));
  }

  // calculate total order amount when changing qty amount and removing cart items
  calculateTotalOrderAmount(cartItemsList: CartItemDetails[]) {
    let totalOrderAmount = 0;
    cartItemsList.forEach((cartItem) => {
      cartItem.totalAmount = cartItem.qty * cartItem.pricePerItem;
      totalOrderAmount = totalOrderAmount + cartItem.totalAmount;
      this.setState({ totalOrderAmount: totalOrderAmount });
    });
    this.setState({ cartItems: cartItemsList });
  }

  // changing item quantity
  handleItemQuantityChange = (itemId: string, newQuantity: number) => {
    const updatedItems = this.state.cartItems.map((item) => {
      if (item.itemId === itemId) {
        return {
          ...item,
          qty: newQuantity,
          totalAmount: item.pricePerItem * newQuantity,
        };
      }
      return item;
    });
    this.setState({ cartItems: updatedItems });
    this.setCartItemsToLocalStorage(updatedItems);
    this.calculateTotalOrderAmount(updatedItems);
  };

  // removing cartItem
  handleRemoveCartItem = (itemId: string) => {
    const updatedItems = this.state.cartItems.filter(
      (obj) => obj.itemId !== itemId
    );
    this.setState({ cartItems: updatedItems });
    this.setCartItemsToLocalStorage(updatedItems);
    this.calculateTotalOrderAmount(updatedItems);
  };

  render() {
    const { cartItems } = this.state;
    return (
      <>
        <Title text="Cart" />
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-3">
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.itemId}
                cartItemDetails={cartItem}
                onUpdateQuantity={this.handleItemQuantityChange}
                onRemoveQuantity={this.handleRemoveCartItem}
              />
            ))}
          </div>
          {cartItems.length !== 0 ? (
            <span className="flex flex-col space-y-3 items-center mt-6">
              <h4>
                Your Total Amount: Rs. {this.state.totalOrderAmount.toFixed(2)}
              </h4>
              <button className="bg-slate-800 text-white px-6 py-2 rounded">
                Checkout
              </button>
            </span>
          ) : (
            <span className="flex flex-col space-y-3 items-center mt-6">
              <h4>Your Cart is empty.</h4>
              <Link to={"/"}>
                <button className="bg-slate-800 text-white px-6 py-2 rounded">
                  Go to Products
                </button>
              </Link>
            </span>
          )}
        </div>
      </>
    );
  }
}
