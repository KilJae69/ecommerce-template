// src/providers/unified-store-provider.tsx
'use client';

import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { createUnifiedStore, UnifiedStore } from '@/stores/unified-store';

export type UnifiedStoreApi = ReturnType<typeof createUnifiedStore>;

export const UnifiedStoreContext = createContext<UnifiedStoreApi | null>(null);

export const UnifiedStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<UnifiedStoreApi | null>(null);

  if (!storeRef.current) {
    storeRef.current = createUnifiedStore();
  }

  return (
    <UnifiedStoreContext.Provider value={storeRef.current}>
      {children}
    </UnifiedStoreContext.Provider>
  );
};

export const useUnifiedStore = <T,>(selector: (store: UnifiedStore) => T): T => {
  const store = useContext(UnifiedStoreContext);
  if (!store) throw new Error('useUnifiedStore must be used within UnifiedStoreProvider');
  return useStore(store, selector);
};
