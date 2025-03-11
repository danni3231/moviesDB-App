import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { getMovieDetails, getUpcomingMovies } from './Lib/movieDB';

const icon = require('./assets/icon.png');

export default function App () {
    const [ movies, setMovies ] = useState([]);
    const [ movieDeatails, setMovieDetails ] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(movies => setMovies(movies));
        /*       getMovieDetails(1126166).then(movie => {
                  setMovieDetails(movie)
              }); */

    }, []);

    return (
        <View style={ styles.container }>
            <Pressable
                onPress={ () => {
                    console.log(movieDeatails, movies);
                } }
                style={ ({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white',
                    },
                    styles.wrapperCustom,
                ] }
            >
                { ({ pressed }) => (
                    <Text style={ styles.text }>
                        { pressed ? 'Pressed!' : 'Press Me' }
                    </Text>
                ) }
            </Pressable>

            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1D20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
});
