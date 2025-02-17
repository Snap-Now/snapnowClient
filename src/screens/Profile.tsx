import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text } from 'react-native';
import UserProfile from '../components/UserProfile';

const Profile = () => {
  return (
    <UserProfile
      profileImg='https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/320846658_613319723927297_3208657177993742522_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2AGJaytu36_ld4ODNgG1VNoSN8KIVLXaZys9xGO-Vi-v5KjKmLotxgd_9A4ceWXc0xU&_nc_ohc=h1--yzV-f90Q7kNvgGhq87z&_nc_gid=f3c3642045664e94ae98d9032f2a1ed8&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjk5ODU1NjAyMzI0Njg0ODgyNQ%3D%3D.3-ccb7-5&oh=00_AYCCqSY8hRxHFrf0VeYXbZ0sAGFpdJ4cCr9p_biaY5Yv8A&oe=67B8FFC1&_nc_sid=7a9f4b'
      userName="uos_gungong"
      userSnaps="10"
      userFollowers="200"
      userFollowing="180"
      userDescription="엣헴! 나에 대해 설명하도록 하지. 나는 flab 최강 짱짱맨이야!"
    />
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

export default Profile;