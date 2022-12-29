import React from 'react'
import featureCSS from './SectionFeature.module.css'

function SectionFeature(props) {
  return (
    <div class={featureCSS.wrapper}>
        <h2>{props.header}</h2>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default SectionFeature