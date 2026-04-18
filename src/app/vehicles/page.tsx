import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Browse Vehicles — AutoElite',
  description: 'Explore our full inventory of premium vehicles. Filter by make, model, price, and more.',
};

export default function VehiclesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Our Vehicles</h1>
        <p className={styles.subtitle}>
          Browse our curated selection of quality vehicles
        </p>
      </header>

      <div className={styles.layout}>
        {/* Sidebar filters — will be wired to Zustand store */}
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Filters</h3>
            <p className={styles.placeholder}>Filter components will live here. 
              They&apos;ll connect to the vehicles Zustand store.</p>
          </div>
        </aside>

        {/* Vehicle grid */}
        <section className={styles.grid}>
          {/* Placeholder cards */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.vehicleCard}>
              <div className={styles.imagePlaceholder}>
                <span>🚗</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Vehicle {i + 1}</h3>
                <p className={styles.cardMeta}>2024 · Automatic · Gasoline</p>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>€29,990</span>
                  <span className={styles.badge}>Available</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
