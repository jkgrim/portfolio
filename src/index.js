import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  faEnvelope,
  faCircleChevronRight,
  faFlask,
  faPuzzlePiece,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faReact,
  faSquareJs,
  faPython,
  faFigma,
  faSass,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faEnvelope,
  faCircleChevronRight,
  faFlask,
  faPuzzlePiece,
  faDatabase,
  faGithub,
  faLinkedin,
  faReact,
  faSquareJs,
  faPython,
  faFigma,
  faSass,
  faHtml5
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
