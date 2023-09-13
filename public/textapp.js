return (
    <section className="sec-chf">
      {movieData.results.slice(0, 10).map((movie) => (
        <article
          className="sec-chf-art"
          data-testid="movie-card"
          onClick={() => {
            router.push(`/movies/${movie.id}`);
          }}
          key={movie.id} 
        >
          <div className="sec-chf-movpcon">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              fill
              sizes="(min-width: 400px) 100vw"
              data-testid="movie-poster"
            />
          </div>
          <div>
            <h2 className="sec-chf-movie-title" data-testid="movie-title">
              <span className="sec-chf-movtitprop">Movie Title: </span>
              <span className="sec-chf-movtitval">{movie.title}</span>
            </h2>
            <h3 className="sec-chf-movreldat" data-testid="movie-release-date">
              <span className="sec-chf-movrelprop">Movie Release Date: </span>
              <span className="sec-chf-movrelval">{movie.release_date}</span>
            </h3>
          </div>
        </article>
      ))}
    </section>
  );
  