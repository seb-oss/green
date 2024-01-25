import Link from "next/link"

import "./style.css"

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = "\u00A9"
  const text = `${symbol}  ${year} Green Design System`

  return (
    <footer className="main-footer">
      <h2>
        <Link href="/">Green Design System</Link>
      </h2>
      <div className="content">
        <div className="col">
          <nav>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/foundation">Foundation</Link>
              </li>
              <li>
                <Link href="/components">Components</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col">
          <nav>
            <ul>
              <li>
                <Link href="https://github.com/sebgroup/green">Github</Link>
              </li>
              <li>
                <Link href="/changelog">Changelog</Link>
              </li>
              <li>
                <Link href="/status">Status</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col">
          <nav>
            <ul>
              <li>
                <Link href="https://sebgroup.com/">SEB Group</Link>
              </li>
              <li>
                <Link href="https://seb.se/">SEB.se</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="main-footer__bottom">
        <span>{text}</span>
        <button type="button" data-cc="c-settings" className="cookie-preferences">
          Cookie preferences
        </button>
      </div>
    </footer>
  )
}
