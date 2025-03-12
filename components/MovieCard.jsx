import { Image, StyleSheet, Text, View } from 'react-native';
export const MovieCard = ({ movie }) => {
    const { image, title, score, description } = movie;

    return (
        <View key={ movie.id } style={ movieCardStyles.card }>
            <Image
                source={ { uri: image } }
                style={ movieCardStyles.images }
            />
            <View style={ movieCardStyles.info }>
                <Text style={ movieCardStyles.title }>{ title }</Text>
                <Text style={ movieCardStyles.text }>Score: { score }</Text>
                <Text numberOfLines={ 4 } style={ movieCardStyles.description }>{ description }</Text>
            </View>
        </View>
    )
}

const movieCardStyles = StyleSheet.create({
    card: {
        backgroundColor: '#ECEFF3',
        flex: 1,
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
        maxHeight: 150,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
    },
    description: {
        fontSize: 16,
    }

});
