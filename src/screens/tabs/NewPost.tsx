import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';


export default function NewPostScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>New Post</Text>
            </View>
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
    title: {
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        alignItems: 'center',// 화면의 중앙 정렬
    },
});