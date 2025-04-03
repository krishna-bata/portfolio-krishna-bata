import React from 'react'

const Title = ({title}) => {
  return (
    <div>
        <p className='text-5xl lg:text-6xl font-bold'>{title}<span className='text-primary-color'>.</span></p>
    </div>
  )
}

export default Title