import React from 'react'
import './Styles.css'
import Cards from './Cards'
import card1 from '../Assets/card1.svg'
import card2 from '../Assets/card2.svg'
import card3 from '../Assets/card3.svg'

const Services = () => {
  return (
    <>
    <div className='services'>
        <div className='service-container'>
            <Cards cardImg={card1}/>
            <Cards cardImg={card2}/>
            <Cards cardImg={card3}/>
        </div>
    </div>
    </>
  )
}

export default Services