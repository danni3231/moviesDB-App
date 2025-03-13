import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ScreenLayout = ({ children }) => {

    const insets = useSafeAreaInsets();

    return (
        <View style={ {
            paddingTop: insets.top + 16,
            paddingBottom: insets.bottom,
        } }>
            { children }
        </View >
    )
}
