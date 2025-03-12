import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Scroll from './components/Scroll';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App () {

    return (
        <SafeAreaProvider>
            <StatusBar style='light' />
            <View style={ styles.container } >
                <Scroll />
            </View>
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
