import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

type AppProps = {};

type AppState = {};

export default class App extends Component<AppProps, AppState> {
  state = {};

  render() {
    return (
      <>
        <div className="min-h-screen bg-slate-200 text-slate-800">
          <Header />
          <Content />
        </div>
        <Footer />
      </>
    );
  }
}
