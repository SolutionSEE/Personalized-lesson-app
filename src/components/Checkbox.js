import React from 'react'

const Checkbox = ({label,name, ...rest}) => {
  return (
    <div className='flex items-center gap-3 mt-10'>
        <input {...rest} type="checkbox" name={name} id="checkbox" className='h-4 w-4 rounded bg-[#1A1D21] border border-[#363A3D]'/>
        <label htmlFor="checkbox">
            <span className='font-medium text-[#CDCECF]'>I agree with </span>
            <a className='font-semibold bg-gradient-to-t bg-clip-text text-transparent from-[#82DBF7] to-[#B6F09C]'> Terms and conditions</a>
        </label>
    </div>
  )
}

export default Checkbox