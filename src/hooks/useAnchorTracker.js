import { useEffect, useState } from "react"

const useAnchorTracker = (anchors) => {
  console.log("anchors", anchors)
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

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [anchors])

  return activeAnchor
}

export { useAnchorTracker }
