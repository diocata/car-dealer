import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Dashboard — AutoElite',
  description: 'Manage your dealership inventory, inquiries, and analytics.',
};

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <p className={styles.subtitle}>Overview of your dealership</p>
      </header>

      {/* Quick Stats */}
      <div className={styles.statsGrid}>
        {[
          { label: 'Total Vehicles', value: '0', icon: '🚗', color: 'var(--color-primary)' },
          { label: 'Active Inquiries', value: '0', icon: '💬', color: 'var(--color-accent)' },
          { label: 'Sold This Month', value: '0', icon: '✅', color: 'var(--color-success)' },
          { label: 'Revenue', value: '€0', icon: '💰', color: 'var(--color-info)' },
        ].map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: `${stat.color}15`, color: stat.color }}>
              {stat.icon}
            </div>
            <div>
              <p className={styles.statLabel}>{stat.label}</p>
              <p className={styles.statValue}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content area placeholder */}
      <div className={styles.content}>
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>📊</span>
          <h2>Dashboard Coming Soon</h2>
          <p>Inventory management, analytics charts, and inquiry tracking will appear here.</p>
        </div>
      </div>
    </div>
  );
}
