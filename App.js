import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={[styles.block, { backgroundColor: '#9d40e9', aspectRatio: 0.9 }]} />
        <View style={[styles.block, { backgroundColor: '#61a9fe', aspectRatio: 0.9 }]} />
        <View style={[styles.block, { backgroundColor: '#7638ff', aspectRatio: 0.5 }]} />
      </View>
      <View style={styles.column}>
        <View style={[styles.block, { backgroundColor: '#9fbeff', aspectRatio: 0.9 }]} />
        <View style={[styles.block, { backgroundColor: '#61a9fe', aspectRatio: 0.36 }]}>
          <View style={[styles.block_five_text_wrapper, { transform: [{ rotate: '-90deg' }] }]}>
            <Text style={styles.block_five_text}>Flexbox</Text>
          </View>
        </View>
        <View style={[styles.block, { backgroundColor: '#7800c8', aspectRatio: 3 }]} />
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
  block: {
    width: '100%',
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
    fontSize: 55,
  },
});
