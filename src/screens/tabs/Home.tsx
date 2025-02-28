import React from 'react';
import PROFILE from '../../index';
import Post from '../../components/Post';
import SettingIcon from '../../assets/icons/setting.svg';
import SearchIcon from '../../assets/icons/search.svg'

import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const profile = PROFILE.PROFILE;

export type RootStackParamList = {
    Search: undefined;
    Setting: undefined;
};

const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.appName}>SnapNow</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <SearchIcon width={20} height={20} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <SettingIcon width={24} height={24} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.post}>
                <Post
                    frontImg={PROFILE.FRONTIMG1}
                    backImg={PROFILE.BACKIMG1}
                    profileImg={profile}
                    username="uos_gungong"
                    postTime="30m"
                    likes={1000}
                />
                <Post
                    frontImg={PROFILE.FRONTIMG2}
                    backImg={PROFILE.BACKIMG2}
                    profileImg={PROFILE.PROFILE2}
                    username="squarepants_spongebob"
                    postTime="45m"
                    likes={2000}
                />
                <Post
                    frontImg={PROFILE.FRONTIMG3}
                    backImg={PROFILE.BACKIMG3}
                    profileImg={PROFILE.PROFILE3}
                    username="mr.Krabs"
                    postTime="1hr"
                    likes={3000}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollContainer: {
        backgroundColor: '#fff',
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    appName: {
        fontSize: 25,
        fontWeight: '400',
        fontFamily: 'BlackHanSans-Regular',
        color: '#8D3CFF',
        letterSpacing: -2,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 15,
    },
    post:{
        marginTop: 10,
    }
});

export default HomeScreen;
