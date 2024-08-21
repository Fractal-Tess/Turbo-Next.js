'use client';

import { Provider as JotaiProvider } from 'jotai';
import { type User } from 'lucia';
import { type PropsWithChildren, useRef } from 'react';

import { type StoreAPI, StoreContext, createStore } from '$/client/zustand';
import { TRPCReactProvider } from '$/trpc/react';

type Props = { user: User | null } & PropsWithChildren;

export function Providers({ children, user }: Props) {
  const storeRef = useRef<StoreAPI>();
  if (!storeRef.current) {
    storeRef.current = createStore({
      user,
      count: 0
    });
  }
  return (
    <TRPCReactProvider>
      <JotaiProvider>
        <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>;
      </JotaiProvider>
    </TRPCReactProvider>
  );
}
