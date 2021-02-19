import React from 'react';
import profilePicture from  '../assets/profile.jpeg';
import CV_PDF from '../assets/VolkanUn-curriculum-vitae.pdf'

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
  resume: (
    <a
      href={CV_PDF}
      target="_blank"
    >
      <i className="fas fa-file"></i>
    </a>
  ),
};


//<img src={profilePicture} alt="avanthika" />
const Footer = () => (
  <div className="sidebar-footer">
    {socialLinks.github}
    {socialLinks.linkedInIcon}
    {socialLinks.mediumIcon}
    {socialLinks.resume}
  </div>
);

export default Footer;
