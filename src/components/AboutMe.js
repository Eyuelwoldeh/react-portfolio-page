import React from 'react';
import '../AboutMe.css';
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';


function AboutMe() {

  return (
    <div>
    <section id="about">
      <h1>Eyuel Woldehanna</h1>
      <p>
        Hi! I'm Eyuel Woldehanna, a Computer Science and Quantitative Economics student driven by a passion 
        for solving real-world challenges with innovative technology. My academic journey has provided me 
        with the tools to approach problems analytically, from creating scalable software solutions to 
        leveraging financial systems to empower decision-making.
      </p>
      <p>
        With a focus on integrating data analysis with intuitive design, I've worked on projects involving 
        financial modeling and machine learning applications, developing solutions that are not only functional 
        but also user-friendly. My vision is to make technology more accessible, especially in fields like 
        asset management, real estate, and economic policy, bridging the gap between data and people.
      </p>
      <p>
      I've had the opportunity to work on projects ranging from financial modeling applications to machine learning algorithms. 
      One recent project involved creating tools to predict real estate trends, helping identify investment opportunities and optimize 
      resource allocation. Through these experiences, I've developed a strong belief in the importance of user-centered design—technology is 
      only as impactful as its usability.
      </p>
      </section>
      <section id="about">
      <h2>Research and Interests</h2>
      <p>
      My interests lie in applying data-driven solutions to big challenges. Whether it's optimizing financial systems, improving economic policy, 
      or creating scalable software, I'm drawn to work that bridges the gap between raw data and actionable insight. One of my areas of focus has 
      been integrating machine learning into programmatic decision-making, particularly through predictive modeling.
      </p>
      <p>
      I'm also fascinated by the role technology plays in democratizing access to information, especially in fields like real estate and public policy. 
      By combining computational rigor with economic intuition, I aim to make tools that are both powerful and approachable for everyone, regardless of their technical background.
      </p>
      </section>
      <section id="about">
      <h2>Personal Life</h2>
      <p>
      I'm passionate about football (soccer) and rarely miss a chance to follow my favorite teams. 
      In my downtime, I enjoy coding personal projects, exploring financial markets, and learning new tools that push the boundaries of what I can create.
      </p>
      <p>
      Music and storytelling are also close to my heart. I find inspiration in a wide range of genres, from electronic beats that fuel my coding sessions 
      to acoustic tunes that help me relax. I also love connecting with others over shared passions—whether it's through a heated game of FIFA or discussing the latest tech trends.
      </p>
    </section>

    <section id="about">
    <h2>Looking Ahead</h2>
      <p>
      My long-term vision is to work at the intersection of technology, finance, and public policy. I aspire to create systems and tools that help 
      organizations and individuals make smarter, data-driven decisions. From designing algorithms that optimize investments to building platforms 
      that simplify financial planning, I want to shape the future of tech-driven solutions.
      </p>
      <p>
      Ultimately, my goal is to keep learning, growing, and making a positive impact wherever I go.
      </p>
    </section>
    <div className='icon-container'>
    <section id="about">
        <IconContext.Provider value={{ size: "4em", className: "react-icons" }}>
          <a 
            href="https://linkedin.com/in/woldehanna" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <FaLinkedin />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "4em", className: "react-icons" }}>
          <a
            href="https://github.com/Eyuelwoldeh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
          >
            <FaGithub />
          </a>
        </IconContext.Provider>
     </section>
     </div>
     </div>
  );
}

export default AboutMe;
