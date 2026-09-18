import {
  Pressable,
  Text,
  ActivityIndicator,
  PressableProps,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

type ButtonProps = PressableProps & {
  label: string;
  variant?: ButtonVariant;
  loading?: boolean;
};
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  ghost: 'bg-transparent border border-primary',
  danger: 'bg-danger',
};
const variantTextStyles: Record<ButtonVariant, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  ghost: 'text-primary',
  danger: 'text-white',
};

export function Button({
  label,
  variant = 'primary',
  loading = false,
  disabled,
  ...pressableProps
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      className={`p-md rounded items-center justify-center ${variantStyles[variant]} ${isDisabled ? 'opacity-50' : ''}`}
      {...pressableProps}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'ghost' ? '#2563EB' : '#FFFFFF'}
        />
      ) : (
        <Text className={variantTextStyles[variant]}>{label}</Text>
      )}
    </Pressable>
  );
}
