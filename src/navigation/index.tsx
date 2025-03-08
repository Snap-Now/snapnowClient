import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import IMAGES from "../assets/images";
import SCREENS from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/main/Home";
import MessageScreen from "../screens/main/Message";
import NewPostScreen from "../screens/main/NewPost";
import NotificationsScreens from "../screens/main/Notifications";
import ProfileScreen from "../screens/main/Profile";
import SearchScreen from "../screens/detail/Search";
import SettingScreen from "../screens/detail/Setting";
import FollowerScreen from "../screens/detail/Follower";
import FollowingScreen from "../screens/detail/Following";
import EditProfileScreen from '../screens/detail/EditProfile';
import LikesScreen from "../screens/detail/Likes";

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

const Navigator = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            {/** Home화면 속 Search 및 Setting */}
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />

            {/** Post 게시글 속 Likes */}
            <Stack.Screen name="Likes" component={LikesScreen} options={{ headerShown: false }} />
            
            {/** Profile화면 속 Followers, Following, EditProfile */}
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