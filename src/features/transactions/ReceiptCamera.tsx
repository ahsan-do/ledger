import { useRef, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Button } from '@/src/components/Button';

export function ReceiptCamera({ onCapture }: { onCapture: (uri: string) => void }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <Text>Loading permissions...</Text>;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 items-center justify-center p-lg">
        <Text className="text-text-light dark:text-text-dark mb-md text-center">
          Ledger needs camera access to scan receipts.
        </Text>
        <Button label="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

const takePicture = async () => {
  const photo = await cameraRef.current?.takePictureAsync();
  if (photo?.uri) {
    setPhotoUri(photo.uri); // just preview it — don't call onCapture yet
  }
};

const handleConfirm = () => {
  if (photoUri) {
    onCapture(photoUri);
    setPhotoUri(null); // reset now that this capture's job is done
  }
};

const handleRetake = () => {
  setPhotoUri(null); // discard and go back to live camera
};

  if (photoUri) {
  return (
    <View className="flex-1 ">
      <Image source={{ uri: photoUri }} className="flex-1" />
      <View className="flex-row gap-2 p-md bg-transparent z-10 absolute bottom-0 left-0 right-0">
        <Button label="Retake" variant="secondary" onPress={handleRetake} />
        <Button label="Confirm" variant="primary" onPress={handleConfirm} />
      </View>
    </View>
  );
}

  return (
    <View className="flex-1">
      <CameraView ref={cameraRef} style={{ flex: 1 }} facing={facing} />
      <Button label="Take Photo" onPress={takePicture} />
    </View>
  );
}