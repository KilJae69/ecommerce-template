import { useUnifiedStore } from '@/providers/unified-store-provider';
import { useShallow } from 'zustand/react/shallow';

export const useAuthStore = () =>
  useUnifiedStore(useShallow((state) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    login: state.login,
    logout: state.logout,
  })));

export const useCartStore = () =>
  useUnifiedStore(useShallow((state) => ({
    items: state.items,
    addItem: state.addItem,
    removeItem: state.removeItem,
    clearCart: state.clearCart,
  })));
