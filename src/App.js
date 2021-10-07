import React from "react";
import { Container } from "react-bootstrap";
import StarWarsList from "./components/StarWarsList";
import StarWarsState from "./context/StarWarsState";

function App() {
  return (
    <main className="my-3">
      <StarWarsState>
        <Container>
          <StarWarsList />
        </Container>
      </StarWarsState>
    </main>
  );
}

export default App;
