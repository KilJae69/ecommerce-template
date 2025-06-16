// src/stores/unified-store.ts
import { createStore } from 'zustand/vanilla';
import { StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/* ────────────────
   Types & Slices
──────────────── */


// ── Auth Slice
export type AuthState = {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
};

export type AuthActions = {
  login: (user: { name: string; email: string }) => void;
  logout: () => void;
};

export type AuthSlice = AuthState & AuthActions;

const createAuthSlice: StateCreator<
  UnifiedStore,
  [],
  [],
  AuthSlice
> = (set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
});

// ── Cart Slice
export type CartItem = { id: string; name: string; price: number; quantity: number };

export type CartState = {
  items: CartItem[];
};

export type CartActions = {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export type CartSlice = CartState & CartActions;

const createCartSlice: StateCreator<
  UnifiedStore,
  [],
  [],
  CartSlice
> = (set, get) => ({
  items: [],
  addItem: (item) => {
    const items = get().items;
    const existing = items.find((i) => i.id === item.id);
    if (existing) {
      const updated = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
      );
      set({ items: updated });
    } else {
      set({ items: [...items, item] });
    }
  },
  removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
  clearCart: () => set({ items: [] }),
});

/* ────────────────
   Unified Store
──────────────── */

export type UnifiedStore = AuthSlice & CartSlice;

export const createUnifiedStore = () =>
  createStore<UnifiedStore>()(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createCartSlice(...a),
      }),
      {
        name: 'unified-store',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          isAuthenticated: state.isAuthenticated,
          user: state.user,
          items: state.items,
        }),
      }
    )
  );