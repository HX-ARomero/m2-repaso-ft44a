import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completedFavorite, deleteFavorite, ratingFavorite } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Favorites(props) {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      ratingFavorite({
        id: Number(event.target.name),
        rating: event.target.value,
      })
    );
  };

  return (
    <div>
      <h2>Favorites</h2>
      <hr />
      {favorites.map((fav, index) => (
        <div key={index}>
          <Link to={`/detail/${fav.id}`}>
            <h3>Name: {fav.name}</h3>
          </Link>
          <h4>Rating: {fav.rating}</h4>

          <select name={fav.id} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button onClick={() => dispatch(completedFavorite(fav.id))}>
            {fav.completed ? (
              <span style={{ color: "green" }}>Completed</span>
            ) : (
              <span style={{ color: "red" }}>Incompleted</span>
            )}
          </button>

          <button onClick={() => dispatch(deleteFavorite(fav.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
