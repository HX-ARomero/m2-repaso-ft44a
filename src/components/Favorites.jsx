import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Favorites(props) {

  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Favorites</h2>
      <hr />
      {
        favorites.map((fav, index) => (
          <div key={index}>
            <Link to={`/detail/${fav.id}`}>
              <h3>Name: {fav.name}</h3>
            </Link>
            <h4>Rating: {fav.rating}</h4>
            <button>
              {
                fav.completed
                  ? (
                    <span style={{ color: "green" }} >Completed</span>
                  )
                  : <span style={{ color: "red" }} >Incompleted</span>
              }
            </button>

            <button onClick={
              () => dispatch(deleteFavorite(fav.id))
            } >Delete</button>

          </div>
        ))
      }
    </div>
  );
}
