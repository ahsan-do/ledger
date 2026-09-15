import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { useAuthStore } from '@/src/hooks/AuthContext';
import { useColorScheme } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '@/src/components/Avatar';
import { Octicons } from '@expo/vector-icons';

const Home = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
 
  const user = useAuthStore((state) => state.user);
 

  return (
    <LinearGradient
      colors={['#090E1A', '#012F84']}
      className="flex-1 justify-start px-6 py-12"
    >
      <View className="flex-row justify-between  items-center">
        <View className='flex-row gap-2 items-center' >
        <View >
          <Avatar initials="AN" size={48} />
        </View>
        <View>
          <Text className="text-text-light dark:text-text-dark text-title font-bold">
            Good Morning!
          </Text>
          <Text className="text-text-light dark:text-text-dark text-body font-extralight">
            Muhammad Ahsan
          </Text>
        </View>
        </View>
        <View className=' bg-white/10 dark:bg-white/10 rounded-full p-4 backdrop-blur-md'>
          <Octicons name='bell' color={'white'} size={22}/>
        </View>
      </View>
      <Pressable
        onPress={() =>
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
        className="mt-md bg-primary p-md my-md"
      >
        <Text className="text-white">Toggle Theme</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default Home;
