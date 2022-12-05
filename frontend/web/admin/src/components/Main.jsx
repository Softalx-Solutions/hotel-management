import React from 'react'
import {Header} from './'

function Main({isMenuOpen}) {
  return (
    // <div>
    <div className={`${isMenuOpen && "hidden sm:flex sm:flex-col"}`}>
      <Header title='overview' />
    </div>
  )
}

export default Main