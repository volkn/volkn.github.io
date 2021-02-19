import React, {useState} from 'react';
import Timeline from '../components/Timeline';
import education from './education.json';
import {Badge} from 'reactstrap';

const Education = () => {
  const [expandedExperiences, setExpandedExperiences] = useState({});
  const toggleShow = (expandedWorkplace) => {
    setExpandedExperiences({
      ...expandedExperiences,
      [expandedWorkplace]: !expandedExperiences[expandedWorkplace],
    });
  };
  return (
    <>
      <h1 className="sub-heading resume-title">Education_</h1>
      <Timeline>
        {Object.keys(education).map((workplace, index) => {
          const exp = education[workplace];
          const side = index % 2 === 0 ? 'left' : 'right';
          const entriesToShow = expandedExperiences[workplace]
            ? exp.projects
            : [];
          return (
            <Timeline.Item
              key={workplace}
              title={exp.companyName}
              subtitle={exp.role}
              dates={exp.dates}
              side={side}
              content={
                <>
                  <div className="timeline-skills">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={`${exp.companyName}${skill}`}
                        color="secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {entriesToShow.map((detail) => {
                    return (
                      <div className="projects" key={detail.client}>
                        <h6 className="project-title">{detail.client}</h6>
                        {detail.workDetails.map((work) => (
                          <div key={work}>- {work}</div>
                        ))}
                      </div>
                    );
                  })}
                  <a
                    href="javascript:void(0)"
                    className="timeline-show-link"
                    onClick={() => toggleShow(workplace)}
                  >
                    Read {expandedExperiences[workplace] ? 'less' : 'more'}
                  </a>
                </>
              }
            />
          );
        })}
      </Timeline>
    </>
  );
};

export default Education;
