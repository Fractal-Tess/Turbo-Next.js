'use client';

import { type User } from 'lucia';
import { createContext, useContext } from 'react';
import { useStore as zustandUseStore } from 'zustand';
import { createStore as zustandCreateStore } from 'zustand/vanilla';

/*
 * This type describes the shape of the store state.
 * */
export type StoreState = {
  user: User | null;
  count: number;
};

/*
 * This type describes the shape of the store actions.
 * */
export type StoreActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

/*
 * Store API
 * */
export type Store = StoreState & StoreActions;

/*
 * Zustand store API
 * */
export type StoreAPI = ReturnType<typeof createStore>;

/*
 * Store context
 * */
export const StoreContext = createContext<StoreAPI | null>(null);

/*
 * Default initial state
 * */
export const defaultInitState: StoreState = {
  user: null,
  count: 0
};

/*
 * Create store
 * */
export function createStore(initState: StoreState = defaultInitState) {
  return zustandCreateStore<Store>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 }))
  }));
}

/*
 * useStore hook - helper to access the store
 * */
export function useStore<T>(selector: (store: Store) => T): T {
  const counterStoreContext = useContext(StoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return zustandUseStore(counterStoreContext, selector);
}
