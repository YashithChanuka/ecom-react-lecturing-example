import { Component } from "react";

type FooterProps = {};

type FooterState = {};

export default class Footer extends Component<FooterProps, FooterState> {
  state = {};

  render() {
    return (
      <div className="w-full bg-slate-300 p-4 flex justify-center items-center">
        All Rights Reserved | 2023 | XYZ Online Store
      </div>
    );
  }
}
