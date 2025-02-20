export const fetchMovies = async (
  searchText,
  moviesCallback,
  errorCallback,
  finallyCallback
) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchText}&apikey=6763f482&type=movie`
    )
    const data = await response.json()

    if (data.Response === 'True') {
      const movieDetailsPromises = data.Search.map((movie) =>
        fetchMovieDetails(movie.imdbID, errorCallback)
      )
      const movieDetails = await Promise.all(movieDetailsPromises)

      moviesCallback(movieDetails)
      errorCallback(null)
    } else {
      moviesCallback([])
      errorCallback(data.Error)
    }
  } catch (err) {
    moviesCallback([])
    errorCallback('An error occurred while fetching data.')
  } finally {
    finallyCallback()
  }
}

const fetchMovieDetails = async (id, errorCallback) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=6763f482`
    )
    const data = await response.json()

    if (data.Response === 'True') {
      return data
    } else {
      throw new Error(data.Error)
    }
  } catch (err) {
    errorCallback('An error occurred while fetching movie details.')
  }
}
