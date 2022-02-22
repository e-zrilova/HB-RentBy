import { useMemo } from "react";
import { iconCollection } from "./icon.const";

export function Icon({ iconName, className }) {
  const IconComponent = useMemo(() => iconCollection[iconName], [iconName]);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
}
