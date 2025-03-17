import { Tabs } from 'expo-router';

import React from 'react'
import { HomeIcon, InfoIcon } from '../../components';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={ {
                headerStyle: { backgroundColor: '#1C1D20' },
                headerTintColor: '#2098FB',
                tabBarStyle: { backgroundColor: '#1C1D20' },
                tabBarInactiveTintColor: '#535760',
                tabBarActiveTintColor: '#2098FB',
            } }
        >
            <Tabs.Screen
                name='index'
                options={ {
                    headerTitle: 'Upcoming Movies',
                    title: 'Home',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color }) => <HomeIcon color={ color } />
                } }
            />
            <Tabs.Screen
                name='about'
                options={ {
                    headerTitle: 'About This App',
                    title: 'About',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color }) => <InfoIcon color={ color } />
                } }
            />
        </Tabs>
    )
}

export default TabsLayout