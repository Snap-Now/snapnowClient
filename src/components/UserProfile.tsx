import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BackwardIcon from '../assets/icons/backward.svg';
import PhotoGrid from './PhotoGrid';

const DATA = [
    { id: 1, uri: "https://i.namu.wiki/i/hkDOgJHC40yiIFKQDRz7YjHpzWrL9vCTT7mve4TF6Lj-GpGsBpvT8WlXbwOT_To1Ndl1zKrVLQ-SiwaGNFOgQA.webp", likes: 120, comments: 15 },
    { id: 2, uri: "https://leaveherenow.com/wp-content/uploads/2023/07/%EB%B6%80%EC%82%B0-%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C-%EA%B3%B3-optimized.jpg", likes: 98, comments: 22 },
    { id: 3, uri: "https://t1.daumcdn.net/cfile/tistory/9986B7415B0CB35D02", likes: 145, comments: 30 },
    { id: 4, uri: "https://cdn.informaticsview.com/news/photo/202406/129_413_13.jpg", likes: 200, comments: 50 },
    { id: 5, uri: "https://file2.nocutnews.co.kr/newsroom/image/2014/09/17/20140917154307958459.jpg", likes: 175, comments: 40 },
    { id: 6, uri: "https://i.namu.wiki/i/dlxaRWAGt6oORy7od4B8tffh0taLfslDoMn6q_AGALw4nCvLzT_hIb8_uWE4tcLbz5At61X6CXtDrBpTYJ4rVQ.webp", likes: 250, comments: 70 },
    { id: 7, uri: "https://d28dpoj42hxr8c.cloudfront.net/files/topics/9586_ext_14_ko_0.jpg?v=1449751963", likes: 110, comments: 20 },
    { id: 8, uri: "https://i.namu.wiki/i/M0elUXX0P2iRnBLG-JdrnKLWeuYy6RFGb1Q6hWTY55hYAqMM2Esg1So46T7OIZR4RQVEaFl9QzHkjlNP7HkOlQ.webp", likes: 180, comments: 33 },
    { id: 9, uri: "https://i.namu.wiki/i/-QdWOXfsd-3FL45_j5eTJmETCggxNkDQ61ztGSY5Mt91-Eo9PJUy490rImq1Ym_2CA_tss60bFI6TfL1KJcWqw.webp", likes: 300, comments: 80 },
    { id: 10, uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/University_of_Seoul.svg/1200px-University_of_Seoul.svg.png", likes: 400, comments: 90 },
];

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
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <BackwardIcon style={styles.BackwardIcon} />
                </TouchableOpacity>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <View style={styles.seperator} />

            <View style={styles.profileSection}>
                <Image style={styles.profileImage} source={{ uri: profileImg }} />
                <View style={styles.stats}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{userSnaps}</Text>
                        <Text style={styles.statLabel}>Snaps</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{userFollowers}</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{userFollowing}</Text>
                        <Text style={styles.statLabel}>Following</Text>
                    </View>
                </View>
            </View>

            <View style={styles.additionalSection}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
                    {userDescription}
                </Text>
                <TouchableOpacity style={styles.editButton}>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    iconContainer: {
        position: 'absolute',
        left: 15,
    },
    BackwardIcon: {
        width: 32,
        height: 32,
    },
    userName: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        flex: 1,
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
