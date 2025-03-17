import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Chip, ScreenLayout } from '../components';
import { generalStyles } from '../Styles';
import { useFecthMovie } from '../hooks/useFecthMovie';
import { ReviewCard } from '../components/ReviewCard';

export const MovieDetailScreen = () => {
    const { id } = useLocalSearchParams();

    const { isLoading, details, reviews } = useFecthMovie(id);

    return (
        <ScreenLayout>
            <Stack.Screen
                options={ {
                    headerShown: true,
                    title: 'Movie Details',
                    headerTitleAlign: 'center'
                } }
            />

            {
                isLoading ?
                    <ActivityIndicator size='large' color='#2098FB' />
                    :
                    <ScrollView
                        contentContainerStyle={ generalStyles.flatListContent }
                        style={ generalStyles.flatList }
                        showsVerticalScrollIndicator={ false }
                    >
                        <View style={ styles.row }>
                            <Image
                                source={ { uri: details.image } }
                                style={ styles.images }
                            />
                            <View style={ styles.generalInfo }>
                                <Text numberOfLines={ 1 } style={ styles.title }>{ details.title }</Text>
                                <Text numberOfLines={ 1 } style={ generalStyles.text }>{ details.tagline }</Text>
                                <Text style={ [ generalStyles.text, { color: '#E06C75' } ] }>Score: { details.score }</Text>
                                <View style={ [ styles.row, styles.wrap ] }>
                                    {
                                        details.genres.map((genre) => {
                                            return <Chip key={ genre.id } text={ genre.name } />;
                                        })
                                    }
                                </View>
                            </View>
                        </View>
                        <Text style={ generalStyles.text }>
                            { details.description }
                        </Text>
                        <View style={ { gap: 4 } }>
                            <Text style={ generalStyles.text }>
                                { `Release date: ${ details.releaseDate } - ${ id }` }
                            </Text>
                            <Text style={ generalStyles.text }>
                                { `Budget: ${ details.budget }` }
                            </Text>
                        </View>

                        <View style={ styles.container } >
                            <Text style={ [ generalStyles.subtitle, { color: '#2098FB' } ] }>Reviews:</Text>
                            {
                                reviews.map((review) => {
                                    return <ReviewCard key={ review.id } review={ review } />;
                                })
                            }
                        </View>
                    </ScrollView>
            }



        </ ScreenLayout >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
    },
    wrap: {
        flexWrap: 'wrap',
    },
    images: {
        width: 100,
        height: 150,
        borderRadius: 8,
    },
    generalInfo: {
        flexShrink: 1,
        maxHeight: 150,
        gap: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2098FB'
    },
});
