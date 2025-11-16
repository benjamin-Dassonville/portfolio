import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./utils.js";
import "./styles.scss";
import { MdWork } from 'react-icons/md';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        HeaderText="Mon Parcours"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Expérience</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--green-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                    background: 'none',
                    color: 'var(--green-theme-sub-text-color)',
                    border: '1.5px solid var(--green-theme-main-color)',
                }}
                icon = {<MdWork/>}
                    iconStyle={{
                        background: '#181818',
                        color: 'var(--green-theme-main-color)',
                    }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__education">
          <h3 className="timeline__experience__header-text">Scolarité</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--green-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                    background: 'none',
                    color: 'var(--green-theme-sub-text-color)',
                    border: '1.5px solid var(--green-theme-main-color)',
                }}
                icon = {<MdWork/>}
                    iconStyle={{
                        background: '#181818',
                        color: 'var(--green-theme-main-color)',
                    }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
