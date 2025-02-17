import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native';

// icons
import LiekIcon from '../assets/icons/small-like.svg';
import CommentIcon from '../assets/icons/comment.svg';

interface PostProps {
    frontImg: string;
    backImg: string;
    profileImg: string;
    username: string;
    postTime: string;
    likes: number;
}

const Post: React.FC<PostProps> = ({ frontImg, backImg, profileImg, username, postTime, likes}) => {
    const [images, setImages] = useState([frontImg, backImg]);
    
    
    const changeImg = () => {
        setImages(prevImages => [
            prevImages[1],
            prevImages[0]
        ]);
    };

    return(
        <View style={styles.container}>
            <View style={styles.user}>
                <View>
                    <Image source={{uri: profileImg}} style={styles.profile} />
                </View>
                <View>
                    <Text style={styles.userName}>{username}</Text>
                </View>
                <View>
                    <Text style={styles.articleTime}>{postTime}</Text>
                </View>
            </View>
            <View>
                <Pressable onPress={changeImg}>
                    <ImageBackground source={{ uri: images[0] }} style={styles.articleLargeImage}>
                        <View>
                            <Image source={{ uri: images[1] }} style={styles.articleSmallImage} />
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>
            <View style={styles.fedAction}>
                <TouchableOpacity>
                    <LiekIcon style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <CommentIcon style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.likesQuantity}>
                {likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Likes
            </Text>
            <View style={styles.fedContent}>
                <Text style={styles.fedUserName}>
                    {username}{' '}
                </Text>
                <Text style={styles.fedUserContent}>
                    미리보기에서는 텍스트 1줄까지만 지원한다.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: 25,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 8,
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 30,
    },
    userName: {
        paddingLeft: 10,
        fontWeight: '600',
        color: 'black',
    },
    articleTime: {
        paddingLeft: 10,
        textAlign: 'center',
        fontWeight: '600',
        color: '#9d9d9d',
    },
    articleLargeImage: {
        alignSelf: 'stretch',
        height: 400,
        marginBottom: 8,
    },
    articleSmallImage: {
        borderRadius: 4,
        width: 120,
        height: 120,
        marginLeft: 10,
        marginTop: 10,
    },
    fedAction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    likesQuantity: {
        fontWeight: '500',
        marginLeft: 15,
    },
    fedContent: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    fedUserName: {
        fontWeight: '600',
        color: 'black',
    },
    fedUserContent: {
        color: 'black',
    },
});

export default Post;