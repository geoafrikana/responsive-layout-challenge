import React from 'react'
import sectionCSS from './SectionAWrapper.module.css'
import SectionFeature from './SectionFeature';


function SectionAWrapper(props) {
const contents = [
    {
        header: 'Mobile-first',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        header: 'Efficient',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        header: 'Done Right',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
]

  return (
    <section className={sectionCSS.section}>
    <div className={sectionCSS.container}>
    <div className={sectionCSS.row}>
    
        {
            contents.map((content)=><SectionFeature header={content.header} paragraph={content.paragraph} /> )
        }
    
    </div>
    </div>
    </section>
  )
}

export default SectionAWrapper