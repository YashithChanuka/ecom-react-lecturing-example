import { Divider } from "@mui/material";
import { Component } from "react";

type TitleProps = {
  text: string;
};

type TitleState = {};

export default class Title extends Component<TitleProps, TitleState> {
  state = {};

  render() {
    return (
      <>
        <h2 className="font-heading text-gray-800 text-center mb-4">
          {this.props.text}
        </h2>
        <Divider />
      </>
    );
  }
}
