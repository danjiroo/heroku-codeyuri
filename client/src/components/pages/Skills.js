import React from "react";
import { LightSpeed } from "react-awesome-reveal";

import Skill from './split/Skill';

const Skills = () => {
  return (
    <div className="main_con main_con_full">
      <div className="main_full">
        <LightSpeed direction="right" cascade>
          <h2>Skills</h2>
          <h4>Current skills I have learned</h4>
        </LightSpeed>
        <p>I may not have much experience yet, however I am still in progress learning a lot of technologies. Below are the current skills I have acquired:</p>
        {/* <div className="graph">
          <Skill skill={'HTML'} skillRate={89} />
          <Skill skill={'CSS'} skillRate={84} />
          <Skill skill={'JavaScript'} skillRate={79} />
          <Skill skill={'ReactJS'} skillRate={73} />
          <Skill skill={'jQuery'} skillRate={75} />
          <Skill skill={'PHP'} skillRate={59} />
          <Skill skill={'Git'} skillRate={73} />
          <Skill skill={'WordPress'} skillRate={81} />
        </div> */}
        <div className="tech-list">
          <div className="tech-item">
            <img
              src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.svg"
              alt="HTML Logo"
            />
            <p>HTML</p>
          </div>
          <div className="tech-item">
            <img
              src="https://e7.pngegg.com/pngimages/239/228/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png"
              alt="CSS Logo"
            />
            <p>CSS</p>
          </div>
          <div className="tech-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript Logo"
            />
            <p>JavaScript</p>
          </div>
          <div className="tech-item">
            <img
              src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png"
              alt="TypeScript Logo"
            />
            <p>TypeScript</p>
          </div>
          <div className="tech-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              alt="ReactJS Logo"
            />
            <p>ReactJS</p>
          </div>
          <div className="tech-item">
            <img
              src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
              alt="NextJS Logo"
            />
            <p>NextJS</p>
          </div>
          <div className="tech-item">
            <img src="https://redux.js.org/img/redux.svg" alt="Redux Logo" />
            <p>Redux</p>
          </div>
          <div className="tech-item">
            <img
              src="https://material-ui.com/static/logo.png"
              alt="Material UI Logo"
            />
            <p>Material UI</p>
          </div>
          <div className="tech-item">
            <img
              src="https://www.daggala.com/static/228867c3668e439101821568a8a03b54/21b1a/sc.webp"
              alt="Styled Components Logo"
            />
            <p>Styled Components</p>
          </div>
          <div className="tech-item">
            <img
              src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp"
              alt="Tailwind Logo"
            />
            <p>Tailwind</p>
          </div>
          <div className="tech-item">
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="Git Logo"
            />
            <p>Git</p>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
              alt="NodeJS Logo"
            />
            <p>NodeJS</p>
          </div>
          <div className="tech-item">
            <img
              src="https://miro.medium.com/v2/resize:fit:880/format:webp/1*J3G3akaMpUOLegw0p0qthA.png"
              alt="Rest API Logo"
            />
            <p>Rest API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;