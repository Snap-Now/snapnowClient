import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LikeScreen() {
  return (
    <View style={styles.container}>
      <Text>좋아요 화면</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
