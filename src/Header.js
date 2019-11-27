import React from 'react'
import PropTypes from 'prop-types'

function Header({ text }) {
  return (
    <div>
      <h2 test-id="title" className="title">
        {text}
      </h2>
    </div>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header
