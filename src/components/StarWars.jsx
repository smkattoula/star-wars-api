import React from "react";
import { Card } from "react-bootstrap";

const StarWars = ({ person }) => {
  return (
    <Card className="my-3 py-3">
      <Card.Title className="text-center">{person.name}</Card.Title>
      <Card.Body>
        <Card.Text>Birth Year: {person.birth_year}</Card.Text>
        <Card.Text>Eye Color: {person.eye_color}</Card.Text>
        <Card.Text>Hair Color: {person.hair_color}</Card.Text>
        <Card.Text>Height: {person.height}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StarWars;
