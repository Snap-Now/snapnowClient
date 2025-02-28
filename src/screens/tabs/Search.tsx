import React from 'react';
import SearchBar from '../../components/SearchBar';
import BackWardIcon from '../../assets/icons/backward.svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function SearchScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

            {/* Header */}
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                    <BackWardIcon width={12} height={32} />
                </TouchableOpacity>
                <Text style={styles.title}>Search</Text>
            </View>
            
            {/* SearchBar */}
            <View style={styles.searchBar}>
                <SearchBar />
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
    backIcon: {
        position: 'absolute',
        left: 16,
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        alignItems: 'center',
    },
    searchBar: {
        marginTop: 10,
    },
});