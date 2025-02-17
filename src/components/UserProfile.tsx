import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// icons
import BackwardIcon from '../assets/icons/backward.svg';

const photos = [
    { id: 1, uri: 'https://source.unsplash.com/random/300x300?sig=1' },
    { id: 2, uri: 'https://source.unsplash.com/random/300x300?sig=2' },
    { id: 3, uri: 'https://source.unsplash.com/random/300x300?sig=3' },
    { id: 4, uri: 'https://source.unsplash.com/random/300x300?sig=4' },
    { id: 5, uri: 'https://source.unsplash.com/random/300x300?sig=5' },
    { id: 6, uri: 'https://source.unsplash.com/random/300x300?sig=6' },
    { id: 7, uri: 'https://source.unsplash.com/random/300x300?sig=7' },
    { id: 8, uri: 'https://source.unsplash.com/random/300x300?sig=8' },
    { id: 9, uri: 'https://source.unsplash.com/random/300x300?sig=9' },
    { id: 10, uri: 'https://source.unsplash.com/random/300x300?sig=10' },
    { id: 11, uri: 'https://source.unsplash.com/random/300x300?sig=11' },
    { id: 12, uri: 'https://source.unsplash.com/random/300x300?sig=12' },
    { id: 13, uri: 'https://source.unsplash.com/random/300x300?sig=13' },
    { id: 14, uri: 'https://source.unsplash.com/random/300x300?sig=14' },
    { id: 15, uri: 'https://source.unsplash.com/random/300x300?sig=15' },
    { id: 16, uri: 'https://source.unsplash.com/random/300x300?sig=16' },
    { id: 17, uri: 'https://source.unsplash.com/random/300x300?sig=17' },
    { id: 18, uri: 'https://source.unsplash.com/random/300x300?sig=18' },
];

interface UserInformationProps {
    profileImg: string,
    userName: string;
    userDescription: string;
    userSnaps: string;
    userFollowers: string;
    userFollowing: string;
}

const UserProfile: React.FC<UserInformationProps> = ({ profileImg, userName, userSnaps, userFollowers, userFollowing, userDescription }) => {

    const ListHeaderComponent = () => {
        return(
            <View style={styles.container}>
                <View style={styles.topcontainer}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <BackwardIcon style={styles.BackwardIcon} />
                    </TouchableOpacity>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
                <View style={styles.profileSection}>
                    <Image style={styles.profileImage} source={{ uri: profileImg }} />
                    <View style={styles.stats}>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{userSnaps}</Text>
                            <Text style={styles.statLabel}>snaps</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{userFollowers}</Text>
                            <Text style={styles.statLabel}>followers</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{userFollowing}</Text>
                            <Text style={styles.statLabel}>following</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.additionalSection}>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.description}>{userDescription}</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return(
        <FlatList
            data={photos}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            renderItem={({ item }) => (
                <Image source={{ uri: item.uri }} style={styles.photoItem} />
            )}
            contentContainerStyle={styles.flatListContainer}
            columnWrapperStyle={styles.columnWrapper}
            ListHeaderComponent={ListHeaderComponent}
        />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  topcontainer: {
    width: '100%',
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
    marginHorizontal: '1%',
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
    marginVertical: 10,
    marginBottom: 15,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    marginRight: 15,
    width: '23%',
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  stats: {
    flexDirection: 'row',
    flex: 1,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  statItem: {
    marginRight: '7%',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: 15,
    fontWeight: '400',
  },
  additionalSection: {
    marginLeft: 15,
    marginBottom: 25, // editButton과 flatList imgs 사이 간격
  },
  description: {
    marginBottom: 15,
    fontSize: 15,
    fontWeight: '400',
  },
  editButton: {
    width: '35%',
    borderWidth: 2,
    borderColor: '#A200FF',
    borderRadius: 40,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  editButtonText: {
    textAlign: 'center',
    color: '#A200FF',
    fontSize: 14,
    fontWeight: '600',
  },
  flatListContainer: {
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 3,
  },
  photoItem: {
    width: '32%',
    aspectRatio: 1,
    margin: '0.5%',
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
});

export default UserProfile;