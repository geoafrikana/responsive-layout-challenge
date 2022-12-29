import React from 'react'
import SectionBLeft from './SectionBLeft'
import SectionBRight from './SectionBRight'
import SectionCSS from './SectionBWrapper.module.css' 


function SectionBWrapper() {
  return (
    <section>
        <div className={SectionCSS.container}>
        <div className={SectionCSS.row}>
<SectionBLeft />
<SectionBRight />
</div>
        </div>
    </section>
  )
}

export default SectionBWrapper