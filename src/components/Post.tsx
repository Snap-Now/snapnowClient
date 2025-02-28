import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native';

// icons
import LikeIcon from '../assets/icons/small-like.svg';
import CommentIcon from '../assets/icons/comment.svg';

interface PostProps {
    frontImg: string;
    backImg: string;
    profileImg: string;
    username: string;
    postTime: string;
    likes: number;
}

const Post: React.FC<PostProps> = ({ frontImg, backImg, profileImg, username, postTime, likes }) => {
    const [images, setImages] = useState(() => [frontImg, backImg]);

    const changeImg = () => {
        setImages(([first, second]) => [second, first]);
    };

    return (
        <View style={styles.container}>
            {/* 사용자 정보 */}
            <View style={styles.user}>
                <Image source={{ uri: profileImg }} style={styles.profile} />
                <Text style={styles.userName}>{username}</Text>
                <Text style={styles.articleTime}>{postTime}</Text>
            </View>

            {/* 게시물 이미지 */}
            <Pressable onPress={changeImg}>
                <ImageBackground source={{ uri: images[0] }} style={styles.articleLargeImage}>
                    <Image source={{ uri: images[1] }} style={styles.articleSmallImage} />
                </ImageBackground>
            </Pressable>

            <View style={styles.fed}>
                {/* 액션 버튼 */}
                <View style={styles.fedAction}>
                    <TouchableOpacity>
                        <LikeIcon width={24} height={24} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CommentIcon width={24} height={24} style={styles.icon} />
                    </TouchableOpacity>
                </View>

                {/* 좋아요 개수 */}
                <Text style={styles.likesQuantity}>
                    {new Intl.NumberFormat().format(likes)} Likes
                </Text>

                {/* 게시글 텍스트 */}
                <View style={styles.fedContent}>
                    <Text style={styles.fedText}>
                        <Text style={styles.fedUserName}>{username} </Text>
                        <Text style={styles.fedUserContent}>미리보기에서는 텍스트 1줄까지만 지원한다.</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: 40,
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
    fed: {
        marginLeft: 10,
        marginRight: 5,
    },
    icon: {
        marginRight: 6,
    },
    fedAction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    likesQuantity: {
        fontWeight: '500',
    },
    fedContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fedText: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
