import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer.js";
import HomeScreen from "./screens/HomeScreen.js";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* <h1>Welcome to ProShop</h1> */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
