import { Pressable, Text, View } from 'react-native'
import { BackIcon } from '../components/Icons'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { getMovieDetails } from '../lib/movieDB';
import { useEffect, useState } from 'react';
import { ScreenLayout } from '../components';
import { generalStyles } from '../Styles';

export const MovieDetailScreen = () => {
    const { id } = useLocalSearchParams();
    const [ movieDeatails, setMovieDetails ] = useState([]);

    useEffect(() => {

        getMovieDetails(id).then(movie => {
            setMovieDetails(movie)
        });

    }, []);
    return (
        <ScreenLayout>
            <Stack.Screen
                options={ {
                    title: movieDeatails.details?.title,
                    headerTitleAlign: 'center'
                } }
            />
            <Text style={ generalStyles.subtitle }>
                { `Movie Detail Page ${ movieDeatails.details?.title }` }
            </Text>
        </ ScreenLayout>
    )
}
