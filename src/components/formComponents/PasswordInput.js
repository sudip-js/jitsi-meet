import React from "react";
import { PasswordInput as MantinePasswordInput } from "@mantine/core";
import { HidePassword, ShowPassword } from "../../assets/icons";
const PasswordInput = ({ label, placeholder, ...rest }, ref) => {
  return (
    <MantinePasswordInput
      {...rest}
      ref={ref}
      sx={(theme) => ({
        ".mantine-Input-wrapper": {
          borderRadius: "0.313rem",
          "&:focus": {
            boxShadow: `0 0 0 0.1rem  ${theme.colors.primary}`,
            border: `2px solid ${theme.colors.white}`,
          },
        },
        ".mantine-InputWrapper-label": {
          color: theme.colors.greyText,
          fontSize: ".900rem",
          fontWeight: "600",
          marginBottom: "5px",
        },
        ".mantine-PasswordInput-input": {
          "&.mantine-PasswordInput-invalid": {
            border: `2px solid #fa5252`,
          },
          height: "3rem",
          border: "none",
          backgroundColor: `${theme.colors.darkGrey}`,
          fontWeight: "400",
          color: theme.colors.white,

          "&:focus,&:focus-within": {
            border: `1px solid ${theme.colors.blue}`,
          },
        },

        ".mantine-PasswordInput-innerInput": {
          height: "2.8rem",
          fontWeight: "400",
          color: theme.colors.white,
          borderRadius: "0",
        },
      })}
      label={label}
      placeholder={placeholder}
      visibilityToggleIcon={({ reveal }) =>
        reveal ? <HidePassword /> : <ShowPassword />
      }
    />
  );
};

export default React.forwardRef(PasswordInput);
