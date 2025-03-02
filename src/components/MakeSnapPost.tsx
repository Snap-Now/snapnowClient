import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    Switch,
    StyleSheet,
    TextInput,
} from "react-native";

interface SnapPostProps {
    username: string;
    profileImage: string;
}

const SnapPostScreen: React.FC<SnapPostProps> = ({ username, profileImage }) => {
    const [postToJoin, setPostToJoin] = useState(false);
    const [hideCommentsLikes, setHideCommentsLikes] = useState(false);
    const [noCommentsAllowed, setNoCommentsAllowed] = useState(false);


    const [content, setcontent] = useState('');
    const [contentHeight, setcontentHeight] = useState(40);

    return (
        <View style={styles.container}>
            <View style={styles.imagePlaceholder}>
                <Text style={styles.imageText}>Add Your Snap!{"\n"}Take a picture now</Text>
            </View>
            
            <View style={styles.information}>
                <View style={styles.profileSection}>
                    <Image source={{uri: profileImage}} style={styles.profileImage} />
                    <Text style={styles.username}>{username}</Text>
                </View>

                <TextInput
                    style={[styles.textInput, { height: Math.max(40, contentHeight) }]}
                    value={content}
                    onChangeText={setcontent}
                    onContentSizeChange={(e) => setcontentHeight(e.nativeEvent.contentSize.height)}
                    placeholder="내용을 작성하세요"
                    multiline
                    numberOfLines={5}
                />

                <View style={styles.switchRow}>
                    <Text style={styles.switchLabel}>Post to JOIN</Text>
                    <Switch
                        value={postToJoin}
                        onValueChange={setPostToJoin}
                        trackColor={{ false: "white", true: "black"}}
                        thumbColor="white"
                    />
                </View>

                <View style={styles.switchRow}>
                    <Text style={styles.switchLabel}>Hide comments and likes count</Text>
                    <Switch
                        value={hideCommentsLikes}
                        onValueChange={setHideCommentsLikes}
                        trackColor={{ false: "white", true: "black"}}
                        thumbColor="white"
                    />
                </View>

                <View style={styles.switchRow}>
                    <Text style={styles.switchLabel}>No comments allowed</Text>
                    <Switch
                        value={noCommentsAllowed}
                        onValueChange={setNoCommentsAllowed}
                        trackColor={{ false: "white", true: "black"}}
                        thumbColor="white"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imagePlaceholder: {
        width: '100%',
        height: 400,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
    },
    imageText: {
        color: "#888",
        textAlign: "center",
    },
    information: {
        flex: 1,
        padding: 15,
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: "#ccc",
        marginRight: 10,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    textInput: {
        height: 40,
        minHeight: 40,
        maxHeight: 100,
        color: "#aaa",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        textAlignVertical: 'top',
    },
    switchRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    switchLabel: {
        fontSize: 14,
    },
});

export default SnapPostScreen;