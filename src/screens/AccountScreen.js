import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#603A40',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#440D0F',
  },
  headerText: {
    fontFamily: 'Commissioner-SemiBold',
    fontSize: 24,
    padding: 10,
    color: '#fff',
  },
});

export default AccountScreen;
