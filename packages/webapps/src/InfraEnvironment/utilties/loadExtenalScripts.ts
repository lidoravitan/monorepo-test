exports.loadExtenalScripts = (window, scripts) => {
  const fragment = new window.DocumentFragment()
  const head = window.document.getElementsByTagName('head')[0]

  scripts.forEach(script => {
    const el = window.document.createElement('script')
    el.textContent = script
    fragment.appendChild(el)
  })

  head.appendChild(fragment)
}
