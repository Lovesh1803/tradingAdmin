import React from 'react'
import "./DashboardCard.css"

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description dashboard card component
 * @returns JSX.Element
 */
function DashboardCard({icon}) {
  return (
    <div className='dashboardCard'>
        <h1>
        {icon}
        </h1>
    </div>
  )
}

export default DashboardCard