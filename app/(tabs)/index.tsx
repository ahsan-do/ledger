import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useAuthStore } from '@/src/hooks/AuthContext';
import { useColorScheme } from 'nativewind';


const Home = () => {

  const { colorScheme, setColorScheme } = useColorScheme();
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const handleSignOut = () => {
    logout();
  };

  return (
    <View className="flex-1 items-center justify-center bg-backgound-light dark:bg-background-dark mx-md">
      <View>
        <Text className="text-text-light dark:text-text-dark text-title">
          Welcome, {user?.email} currentmode: {colorScheme}
        </Text>
        <Pressable
          onPress={() =>
            setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
          }
          className="mt-md bg-primary p-md my-md"
        >
          <Text className="text-white">Toggle Theme</Text>
        </Pressable>
       
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
