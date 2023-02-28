import { Component } from "react";
import CartItem from "../components/CartItem";
import Title from "../components/Title";

type CartProps = {};

type CartState = {
  cartItems: {
    itemId: string;
    itemName: string;
    itemImageLink: string;
    qty: number;
    pricePerItem: number;
    totalAmount: number;
  }[];
  totalOrderAmount: number;
};

export default class Cart extends Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props);

    this.state = {
      cartItems: [
        {
          itemId: "1",
          itemName: "Nespray",
          itemImageLink:
            "https://shopit.lk/wp-content/uploads/2020/05/Nespray-Full-Cream-Milk-Powder-FortiGrow-%E2%80%93-400g.jpg",
          qty: 3,
          pricePerItem: 435,
          totalAmount: 1305,
        },
        {
          itemId: "2",
          itemName: "Nespray",
          itemImageLink:
            "https://shopit.lk/wp-content/uploads/2020/05/Nespray-Full-Cream-Milk-Powder-FortiGrow-%E2%80%93-400g.jpg",
          qty: 3,
          pricePerItem: 435,
          totalAmount: 1305,
        },
      ],
      totalOrderAmount: 0,
    };
  }

  render() {
    return (
      <>
        <Title text="Cart" />
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-3">
            {this.state.cartItems.map((cartItem) => (
              <CartItem key={cartItem.itemId} cartItemDetails={cartItem} />
            ))}
          </div>
          <span className="flex flex-col space-y-3 items-center mt-6">
            <h4>Your Total Amount: Rs. 2610.00</h4>
            <button className="bg-slate-800 text-white px-6 py-2 rounded">
              Checkout
            </button>
          </span>
        </div>
      </>
    );
  }
}
