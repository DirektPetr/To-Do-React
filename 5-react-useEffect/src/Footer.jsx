import React from 'react'
const year = new Date();

const Footer = ({items}) => {
  return (
    <footer className='footer'>Footer
    <p className='counter'>Total {items.length} {items.length <= 1 ? "item" : "items"}</p>
    <p className='year'>{year.getFullYear()}</p>
    </footer>
  )
}

export default Footer
