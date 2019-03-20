import React, { useState, useRef } from 'react'
import InfoPanel from './infoPanel'
import List from './list'
import useIsElementInView from './useIsElementInView'

const itemToCheckInViewPort = 30

function App () {
  const listItemRef = useRef(null)
  const [isLightTheme, setLightTheme] = useState(true)
  const isVisible = useIsElementInView(listItemRef)

  return (
    <div className={isLightTheme ? 'light' : 'dark'}>
      <InfoPanel
        isVisible={isVisible}
        lightTheme={isLightTheme}
        setLightTheme={setLightTheme}
        itemToCheckInViewPort={itemToCheckInViewPort}
      />
      <List
        listItemRef={listItemRef}
        itemToCheckInViewPort={itemToCheckInViewPort}
      />
    </div>
  )
}

export default App
