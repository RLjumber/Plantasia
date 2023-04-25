import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./SingleViewPlant.css";
// import Footer from "./Footer";

const SinglePageView = () => {

  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const navigate = useNavigate();
  // const location = useLocation();

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

  const plantName = 
      plant.common_name  
      ? plant.common_name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      : null;

  const goBack = () => {
      // console.log("Hit!");
      // navigate(location.state?.from || '/'); // using optional chaining operator to get the previous location

      navigate(-1);
  };

  return (
    <div className="single-page-container">
      <div>
        <img src={plant.default_image.regular_url} alt="Plant" />
      </div>
      <div className="information">
        <h1 className="common-name">{plantName}</h1>
        <h4 className="scientific-name"><b>Scientific Name:</b> <em>{plant.scientific_name}</em></h4>
        {plant.other_name && plant.other_name.length > 0 ? <h4 className="other-name"><b>Other Name:</b> {plant.other_name}</h4> : null}
        {plant.family ? <p className="family"><b>Family:</b> {plant.family}</p> : null}
        {plant.origin ? <p className="origin"><b>Origin:</b> {Array.isArray(plant.origin) ? plant.origin.join(', ') : plant.origin}
        </p> : null}
        {plant.type ? <p className="type"><b>Type:</b> {plant.type}</p> : null}
        {plant.cycle ? <p><b>Cycle:</b> {plant.cycle}</p> : null}
        {plant.dimension ? <p><b>{plant.dimension}</b></p> : null}
        {plant.watering ? <p><b>Watering:</b> {plant.watering}</p> : null}
        {plant.attracts && plant.attracts.length > 0 ? <p><b>Attracts:</b> {plant.attracts.join(", ")}</p> : null}
        {plant.propagation && plant.propagation.length > 0 ? <p><b>Propagation:</b> {Array.isArray(plant.propagation) ? plant.propagation.join(", ") : plant.propagation}</p> : null}
        {plant.hardiness ? <p><b>Hardiness Zone:</b> <b>Min: </b>{plant.hardiness.min} <b>Max: </b>{plant.hardiness.max}</p> : null}
        <button onClick={goBack}>Take Me Back!</button>
  </div>
</div>
  );
};

export default SinglePageView;
