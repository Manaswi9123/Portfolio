import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "AiDeepLearningImg")
    return (
      <img
        alt="Artificial Intelligence & Deep Learning"
        src={require("../../assets/images/home/aidl.png")}
        style={{
          width: "100%",
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 10px 30px -5px",
        }}
      />
    );
  else if (props.fileName === "FullStackImg")
    return (
      <img
        alt="Natural Language Processing & AI Web Apps"
        src={require("../../assets/images/home/nlpwebai.png")}
        style={{
          width: "100%",
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 10px 30px -5px",
        }}
      />
    );
  else if (props.fileName === "CloudInfraImg")
    return (
      <img
        alt="Data Engineering & Analytics"
        src={require("../../assets/images/home/dea.png")}
        style={{
          width: "100%",
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 10px 30px -5px",
        }}
      />
    );
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: "0" }}>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <li
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText, marginBottom: "10px" }}
                        >
                          {skillSentence.replace(/^⚡\s*/, "")}
                        </li>
                      );
                    })}
                  </ul>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
