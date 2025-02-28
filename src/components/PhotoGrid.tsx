import React, { useState } from 'react';
import { View, Image, StyleSheet, Pressable, Dimensions, Text } from 'react-native';

// icons
import LikeIcon from '../assets/icons/white_like.svg';
import CommentIcon from '../assets/icons/white_comment.svg';

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const spacing = 2; // 사진 사이 여백
const imageSize = (screenWidth - spacing * (numColumns - 1)) / numColumns; // 여백 포함 크기 조정

interface PhotoGridProps {
    data: { id: number; uri: string; likes: number; comments: number }[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ data }) => {
    const [longPressId, setLongPressId] = useState<number | null>(null);

    const handleLongPress = (id: number) => {
        setLongPressId(id); // 특정 사진의 id를 저장
    };

    const handlePressOut = () => {
        setLongPressId(null); // long press가 끝나면 상태 초기화
    };

    return (
        <View style={styles.gridContainer}>
            {data.map((item) => (
                <Pressable
                    key={item.id}
                    onLongPress={() => handleLongPress(item.id)}
                    onPressOut={handlePressOut}
                    style={styles.pressable}
                >
                    <Image key={item.id} source={{ uri: item.uri }} style={styles.image} />
                    {longPressId === item.id && (
                        <View style={styles.overlay}>
                            <View style={styles.hovercontainer}>
                                <LikeIcon style={styles.icon}/>
                                <Text style={styles.hoverText}>{item.likes}</Text>
                            </View>
                            <CommentIcon style={styles.icon}/>
                            <Text style={styles.hoverText}>{item.comments}</Text>
                        </View>
                    )}
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    pressable: {
        position: 'relative', // overlay와 아이콘을 위해 position 설정
    },
    image: {
        width: imageSize,
        height: imageSize,
        marginBottom: spacing,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#3131314D',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hovercontainer: {
        flexDirection: 'row',
        marginRight: 7,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 3,
    },
    hoverText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
    }
});

export default PhotoGrid;
