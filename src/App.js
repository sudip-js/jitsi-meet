import React from "react";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider
      theme={{
        colors: {
          darkGrey: ["#202225"],
          lightGrey: ["#202225"],
          bgGrey: ["#35393f"],
          white: ["#ffffff"],
          black: ["#212b36"],
          error: ["#fa5252"],
          greyText: ["#767a7f"],
          blue: ["#228be6"],
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
