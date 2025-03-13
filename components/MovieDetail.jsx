import { Pressable, Text, View } from 'react-native'
import { BackIcon } from './Icons'
import { Link, useLocalSearchParams } from 'expo-router'
import { getMovieDetails } from '../lib/movieDB';
import { useEffect, useState } from 'react';

export const MovieDetail = () => {
    const { id } = useLocalSearchParams();
    const [ movieDeatails, setMovieDetails ] = useState([]);

    useEffect(() => {

        getMovieDetails(id).then(movie => {
            setMovieDetails(movie)
        });

    }, []);
    return (
        <>
            <Text>
                { `Movie Detail Page ${ movieDeatails.details?.title }` }
            </Text>
            <Link asChild href='/' >
                <Pressable>
                    <BackIcon />
                </Pressable>
            </Link>
        </>
    )
}
