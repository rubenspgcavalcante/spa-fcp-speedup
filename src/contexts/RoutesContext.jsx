import React, { createContext, useMemo, useState, memo } from 'react';

const RoutesContext = createContext(null)
export const RoutesConsumer = RoutesContext.Consumer;

export const RoutesProvider = memo(({ children, value }) => {

  const [active, setActive] = useState(null);

  const context = useMemo(() => ({
    active,
    routes: value,
    setActive,
  }), [value, active]);

  return <RoutesContext.Provider value={context}>{children}</RoutesContext.Provider>
});

export default RoutesContext;