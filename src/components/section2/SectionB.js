import React from 'react'
import Left from './left/Left'
import Right from './right/Right'
import SectionCSS from './SectionB.module.css' 


function SectionB() {
  return (
    <section>
        <div className={SectionCSS.container}>
        <div className={SectionCSS.row}>
<Left />
<Right />
</div>
        </div>
    </section>
  )
}

export default SectionB