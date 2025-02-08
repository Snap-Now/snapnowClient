import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

// icons
import SearchIcon from '../assets/icons/search.svg';
import SettingIcon from '../assets/icons/setting.svg';

const Header = () => {
    const SearchPress = () => {
        console.log('Search icon pressed');
    }

    const SettingPress = () => {
        console.log('Setting icon pressed');
    }
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Text style={styles.title}>SnapNow</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={SearchPress}>
                    <SearchIcon width={24} height={24} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={SettingPress}>
                    <SettingIcon width={24} height={24} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
  },
  container: {
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'BlackHanSans-Regular',
    color: '#8D3CFF',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  }
});

export default Header;