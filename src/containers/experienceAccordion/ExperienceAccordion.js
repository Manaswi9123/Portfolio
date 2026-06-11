import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.highlight}`,
                      border: `2px solid ${theme.imageHighlight}`,
                      borderRadius: `8px`,
                      marginBottom: `10px`,
                      fontFamily: "Google Sans Regular",
                      fontSize: `24px`,
                      color: `${theme.text}`,
                      padding: `16px 24px`,
                      ":hover": {
                        color: `${theme.secondaryText}`,
                      },
                    }),
                  },
                  ToggleIcon: {
                    style: () => ({
                      color: `${theme.text}`,
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
{section["experiences"].map((experience,index) => {
                  return (
                    <ExperienceCard index={index} totalCards={section["experiences"].length} experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
