const slugToAnchor = (slug) => `#${slug.substring(1, slug.length - 1)}`

const slugToTitle = (slug) => {
  if (slug === "/") {
    return "Main page"
  }

  const title = slug
    .substring(1)
    .split("-")
    .map((str) => `${str[0].toUpperCase()}${str.substring(1)}`)
    .join(" ")

  return title.endsWith("/") ? title.substring(0, title.length - 1) : title
}

export { slugToAnchor, slugToTitle }
