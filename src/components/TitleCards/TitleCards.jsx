/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";

const TitleCards = ({ title, category }) => {
  const [appData, setAppData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGM5YzIxZjYwMjcyOTVhOGQ0NzVhZjU5MzM2MzFiOSIsIm5iZiI6MTc0NTQxOTA4Ni4zMzUsInN1YiI6IjY4MDhmYjRlMTQyYjA5Y2VjZjhhMDNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pZafCksO0eHAL88DagvE7yEYY-A5QHWAC7BbIeeGYfw",
    },
  };

  // const handleWheel = (event) => {
  //   event.preventDefault();
  //   cardsRef.current.scrollLeft += event.deltaY;
  // };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setAppData(res.results))
      .catch((err) => console.error(err));
  }, [options]);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {appData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt={card.name}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
