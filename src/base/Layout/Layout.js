import React, { useState } from 'react'
import "./Layout.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description app layout component with sidebar & navbar
 * @param {children} child components of Layout Wrapper component
 * @returns JSX.Element
 */
function Layout({children}) {

  const[isSidebarOpen, setIsSidebarOpen] = useState(true)

  /**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description handle navbar hamburger click listener
 * @returns JSX.Element
 */
  const onClickNavbarIcon = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='layout'>
        <div className='layout__sidebar' style={{width: isSidebarOpen ? "20%" : "5%", transition: "width 0.5s"}}>
            <Sidebar onClickNavbarIcon={onClickNavbarIcon} isSidebarOpen={isSidebarOpen}/>
        </div>

        <div className='layout__content' style={{width: isSidebarOpen ? "80%" : "100%", transition: "width 0.5s"}}>
            <Navbar />
            <div className='layout_content-container' >
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout