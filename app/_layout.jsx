import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Layout = () => {
    return (
        <>
            <StatusBar style='light' />
            <Stack
                screenOptions={
                    {
                        headerStyle: { backgroundColor: '#1C1D20' },
                        headerTintColor: '#2098FB',
                    }
                }
            />
        </>
    )
}

export default Layout;
