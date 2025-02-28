import React, {useState} from 'react';
import BackWardIcon from '../../assets/icons/backward.svg';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Switch,
} from 'react-native';

export default function SettingScreen() {
    const navigation = useNavigation();
    const [likeComment, setLikeComment] = useState(true);
    const [chatting, setChatting] = useState(true);
    const [tag, setTag] = useState(true);
    const [newFollower, setNewFollower] = useState(true);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            {/* Header */}
            <View style={styles.topContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backIcon}>
                    <BackWardIcon width={12} height={32} />
                </TouchableOpacity>
                <Text style={styles.title}>Setting</Text>
            </View>

            {/* Notifications Settings */}
            <View style={styles.content}>
                <Text style={styles.header}>Notifications</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Like, comment</Text>
                    <Switch
                        value={likeComment}
                        onValueChange={() => setLikeComment((previousState) => !previousState)}
                        trackColor={{ false: "white", true: "black"}}
                        thumbColor="white"
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Chatting</Text>
                    <Switch value={chatting}
                        onValueChange={() => setChatting((previousState) => !previousState)}
                        trackColor={{ false: "white", true: "black"}}
                        thumbColor="white"
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tag</Text>
                    <Switch value={tag}
                        onValueChange={() => setTag((previousState) => !previousState)}
                        trackColor={{ false: "white", true: "black"}}
                        thumbColor="white"
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>New Follower</Text>
                    <Switch value={newFollower}
                        onValueChange={() => setNewFollower((previousState) => !previousState)}
                        trackColor={{ false: "white", true: "black"}}
                        thumbColor="white"
                    />
                </View>
            </View>

            {/* Logout */}
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    backIcon: {
        position: 'absolute',
        left: 16,
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
    },
    content: {
        padding: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    label: {
        fontSize: 16,
    },
    logoutButton: {
        marginTop: 30,
        paddingVertical: 10,
        alignItems: 'center',
    },
    logoutText: {
        fontSize: 16,
        color: 'red',
    },
});
