import React, { forwardRef } from "react";
import { DatePicker } from "@mantine/dates";

const DateInput = forwardRef((props, ref) => {
  return (
    <DatePicker
      {...props}
      ref={ref}
      sx={(theme) => ({
        ".mantine-InputWrapper-label": {
          color: theme.colors.greyText,
          fontSize: ".900rem",
          fontWeight: "600",
        },
        ".mantine-DatePicker-day[data-selected=true]": {
          color: theme.colors.white,
          fontSize: ".900rem",
          backgroundColor: theme.colors.primary,
        },
        ".mantine-DatePicker-input": {
          "&.mantine-DatePicker-invalid": {
            border: `2px solid #fa5252`,
          },
          height: "3rem",
          // border: `2px solid ${theme.colors.blue}`,
          border: "none",
          backgroundColor: theme.colors.darkGrey,
          fontWeight: "400",
          color: theme.colors.white,

          "&:focus,&:focus-within": {
            border: `1px solid ${theme.colors.blue}`,
          },
        },
      })}
    />
  );
});

export default DateInput;
