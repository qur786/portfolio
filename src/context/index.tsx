import { PropsWithChildren, createContext, useMemo, useState } from "react";

interface MobileContext {
  isMobile: boolean;
  setIsMobile: (input: boolean) => void;
}

export const MobileContext = createContext<MobileContext>({
  isMobile: false,
  setIsMobile: () => {},
});

export function MobileProvider({ children }: PropsWithChildren): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);

  const value = useMemo<MobileContext>(
    () => ({ isMobile, setIsMobile }),
    [isMobile]
  );

  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
}
