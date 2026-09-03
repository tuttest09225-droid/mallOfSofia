import { Link } from "react-router-dom";
import "./MallOfSofiaLogo.css";

import logoIcon from "../assets/mall-of-sofia-logo.png";

export default function MallOfSofiaLogo({ to = "/", className = "" }) {
  return (
    <Link
      to={to}
      className={`mall-logo ${className}`}
      aria-label="Mall of Sofia"
    >
      <div className="mall-logo-inner">
        {/* ORIGINAL LOGO ICON — do not redraw */}
        <img src={logoIcon} alt="" className="mall-logo-icon" />

        <svg
          className="mall-logo-wordmark"
          viewBox="0 0 400 110"
          role="img"
          aria-labelledby="mall-logo-title"
        >
          <title id="mall-logo-title">Mall of Sofia — The Heart of Sofia</title>

          {/* Mall */}
          <text x="15" y="45" className="mall-logo-mall text-base-content/70">
            Mall
          </text>

          {/* OF */}
          <text x="115" y="45" className="mall-logo-of text-base-content/70">
            OF
          </text>

          {/* Sofia */}
          <text x="150" y="70" className="mall-logo-sofia text-base-content/70">
            Sofia
          </text>

          {/* The Heart */}
          <text x="2" y="75" className="mall-logo-heart text-base-content/70">
            The Heart
          </text>

          {/* ECG */}
          <g className="mall-logo-ecg">
            {/* Base ECG line */}
            <path
              className="mall-logo-ecg-base"
              d="
      M 0 53
      H 90

      L 100 53
      L 105 30
      L 110 53

      L 110 53
      L 115 72  
      L 120 53

      H 150
    "
            />

            {/* Traveling heartbeat */}
            <path
              className="mall-logo-ecg-pulse"
              pathLength="100"
              d="
      M 0 53
      H 90

      L 100 53
      L 105 30
      L 110 53

      L 110 53
      L 115 72  
      L 120 53

      H 150
    "
            />
          </g>
        </svg>
      </div>
    </Link>
  );
}
