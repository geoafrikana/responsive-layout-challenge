import React from 'react'
import FooterCSS from './Footer.module.css'

function Links(props) {
  
  return (
    <div className={FooterCSS.footerLinkGroup}>
      <h3 className={FooterCSS.h3}>{props.title}</h3>
      <ul className={FooterCSS.ul}>
        {props.itemsList.map(link=> <li className={FooterCSS.li} key={link}>{link}</li>)}
      </ul>
    </div>
  )
}

export default Links