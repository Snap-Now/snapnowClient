import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import IMAGES from "../assets/images";
import SCREENS from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/tabs/Home";
import MessageScreen from "../screens/tabs/Message";
import NewPostScreen from "../screens/tabs/NewPost";
import LikesScreen from "../screens/tabs/Likes";
import ProfileScreen from "../screens/tabs/Profile";
import SearchScreen from "../screens/tabs/Search";
import SettingScreen from "../screens/tabs/Setting";
import FollowerScreen from "../screens/tabs/Follower";
import FollowingScreen from "../screens/tabs/Following";
import EditProfileScreen from '../screens/tabs/EditProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
                            style={[styles.tabIcon]}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.NEWPOST}
                component={NewPostScreen}
                options={{
                    title: 'NewPost',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={IMAGES.CREATE}
                            style={styles.tabIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.LIKES}
                component={LikesScreen}
                options={{
                    title: 'Likes',
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

const Navigator = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
            
            <Stack.Screen name="Followers" component={FollowerScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Following" component={FollowingScreen} options={{ headerShown: false }} />
            
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTitleStyle: {
        fontSize: 25,
        fontFamily: 'BlackHanSans-Regular',
        fontWeight: '400',
        color: '#8D3CFF',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    searchIcon: {
        height: 20,
        width: 20,
        marginRight: 20,
    },
    settingIcon: {
        height: 24,
        width: 24,
    },
    tabBarStyle: {
        height: '6%',
        backgroundColor: '#fff',
    },
    tabIcon: {
        marginTop: 5,
        height: 28,
        width: 28,
    },
    backButton: {
        padding: 10,
    },
    backIcon: {
        width: 12,
        height: 32,
    },
});

export default Navigator;