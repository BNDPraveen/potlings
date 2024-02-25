import React from "react";
import Header from "./components/Header.js";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
