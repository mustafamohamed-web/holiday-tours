import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "../styles/App.css";

const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

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

  if (tours.length === 0) {
    return (
      <div>
        <h1>No Tours</h1>
        <button onClick={getTours} className="btn">
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />;
    </div>
  );
};

export default App;
