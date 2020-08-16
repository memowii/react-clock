import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { Switch } from '../../components/Switch'

export function Home() {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center">
        <span className="m-3">
          <Switch checked />
        </span>
        <span className="m-3">
          <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="s" />
        </span>
      </div>
    </div>
  );
}
