import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import UpcomingMovies from './components/UpcomingMovies';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App () {
    return (
        <SafeAreaProvider style={ styles.container }>
            <StatusBar style='light' />
            <UpcomingMovies />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1D20',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
