"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { playSoftClick, playSparkle } from "@/lib/sounds";

interface AppContextValue {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playSparkleSound: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  const playClick = useCallback(() => {
    playSoftClick(soundEnabled);
  }, [soundEnabled]);

  const playSparkleSound = useCallback(() => {
    playSparkle(soundEnabled);
  }, [soundEnabled]);

  const value = useMemo(
    () => ({ soundEnabled, toggleSound, playClick, playSparkleSound }),
    [soundEnabled, toggleSound, playClick, playSparkleSound],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
