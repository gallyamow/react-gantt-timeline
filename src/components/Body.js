import React from 'react'

const Body = ({ children }) => {
  const style = { display: 'flex', flexDirection: 'column' }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Body