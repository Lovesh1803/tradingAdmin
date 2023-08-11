import React from 'react'
import { TbFaceIdError } from "react-icons/tb";
import Navbar from '../Navbar/Navbar';

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description 404 component
 * @returns JSX.Element
 */
function NoPage() {
  return (
    <div>
      <Navbar />
      <TbFaceIdError color={"#747474"} size={200}/>
    </div>
  )
}

export default NoPage