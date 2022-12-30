import React from 'react'
import Links from './Links'
import Text from './Text'
import FooterCSS from './Footer.module.css'

function Footer() {
  const links = [
    {
      title: 'Getting around',
      items: ['Home', 'About', 'Contact']
    },
    {
      title: 'Other things',
      items: ['Lorem ipsum', 'Dolor', 'sit aimet', 'consectetur']
    },
    {
      title: 'And more',
      items: ['Lorem ipsum', 'Dolor', 'sit aimet', 'consectetur']
    },
  ]
  return (
    <footer className={FooterCSS.footer} >
      <h2 className={FooterCSS.h2}>Just scratching the surface</h2>
      <div className={FooterCSS.wrapper}>
        <Text />
{links.map(
  (link)=> <Links key={link.title} title={link.title} itemsList={link.items}/>)}
    </div>
    </footer>
  )
}

export default Footer