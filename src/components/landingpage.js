import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="./img/image_from_ios.jpg"
              alt="my face"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | Java | React | NodeJS |
                Express | MongoDB
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/zahraa-alshalal-43739a11a/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Bootcamp */}

                <a
                  href="https://bootcamp.berkeley.edu/coding/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-bandcamp" aria-hidden="true"></i>
                </a>

                {/* twitter */}
                <a
                  href="https://twitter.com/al_zaa19650"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>

                {/* Github */}
                <a
                  href="https://github.com/Zahraa985"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
