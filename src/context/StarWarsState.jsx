import React, { useReducer } from "react";
import axios from "axios";
import StarWarsContext from "./StarWarsContext";
import StarWarsReducer from "./StarWarsReducer";

const StarWarsState = (props) => {
  const initialState = {
    people: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(StarWarsReducer, initialState);

  // List star wars data
  const fetchPeople = async () => {
    const response = await axios.get("https://swapi.dev/api/people/");

    const data = await response.data;
    dispatch({ type: "LIST_SW_DATA", payload: data });
  };

  return (
    <StarWarsContext.Provider
      value={{
        people: state.people,
        loading: state.loading,
        fetchPeople,
      }}
    >
      {props.children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsState;
