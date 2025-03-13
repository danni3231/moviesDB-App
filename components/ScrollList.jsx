import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { getUpcomingMovies } from '../lib/movieDB';
import { AnimatedMovieCard } from './MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ScrollList () {
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
        <View style={ [ styles.container, { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 16 } ] }>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    flatList: {
        flex: 1,
    },

    flatListContent: {
        gap: 16,
    },
});
