import { useEffect, useState } from "react"
import throttle from "lodash.throttle"

const useWindowResize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const onResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    const throttledResize = throttle(onResize, 300)

    window.addEventListener("resize", throttledResize)

    return () => window.removeEventListener("resize", throttledResize)
  }, [])

  return size
}

export { useWindowResize }
