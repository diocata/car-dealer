import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* ── Hero Section ──────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.badge}>🏆 #1 Trusted Dealership</span>
          <h1 className={styles.heroTitle}>
            Find Your <span className={styles.gradient}>Perfect Drive</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Explore our curated collection of premium vehicles.
            Quality you can trust, prices you&apos;ll love.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/vehicles" className={styles.ctaPrimary}>
              Browse Vehicles
            </Link>
            <Link href="#features" className={styles.ctaSecondary}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Animated stats bar */}
        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statValue}>500+</span>
            <span className={styles.statLabel}>Vehicles</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>Satisfaction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>15+</span>
            <span className={styles.statLabel}>Years</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>24/7</span>
            <span className={styles.statLabel}>Support</span>
          </div>
        </div>
      </section>

      {/* ── Features Section ──────────────────── */}
      <section id="features" className={styles.features}>
        <h2 className={styles.sectionTitle}>Why AutoElite?</h2>
        <p className={styles.sectionSub}>
          We make car buying effortless, transparent, and enjoyable.
        </p>
        <div className={styles.featureGrid}>
          {[
            { icon: '🔍', title: 'Smart Search', desc: 'Filter by make, model, price, fuel type and more.' },
            { icon: '🛡️', title: 'Certified Quality', desc: 'Every vehicle passes a rigorous 150-point inspection.' },
            { icon: '💰', title: 'Best Pricing', desc: 'Market-competitive prices with flexible financing options.' },
            { icon: '🚀', title: 'Fast Delivery', desc: 'Reserve online and get your car delivered to your door.' },
          ].map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
