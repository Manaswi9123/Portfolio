import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const logoName = greeting.logo_name || "";
    const spaceIndex = logoName.indexOf(" ");
    let firstPart = logoName;
    let lastPart = "";
    if (spaceIndex !== -1) {
      firstPart = logoName.substring(0, spaceIndex);
      lastPart = logoName.substring(spaceIndex);
    }

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <a href="#greeting" className="logo">
              <span style={{ color: theme.secondaryText }}> &lt;</span>
              <span className="logo-name">
                <span style={{ color: theme.text }}>{firstPart}</span>
                <span style={{ color: theme.imageHighlight }}>{lastPart}</span>
              </span>
              <span style={{ color: theme.secondaryText }}>/&gt;</span>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <a
                  href="#greeting"
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
