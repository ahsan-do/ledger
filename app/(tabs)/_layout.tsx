import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { View } from 'react-native';
import { TabButton } from '@/src/components/TabButton';

export default function TabsLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <View className="absolute bottom-12 self-center flex-row bg-[#ffffff]/30 rounded-full px-2 py-1 shadow-lg">
          <TabTrigger name="index" href="/" asChild>
            <TabButton icon="home"  />
          </TabTrigger>
          <TabTrigger name="transactions" href="/transactions" asChild>
            <TabButton icon="arrow-switch" />
          </TabTrigger>
          <TabTrigger name="budgets" href="/budgets" asChild>
            <TabButton icon="graph" />
          </TabTrigger>
          <TabTrigger name="profile" href="/profile" asChild>
            <TabButton icon="person" />
          </TabTrigger>
        </View>
      </TabList>
    </Tabs>
  );
}