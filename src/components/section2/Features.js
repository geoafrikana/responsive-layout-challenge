import React from 'react'

function Features(props) {
    const featureStyle = {
         color: 'white',
        backgroundColor: '#2E323F',
        padding: '5px 20px',
        marginTop: '5px',
        fontFamily: 'Montserrat'

    
    }
  return (
    <div style={featureStyle}>
        <h3 style = {{fontFamily:'Oswald'}}>{props.header}</h3>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default Features