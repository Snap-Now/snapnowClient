import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import IMAGES from '../assets/images';
import SCREENS from '../screens';
import HomeScreen from '../screens/main/Home';
import MessageScreen from '../screens/main/Message';
import NewPostScreen from '../screens/main/NewPost';
import NotificationsScreens from '../screens/main/Notifications';
import ProfileScreen from '../screens/main/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: styles.tabBarStyle,
            tabBarShowLabel: false,
            headerShown: false,
        }}
        >
        <Tab.Screen
            name={SCREENS.HOME}
            component={HomeScreen}
            options={{
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? IMAGES.HOME_ACTIVE : IMAGES.HOME}
                style={styles.tabIcon}
                />
            ),
            }}
        />
        <Tab.Screen
            name={SCREENS.MESSAGE}
            component={MessageScreen}
            options={{
            title: 'Message',
            tabBarIcon: ({ focused }) => (
                <Image
                source={IMAGES.MESSAGE}
                style={styles.tabIcon}
                />
            ),
            }}
        />
        <Tab.Screen
            name={SCREENS.NEWPOST}
            component={NewPostScreen}
            options={{
            title: 'NewSnap',
            tabBarStyle: { display: 'none' },
            tabBarIcon: ({ focused }) => (
                <Image
                source={IMAGES.CREATE}
                style={styles.tabIcon}
                />
            ),
            }}
        />
        <Tab.Screen
            name={SCREENS.NOTIFICATIONS}
            component={NotificationsScreens}
            options={{
            title: 'Notifications',
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? IMAGES.LIKE_ACTIVE : IMAGES.LIKE}
                style={styles.tabIcon}
                />
            ),
            }}
        />
        <Tab.Screen
            name={SCREENS.PROFILE}
            component={ProfileScreen}
            options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? IMAGES.PROFILE_ACTIVE : IMAGES.PROFILE}
                style={styles.tabIcon}
                />
            ),
            }}
        />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height: '6%',
        backgroundColor: '#fff',
    },
    tabIcon: {
        marginTop: 5,
        height: 28,
        width: 28,
    },
});

export default BottomTabNavigator;