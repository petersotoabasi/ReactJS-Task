import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import Card from "./Card";
import { Icon } from "@iconify/react";
import Navbar from "./Navbar";


export default class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="hero-img">
          <Navbar />
          <div className="container d-lg-flex pt-5 mt-2 mb-4 mb-xl-0 text-center text-md-start">
            <div>
              <h1 className="display-4 fw-bold mb-3 pt-4 ls-sm">
                Design a better Website <br />
                template
              </h1>
              <p className="mb-4 pt-2 fs-4">
                Building your brand's Website and get detailed insights on how
                templates <br /> are Created
              </p>
              <Button
                color="bg-success"
                text="text-white"
                name="FREE DOWNLOAD"
              />
            </div>
            <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-12 mt-5 col-md-6">
            <div className="text-center">
              <a
                href="https://www.youtube.com/watch?v=JRzWRZahOVU"
                class="text-dark mt-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="display-3 border rounded-circle shadow-sm mt-5 iconify iconify--gg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                ><path
                    fill="currentColor"
                    d="m15 12.33l-6 4.33V8l6 4.33Z"
                  ></path>
                </svg>
              </a>
            </div>
            </div>
          </div>
          <div
            className="container bg-white cardBox"
            // s
          >
            <div className="row">
              <div className="col-12 col-md-4 ">
                <Card
                  title={
                    <Icon
                      icon="emojione-monotone:light-bulb"
                      className="custom-icon"
                    />
                  }
                  subtitle="Intuitive Thinking"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate."
                />
              </div>

              <div className="col-12 col-md-4">
                <Card
                  title={<Icon icon="la:carrot" className="custom-icon" />}
                  subtitle="Orange for Carrots"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate."
                />
              </div>
              <div className="col-12 col-md-4">
                <Card
                  title={<Icon icon="la:infinity" className="custom-icon" />}
                  subtitle="Infinite Possibilities"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
