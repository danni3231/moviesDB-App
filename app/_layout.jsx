import { StyleSheet } from 'react-native'
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ScreenLayout } from '../components/ScreenLayout';

const Layout = () => {

    return (
        <SafeAreaProvider style={ styles.container }>
            <StatusBar style='light' />
            <ScreenLayout>
                <Slot />
            </ScreenLayout>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1D20',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Layout;
