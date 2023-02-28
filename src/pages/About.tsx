import { Component } from "react";
import Title from "../components/Title";

type AboutProps = {};

type AboutState = {};

export default class About extends Component<AboutProps, AboutState> {
  state = {};

  render() {
    return (
      <>
        <Title text="About Us" />
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
            aspernatur? Necessitatibus provident cupiditate atque ex qui vitae
            dolorum, tempore rerum fugit? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Temporibus neque, quasi fugiat
            aliquam explicabo iusto eaque facere? Hic, aspernatur?
            Necessitatibus provident cupiditate atque ex qui vitae dolorum,
            tempore rerum fugit?
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            neque, quasi fugiat aliquam explicabo iusto eaque facere? Hic,
            aspernatur? Necessitatibus provident cupiditate atque ex qui vitae
            dolorum, tempore rerum fugit? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Temporibus neque, quasi fugiat
            aliquam explicabo iusto eaque facere? Hic, aspernatur? <br /> Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            neque, quasi fugiat aliquam explicabo iusto eaque facere? Hic,
            aspernatur? Necessitatibus provident cupiditate atque ex qui vitae
            dolorum, tempore rerum fugit? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Temporibus neque, quasi fugiat
            aliquam explicabo iusto eaque facere? Hic, aspernatur?
            Necessitatibus provident cupiditate atque ex qui vitae dolorum,
            tempore rerum fugit?
          </p>
        </div>
      </>
    );
  }
}
