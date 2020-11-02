import { useState, useEffect } from "react"
import throttle from "lodash.throttle"

const useImageScrollTracker = (anchors) => {
  const [state, setState] = useState({
    current: undefined,
    next: undefined,
    scrollingDown: true,
  })

  useEffect(() => {
    let lastScroll = 0
    const elements = Array.from(document.querySelectorAll(anchors))
    const onScroll = () => {
      const scrollingDown = window.scrollY > lastScroll
      const marginsAndPaddings = 156
      const scrolledPast = elements.filter(
        (element) =>
          element.getBoundingClientRect().y <=
          (scrollingDown
            ? marginsAndPaddings
            : marginsAndPaddings + element.offsetHeight)
      )
      setState(
        scrollingDown
          ? {
              current: anchors[scrolledPast.length - 1],
              next: anchors[scrolledPast.length],
              scrollingDown,
            }
          : {
              current: anchors[scrolledPast.length - 1],
              next: anchors[scrolledPast.length - 2],
              scrollingDown,
            }
      )
      lastScroll = window.scrollY
    }

    const throttled = throttle(onScroll, 300)

    if (elements.length && anchors.length > 1) {
      window.addEventListener("scroll", throttled)
    }

    return () => {
      if (elements.length && anchors.length > 1) {
        window.removeEventListener("scroll", throttled)
      }
    }
  }, [anchors])
  return [[state.current, state.next], state.scrollingDown]
}

export { useImageScrollTracker }
