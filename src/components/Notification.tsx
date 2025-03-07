import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { NotificationType } from "../types/NotificationTypes";

interface NotificationProps {
    username: string;
    profileImage: string;
    type: NotificationType;
    time: string;
}

const Notification: React.FC<NotificationProps> = ({ username, profileImage, type, time }) => {
    const renderMessage = () => {
        switch (type) {
            case "request":
                return ` requested your snap!`;
            case "new_post":
                return ` has posted new post`;
            case "reply_snap":
                return ` has posted reply snap`;
            case "join_snap":
                return ` has posted join snap`;
            case "follow":
                return ` started following you`;
            case "like":
                return ` liked your posts`;
            case "mention":
                return ` has mentioned you`;
            case "comment":
                return ` commented on your posts`;
            default:
                return ` sent a notification`;
        }
    };

    return(
        <View style={styles.container}>
            <Image source={{uri: profileImage}}  style={styles.prof_img}/>

            <View style={styles.textcontainer}>
                <Text style={styles.message}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.content}>{renderMessage()}</Text>
                    <Text style={styles.time}> {time}</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    prof_img: {
        height: 45,
        width: 45,
        borderRadius: 40,
    },
    textcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    message: {
        fontSize: 16,
        flexWrap: 'wrap',
    },
    username: {
        fontWeight: '600',
    },
    content: {
        fontWeight: '400',
    },
    time:{
        fontWeight: '400',
        fontSize: 16,
        color: 'gray',
    },
})

export default Notification;