---
title: Twitch Auto Points
thumbnail: ./extension1.png
description: A cross browser extension for automatic collection of channel points
marker: A9E5BB
repository: https://github.com/Spring3/twitch-auto-points
chrome: https://chrome.google.com/webstore/detail/twitch-auto-points/epdcapclkanflhcnialagecbkbpkbcbi
firefox: https://addons.mozilla.org/en-US/firefox/addon/twitch-auto-points/
technologies:
  - Javascript
  - web-ext

decorations:
  back:
    props:
      height: calc(100% - 10vh)
      top: 10vh
    squares:
      - radius=10px,top=50%,left=98%,size=15px,background=#FFAE5A
      - radius=10px,top=15%,left=80%,size=20px,background=#EDE8E2
      - radius=10px,top=43%,left=3%,size=25px,background=#F57B51
      - radius=10px,top=7%,left=75%,size=35px,background=#BED5AE
      - radius=10px,top=70%,left=90%,size=35px,background=#EDE8E2
      - radius=10px,top=55%,left=65%,size=35px,background=#81A78C
      - radius=10px,top=68%,left=29%,size=35px,background=#FFA9AA
    circles:
      - top=60%,left=85%,size=55px,background=#BCE5FF
  base:
    props:
      height: calc(100% - 10vh)
      top: 10vh
    squares:
    circles:
      - radius=90% 50% 50% 90% / 60% 60% 60% 60%,top=5%,left=30%,size=15px,background=#A2C5C6
      - radius=50% 80% 90% 50% / 60% 60% 60% 60%,top=75%,left=40%,size=35px,background=#BED5AE
      - radius=90% 50% 50% 90% / 60% 60% 60% 60%,top=45%,left=70%,size=15px,background=#FFA9AA
      - radius=90% 50% 50% 90% / 60% 60% 60% 60%,top=30%,left=35%,size=15px,background=#FFAE5A

images:
  - ./extension1.png
  - ./extension2.png
---

A cross browser extension, that automates gathering of channel points on twitch website

- Works in multiple tabs and windows at the same time.
- Optimized for performance
- Only works on twitch websites
- Disables itself on other websites
- No data collection whatsoever
- Updated to work with the latest twitch UI
