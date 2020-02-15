import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const SomeComponent = ({ someProperty }) => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    setValue(someProperty)
  }, [someProperty])

  return <div>Some property {value}</div>
}

SomeComponent.defaultProps = {
  someProperty: ''
}

SomeComponent.propTypes = {
  someProperty: PropTypes.string
}

export { SomeComponent }
