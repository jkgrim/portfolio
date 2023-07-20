import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles/app.scss";
import companyLogo from "./images/main-logo.png";
import me from "./images/me.png";
import swirlies from "./images/swirlies.png";
import circles from "./images/circles.png";

function App() {
  const skills = [
    { name: "React", experience: 2 },
    { name: "JavaScript", experience: 2 },
    { name: "Python", experience: 2 },
    { name: "Figma", experience: 2 },
    { name: "SQLAlchemy", experience: 2 },
    { name: "QA", experience: 2 },
  ];

  console.log(skills);

  const renderSkills = skills.map((skill) => {
    return (
      <div className="skill">
        <div className="skill-name">{skill.name}</div>
        <div className="experience">{skill.experience} years of Experience</div>
      </div>
    );
  });

  return (
    <div className="portfolio-container">
      <div className="nav-container">
        <div className="home-wrapper">
          <img src={companyLogo} alt="Jacob Grimshaw Company Logo" />
          JG
        </div>

        <div className="media-wrapper">
          <a href="https://github.com/jkgrim" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            className="linked-in"
            href="https://www.linkedin.com/in/jkgrim/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="mailto:jacobkgrimshaw@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
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
              I am a Front End developer with industry experience building
              websites and web applications.
            </div>

            <div className="subtext">
              I specialize in React and JavaScript and have professional
              experience working with SQLAlchemy and Python.
            </div>

            <div className="subtext bottom">
              I love to build, problem solve, as well as create, and I am
              passionate about what I do!
            </div>
          </div>

          <div className="contact-me">
            <a href="mailto:jacobkgrimshaw@gmail.com">CONTACT ME</a>
          </div>

          <div className="view-portfolio-wrapper">
            <div className="view-portfolio">
              <a href="https://github.com/jkgrim">
                View Portfolio
                <FontAwesomeIcon icon={faCircleChevronRight} />
              </a>
            </div>
          </div>
        </div>

        <div className="self-img">
          <img src={me} alt="a very handsome man" />
        </div>
      </div>

      <hr />

      <div className="skills-container">{renderSkills}</div>
    </div>
  );
}
export default App;
