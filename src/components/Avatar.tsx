import { Image, View, Text } from 'react-native';

type AvatarProps = {
  uri?: string;
  initials?: string;
  size: number;
};

export function Avatar({ uri, initials, size = 40 }: AvatarProps) {
  const dimension = { width: size, height: size, borderRadius: size / 2 };

  if (uri) {
    return (
      <Image
        source={{ uri }}
        style={dimension}
        accessibilityRole="image"
        accessibilityLabel="User Avatar"
      />
    );
  }
  return (
    <View
      style={dimension}
      className="bg-secondary items-center justify-center"
      accessibilityRole="text"
      accessibilityLabel={`Avatar with initials ${initials}`}
    >
      <Text className="text-white">{initials}</Text>
    </View>
  );
}
