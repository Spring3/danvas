---
title: Aurelins Website
thumbnail: ./aurelins5.png
marker: "#C3A9FF"
repository: https://github.com/Spring3/aurelins-website
demo: https://deploy-preview-1--inspiring-hugle-4673c9.netlify.com/
description:
  - { text: "Thanks to the Three.js library and the .gltf format of a 3d asset, it is possible to render 3d models on the web page." }
  - { text: "Unfortuantely, this website was never used as my sister lost interest in 3d modelling. Also, all the material presented was taken from the internet just for templating and visual testing." }

technologies:
  - Javascript
  - Gatsby
  - React
  - Styled Components
  - GraphQL
  - React-Spring
  - Netlify
  - Contentful
  - three.js

decorations:
  back:
    props:
      height: calc(100% - 150vh - 100vh)
      top: 150vh
    squares:
      - { radius: 10px, top: 80%, left: 80%, size: 45px, background: "#FFAE5A", sticky: true }
      - { radius: 10px, top: 11%, left: 60%, size: 75px, background: "#EDE8E2", sticky: true }
      - { radius: 10px, top: 52%, left: 40%, size: 85px, background: "#F57B51", sticky: true }
      - { radius: 10px, top: 50%, left: 38%, size: 55px, background: "#F57B51", sticky: true }
      - { radius: 10px, top: 65%, left: 5%, size: 55px, background: "#BED5AE", sticky: true }
      - { radius: 10px, top: 70%, left: 50%, size: 45px, background: "#EDE8E2", sticky: true }
      - { radius: 10px, top: 5%, left: 15%, size: 95px, background: "#EDE8E2", sticky: true }
    circles:
      - { dummy: true }
  base:
    props:
      height: calc(100% - 300vh - 300vh)
      top: 300vh
    squares:
      - { dummy: true }
    circles:
      - { radius: "90% 50% 50% 90% / 60% 60% 60% 60%", top: 80%, left: 20%, size: 95px, background: "#FFAE5A", sticky: true }
      - { top: 75%, left: 93%, size: 75px, background: "#C3A9FF", sticky: true }
      - { radius: "50% 80% 90% 50% / 60% 60% 60% 60%", top: 5%, left: 95%, size: 135px, background: "#BED5AE", sticky: true }

images:
  - ./aurelins1.png
  - ./aurelins2.png
  - ./aurelins3.png
  - ./aurelins4.png
  - ./aurelins5.png
  - ./aurelins6.png
  - ./aurelins7.png
---

A draft of a website, that I designed for my sister to showcase her 3d modelling portfolio.

I also used Contentful for the first time in my project, when working on this website.
