import { View, Text } from 'react-native';

type BadgeVariant = 'success' | 'danger' | 'secondary';

const badgeStyles: Record<BadgeVariant, string> = {
  success: 'bg-success',
  danger: 'bg-danger',
  secondary: 'bg-secondary',
};

export function Badge({
  label,
  variant = 'secondary',
}: {
  label: string;
  variant?: BadgeVariant;
}) {
  return (
    <View
      className={`px-sm py-xs rounded-full self-start ${badgeStyles[variant]}`}
      accessibilityRole="text"
      accessibilityLabel={label}
    >
      <Text className="text-white text-body">{label}</Text>
    </View>
  );
}
