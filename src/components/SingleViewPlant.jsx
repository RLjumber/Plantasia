import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePageView = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`https://perenual.com/api/species/${id}?key=sk-naaK643621610b96f491`)
      .then((response) => response.json())
      .then((data) => setPlant(data.data));
  }, [id]);

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{plant.common_name}</h1>
      <p>Scientific Name: {plant.scientific_name}</p>
      <p>Other Name: {plant.other_name}</p>
      <img src={plant.default_image.thumbnail} alt="Plant" />
    </div>
  );
};

export default SinglePageView;