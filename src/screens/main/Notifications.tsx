import React from 'react';
import Notification from '../../components/Notification';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { notifications, NotificationItem } from '../../data/notificationsData';

export default function NotificationsScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
        paddingBottom: 15,
    },
});