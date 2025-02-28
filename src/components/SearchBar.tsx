import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SmallSearchIcon from '../assets/icons/small_search.svg'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <SmallSearchIcon width={15} height={15} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#999"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F3F5',
        borderRadius: 20,
        paddingHorizontal: 10,
        height: 40,
        marginHorizontal: 20,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});

export default SearchBar;
