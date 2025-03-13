import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HomeIcon } from '../components/Icons';

const about = () => {
    return (
        <>
            <Text style={ styles.mainTitle }>About</Text>
            <Text style={ styles.text }>This is the page about...</Text>
            <Link asChild href='/' >
                <Pressable>
                    <HomeIcon />
                </Pressable>
            </Link>
        </ >
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