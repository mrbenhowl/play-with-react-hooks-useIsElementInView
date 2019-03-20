import { useState, useEffect } from 'react'

function useIsElementInView (ref) {
  const [isVisible, setVisible] = useState(false)

  useEffect(
    () => {
      const elementToWatch = ref.current

      if (!elementToWatch) {
        return
      }

      function intersectionObserverCallback (entries) {
        setVisible(entries[0].isIntersecting)
      }

      var observer = new IntersectionObserver(intersectionObserverCallback)
      observer.observe(elementToWatch)
    },
    [ref]
  )

  return isVisible
}

export default useIsElementInView
