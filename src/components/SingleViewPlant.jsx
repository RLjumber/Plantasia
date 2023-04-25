import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePageView = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    if (id !== undefined) {
      fetch(`https://perenual.com/api/species/details/${id}?key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.json())
        .then((data) => setPlant(data))
        .catch((error) => console.log(error));
    }

  }, [id]);
  

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{plant.common_name}</h1>
      <p>Scientific Name: {plant.scientific_name}</p>
      <p>Other Name: {plant.other_name}</p>
      <p>Origin: {plant.origin.map}</p>
      <img src={plant.default_image.regular_url} alt="Plant" />
    </div>
  );
};

export default SinglePageView;
