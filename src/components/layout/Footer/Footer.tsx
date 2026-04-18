import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>🚗 AutoElite</span>
            <p className={styles.tagline}>
              Premium vehicles, exceptional service. Find your perfect drive today.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.list}>
              <li><a href="/vehicles">Browse Vehicles</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Support</h4>
            <ul className={styles.list}>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">Trade-In</a></li>
              <li><a href="#">Warranty</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} AutoElite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
