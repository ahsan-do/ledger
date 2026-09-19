import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldSetBadge: false,
  }),
});

export async function setupNotificationChannel() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Budget Alerts',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
    });
  }
}

export async function requestNotificationPermission() {
  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === 'granted') return true;
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function checkBudgetThreshold(totalSpent: number, budget: number): Promise<'sent' | 'no-permission' | 'below-threshold'> {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') return 'no-permission';

  const percentUsed = (totalSpent / budget) * 100;
  if (percentUsed < 90) return 'below-threshold';

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Budget Alert',
      body: `You've used ${percentUsed.toFixed(0)}% of your budget this month.`,
    },
    trigger: null,
  });
  return 'sent';
}