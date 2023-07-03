/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };
  handleClick = (e) => {
    this.setState({
      active: e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img alt="active image" src={images[active]} />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              onClick={this.handleClick}
              data-index={index}
              src={photo}
              key={photo}
              className={active === index ? "active" : ""}
              alt="images"
            />
          ))}
        </div>
      </div>
    );
  }
}
