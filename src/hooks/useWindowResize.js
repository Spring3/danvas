import { useEffect, useState } from "react"

const useWindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", onResize)

    return () => window.removeEventListener("resize", onResize)
  }, [])

  return width
}

export { useWindowResize }
