import React, { useState } from 'react';
import { LightSpeed } from 'react-awesome-reveal';

import Image1 from '../../assets/images/achievements/btm-img1.jpg';
import Image2 from '../../assets/images/achievements/btm-img2.jpg';
import Image3 from '../../assets/images/achievements/btm-img3.jpg';

import Modal from './split/Modal';

const projects = [
  { 
    id: 1,
    title: 'Top 1 RWC Rating',
    src: Image1,
    alt: 'certificate for top 1 RWC rating and least QA errors',
    desc: 'Top 1 Routine Website Check (RWC) rating and least QA errors.'
  },
  { 
    id: 2,
    title: 'Top Performer',
    src: Image2,
    alt: 'certificate - top performer for december 2019',
    desc: 'Top Performer for the month of December, 2019.'
  },
  { 
    id: 3,
    title: 'Top Performer',
    src: Image3,
    alt: 'certificate - top performer for february 2020',
    desc: 'Top Performer for the month of February, 2020.'
  }
]

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [desc, setDesc] = useState('');

  const handleClick = id => {
    setIsOpen(true)
    setId(id)
    getImage(id)
  }

  const getImage = getId => {
    return projects.some(el => {
        setTitle(el.title)
        setSrc(el.src)
        setAlt(el.alt)
        setDesc(el.desc)
        return el.id == getId
    }); 
  }
  
  return (
    <div className="main_con main_con_full">
      <div className="main_full">
        <LightSpeed direction="right" cascade>
          <h2>Achievements</h2>
          <h4>It's always seems impossible until it's done</h4>
        </LightSpeed>
        <p>My achievements as a Web Developer at Proweaver, Inc.</p>
      </div>
      <ul className="portfolio achievements">
          { projects.map(project => {
            return (
              <li key={project.id}>
                <figure>
                  <img src={project.src} alt={project.alt} />
                </figure>
                <a onClick={() => handleClick(project.id)} href={project.url} target="_blank" rel="noopener noreferrer"></a>
                <span>
                  {project.title}
                </span>
                <small>
                  {project.desc}
                </small>
              </li>
            )
          })}
        </ul>
        { isOpen ? (
          <Modal 
            setIsOpen={setIsOpen}
            src={src}
            alt={alt}
            desc={desc}
            title={title}
          />
        ) : null }
    </div>
  );
};

export default Achievements;
