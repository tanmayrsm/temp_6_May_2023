import React, { useState } from 'react'
import Rating from '@mui/material/Rating';

const Ratings = ({value, titleText, icon, precision}) => {  
//   const [value, setValue] = useState<number | null>(value);

  return (
    
    <div className='mx-2 rounded-xl bg-white w-48 flex items-center py-1 bg-gradient-to-bl from-green-300 
      to-purple-600'>
      <div className='px-1'>
        {icon ? <img src={icon} className='w-10 h-10 mx-1 object-contain'></img> : null}
      </div>
        <div className='flex px-1 flex-col items-start'>
          <div className='text-white drop-shadow-lg text-sm p-0 font-semibold'>{titleText}</div>
          <Rating size='small' name="read-only" value={value} precision={precision} readOnly />
        </div>
    </div>
  )
}

export default Ratings;