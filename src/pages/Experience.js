import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import '../App.css'
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import BuildIcon from '@mui/icons-material/Build';



export const Experience = () => {
  return (
    <div className='lastcolor'>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Always learning"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<HtmlIcon />}
        >
          <h3 className="vertical-timeline-element-title">FRONT-END SKILLS</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            As a frontend developer, I create a lot of projects with new technologies and I always try to do something creative using this stacks and technologies that I build projects with are<br/>
             ReactJS, Typescript, Tailwind, MaterialUI, Html, CSS, Javascript</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">BACK-END Skills</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            As a Backend developer, I have not created many projects, but I am  working with these technologies. I am also open to learning more and improving my skills in Backend and its associated technologies.I am learning NodeJS,ExpressJS,MongoDB,Firebase
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BuildIcon />}
        >
          <h3 className="vertical-timeline-element-title">Tools</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            I am always open to exploring new tools and technologies to improve my skills and stay up-to-date with the latest trends in web development.
            "These are the tools I am currently working with for web development, including but not limited to,<br/>
            Git, GitHub, Figma, Canva, wayscript
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MusicNoteIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Extrasss</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
          "As a developer with a passion for music production, I am proficient in using FL Studio, alongside my programming expertise, to create and produce high-quality music."
          </p>
        </VerticalTimelineElement>


        {/* <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        /> */}
      </VerticalTimeline>
    </div>
  )
}
