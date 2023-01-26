import React from "react";
import { Tooltip as TooltopMantine } from "@mantine/core";

const MantineTooltip = ({ children, label, position, offset }) => {
  return (
    <TooltopMantine
      label={label}
      transition="fade"
      position={position}
      offset={offset}
      transitionDuration={300}
      arrowSize={4}
      withArrow
      color="blue"
    >
      {children}
    </TooltopMantine>
  );
};

export default MantineTooltip;
