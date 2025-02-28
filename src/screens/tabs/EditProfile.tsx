import React, {useState} from 'react';
import PROFILE from '../../index';
import BackWardIcon from '../../assets/icons/backward.svg';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    NativeSyntheticEvent,
    TextInputContentSizeChangeEventData
} from 'react-native';

export default function SettingScreen() {
    const navigation = useNavigation();


    // 각 입력 필드를 독립적으로 관리하는 상태 변수
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [introduce, setIntroduce] = useState('');

    // 텍스트 입력 필드의 높이를 관리하는 상태 변수
    const [nameHeight, setNameHeight] = useState(40);
    const [userNameHeight, setUserNameHeight] = useState(40);
    const [introduceHeight, setIntroduceHeight] = useState(40);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* 헤더 */}
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backIcon}>
                        <BackWardIcon width={12} height={32} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Profile</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>

                {/* 프로필 이미지 */}
                <View style={styles.profileImageContainer}>
                <Image
                    source={{uri: PROFILE.PROFILE3}}
                    style={styles.profileImage}
                />
                </View>

                {/* 입력 필드 */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={[styles.textInput, { height: Math.max(40, nameHeight) }]}
                        value={name}
                        onChangeText={setName}
                        onContentSizeChange={(e) => setNameHeight(e.nativeEvent.contentSize.height)}
                        placeholder="Name"
                    />


                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={[styles.textInput, { height: Math.max(40, userNameHeight) }]}
                        value={userName}
                        onChangeText={setUserName}
                        onContentSizeChange={(e) => setUserNameHeight(e.nativeEvent.contentSize.height)}
                        placeholder="Username"
                    />


                    <Text style={styles.label}>Introduce yourself</Text>
                    <TextInput
                        style={[styles.textInput, { height: Math.max(40, introduceHeight) }]}
                        value={introduce}
                        onChangeText={setIntroduce}
                        onContentSizeChange={(e) => setIntroduceHeight(e.nativeEvent.contentSize.height)}
                        placeholder="Introduce yourself"
                        multiline
                    />
                </View>

                {/* 개인 정보 */}
                <View style={styles.personalInfoContainer}>
                    <Text style={styles.sectionTitle}>Personal Info</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Phone Number</Text>
                        <Text style={styles.infoText}>010-1234-5678</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Email</Text>
                        <Text style={styles.infoText}>example@gmail.com</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        backgroundColor: '#fff',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    backIcon: {
        position: 'absolute',
        left: 16,
        padding: 8,
        zIndex: 1, // 다른 요소보다 위에 배치
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    editButton: {
        position: 'absolute',
        right: 16,
        padding: 8,
    },
    editText: {
        fontWeight: 700,
        color: '#8D3CFF',
        fontSize: 15,
    },
    profileImageContainer: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 70,
        backgroundColor: "#ddd",
    },
    inputContainer: {
        marginBottom: 20,
        marginHorizontal: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ccc',
        marginBottom: 20,
    },
    textArea: {
        height: 60,
        textAlignVertical: "top",
    },
    personalInfoContainer: {
        borderTopWidth: 1,
        borderColor: "#ccc",
        paddingTop: 15,
        marginHorizontal: 15,
    },
    sectionTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: '600',
    },
    infoText: {
        fontSize: 15,
        fontWeight: "400",
    },
});

