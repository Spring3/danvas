import { useEffect, useState } from "react"
import throttle from "lodash.throttle"

const useWindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth)
    }

    const throttledResize = throttle(onResize, 300)

    window.addEventListener("resize", throttledResize)

    return () => window.removeEventListener("resize", throttledResize)
  }, [])

  return width
}

export { useWindowResize }
