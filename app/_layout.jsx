import { StyleSheet, View } from 'react-native'
import { Slot, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ScreenLayout } from '../components/ScreenLayout';

const Layout = () => {

    return (
        <>
            <StatusBar style='DARK' />
            <Stack />
        </>
    )
}

export default Layout;
