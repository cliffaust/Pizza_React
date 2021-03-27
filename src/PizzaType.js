import { Component } from "react";

class PizzaType extends Component {
  render() {
    const { text, heading, imageSrc } = this.props;
    return (
      <div className="col-md-3">
        <div className="thumbnail">
          <img src={imageSrc} alt="vegetarian" />
          <div className="caption">
            <h3>{heading}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PizzaType;
