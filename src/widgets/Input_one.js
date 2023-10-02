import React from 'react'

export const Input_one = ({ val, input, lbl }) => {
  return (
    <div className='form-group'>
      <label>{lbl} Name</label>

      {/* <input onChange={input} className='form-control' type='text' placeholder={`Type ${lbl} Name Here`} /> */}
      <input value={val} onChange={(event) => {
        input(event, lbl.toLowerCase());
      }} className='form-control' type='text' placeholder={`Type ${lbl} Name Here`} />
    </div>
  )
}

