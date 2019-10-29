import React from 'react'
import PropTypes from 'prop-types'

function Header({ text }) {
  return (
    <header>
      <h2>{text}</h2>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header
