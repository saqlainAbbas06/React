export function Footer(){
  return (
    <footer>
    <ul className="footer-links">
    <li>
    <ul>
      <li><a href="">Fitness Dashboard</a></li>
      <li><a href="">Services</a></li>
    </ul>
    </li>
    <li>
    <ul>
    <li><a href="">Watch Video</a></li>
    <li><a href="">Discord</a></li>
    </ul>
    </li>
    <li>
    <ul>
    <li><a href="">Privacy Policy</a></li>
    <li><a href="">Terms & Conditions</a></li>
    </ul>
    </li>
    </ul>

    <div className="footer-bottom">
      <p>© 2024 Fitness Dashboard. All Rights Reserved</p>
      <div className="footer-icons">
        <a href="#" aria-label="Twitter">
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
  <span className="sr-only">Twitter</span>
</a>
<a href="#" aria-label="Instagram">
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
  <span className="sr-only">Instagram</span>
</a>
<a href="#" aria-label="Facebook">
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
  <span className="sr-only">Facebook</span>
</a>
      </div>
    </div>
    </footer>
  )
}