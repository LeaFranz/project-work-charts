import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const FavoritesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>FavoritesScreen Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
