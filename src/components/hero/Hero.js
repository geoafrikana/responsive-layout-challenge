import React from 'react'
import heroCSS from './Hero.module.css'
import theImage from '../../assets/the-image.jpg'

function Hero() {
  return (
    <header>
    <div className={heroCSS.container}>
        <div className={heroCSS.row}>
<h1 className={heroCSS.heroLeft}>
    Responsive layouts  
    <span className={heroCSS.gold}> don't have to be a struggle</span>
</h1>

<div className={heroCSS.heroRight}>
<img src={theImage} />
<p>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.</p>
<button className={heroCSS.btn}>I WANT TO LEARN</button>
</div>
        </div>
    </div>
    </header>
  )
}

export default Hero