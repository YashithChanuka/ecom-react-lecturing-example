import { Component } from "react";
import Title from "../components/Title";

type ContactProps = {};

type ContactState = {};

export default class Contact extends Component<ContactProps, ContactState> {
  state = {};

  render() {
    return (
      <>
        <Title text="Contact Us" />
        <div className="mt-4 flex flex-col items-center justify-center space-y-2">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            neque, quasi fugiat aliquam explicabo iusto eaque facere? Hic,
            aspernatur? Necessitatibus provident cupiditate atque ex qui vitae
            dolorum, tempore rerum fugit? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Temporibus neque, quasi fugiat
            aliquam explicabo iusto eaque facere? Hic, aspernatur? <br /> Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            neque, quasi fugiat aliquam explicabo iusto eaque facere? Hic,
            aspernatur?
          </p>
        </div>
      </>
    );
  }
}
