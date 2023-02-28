import { Component } from "react";

type AddToCartBtnProps = {};

type AddToCartBtnState = {};

export default class AddToCartBtn extends Component<
  AddToCartBtnProps,
  AddToCartBtnState
> {
  state = {};

  render() {
    return (
      <button className="w-full rounded bg-white text-slate-800 border border-slate-800 hover:bg-slate-800 hover:text-white py-2 px-4">
        <h6 className="font-heading">Add To Cart</h6>
      </button>
    );
  }
}
