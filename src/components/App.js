import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "../styles/App.css";

const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTours = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  console.log(tours);
  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} />;
    </div>
  );
};

export default App;
