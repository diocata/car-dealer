// ──────────────────────────────────────────────
// Global shared types
// ──────────────────────────────────────────────

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: FuelType;
  transmission: Transmission;
  bodyType: BodyType;
  color: string;
  images: string[];
  description: string;
  features: string[];
  status: VehicleStatus;
  createdAt: string;
  updatedAt: string;
}

export type FuelType = 'gasoline' | 'diesel' | 'electric' | 'hybrid' | 'plug-in-hybrid';

export type Transmission = 'automatic' | 'manual';

export type BodyType = 'sedan' | 'suv' | 'coupe' | 'hatchback' | 'convertible' | 'truck' | 'van' | 'wagon';

export type VehicleStatus = 'available' | 'reserved' | 'sold';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
}

export type UserRole = 'admin' | 'dealer' | 'customer';

export interface Inquiry {
  id: string;
  vehicleId: string;
  userId: string;
  message: string;
  status: InquiryStatus;
  createdAt: string;
}

export type InquiryStatus = 'pending' | 'responded' | 'closed';

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}
