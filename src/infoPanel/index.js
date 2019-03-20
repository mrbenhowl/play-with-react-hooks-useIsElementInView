import React from 'react'

const InfoPanel = ({
  setLightTheme,
  itemToCheckInViewPort,
  isVisible,
  lightTheme
}) => (
  <div className='info-panel'>
    <div>
      Is item {itemToCheckInViewPort} in view? <b>{isVisible.toString()}</b>
    </div>

    <button
      className='toggle-button'
      onClick={() => {
        setLightTheme(!lightTheme)
      }}
    >
      Toggle theme
    </button>
  </div>
)

export default InfoPanel
