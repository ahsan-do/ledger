import { Stack } from 'expo-router';
import Constants from 'expo-constants';
import { useAuthStore } from '@/src/hooks/AuthContext';
import { useEffect } from 'react';
import { ActivityIndicator, View, AppState, Platform } from 'react-native';
import { focusManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../global.css'
import { setupNotificationChannel } from '@/src/lib/notifications';
AppState.addEventListener('change', (status)=> {
  if(Platform.OS !== 'web'){
    focusManager.setFocused(status === 'active')
  }
})

console.log(Constants.expoConfig?.extra?.apiUrl);

const queryClient = new QueryClient();

const RootLayout = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isHydrated = useAuthStore((state) => state.isHydrated);
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
    setupNotificationChannel();
  }, []);

  if (!isHydrated) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <ActivityIndicator size={'large'} color={'#000'} />
      </View>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
      </Stack>
    </QueryClientProvider>
  );
};

export default RootLayout;
