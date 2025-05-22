import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import FireOSTest from './fireOSTest';

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Fire OS Compatibility Test' }} />
      <FireOSTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
