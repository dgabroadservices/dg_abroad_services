import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and boolean indicating if the element is visible in the viewport.
 * @param {IntersectionObserverInit} options
 */
function useScrollAnimation(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, options)

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}

export default useScrollAnimation
