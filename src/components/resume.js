import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13347.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Zahraa Alshalal</h2>
            <h4 style={{ color: "grey" }}>Pharmacy Technician</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>In the progress of becoming full stack web developer.</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1934 9th Ave Oakland, 94606</p>
            <h5>Phone</h5>
            <p>(510) 365-2689</p>
            <h5>Email</h5>
            <p>zalshala@mail.sfsu.edu</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2016}
              endYear={2022}
              schoolName="My San Francisco State University"
              schoolDescription="Bachelor of Science in Applied Mathematics"
            />

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="UC Berkeley Extension"
              schoolDescription="Coding Bootcamp"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={2016}
              jobName="KQED Television Station"
              jobDescription="Digital Video Editor/Producer"
            />

            <Experience
              startYear={2016}
              endYear="Present"
              jobName="CVS/Pharmacy"
              jobDescription="Pharmacy Tech/inventory specialist"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={60} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={30} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
