import { useEffect, useState } from 'react';

export function useLocalStorage(key, initial) {
  const getInitialValue = () => {
    if (typeof window === 'undefined') {
      return typeof initial === 'function' ? initial() : initial;
    }

    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        return JSON.parse(raw);
      }
    } catch {
      // Corrupt or unavailable storage falls back to the supplied initial value.
    }

    return typeof initial === 'function' ? initial() : initial;
  };

  const [value, setValue] = useState(getInitialValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage write failures (for example, blocked storage or quota errors).
    }
  }, [key, value]);

  return [value, setValue];
}