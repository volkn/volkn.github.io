import React from 'react';

//import {staticContent, socialLinks} from '../utils'

const socialLinks = {
  email: (
    <a className="desc-links" href="mailto:volkan.un@outlook.com">
      email
    </a>
  ),
  linkedin: (
    <a
      target="_blank"
      className="desc-links"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/volkan-un"
    >
      linkedin
    </a>
  ),
  github: (
    <a
      href="https://github.com/volkn"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-github"></i>
    </a>
  ),
  linkedInIcon: (
    <a
      href="https://www.linkedin.com/in/avanthika-meenakshi-41b105b2/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-linkedin"></i>
    </a>
  ),
  mediumIcon: (
    <a
      href="https://medium.com/@volkn"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-medium-m"></i>
    </a>
  ),
};

const staticContent = [
  <p key="info-1">
    I'm a self tought programmer. I was that kid who loved mathematics. Over the years somehow I managed to study mathematics and achive my childhood dream while I tought myself new things like; Web Developnment, Data Science, Machine Learning, Robotics... I'm obsessed with the term "value". I want to be valuable to the society that I am in therefore I am always learning. I owe a low of thing to stackoverflow, kaggle, medium and various blog writers.
  </p>,
  <p key="info-2">
    While I'm not coding or competing in kaggle, I play Go (Baduk), read comic books and play with my vim configs.
  </p>,
  <p key="info-3">
    If you wish to connect with me, drop me an {socialLinks.email} - I'm
    quick when it comes to responding to emails. Or leave a message for me on{' '}
    {socialLinks.linkedin}.
  </p>,
];


const IntroSection = () => (
  <div className="home">
    <span className="wave">👋</span>
    <span className="heading">Hi, I am Volkan</span>
    <p className="home__about">Fullstack developer, Data Scientist, Mathematician, Kaggler</p>
    <div className="home__desc">
      {staticContent.map((content) => content)}
    </div>
    <div className="m-30 heading">
      Contact Me
    </div>
    <a
      className="desc-links heading-link"
      href="mailto:volkan.un@outlook.com"
    >
      volkan.un@outlook.com
    </a>
  </div>
);

const ProfileInfo = () => (
  <>
    <IntroSection />
  </>
);

export default ProfileInfo;
