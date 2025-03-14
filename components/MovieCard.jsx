import { Link } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
export const MovieCard = ({ movie }) => {
    const { image, title, score, description, id } = movie;

    return (
        <Link href={ `${ id }` } asChild>
            <Pressable >
                <View style={ styles.card } >
                    <Image
                        source={ { uri: image } }
                        style={ styles.images }
                    />
                    <View style={ styles.info }>
                        <Text numberOfLines={ 1 } style={ styles.title }>{ title }</Text>
                        <Text style={ [ styles.text, { color: '#E06C75' } ] }>Score: { score }</Text>
                        <Text numberOfLines={ 4 } style={ styles.text } >{ description }</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}

export const AnimatedMovieCard = ({ movie, index }) => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: 100 * index,
            useNativeDriver: true,
        }).start();
    }, [ opacity, index ])

    return (
        <Animated.View style={ [ opacity ] }>
            <MovieCard movie={ movie } />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#ECEFF3',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 12,
        gap: 8,
    },
    images: {
        width: 100,
        height: 150,
        borderRadius: 8,
    },
    info: {
        flexShrink: 1,
        maxHeight: 150,
        gap: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2098FB'
    },
    text: {
        fontSize: 16,
        color: '#282C34',
    },
});
