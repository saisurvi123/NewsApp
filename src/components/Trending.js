import React, { Component } from "react";
import image from "./pic.jpg";

export class Trending extends Component {
  render() {
    return (
      <div className="container  my-6">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="..." alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint dolores accusantium sequi magnam ducimus provident facere est, labore nesciunt magni voluptate, animi itaque fugiat aliquid. Eaque totam neque natus!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
