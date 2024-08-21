'use client';

import { useAtom } from 'jotai';

import { atomCount } from '$/client/jotai';

import { Button } from '@ui/components/button';

export function Example() {
  // pass the above atom variable to the `useAtom` hook to read and
  // mutate its values
  const [count, setCount] = useAtom(atomCount);

  return <Button onClick={() => setCount((count) => count + 1)}>The count is {count}</Button>;
}
