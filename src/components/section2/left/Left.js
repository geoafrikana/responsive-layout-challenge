import React from 'react'
import theImage from '../../../assets/the-image.jpg'
import LeftCSS from './Left.module.css'

function Left() {

  return (
    <div className={LeftCSS.wrapper}>
<h2 className={LeftCSS.header}>It doesn’t have to be so hard</h2> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam.</p>
        <img src={theImage} />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam.
        </p>
    </div>
  )
}

export default Left