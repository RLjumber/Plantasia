import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plants.css";

const Plants = () => {

    const [plants, setPlants] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchPlants = async (page) => {
        await fetch(`https://perenual.com/api/species-list?page=${page}&key=sk-naaK643621610b96f491`)
        .then(response => {
            return response.json()
          })
          .then(data => {
            setPlants(data.data)
          })
    }

    useEffect(() => {
        fetchPlants(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const goToPage = event.target.go_to.value;
        setCurrentPage(parseInt(goToPage));
    }

    return (
        <div className="all_plants_container">
            {plants.length > 0 && (
                <div key={plants.id} className="plant_container">
                    {plants.map(plant => (
                        <Link to={`/plants/${plant.id}`} className="plant_div">
                            {plant.default_image && <img src={plant.default_image.thumbnail} alt="Plant" className="image"></img>}
                            <div className="card_text">
                                <li className="name">{plant.common_name}</li>   
                                <li id="scientific_name">({plant.scientific_name})</li>
                            </div>                                
                            {/* {plant.other_name && <li>{plant.other_name}</li>} */}
                        </Link>
                    ))}
                </div>
            )}
            <div className="pagination">
                <button onClick={handlePreviousPage} className="prev_button">Previous</button>
                <ul className="page_list">
                    <li onClick={() => setCurrentPage(1)}>1</li>
                    {currentPage > 3 && <li>...</li>}
                    {currentPage > 2 && <li onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</li>}
                    {currentPage !== 1 && currentPage !== 200 && <li className="current_page">{currentPage}</li>}
                    {currentPage < 199 && <li onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</li>}
                    {currentPage < 197 && <li>...</li>}
                    <li onClick={() => setCurrentPage(200)}>200</li>
                </ul>
                <button onClick={handleNextPage} className="next_button">Next</button>
            </div>
            <form className="page_form" onSubmit={onSubmit}>
                <label for="go_to">Go to Page: </label>
                <input type="number" id="go_to" name="go_to"></input>
                <input type="submit" value="Submit" id="submit_go_to"></input>
            </form>
        </div>
    )
}

export default Plants;