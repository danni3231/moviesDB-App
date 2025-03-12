const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzZkOGIwNzViMDdjYTc5ZDI1YmMyZmMyNGU0N2FiMyIsIm5iZiI6MTc0MTcwODYwOC4xNjIsInN1YiI6IjY3ZDA1ZDQwMjdjMzk2MGMyZDFkZjNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-xUrIppikqOhDXv6J5I9G5t90-QxyxRHeVsSiQzfFZ8',
	},
};
export async function getUpcomingMovies() {
	const UPCOMING_MOVIES =
		'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

	const rawData = await fetch(UPCOMING_MOVIES, options);
	const json = await rawData.json();

	const { results } = json;

	return results.map(item => {
		const {
			overview: description,
			id,
			release_date: releaseDate,
			poster_path: posterPath,
			vote_average: score,
			title,
		} = item;

		const image = `https://image.tmdb.org/t/p/w200${posterPath}`;

		return {
			description,
			id,
			image,
			releaseDate,
			score,
			title,
		};
	});
}

export async function getMovieDetails(id) {
	const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
	const MOVIE_REVIEWS = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;

	//get movie details from the API
	const resDetails = await fetch(MOVIE_DETAILS, options);
	const jsonDetails = await resDetails.json();

	const {
		budget,
		genres,
		homepage: url,
		tagline,
		overview: description,
		release_date: releaseDate,
		poster_path: posterPath,
		vote_average: score,
		title,
	} = jsonDetails;

	const image = `https://image.tmdb.org/t/p/w200${posterPath}`;

	//get reviews from the API
	const resReviews = await fetch(MOVIE_REVIEWS, options);
	const jsonReviews = await resReviews.json();

	const { results: reviews } = jsonReviews;

	return {
		details: {
			budget,
			genres,
			url,
			tagline,
			description,
			releaseDate,
			image,
			score,
			title,
		},
		reviews,
	};
}
