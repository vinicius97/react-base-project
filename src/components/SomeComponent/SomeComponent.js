import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const SomeComponent = ({ someProperty }) => {
  const [value, setValue] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    setValue(someProperty)
  }, [someProperty])

  return <div> {t('title')} {value}</div>
}

SomeComponent.defaultProps = {
  someProperty: ''
}

SomeComponent.propTypes = {
  someProperty: PropTypes.string
}

export { SomeComponent }
