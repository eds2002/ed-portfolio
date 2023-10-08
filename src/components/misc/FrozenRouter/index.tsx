import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";
import React, { PropsWithChildren } from "react";

export default function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = React.useContext(LayoutRouterContext);
  const frozen = React.useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}
