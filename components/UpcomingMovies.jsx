import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { getUpcomingMovies } from '../lib/movieDB';
import { AnimatedMovieCard } from './MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function UpcomingMovies () {
    const [ movies, setMovies ] = useState([]);
    const [ movieDeatails, setMovieDetails ] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(movies => setMovies(movies));
        /*       getMovieDetails(1126166).then(movie => {
                  setMovieDetails(movie)
              }); */
    }, []);

    return (
        <>
            <Text style={ styles.mainTitle }> Upcoming Movies </Text>
            <Link href='/about' style={ { color: '#2098FB', textAlign: 'center' } }>
                ir al about
            </Link>
            {
                movies.length === 0 ?
                    <ActivityIndicator style={ styles.loading } size='large' color='#2098FB' />
                    :
                    <FlatList
                        contentContainerStyle={ styles.flatListContent }
                        style={ styles.flatList }
                        data={ movies }
                        renderItem={ ({ item, index }) => <AnimatedMovieCard movie={ item } index={ index } /> }
                    />
            }
        </>
    );
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2098FB',
        textAlign: 'center',
    },
    flatList: {
        flex: 1,
        marginVertical: 16,
        paddingHorizontal: 16,
    },

    flatListContent: {
        gap: 16,
    },
});
