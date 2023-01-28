import React from "react";
import { Button as MantineButton } from "@mantine/core";
const Button = ({ children, ...rest }) => {
  return (
    <MantineButton
      {...rest}
      // loading={true}
      // loaderPosition="right"
      className="bg-sidebar"
      styles={(theme) => ({
        root: {
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,

          "&:hover": {
            backgroundColor: theme.colors.blue,
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
