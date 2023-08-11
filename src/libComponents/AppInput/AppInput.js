import React, { useEffect } from 'react'
import "./AppInput.css"

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description input component
 * @returns JSX.Element
 */
function AppInput({label, type, placeholder, value, onChange, error, disabled}) {

  return (
    <div className='input_wrapper'>
        {label ? <p className='input__label'>{label}</p> : null}
        <input disabled={disabled} type={type} placeholder={placeholder} value={value} onChange={onChange} className='input' style={{borderColor: error ? "red" : "#e0e0e0"}} />
        {error ? <p className='input__error'>{`*${error}`}</p> : null}
    </div>
  )
}

export default AppInput