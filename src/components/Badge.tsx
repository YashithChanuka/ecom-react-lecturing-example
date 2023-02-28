import { Component } from "react";

type BadgeProps = {
  inStock: boolean;
};

type BadgeState = {};

export default class Badge extends Component<BadgeProps, BadgeState> {
  state = {};

  render() {
    return (
      <div className="flex justify-end">
        <div
          className={`text-white px-2 py-1 rounded ${
            this.props.inStock ? "bg-green-800" : "bg-red-800"
          }`}
        >
          <h6 className="font-heading !font-medium">
            {this.props.inStock ? "In-stock" : "Out of stock"}
          </h6>
        </div>
      </div>
    );
  }
}
