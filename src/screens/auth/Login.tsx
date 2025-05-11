import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useAuth  } from '../../context/AuthContext';

const LoginScreen = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { login } = useAuth();

    const LoginHandle = async () => {
        login(username, password);
        setUsername('');
        setPassword('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.Name}>SnapNow</Text>

            {/* id & pw */}
            <TextInput
                placeholder="id"
                style={styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                placeholder="password"
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            {/* login button */}
            <TouchableOpacity style={styles.loginBtn} onPress={LoginHandle}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Name: {
        fontFamily: 'BlackHanSans-Regular',
        color: '#8D3CFF',
        fontSize: 45,
        fontWeight: '400',
        marginBottom: 30,
        letterSpacing: -2,
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        width: '90%',
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f1f3f5',
        borderColor: '#fff',
        marginBottom: 13,
    },
    loginBtn: {
        width: '90%',
        backgroundColor: "#007AFF",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
});

export default LoginScreen;