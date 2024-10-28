export const toggle = (e) => {
  const st = e.currentTarget
  const checked = st.getAttribute('aria-checked') === 'true'
  st.setAttribute('aria-checked', !checked)
}
