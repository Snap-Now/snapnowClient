import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { DATA } from '../data/UserPhotosData';

import PhotoGrid from './PhotoGrid';

interface UserInformationProps {
    profileImg: string;
    userName: string;
    userDescription: string;
    userSnaps: string;
    userFollowers: string;
    userFollowing: string;
}

const UserProfile: React.FC<UserInformationProps> = ({
    profileImg,
    userName,
    userSnaps,
    userFollowers,
    userFollowing,
    userDescription,
}) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <View style={styles.profileSection}>
                <Image style={styles.profileImage} source={{ uri: profileImg }} />
                <View style={styles.stats}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{userSnaps}</Text>
                        <Text style={styles.statLabel}>Snaps</Text>
                    </View>
                    <View style={styles.statItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('Followers')}>
                            <Text style={styles.statNumber}>{userFollowers}</Text>
                            <Text style={styles.statLabel}>followers</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.statItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('Following')}>
                            <Text style={styles.statNumber}>{userFollowing}</Text>
                            <Text style={styles.statLabel}>following</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.additionalSection}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
                    {userDescription}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            {/* 📌 PhotoGrid 사용 */}
            <PhotoGrid data={DATA} />
        </View>
    );
};

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
    userName: {
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        alignItems: 'center',// 화면의 중앙 정렬
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#ccc',
    },
    stats: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    statItem: {
        marginRight: '7%',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: '600',
    },
    statLabel: {
        fontSize: 14,
        color: '#555',
    },
    additionalSection: {
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    description: {
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
    },
    editButton: {
        alignSelf: 'flex-start',
        borderWidth: 2,
        borderColor: '#A200FF',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: '10%',
    },
    editButtonText: {
        color: '#A200FF',
        fontSize: 14,
        fontWeight: '600',
    },
    seperator: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#d3d3d3',
        marginVertical: 3,
    },
});

export default UserProfile;
