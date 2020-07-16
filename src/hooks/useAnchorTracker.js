import { useEffect, useState } from "react"
import throttle from "lodash.throttle"

const useAnchorTracker = (anchors) => {
  const [activeAnchor, setActiveAnchor] = useState()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(anchors))
    const onScroll = () => {
      const marginsAndPaddings = 156
      const scrolledPast = elements.filter(
        (element) => element.getBoundingClientRect().y <= marginsAndPaddings
      )
      setActiveAnchor(anchors[scrolledPast.length - 1])
    }

    const throttledFunction = throttle(onScroll, 300)

    window.addEventListener("scroll", throttledFunction)

    return () => {
      window.removeEventListener("scroll", throttledFunction)
    }
  }, [anchors])

  return activeAnchor
}

export { useAnchorTracker }
