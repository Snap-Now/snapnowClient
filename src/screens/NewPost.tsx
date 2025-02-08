import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewPostScreen() {
  return (
    <View style={styles.container}>
      <Text>새 게시글 화면</Text>
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
