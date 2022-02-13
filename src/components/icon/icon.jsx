import { useMemo } from "react";
import { iconCollection } from "./icon.const";

export function Icon({ iconName, className, style }) {
  const IconComponent = useMemo(() => iconCollection[iconName], [iconName]);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
}
