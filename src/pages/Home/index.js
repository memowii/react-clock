import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { Switch } from '../../components/Switch'
import { Clock } from '../../components/Clock';

export function Home() {
  const [isDateShown, setIsDateShown] = useState(true);

  const toggleDate = () => setIsDateShown(!isDateShown);

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center">
        <span className="m-3">
          <Switch isDateShown={isDateShown} toggleDate={toggleDate}  />
        </span>
        <span className="m-3">
          <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="s" />
        </span>
      </div>

      <div className="d-flex flex-row justify-content-center">
        <Clock isDateShown={isDateShown} />
      </div>
    </div>
  );
}
