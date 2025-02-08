import React from 'react';
import Post from '../components/Post';

import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Post
          frontImg='https://e0.pxfuel.com/wallpapers/415/250/desktop-wallpaper-pop-cat-popcat.jpg'
          backImg='https://content.imageresizer.com/images/memes/Pop-Cat-meme-5.jpg'
          profileImg='https://i.ytimg.com/vi/ZhkLOwAus4A/sddefault.jpg'
          username='uos_gungong'
          postTime='30m'
          likes={1000}
        />
        <Post
          frontImg='https://e0.pxfuel.com/wallpapers/415/250/desktop-wallpaper-pop-cat-popcat.jpg'
          backImg='https://content.imageresizer.com/images/memes/Pop-Cat-meme-5.jpg'
          profileImg='https://i.ytimg.com/vi/ZhkLOwAus4A/sddefault.jpg'
          username='uos_gungong'
          postTime='45m'
          likes={2000}
        />
        <Post
          frontImg='https://e0.pxfuel.com/wallpapers/415/250/desktop-wallpaper-pop-cat-popcat.jpg'
          backImg='https://content.imageresizer.com/images/memes/Pop-Cat-meme-5.jpg'
          profileImg='https://i.ytimg.com/vi/ZhkLOwAus4A/sddefault.jpg'
          username='uos_gungong'
          postTime='1hr'
          likes={3000}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;