import axios from "axios";
import React, { useEffect } from "react";
import Card from "./Card";

export default function Home(props) {

  const [ episodes, setEpisodes ] = React.useState([]); //* [ { 1 }, { 2 }, { 3 }, ... ]
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/episode`) //* { data: respuesta }
      .then(response => setEpisodes(response.data)) //* episodes = { info:..., results: [ { 1 }, ... ] }
      .catch(error => console.log(error))
  }, [])


  return (
    <div>
      <h2>Episodes</h2>
      <hr />
      {
        episodes.results?.map((episode, index) => <Card key={index} episode={ episode } /> )
      }
    </div>
  );
}
