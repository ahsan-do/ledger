import { ReceiptCamera } from '@/src/features/transactions/ReceiptCamera';
import { useAddTransaction } from '@/src/features/transactions/hooks';
import { router } from 'expo-router';

export default function Scan() {
  const { mutate } = useAddTransaction();

  return (
    <ReceiptCamera
      onCapture={(uri) => {
        mutate({
          title: 'Scanned Receipt',
          amount: 100, 
          date: new Date().toISOString().split('T')[0],
          receiptUri: uri,
        });

        router.push('/transactions');
      }}
    />
  );
}