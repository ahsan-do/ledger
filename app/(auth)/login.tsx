import { Button } from '@/src/components/Button';
import { Input } from '@/src/components/Input';
import { useAuthStore } from '@/src/hooks/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { cssInterop } from 'nativewind';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

cssInterop(LinearGradient, {
  className: 'style',
});

const Login = () => {
  const [hide, setHide] = useState(true);
  const login = useAuthStore((state) => state.login);
  const handleLogin = (): void => {
    login({ id: '1', email: 'test@test.com' });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={[ '#012F84','#090E1A']}
          className="flex-1 justify-center px-6"
        >
          <View className="p-6 bg-white/10 dark:bg-black/10 rounded-2xl backdrop-blur-md">
            <View className="mb-6">
              <Text className="text-4xl font-bold text-white">Login</Text>
            </View>

            <View className="gap-y-4">
              <Input
                label="Email"
                cursorColor="black"
                leftIcon="mail-outline"
              />
              <Input
                label="Password"
                cursorColor="black"
                secureTextEntry={hide}
                leftIcon="lock-closed-outline"
                rightIcon={hide ? 'eye-off-outline' : 'eye-outline'}
                onRightIconPressed={() => setHide((prev) => !prev)}
              />
              <Button label="Login" onPress={handleLogin} />
              <View className='flex-row gap-2 justify-center'>
              <Text className='text-body font-normal text-white'>Don't have an account?</Text>
              <Text className='text-body font-bold text-white'><Link href='/register'>Sign Up</Link></Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
