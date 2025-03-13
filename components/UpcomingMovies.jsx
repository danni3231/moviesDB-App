import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getUpcomingMovies } from '../lib/movieDB';
import { AnimatedMovieCard } from './MovieCard';
import { Link, Stack } from 'expo-router';
import { InfoIcon } from './Icons';
import { ScreenLayout } from './ScreenLayout';

export default function UpcomingMovies () {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(movies => setMovies(movies));
    }, []);

    return (
        <ScreenLayout>
            <Stack.Screen
                options={ {
                    title: 'Upcoming Movies',
                    headerStyle: { backgroundColor: '#1C1D20' },
                    headerTintColor: '#2098FB',
                    headerRight: () => (
                        <Link asChild href='/about' >
                            <Pressable>
                                <InfoIcon />
                            </Pressable>
                        </Link>
                    )
                } }
            />
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
        </ ScreenLayout >
    );
}

const styles = StyleSheet.create({

    flatList: {
        flex: 1,
        paddingHorizontal: 16,
    },

    flatListContent: {
        gap: 16,
    },
});
