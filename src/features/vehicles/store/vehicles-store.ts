import { create } from 'zustand';
import type { Vehicle, VehicleStatus } from '@/types';

// ──────────────────────────────────────────────
// Vehicles Filter State
// ──────────────────────────────────────────────

export interface VehicleFilters {
  search: string;
  make: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
  priceMin: number | null;
  priceMax: number | null;
  yearMin: number | null;
  yearMax: number | null;
  status: VehicleStatus | 'all';
}

const defaultFilters: VehicleFilters = {
  search: '',
  make: '',
  bodyType: '',
  fuelType: '',
  transmission: '',
  priceMin: null,
  priceMax: null,
  yearMin: null,
  yearMax: null,
  status: 'all',
};

// ──────────────────────────────────────────────
// Vehicles Store
// ──────────────────────────────────────────────

interface VehiclesState {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  filters: VehicleFilters;
  isLoading: boolean;
  error: string | null;

  // Actions
  setVehicles: (vehicles: Vehicle[]) => void;
  addVehicle: (vehicle: Vehicle) => void;
  updateVehicle: (id: string, updates: Partial<Vehicle>) => void;
  removeVehicle: (id: string) => void;
  selectVehicle: (vehicle: Vehicle | null) => void;
  setFilters: (filters: Partial<VehicleFilters>) => void;
  resetFilters: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useVehiclesStore = create<VehiclesState>((set) => ({
  vehicles: [],
  selectedVehicle: null,
  filters: defaultFilters,
  isLoading: false,
  error: null,

  setVehicles: (vehicles) => set({ vehicles }),
  addVehicle: (vehicle) =>
    set((state) => ({ vehicles: [...state.vehicles, vehicle] })),
  updateVehicle: (id, updates) =>
    set((state) => ({
      vehicles: state.vehicles.map((v) =>
        v.id === id ? { ...v, ...updates } : v
      ),
    })),
  removeVehicle: (id) =>
    set((state) => ({
      vehicles: state.vehicles.filter((v) => v.id !== id),
    })),
  selectVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
  resetFilters: () => set({ filters: defaultFilters }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
