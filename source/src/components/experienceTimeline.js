import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import useThemeContext from "../hooks/themeContext"
import Icon from '../icon';

function ExperienceTimeline(params) {
  const { style } = useThemeContext()
  return (
    <>
      <hr />
      <h2 className={style === 'dark' ? "text-orange" : ""}>My Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FFF', color: '#263549' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Icon src="https://pbs.twimg.com/profile_images/986225896683180035/bfzu1sSF.jpg" />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle text-orange">Continuous Software Ltd</h4>
          <p>
            Dublin, Ireland
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Icon src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1479329749/kvxewelwprqliqnedzpi.jpg" />}
        >
          <h3 className="vertical-timeline-element-title">React.js Consultant</h3>
          <h4 className="vertical-timeline-element-subtitle text-orange">Dell EMC</h4>
          <p>
            Riyadh, Saudi Arabia
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Icon src="https://www.media.gov.sa/media/thumb/f6/3c/800_a8d847a832.jpg" />}
        >
          <h3 className="vertical-timeline-element-title">React.js Consultant</h3>
          <h4 className="vertical-timeline-element-subtitle text-orange">General Commission for Audiovisual Media</h4>
          <p>
            Riyadh, Saudi Arabia
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Icon src="https://lh4.googleusercontent.com/-UMB_Uj0cxUg/AAAAAAAAAAI/AAAAAAAAAAA/fLGJ_VY2ejY/s44-p-k-no-ns-nd/photo.jpg" />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle text-orange">Software Design Ltd</h4>
          <p>
            The Digital Hub, Dublin
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Icon src="https://www.pugh.co.uk/wp-content/uploads/2017/04/quark-logo.png" />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer (Intern)</h3>
          <h4 className="vertical-timeline-element-subtitle text-orange">Quark Europe</h4>
          <p>
            Dublin, Ireland
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          // icon={<StarIcon />}
        /> */}
      </VerticalTimeline>
      <hr />
    </>
  );
}

export default ExperienceTimeline;
