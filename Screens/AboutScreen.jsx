import { FlatList, Pressable, Text, View } from 'react-native'
import { ScreenLayout, HomeIcon } from '../components'
import { Link, Stack } from 'expo-router'
import { generalStyles } from '../Styles'

export const AboutScreen = () => {
    return (
        <ScreenLayout>
            <Stack.Screen
                options={ {
                    title: 'About This App',
                    headerTitleAlign: 'center'
                } }
            />
            <View style={ { gap: 16 } }>
                <Text style={ [ generalStyles.text, generalStyles.centerText ] } >
                    Bienvenido a MoviesDB, tu compañero esencial para explorar el mundo del cine.
                    Diseñada con React Native, esta aplicación ofrece una experiencia rápida, intuitiva y fluida para los amantes del séptimo arte.
                </Text>
                <Text style={ [ generalStyles.subtitle, generalStyles.centerText ] }>
                    ¿Qué puedes hacer?
                </Text>

                <FlatList
                    contentContainerStyle={ generalStyles.flatListContent }
                    data={ [
                        { key: 'Explorar Películas: Descubre una amplia base de datos de películas, desde clásicos atemporales hasta los últimos estrenos.' },
                        { key: 'Detalles Completos: Consulta sinopsis, reparto, tráilers y valoraciones' },
                    ] }
                    renderItem={ ({ item }) => {
                        return <Text style={ generalStyles.text }>{ `\u2022 ${ item.key }` }</Text>
                    } }
                />

                <Text style={ [ generalStyles.subtitle, generalStyles.centerText ] }>
                    Nuestra Misión
                </Text>

                <Text style={ [ generalStyles.text, generalStyles.centerText ] }>
                    Facilitar tu acceso a la información cinematográfica, ayudándote a descubrir nuevas películas y gestionar tu experiencia de visualización de forma sencilla y eficiente.
                    Explora, descubre y disfruta del cine como nunca antes con MoviesDB.
                </Text>
            </View>
        </ScreenLayout>
    )
}
