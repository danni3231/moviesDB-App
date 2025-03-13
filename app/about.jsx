import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

export const about = () => {
    return (
        <ScrollView>
            <Text style={ styles.mainTitle }>About</Text>
            <Text style={ styles.text }>This is the page about...</Text>
            <Link href='/' style={ styles.text } >
                ir al home
            </Link>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#1C1D20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2098FB',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: '#282C34',
    },
});

export default about;