import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

// screens
import HomeScreen from '../screens/Home';
import MessageScreen from '../screens/Message';
import NewPostScreen from '../screens/NewPost';
import LikeScreen from '../screens/Like';
import ProfileScreen from '../screens/Profile';

// icons
import HomeIcon from '../assets/icons/home.svg';
import MessageIcon from '../assets/icons/message.svg';
import NewPostIcon from '../assets/icons/newpost.svg';
import LikeIcon from '../assets/icons/heart.svg';
import ProfileIcon from '../assets/icons/profile.svg';

// 화면 타입 정의
type ScreenType = "Home" | "Message" | "NewPost" | "Like" | "Profile";


const Footer: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("Home");

  return (
    <SafeAreaView style={styles.container}>
      {/* 현재 화면 표시 */}
      {currentScreen === "Home" && <HomeScreen />}
      {currentScreen === "Message" && <MessageScreen />}
      {currentScreen === "NewPost" && <NewPostScreen />}
      {currentScreen === "Like" && <LikeScreen />}
      {currentScreen === "Profile" && <ProfileScreen />}

      {/* 커스텀 네비게이션 바 */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => setCurrentScreen("Home")} style={styles.navButton}>
          <HomeIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("Message")} style={styles.navButton}>
          <MessageIcon/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("NewPost")} style={styles.navButton}>
          <NewPostIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("Like")} style={styles.navButton}>
          <LikeIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("Profile")} style={styles.navButton}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  navButton: {
    padding: 10,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
})