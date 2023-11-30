import React from 'react'
import GridData from './GridData'
import Button from './Button'

const Tabs = () => {
  return (
    <>
    <div className='tabs-contain'>
        <div className='tabs'>
            <div className='tab-links'>
                <button className='isActive'><p>React</p></button>
                <button><p>Fullstack</p></button>
                <button><p>Work Exp</p></button>
                <button><p>Java</p></button>
            </div>
        </div>
        <div className='image-gallery'>
            <GridData size='small' />
            <GridData size='medium' />
            <GridData size='medium' />
            <GridData size='small' /> 
            <GridData size='small' /> 
            <GridData size='medium' />
        </div>
        <Button />
    </div>
    </>
  )
}

export default Tabs