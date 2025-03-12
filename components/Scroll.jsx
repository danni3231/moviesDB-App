import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { getUpcomingMovies } from '../lib/movieDB';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MovieCard } from './MovieCard';

export default function Scroll () {
    const [ movies, setMovies ] = useState([]);
    const [ movieDeatails, setMovieDetails ] = useState([]);

    const insets = useSafeAreaInsets();

    useEffect(() => {
        getUpcomingMovies().then(movies => setMovies(movies));
        /*       getMovieDetails(1126166).then(movie => {
                  setMovieDetails(movie)
              }); */
    }, []);

    return (
        <View style={ { paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1 } }>
            <ScrollView style={ styles.scrollView } contentContainerStyle={ styles.scrollViewContent }>
                {
                    movies.map(movie => (
                        <MovieCard key={ movie.id } movie={ movie } />
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        padding: 24,
    },
    scrollViewContent: {
        gap: 16,
    },
});
