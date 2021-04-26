import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
        let projectAnimation = "images/portfolio/" + projects.animation;

      return (
        <div key={id++} className="columns portfolio-item">
            <div className="item-wrap">
                  <video preload="true" autoplay="true" muted="true" loop>
                      <source src={projectAnimation} type="video/mp4"/>
                  </video>
            </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <div
                id="portfolio-wrapper"
                className="bgrid-halves s-bgrid-halves cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
