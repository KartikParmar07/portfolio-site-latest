import React from 'react'

const GridData = ({size}) => {
  return (
    <>
    <div className={size==='small'?'grid-item small':size==='medium'?'grid-item medium':size==='large'?'grid-item large':''}>

    </div>
    </>
  )
}

export default GridData