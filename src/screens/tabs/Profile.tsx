import React from 'react';
import PROFILE from '../..';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import UserProfile from '../../components/UserProfile';

const Profile = () => {
    return(
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <UserProfile
                    profileImg={PROFILE.PROFILE}
                    userName="uos_gungong"
                    userSnaps="10"
                    userFollowers="200"
                    userFollowing="180"
                    userDescription="엣헴! 나에 대해 설명하도록 하지. 나는 flab 최강 짱짱맨이야!"
                />
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
});

export default Profile;