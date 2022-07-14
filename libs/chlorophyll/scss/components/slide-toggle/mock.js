export const toggle = e => {
    const st = e.currentTarget
    const pressed = st.getAttribute('aria-pressed') === 'true'
    st.setAttribute('aria-pressed', !pressed)
}