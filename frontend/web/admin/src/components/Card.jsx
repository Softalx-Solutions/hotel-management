import React from 'react'

function Card({children, className}) {
  return (
    <div className={`${className} card`}>{children}</div>
  )
}

export default Card