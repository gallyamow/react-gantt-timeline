import React from 'react'

const Row = ({ children }) => {
  const style = { display: 'flex' }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Row