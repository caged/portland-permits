export function naiveTitleCaseParagraph(p) {
  if(!p) return
  let paragraphs = p.split(/\.\s+|\.$/)
  return paragraphs.map((pg) => {
    return pg.substring(0, 1).toUpperCase() + pg.substring(1).toLowerCase()
  }).join('. ')
}
