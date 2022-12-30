import React from 'react'
import FooterCSS from './Footer.module.css'

function Text() {
   

  return (
    <div className={FooterCSS.footerTextGroup}>
      <h3 className={FooterCSS.h3}>About our company</h3>
      <p className={FooterCSS.footerTextP}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam.
      </p>
    </div>
  )
}

export default Text