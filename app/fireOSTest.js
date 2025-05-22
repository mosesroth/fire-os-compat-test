import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function FireOSTest() {
  const isFireOS = Platform.OS === 'android' && 
                  (Platform.constants?.Brand?.toLowerCase()?.includes('amazon') || 
                   Platform.constants?.Manufacturer?.toLowerCase()?.includes('amazon'));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fire OS Compatibility Test</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Platform:</Text>
        <Text style={styles.value}>{Platform.OS}</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Version:</Text>
        <Text style={styles.value}>{Platform.Version}</Text>
      </View>
      
      {Platform.OS === 'android' && (
        <>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Brand:</Text>
            <Text style={styles.value}>{Platform.constants?.Brand || 'N/A'}</Text>
          </View>
          
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Manufacturer:</Text>
            <Text style={styles.value}>{Platform.constants?.Manufacturer || 'N/A'}</Text>
          </View>
        </>
      )}
      
      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Detected as Fire OS:</Text>
        <Text style={[styles.resultValue, isFireOS ? styles.success : styles.normal]}>
          {isFireOS ? 'Yes' : 'No'}
        </Text>
      </View>
      
      <Text style={styles.note}>
        Note: This app is testing compatibility with react-native-clean-project on Fire OS.
        Run "npm run clean" to test the cleaning functionality.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    width: 120,
  },
  value: {
    flex: 1,
  },
  resultContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
  },
  resultLabel: {
    fontWeight: 'bold',
    width: 150,
  },
  resultValue: {
    fontWeight: 'bold',
  },
  success: {
    color: 'green',
  },
  normal: {
    color: 'black',
  },
  note: {
    marginTop: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
