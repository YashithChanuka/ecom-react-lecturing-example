import { Component } from "react";

type ViewItemBtnProps = {};

type ViewItemBtnState = {};

export default class ViewItemBtn extends Component<
  ViewItemBtnProps,
  ViewItemBtnState
> {
  state = {};

  render() {
    return (
      <button className="w-full rounded bg-white text-slate-800 border border-slate-800 hover:bg-slate-800 hover:text-white py-2 px-4">
        <h6 className="font-heading">View Item</h6>
      </button>
    );
  }
}
