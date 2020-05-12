import React from "react";
import { LightSpeed } from "react-awesome-reveal";

import Dan from "../../assets/images/dan.png";

const About = () => {
  return (
    <div className="main_con" id="ab">
      <div className="main_left">
        <figure>
          <img src={Dan} alt="dan quesada iii" />
        </figure>
      </div>
      <div className="main_right">
        <LightSpeed direction="right" cascade>
          <h2>Hi, I'm Dan!</h2>
          <h4>A Web Developer | Designer | Otaku</h4>
        </LightSpeed>
        <p>I am currently working as a Web Developer for a year. It might not sound like much experience, but this has been a huge boost for my career and helped me develop as a professional. I prioritize in web modifications, thus receiving different kind of task daily, especially on layouts using HTML &amp; CSS. Although I may not have an experience yet in making web applications, it didn't stop me to self study more about it.</p>
        <p>I really love to build web applications that are user-friendly and is useful on a daily basis, if possible. Without a college degree, this wasn't a hindrance for me to learn programming especially on JavaScript language. I watched a lot of programming tutorials and read online tutorials about JavaScript before proceeding with jQuery library and frameworks such as ReactJS.</p>
        <p>I started from scratch in ReactJS, from building my first simple To-do application to building an application with a global storage, Redux. In my spare time, aside from coding, I love to watch anime series or movies, or just simply chilling and listening to music, because why not?</p>
        <p>Anyway, I think that's all about me for now. If you have any questions or concerns, feel free to contact me.</p>
      </div>
    </div>
  );
};

export default About;
