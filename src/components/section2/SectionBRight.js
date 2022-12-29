import React from 'react'
import Features from './Features'

function SectionBRight() {
    const divStyle = {
        width: '30%',
       
    }
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
    <div style={divStyle}>
{contents.map((content)=><Features header={content.header}  paragraph={content.paragraph} /> )}
    </div>
  )
}

export default SectionBRight