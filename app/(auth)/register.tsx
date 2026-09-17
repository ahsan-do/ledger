import {  Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import { Input } from '@/src/components/Input'
import { useAuthStore } from '@/src/hooks/AuthContext'
import { Button } from '@/src/components/Button'

const register = () => {
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
              colors={['#012F84', '#090E1A']}
              className="flex-1 justify-center px-6"
            >
              <View className="p-6 bg-white/10 dark:bg-black/10 rounded-2xl backdrop-blur-md">
                <View className="mb-6">
                  <Text className="text-4xl font-bold text-white">Sign Up</Text>
                </View>
    
                <View className="gap-y-4">
                  <Input label="Full Name" cursorColor="black" leftIcon="person" />
                  <Input label="Email" cursorColor="black" leftIcon="mail" />
                  <Input
                    label="Password"
                    cursorColor="black"
                    secureTextEntry={hide}
                    leftIcon="lock"
                    rightIcon={hide ? 'eye-closed' : 'eye'}
                    onRightIconPressed={() => setHide((prev) => !prev)}
                  />
                  <Input
                    label="Confirm Password"
                    cursorColor="black"
                    secureTextEntry={hide}
                    leftIcon="lock"
                    rightIcon={hide ? 'eye-closed' : 'eye'}
                    onRightIconPressed={() => setHide((prev) => !prev)}
                    
                  />
                  <Button label="Register" onPress={handleLogin} />
                  <View className="flex-row gap-2 justify-center">
                    <Text className="text-body font-normal text-white">
                     Already have an account?
                    </Text>
                    <Text className="text-body font-bold text-white">
                      <Link href="/login">Sign In</Link>
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  )
}

export default register

