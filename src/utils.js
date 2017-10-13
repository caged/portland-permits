export function naiveTitleCaseParagraph(p) {
  if(!p) return
  let paragraphs = p.split(/\.\s+|\.$/)
  return paragraphs.map((pg) => {
    return pg.substring(0, 1).toUpperCase() + pg.substring(1).toLowerCase()
  }).join('. ')
}

export function shortName(name) {
  if(!name) return ''
  return name.replace(/neighborhood association/i, '')
}

export function sluggify(value) {
  return (value || '').toLowerCase().trim().replace(/\s+/g, ' ').replace(/\s/g, '-')
}
