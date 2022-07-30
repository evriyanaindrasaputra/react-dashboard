import React from 'react'

const Landing: React.FC = () => {
  return (
    <div>Here Your ENV : {import.meta.env.VITE_API}</div>
  )
}

export default Landing
