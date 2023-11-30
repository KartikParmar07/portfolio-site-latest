import React from 'react'
import mongo from '../Assets/Mongo.png'
import react from '../Assets/React.png'
import node from '../Assets/Node.png'
import express from '../Assets/express.png'
import sql from '../Assets/sql.png'
// import java from '../Assets/java.png'

const Brands = () => {
  return (
    <>
    <div className='brands-contain'>
        <img src={mongo} alt="Mongo" />
        <img src={express} alt="Mongo" />
        <img src={react} alt="Mongo" />
        <img src={node} alt="Mongo" />
        <img src={sql} alt="Mongo" />
    </div>
    </>
  )
}

export default Brands