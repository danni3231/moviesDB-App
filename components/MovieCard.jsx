import { Image, StyleSheet, Text, View } from 'react-native';
export const MovieCard = ({ movie }) => {
    const { image, title, score, description } = movie;

    return (
        <View style={ styles.card }>
            <Image
                source={ { uri: image } }
                style={ styles.images }
            />
            <View style={ styles.info }>
                <Text style={ styles.title }>{ title }</Text>
                <Text style={ [ styles.text, { color: '#E06C75' } ] }>Score: { score }</Text>
                <Text numberOfLines={ 4 } style={ styles.text } >{ description }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
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
        gap: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2098FB'
    },
    text: {
        fontSize: 16,
        color: '#282C34',
    },
});
