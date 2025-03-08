import React from 'react';
import PROFILE from '../../index';
import Notification from '../../components/Notification';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';

const notifications = [
    { id: "1", username: "uos_gungong", profileImage: PROFILE.PROFILE, type: "request", time: "12m" },
    { id: "2", username: "squarepants_spongebob", profileImage: PROFILE.PROFILE2, type: "new_post", time: "12m" },
    { id: "3", username: "squarepants_spongebob", profileImage: PROFILE.PROFILE2, type: "reply_snap", time: "12m" },
    { id: "4", username: "squarepants_spongebob", profileImage: PROFILE.PROFILE2, type: "join_snap", time: "12m" },
    { id: "5", username: "uos_gungong", profileImage: PROFILE.PROFILE, type: "follow", time: "1d" },
    { id: "6", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "like", time: "1d" },
    { id: "7", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "mention", time: "2d" },
    { id: "8", username: "uos_gungong", profileImage: PROFILE.PROFILE, type: "follow", time: "2d" },
    { id: "9", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "like", time: "3d" },
    { id: "10", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "mention", time: "5d" },
    { id: "11", username: "uos_gungong", profileImage: PROFILE.PROFILE, type: "follow", time: "1w" },
    { id: "12", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "like", time: "1w" },
    { id: "13", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "mention", time: "1w" },
    { id: "14", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "comment", time: "12w" },
];

export default function LikesScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>

            {/* Header */}
            <View style={styles.topContainer}>
                <Text style={styles.title}>Notification</Text>
            </View>

            {/* Notifications */}
            <FlatList 
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Notification 
                        username={item.username}
                        profileImage={item.profileImage}
                        type={item.type}
                        time={item.time}
                    />
                )}
                contentContainerStyle={styles.listContainer}
            />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center", // 수평 정렬
        justifyContent: "center", // 수직 정렬
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        alignItems: 'center',// 화면의 중앙 정렬
    },
    listContainer: {
        backgroundColor: '#fff',
    },
});