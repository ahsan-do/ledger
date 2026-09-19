import { Linking, Text, View } from 'react-native';

import { PRIMARY } from '@/src/constants/colors';
import { Avatar } from '@/src/components/Avatar';
import { Badge } from '@/src/components/Badge';
import { Card } from '@/src/components/Card';
import { useAuthStore } from '@/src/hooks/AuthContext';
import { Button } from '@/src/components/Button';
import { requestNotificationPermission } from '@/src/lib/notifications';
import { useState } from 'react';

const Profile = () => {
   const [notificationDenied, setNotificationDenied] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const handleSignOut = () => {
    logout();
  };
  const handleNotificationPermission = async () => {
    const granted = await requestNotificationPermission();
    console.log(granted);
    setNotificationDenied(!granted);
};
    return (
      <View className="flex-1 items-center justify-center bg-background-dark dark:bg-background-light">
        <Text style={{ color: PRIMARY }}>Ledger - Profile</Text>
        <Avatar initials="AN" size={40} />
        <Badge label="waiting" variant="secondary" />
        <Card>
          <Card.Header>
            <Text className="text-title font-bold text-text-light dark:text-text-dark">
              Groceries
            </Text>
          </Card.Header>
          <Card.Body>
            <Text className="text-text-light dark:text-text-dark">
              -$45.20 · Sept 8
            </Text>
          </Card.Body>
          <Card.Footer>
            <Badge label="Completed" variant="success" />
          </Card.Footer>
        </Card>
        <Button label="logout" onPress={handleSignOut} />
        <Button label="Request Notifications" onPress={handleNotificationPermission} />
    {notificationDenied && (
      <Button
        label="Open Settings to Enable Notifications"
        onPress={() => Linking.openSettings()}
      />
    )}
      </View>
    );
  };


export default Profile;
