import React, { useState, useEffect } from "react";
import StarWars from "./StarWars";
import { Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";

const StarWarsList = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPeople = async () => {
    const response = await axios.get("https://swapi.dev/api/people/");

    const data = await response.data;
    setPeople(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  console.log(people);

  return (
    <>
      <h1 className="text-center">Star Wars List</h1>
      {loading && (
        <Spinner
          animation="border"
          role="status"
          style={{
            display: "block",
            margin: "auto",
            height: "100px",
            width: "100px",
            fontSize: "20px",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <Row>
        {!loading &&
          people.results.map((person, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <StarWars person={person} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default StarWarsList;
