import React from "react";

export default function Card({ episode }) {
  //* episode: { id: , name: , air_date: , episode: }
  // console.log(episode);
  return (
    <div>
      <h3>Name: {episode.name}</h3>
      <h3>Episode: {episode.episode}</h3>
      <h3>Release date: {episode.air_date}</h3>
      <hr />
    </div>
  );
}
