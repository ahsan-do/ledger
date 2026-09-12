import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useAuthStore } from '@/src/hooks/AuthContext';

const Home = () => {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const handleSignOut = () => {
    logout();
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Welcome, {user?.email}</Text>
      </View>
      <Text>Ledger - Home</Text>
      <Link href="/profile">Go to Profile</Link>
      <Pressable onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
