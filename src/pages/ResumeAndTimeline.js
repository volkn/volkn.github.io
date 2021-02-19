import React from 'react';
import WorkExperience from './Work';
import Competitions from './Competitions';
import Education from './Education';
import Skills from './Skills';
import moment from 'moment';

const ResumeAndTimeline = () => {
  return (
    <>
      <WorkExperience />
      <Education />
      <Competitions />
      <Skills />
    </>
  );
};

export default ResumeAndTimeline;
