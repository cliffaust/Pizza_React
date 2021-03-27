import Navbar from "./Navbar";
import Slider from "./Slider";
import AboutPizza from "./AboutPizza";
import PizzaTypes from "./PizzaTypes";
import Footer from "./Footer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <AboutPizza></AboutPizza>
        <PizzaTypes></PizzaTypes>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
