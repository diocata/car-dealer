import type { Metadata } from 'next';
import { availableVehicleCount, sampleVehicles } from '@/features/vehicles';
import { formatCurrency, formatNumber } from '@/lib/utils';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Browse Vehicles — AutoElite',
  description: 'Explore our full inventory of premium vehicles. Filter by make, model, price, and more.',
};

const statusLabels = {
  available: 'Available',
  reserved: 'Reserved',
  sold: 'Sold',
} as const;

function formatLabel(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function VehiclesPage() {
  const prices = sampleVehicles.map((vehicle) => vehicle.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Our Vehicles</h1>
        <p className={styles.subtitle}>
          Browse {sampleVehicles.length} curated vehicles, including{' '}
          {availableVehicleCount} ready for immediate reservation.
        </p>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h2 className={styles.filterTitle}>Inventory Snapshot</h2>
            <dl className={styles.inventoryStats}>
              <div>
                <dt>Total vehicles</dt>
                <dd>{sampleVehicles.length}</dd>
              </div>
              <div>
                <dt>Available now</dt>
                <dd>{availableVehicleCount}</dd>
              </div>
              <div>
                <dt>Price range</dt>
                <dd>
                  {formatCurrency(minPrice)} - {formatCurrency(maxPrice)}
                </dd>
              </div>
            </dl>
          </div>
        </aside>

        <section className={styles.grid}>
          {sampleVehicles.map((vehicle) => (
            <article key={vehicle.id} className={styles.vehicleCard}>
              <div className={styles.imagePlaceholder}>
                <span aria-hidden="true">{vehicle.make.charAt(0)}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h2>
                  <span
                    className={`${styles.badge} ${styles[vehicle.status]}`}
                  >
                    {statusLabels[vehicle.status]}
                  </span>
                </div>
                <p className={styles.cardMeta}>
                  {formatLabel(vehicle.bodyType)} |{' '}
                  {formatLabel(vehicle.transmission)} |{' '}
                  {formatLabel(vehicle.fuelType)}
                </p>
                <p className={styles.description}>{vehicle.description}</p>
                <div className={styles.featureList}>
                  {vehicle.features.slice(0, 2).map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>
                    {formatCurrency(vehicle.price)}
                  </span>
                  <span className={styles.mileage}>
                    {formatNumber(vehicle.mileage)} km
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
