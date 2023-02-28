import { Component } from "react";
import { NavLink } from "react-router-dom";

type HeaderProps = {};

type HeaderState = {};

export default class Header extends Component<HeaderProps, HeaderState> {
  state = {};

  render() {
    const activeLink = "font-heading cursor-pointer border-b-2 border-b-black";
    const normalLink = "font-heading cursor-pointer";

    return (
      <div className="fixed z-10 top-0 h-20 w-full bg-slate-300 p-4 flex items-center">
        <div className="flex w-full">
          <div className="w-1/3">
            <h3 className="font-base-italic">XYZ Online Store</h3>
          </div>
          <nav className="w-2/3 flex justify-around">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Catalog
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Contact
            </NavLink>
            <NavLink
              to={"/cart"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Cart
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}
