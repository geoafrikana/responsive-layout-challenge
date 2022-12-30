import React from 'react'
import FeatureBox from './FeatureBox'
import RightCSS from './Right.module.css'

function SectionB() {
    
    const contents = [
        {
            header: 'Break it down',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            header: 'Work your way up',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            header: 'Use Break Points',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
  return (
    <div className={RightCSS.wrapper}>
{contents.map((content)=><FeatureBox key={content.header} header={content.header}  paragraph={content.paragraph} /> )}
    </div>
  )
}

export default SectionB