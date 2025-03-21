import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet } from 'react-native';
import { getUpcomingMovies } from '../lib/movieDB';
import { AnimatedMovieCard, InfoIcon, ScreenLayout } from '../components';
import { Link, Stack } from 'expo-router';
import { generalStyles } from '../Styles';

export default function UpcomingMoviesScreen () {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(movies => setMovies(movies));
    }, []);

    return (
        <ScreenLayout>
            {
                movies.length === 0 ?
                    <ActivityIndicator size='large' color='#2098FB' />
                    :
                    <FlatList
                        contentContainerStyle={ generalStyles.flatListContent }
                        style={ generalStyles.flatList }
                        showsVerticalScrollIndicator={ false }
                        data={ movies }
                        renderItem={ ({ item, index }) => <AnimatedMovieCard movie={ item } index={ index } /> }
                    />
            }
        </ ScreenLayout >
    );
}