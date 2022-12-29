import React from 'react'
import theImage from '../../assets/the-image.jpg'

function SectionBLeft() {
    const leftStyle = {
        width: '50%',
        fontFamily:'Montserrat',
        fontSize: '18px'

                }
  return (
    <div style={leftStyle}>
           <h2 style={{fontFamily:'Oswald', fontSize:'36px'}}>It doesn’t have to be so hard</h2> 
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

export default SectionBLeft