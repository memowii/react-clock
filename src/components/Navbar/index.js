import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark py-3">
      <div className="container">
        <div className="row m-auto">
          <FontAwesomeIcon icon={faClock} size="4x" className="text-white" />
          <div className="h1 ml-3 my-auto text-light" href="/">
            React Clock
          </div>
        </div>
      </div>
    </nav>
  );
}
