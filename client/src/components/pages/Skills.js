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
        <p>I may not have much experience yet, however I am still in progress learning a lot of languages. Below are the current skills I have acquired:</p>
        <div className="graph">
          <Skill skill={'HTML'} skillRate={89} />
          <Skill skill={'CSS'} skillRate={84} />
          <Skill skill={'JavaScript'} skillRate={79} />
          <Skill skill={'ReactJS'} skillRate={73} />
          <Skill skill={'jQuery'} skillRate={75} />
          <Skill skill={'PHP'} skillRate={59} />
          <Skill skill={'Git'} skillRate={73} />
          <Skill skill={'WordPress'} skillRate={81} />
        </div>
      </div>
    </div>
  );
};

export default Skills;