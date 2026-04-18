import { create } from 'zustand';
import type { User } from '@/types';

// ──────────────────────────────────────────────
// Auth Store
// ──────────────────────────────────────────────

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  login: async (_email: string, _password: string) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Replace with real API call
      // const response = await fetch('/api/auth/login', { ... });
      // const user = await response.json();
      // set({ user, isAuthenticated: true, isLoading: false });
      set({ isLoading: false });
    } catch {
      set({ error: 'Login failed. Please try again.', isLoading: false });
    }
  },

  logout: () => set({ user: null, isAuthenticated: false }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
