// import { useState } from 'react'
import { useEffect } from "react";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authUser } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authUser.onAuthStateChanged((user) => {
      if (!user) {
        dispatch(logout);
      }

      dispatch(
        login({
          uid: user.uid,
          email: user.email,
        }),
      );

      console.log("§ User logged in", { user });
      // Add logged in logic
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <section id="center">
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
            </Routes>
          )}
        </Router>
      </section>
    </>
  );
}

export default App;
