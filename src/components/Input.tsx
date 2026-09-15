import { forwardRef } from 'react';
import { TextInput, TextInputProps, View, Text, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons';
type InputProps = TextInputProps & {
  label: string;
  error?: string;
  leftIcon?: keyof typeof Octicons.glyphMap
  rightIcon?: keyof typeof Octicons.glyphMap
  onRightIconPressed?: () => void
};

export const Input = forwardRef<TextInput, InputProps>(
  ({leftIcon, rightIcon, label, error, onRightIconPressed,...textInputProps }, ref) => {
    return (
      <View className="w-full mb-md">
        <Text className="text-text-light dark:text-text-dark md-xs">
          {label}
        </Text>
          <View className={`flex-row items-center   py-2 `}>
        {leftIcon && (
          <Octicons
          name={leftIcon}
          size={20}
          color='#fff'
          className='mr-8 absolute'
          />
        )}
        <TextInput
          ref={ref}
          accessibilityLabel={label}
          className={`flex-1 relative border-b p-sm px-lg text-text-light dark:text-text-dark ${error ? 'border-danger' : 'border-secondary'}`}
          {...textInputProps}
        />
        {rightIcon && (
          <Pressable onPress={onRightIconPressed} className='right-2 absolute'>
          <Octicons
          name={rightIcon}
          size={20}
          color='#fff'
         
          />
          </Pressable>
        )}
        {error && <Text className="text-danger text-body mt-xs">{error}</Text>}
        </View>
      </View>
    );
  }
);
