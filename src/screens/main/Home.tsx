import React from 'react';
import Post from '../../components/Post';
import IMAGES from '../../assets/images/index';
import { POSTS, PostType } from '../../data/postsData';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    
    const renderHeader = () => (
        <View style={styles.topContainer}>
            <Text style={styles.appName}>SnapNow</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Search')}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Image source={IMAGES.SEARCH} style={styles.searchIcon} />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Setting')}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Image source={IMAGES.SETTING} style={styles.settingIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
    
    const renderItem = ({ item }: { item: PostType }) => (
                    <Post
                        key={item.id}
                        postId={item.id}
                        frontImg={item.frontImg}
                        backImg={item.backImg}
                        profileImg={item.profileImg}
                        username={item.username}
                        postTime={item.postTime}
                        likes={item.likes}
                    />
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            
            {renderHeader()}
            
            <FlatList
                data={POSTS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.postContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        backgroundColor: '#fff',
    },
    appName: {
        fontSize: 25,
        fontWeight: '400',
        fontFamily: 'BlackHanSans-Regular',
        color: '#8D3CFF',
        letterSpacing: -2,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        marginLeft: 15,
        width: 22,
        height: 22,
    },
    settingIcon: {
        marginLeft: 15,
        width: 24,
        height: 24,
    },
    postContainer: {
        paddingTop: 10,
    }
});

export default HomeScreen;