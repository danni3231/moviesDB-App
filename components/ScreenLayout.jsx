import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ScreenLayout = ({ children }) => {

    const insets = useSafeAreaInsets();

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
        backgroundColor: '#1C1D20',
    },
});
