import React from "react";
import { Container } from "react-bootstrap";
import StarWarsList from "./components/StarWarsList";

function App() {
  return (
    <main className="my-3">
      <Container>
        <StarWarsList />
      </Container>
    </main>
  );
}

export default App;
