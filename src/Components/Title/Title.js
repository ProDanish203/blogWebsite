import React from 'react'
import "./Title.css"

export const Title = ({title ,color}) => {
  return (
    <>
    <div className="title-container">

    <div style={{color: color}} className="title">{title}</div>
    <p style={{color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </>
  )
}
