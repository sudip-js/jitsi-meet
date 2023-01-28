import React, { forwardRef, useState } from "react";
import { Select as MantineSelectInput } from "@mantine/core";

const SelectInput = forwardRef(
  (
    {
      placeholder = "",
      label = "",
      error = null,
      propType = "default",
      data = [],
      searchable = "true",
      ...rest
    },
    ref
  ) => {
    const [searchValueNumber, onSearchChangeNumber] = useState("");
    return (
      <MantineSelectInput
        ref={ref}
        sx={(theme) => ({
          ".mantine-Input-rightSection": {
            justifyContent: "start",
          },
          ".mantine-InputWrapper-label": {
            color: theme.colors.greyText,
            fontWeight: "600",
            fontSize: ".900rem",
          },
          ".mantine-Select-item[data-selected=true]": {
            color: theme.colors.white,
            fontWeight: "600",
            fontSize: ".900rem",
            backgroundColor: theme.colors.blue,
          },
          ".mantine-Select-input": {
            "&.mantine-Select-invalid": {
              border: `2px solid #fa5252`,
            },
            height: "3rem",
            // border: `2px solid ${theme.colors.blue}`,
            border: "none",
            backgroundColor: theme.colors.darkGrey,
            fontWeight: "400",
            color: theme.colors.white,

            "&:focus,&:focus-within": {
              // boxShadow: `0 0 0 0.1rem ${theme.colors.primary}`,
              border: `1px solid ${theme.colors.blue}`,
            },
          },
        })}
        {...rest}
        data={data}
        placeholder={placeholder}
        label={label}
        error={error}
        searchValue={searchValueNumber}
        onSearchChange={onSearchChangeNumber}
        searchable={searchable}
        nothingFound="No options"
      />
    );
  }
);

export default SelectInput;
