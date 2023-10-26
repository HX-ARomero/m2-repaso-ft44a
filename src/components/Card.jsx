import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../redux/actions";

export default function Card({ episode }) {
  //* episode: { id: , name: , air_date: , episode: }
  // console.log(episode);

  const [ isFavorite, setIsFavorite ] = React.useState(false);
  const favorites = useSelector(state => state.favorites); 

  useEffect(() => {
    favorites.forEach(fav => {
      if(fav.id === episode.id) {
        setIsFavorite(true);
      }
    })
  }, [favorites]);

  const dispatch = useDispatch();
  const handleClick = () => {
    const favorite = {
      ...episode,
      completed: false,
      rating: 3
    }
    dispatch(addFavorite(favorite));
  }
 
  return (
    <div>
      <h3>Name: {episode.name}</h3>
      <h3>Episode: {episode.episode}</h3>
      <h3>Release date: {episode.air_date}</h3>

      {
        isFavorite ? null : <button onClick={handleClick}>Add to favorites</button>
      }

      <hr />
    </div>
  );
}
