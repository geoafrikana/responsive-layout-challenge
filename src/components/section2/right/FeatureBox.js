import React from 'react'
import style from './FeatureBox.module.css'

function FeatureBox(props) {


  return (
    <div className={style.wrapper}>
        <h3 className={style.header}>{props.header}</h3>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default FeatureBox