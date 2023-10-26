import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail(props) {

  const { id } = useParams();
  //* useParams() => { id: 2 } // string

  const favorites = useSelector(state => state.favorites);
  const myFavorite = favorites.filter(fav => fav.id === Number(id))[0]; // filter => [ {...} ]

  return (
    <div>
      <h2>Detail</h2>
      <hr />
      <h3>Title: {myFavorite.name}</h3>
      <h4>Episode: {myFavorite.episode}</h4>
      <h4>Characters:</h4>
      {
        myFavorite.characters.map(char => (
          <p>
            <a href={char} target="_blank">{char}</a>
          </p>
        ))
      }
    </div>
  );
}
