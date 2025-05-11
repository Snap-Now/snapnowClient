import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import SearchScreen from '../screens/detail/Search';
import SettingScreen from '../screens/detail/Setting';
import LikesScreen from '../screens/detail/Likes';
import FollowerScreen from '../screens/detail/Follower';
import FollowingScreen from '../screens/detail/Following';
import EditProfileScreen from '../screens/detail/EditProfile';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Likes" component={LikesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Followers" component={FollowerScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Following" component={FollowingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default MainStack;