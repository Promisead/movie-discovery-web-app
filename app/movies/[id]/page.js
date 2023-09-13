"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useContext } from "react";
import { StateContext } from "../../StateProvider";

export default function MovieId({ params }) {
  const itemId = parseInt(params.id);
  const apiKey  = "807ca39e3d474d4e081ef8110b4683d8";
  const {
    isLoading,
    setIsLoading,
    error,
    setError,
    detailsData,
    setDetailsData,
  } = useContext(StateContext);

  useEffect(() => {
    async function fetchDetailsData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${itemId}?api_key=${apiKey}`
        );
        const data = await response.json();
        setDetailsData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.error("Error fetching movies data:", error);
      }
    }

    fetchDetailsData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="sec-cdet">
      <article className="sec-cdet-art" data-testid="movie-card">
        <div className="sec-cdet-movpcon">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${detailsData.poster_path}`}
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
            data-testid="movie-poster"
          />
        </div>
        <div>
          <h2 className="sec-cdet-movie-title" data-testid="movie-title">
            <span className="sec-cdet-movtitprop">Movie Title: </span>
            <span className="sec-cdet-movtitval">
            {detailsData.title}
            </span>
          </h2>
          <h3 className="sec-cdet-movreldat" data-testid="movie-release-date">
            <span className="sec-cdet-movrelprop">Movie Release Date: </span>
            <span className="sec-cdet-movrelval">{detailsData.release_date}</span>
          </h3>
          <h4 className="sec-cdet-movruntime" data-testid="movie-runtime">
            <span className="sec-cdet-movrunprop">Movie Runtime: </span>
            <span className="sec-cdet-movrunval">{detailsData.runtime}</span>
          </h4>
          <h5 className="sec-cdet-movover" data-testid="movie-overview">
            <span className="sec-cdet-movoverprop">Movie Overview: </span>
            <span className="sec-cdet-movoverval">{detailsData.overview}</span>
          </h5>
        </div>
      </article>
    </section>
  );
}
