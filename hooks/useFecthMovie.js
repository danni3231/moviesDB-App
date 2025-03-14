import { useEffect, useState } from 'react';
import { getMovieDetails } from '../lib/movieDB';

export const useFecthMovie = id => {
	const [details, setDetails] = useState({});
	const [reviews, setReviews] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getMovieDetails(id).then(movie => {
			setDetails(movie.details);
			setReviews(movie.reviews);
			setIsLoading(false);
		});
	}, []);

	return {
		details,
		reviews,
		isLoading,
	};
};
