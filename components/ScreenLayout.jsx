import { StyleSheet, View } from 'react-native'
export const ScreenLayout = ({ children }) => {
    return (
        <View style={ styles.container }>
            { children }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
        paddingHorizontal: 16,
        backgroundColor: '#1C1D20',
    },
});
