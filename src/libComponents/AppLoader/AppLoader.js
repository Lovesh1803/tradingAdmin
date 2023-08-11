import React from 'react'
import "./AppLoader.css"

/**
 * 
 * @author Lovesh Singh
 * @since 09-07-2023
 * @description to render App Loader
 * @param {show} loader show value 
 * @returns 
 */
function AppLoader({show}) {
  return (
    <div className='loader' style={{display: show ? 'flex' : 'none'}}>
        <div className='loader__spinner'></div>
    </div>
  )
}

export default AppLoader