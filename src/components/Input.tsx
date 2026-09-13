import { forwardRef } from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';

type InputProps = TextInputProps & {
  label: string;
  error?: string;
};

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, ...textInputProps }, ref) => {
    return (
      <View className="w-full mb-md">
        <Text className="text-text-light dark:text-text-dark md-xs">
          {label}
        </Text>
        <TextInput
          ref={ref}
          accessibilityLabel={label}
          className={`border rounded p-sm text-text-light dark:text-text-dark ${error ? 'border-danger' : 'border-secondary'}`}
          {...textInputProps}
        />
        {error && <Text className="text-danger text-body mt-xs">{error}</Text>}
      </View>
    );
  }
);
