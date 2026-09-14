import { forwardRef } from 'react';
import { Pressable, View } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import type { TabTriggerSlotProps } from 'expo-router/ui';

type Props = TabTriggerSlotProps & {
  icon: keyof typeof Octicons.glyphMap;
};

export const TabButton = forwardRef<View, Props>(({ icon, isFocused, ...props }, ref) => {
  return (
    <Pressable
      ref={ref}
      {...props}
      android_ripple={{ color: 'rgba(255,255,255,0.25)', borderless: true, radius: 22 }}
      className="items-center justify-center px-3 py-2"
    >
      <View
        className={`items-center justify-center w-11 h-11 rounded-full overflow-hidden ${
          isFocused ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <Octicons name={icon} size={22} color={isFocused ? '#025CFF' : '#ffffff'} />
      </View>
    </Pressable>
  );
});