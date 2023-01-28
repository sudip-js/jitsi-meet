import React, { forwardRef } from "react";
import { Switch as MantineSwitch } from "@mantine/core";
import { CheckIcon, CloseIcon } from "../../assets/icons";

const ToggleButton = forwardRef(({ label, ...rest }, ref) => {
  return (
    <MantineSwitch
      {...rest}
      ref={ref}
      label={label}
      labelPosition="left"
      size="md"
      sx={(theme) => ({
        ".mantine-Switch-label": {
          color: theme.colors.greyText,
          fontSize: ".900rem",
          fontWeight: "600",
        },
        ".mantine-Switch-body": {
          display: "flex",
          justifyContent: "space-between",
        },
      })}
      thumbIcon={
        true ? (
          <CheckIcon className="text-headerBtnActive text-xl" />
        ) : (
          <CloseIcon className="text-error text-xl" />
        )
      }
    />
  );
});

export default ToggleButton;
