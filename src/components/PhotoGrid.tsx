import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const spacing = 2; // 사진 사이 여백
const imageSize = (screenWidth - spacing * (numColumns - 1)) / numColumns; // 여백 포함 크기 조정

interface PhotoGridProps {
    data: { id: number; uri: string; likes: number; comments: number }[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ data }) => {
    return (
        <View style={styles.gridContainer}>
            {data.map((item) => (
                <Image key={item.id} source={{ uri: item.uri }} style={styles.image} />
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
    image: {
        width: imageSize,
        height: imageSize,
        marginBottom: spacing,
    },
});

export default PhotoGrid;
