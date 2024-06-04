import React from 'react'
import './Title.css'

export const Title = ({subTitle,title}) => {
  return (
    <div className='title'>
        <h3>{subTitle}</h3>
        <h2>{title}</h2>
    </div>
  )
}
