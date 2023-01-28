import React, { forwardRef } from "react";
import { TextInput as MantineTextInput } from "@mantine/core";

const TextInput = forwardRef(
  ({ label, placeholder, error, bg = "", border = "", ...rest }, ref) => {
    return (
      <MantineTextInput
        {...rest}
        ref={ref}
        label={label}
        placeholder={placeholder}
        error={error}
        sx={(theme) => ({
          ".mantine-InputWrapper-label": {
            color: theme.colors.greyText,
            fontSize: ".900rem",
            fontWeight: "600",
            marginBottom: "5px",
          },
          ".mantine-TextInput-input": {
            "&.mantine-TextInput-invalid": {
              border: `2px solid #fa5252`,
            },
            height: "3rem",
            border: "none",
            backgroundColor: `${bg ? bg : theme.colors.darkGrey}`,
            fontWeight: "400",
            color: theme.colors.white,

            "&:focus,&:focus-within": {
              border: border ? border : `1px solid ${theme.colors.blue}`,
            },
          },
          ".mantine-TextInput-error": {
            fontSize: ".900rem",
          },
        })}
      />
    );
  }
);

export default TextInput;
