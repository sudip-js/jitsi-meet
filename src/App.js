import React, { useEffect } from "react";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { JoinMeeting } from "./pages";
import { Dialler } from "./components";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config/firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/slices/authSlice";
import { doc, getDoc } from "firebase/firestore";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snap = await getDoc(doc(db, "users", user?.uid));
        if (snap.exists()) {
          dispatch(login(snap.data()));
        }
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
      <ModalsProvider
        modals={{
          joinMeeting: JoinMeeting,
          dialler: Dialler,
        }}
      >
        <RouterProvider router={router} />
      </ModalsProvider>
    </MantineProvider>
  );
};

export default App;
