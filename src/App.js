import "./styles/app.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import companyLogo from "./images/main-logo.png";
import me from "./images/me.png";
import swirlies from "./images/swirlies.png";
import circles from "./images/circles.png";
import sudokuSolver from "./images/sudoku-solver.png";
import keyboard from "./images/keyboard2.webp";
import code from "./images/code.jpeg";

export default function App() {
  const skills = [
    { name: "React", icon: "fa-brands fa-react" },
    { name: "JavaScript", icon: "fa-brands fa-square-js" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "Figma", icon: "fa-brands fa-figma" },
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "Sass", icon: "fa-brands fa-sass" },
    { name: "SQL", icon: "fa-solid fa-database" },
    { name: "QA", icon: "fa-solid fa-puzzle-piece" },
  ];

  const renderSkills = skills.map((skill) => {
    return (
      <div className="skill">
        <FontAwesomeIcon icon={skill.icon} />
        <div className="skill-name">{skill.name}</div>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="portfolio-container">
        <div className="nav-container">
          <a
            className="home-wrapper"
            href="https://github.com/jkgrim?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img src={companyLogo} alt="Jacob Grimshaw Company Logo" />
            JG
          </a>

          <div className="media-wrapper">
            <a
              href="https://github.com/jkgrim?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>

            <a
              className="linked-in"
              href="https://www.linkedin.com/in/jkgrim/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>

            <a href="mailto:jacobkgrimshaw@gmail.com">
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </a>
          </div>
        </div>

        <img
          className="swirlies"
          src={swirlies}
          alt="swirlies to fill in white space"
        />

        <img
          className="circles"
          src={circles}
          alt="circles to fill in white space"
        />

        <div className="introduction-container">
          <div className="introduction-wrapper">
            <div className="intro-header top">Nice to meet you!</div>
            <div className="intro-header">
              I'm <em>Jacob Grimshaw</em>.
            </div>

            <div className="subtext-wrapper">
              <div className="subtext">
                I am a Full Stack developer with industry experience building
                client websites and web applications.
              </div>

              <div className="subtext">
                I specialize in React and Python and have professional
                experience working with SQL, JavaScript, and Figma.
              </div>

              <div className="subtext bottom">
                I love to create and problem solve, and I am passionate about
                what I do!
              </div>
            </div>

            <div className="view-portfolio-wrapper">
              <div className="view-portfolio">
                <a
                  href="https://github.com/jkgrim?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Portfolio
                  <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="self-img">
            <img src={me} alt="a very handsome man" />
          </div>
        </div>

        <hr />

        <div className="skills-header">What I know:</div>
        <div className="skills-container">{renderSkills}</div>

        <img
          className="lower-swirlies"
          src={swirlies}
          alt="swirlies to fill in white space"
        />

        <div className="projects-container">
          <div className="projects-header">What I've Done:</div>

          <div className="projects-wrapper">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={keyboard} alt="mechanical keyboard" />
                </div>
                <div class="flip-card-back">
                  <h1>Touch Typing Trainer</h1>
                  <p>React | HTML | CSS</p>

                  <div className="link-wrapper">
                    <a
                      href="https://typing-trainer-ten.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Try it!
                    </a>

                    <a
                      href="https://github.com/jkgrim/typing-trainer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={sudokuSolver} alt="sudoku puzzle" />
                </div>
                <div class="flip-card-back">
                  <h1>Sudoku Solver</h1>
                  <p>React | HTML | CSS</p>

                  <div className="link-wrapper">
                    <a
                      href="https://sudoku-solver-cyan.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Try it!
                    </a>

                    <a
                      href="https://github.com/jkgrim/Sudoku-Solver"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={code} alt="random code" />
                </div>
                <div class="flip-card-back">
                  <h1>More Code</h1>
                  <p>Check out my other repositories!</p>
                  <div className="link-wrapper">
                    <a
                      href="https://github.com/jkgrim?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      My GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="copyright-media-wrapper">
          <div className="copyright">
            <em>© 2023 </em> Jacob Grimshaw.
          </div>

          <div className="media-wrapper">
            <a
              href="https://github.com/jkgrim?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>

            <a
              className="linked-in"
              href="https://www.linkedin.com/in/jkgrim/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>

            <a href="mailto:jacobkgrimshaw@gmail.com">
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
