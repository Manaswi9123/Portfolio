import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Education theme={this.props.theme} isSection={true} />
        <Experience theme={this.props.theme} isSection={true} />
        <Projects theme={this.props.theme} isSection={true} />
        <Contact theme={this.props.theme} isSection={true} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
