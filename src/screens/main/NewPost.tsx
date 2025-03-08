import React from 'react';
import PROFILE from '../../index';
import MakeSnapPost from '../../components/MakeSnapPost';
import BackWardIcon from '../../assets/icons/backward.svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function SearchScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/* 헤더 */}
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backIcon}>
                        <BackWardIcon width={12} height={32} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Create new Snap</Text>
                    <TouchableOpacity style={styles.shareButton}>
                        <Text style={styles.shareText}>share</Text>
                    </TouchableOpacity>
                </View>

                {/* SnapPost */}
                <MakeSnapPost username='uos_gungong' profileImage={PROFILE.PROFILE}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
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
    backIcon: {
        position: 'absolute',
        left: 10,
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        alignItems: 'center',
    },
    shareButton: {
        position: 'absolute',
        right: 16,
        padding: 8,
    },
    shareText: {
        fontWeight: 700,
        color: '#8D3CFF',
        fontSize: 15,
    },
});