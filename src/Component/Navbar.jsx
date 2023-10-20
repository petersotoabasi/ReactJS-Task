import React, { Component } from "react";
import Button from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-light">
          <div className="container fixed-tp p-3">
            <a className="navbar-brand fw-bold fs-2" href="#">
              Atomic
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    FAQs
                  </a>
                </li>
              </ul>
              <div className="d-flex gap-3 ms-auto">
                <Button
                  color="bg-success rounded-5 btn btn-sm"
                  text="text-light px-2"
                  name="Log In"
                />
                <Button
                  color="bg-light rounded-5 btn btn-sm"
                  text="text-dark px-2"
                  name="Sign Up"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
