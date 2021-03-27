import PizzaType from "./PizzaType";
import { Component } from "react";

class PizzaTypes extends Component {
  render() {
    return (
      <div className="container pizza- types">
        <div className="row">
          <h3 className="text-center">Pizza Types</h3>

          <PizzaType
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque assumenda sed, nihil error quos minima perspiciatis
                  est vitae expedita quaerat deserunt eligendi corrupti ad natus
                  officia non explicabo! Nisi, id!"
            heading="Vegetarian Pizza"
            imageSrc="images/brenan-greene-HPZs4EXRFSU-unsplash.jpg"
          ></PizzaType>
          <PizzaType
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque assumenda sed, nihil error quos minima perspiciatis
                  est vitae expedita quaerat deserunt eligendi corrupti ad natus
                  officia non explicabo! Nisi, id!"
            heading="Pepperini Pizza"
            imageSrc="images/alan-hardman-SU1LFoeEUkk-unsplash.jpg"
          ></PizzaType>
          <PizzaType
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque assumenda sed, nihil error quos minima perspiciatis
                  est vitae expedita quaerat deserunt eligendi corrupti ad natus
                  officia non explicabo! Nisi, id!"
            headng="Cheese Pizza"
            imageSrc="images/ivan-torres-MQUqbmszGGM-unsplash.jpg"
          ></PizzaType>
          <PizzaType
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque assumenda sed, nihil error quos minima perspiciatis
                  est vitae expedita quaerat deserunt eligendi corrupti ad natus
                  officia non explicabo! Nisi, id!"
            heading="Bossu Pizza"
            imageSrc="images/sheri-silver-A4EtgLN1_Fw-unsplash-300x213.jpg"
          ></PizzaType>
        </div>
      </div>
    );
  }
}

export default PizzaTypes;
