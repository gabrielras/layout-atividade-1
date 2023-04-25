import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.block_one} />
        <View style={styles.block_two} />
        <View style={styles.block_three} />
      </View>
      <View style={styles.column}>
        <View style={styles.block_four} />
        <View style={styles.block_five}>
          <View style={styles.block_five_text_wrapper}>
            <Text style={styles.block_five_text}>Flexbox</Text>
          </View>
        </View>
        <View style={styles.block_six} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45403d',
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 3
  },
  block_one: {
    width: '100%',
    aspectRatio: 0.9,
    backgroundColor: '#9d40e9',
    marginVertical: 1,
    padding: 2,
  },
  block_two: {
    width: '100%',
    aspectRatio: 0.9,
    backgroundColor: '#61a9fe',
    marginVertical: 1,
    padding: 2,
  },
  block_three: {
    width: '100%',
    aspectRatio: 0.5,
    backgroundColor: '#7638ff',
    marginVertical: 1,
    padding: 2,
  },
  block_four: {
    width: '100%',
    aspectRatio: 0.9,
    backgroundColor: '#9fbeff',
    marginVertical: 1,
    padding: 2,
  },
  block_five: {
    width: '100%',
    aspectRatio: 0.36,
    backgroundColor: '#61a9fe',
    marginVertical: 1,
    padding: 2,
  },
  block_five_text_wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block_five_text: {
    fontWeight: 'bold',
    color: '#fff',
    transform: [{ rotate: '-90deg' }],
    fontSize: 55,
  },
  block_six: {
    width: '100%',
    aspectRatio: 3,
    backgroundColor: '#7800c8',
    marginVertical: 1,
    padding: 2,
  }
});
