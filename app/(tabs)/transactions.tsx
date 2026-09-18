import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  useAddTransaction,
  useDeleteTransaction,
  useTransactions,
  useUpdateTransaction,
} from '@/src/features/transactions/hooks';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '@/src/components/Card';
import { Button } from '@/src/components/Button';

const Transactions = () => {
  const { data, isLoading, error } = useTransactions();
  const { mutate } = useAddTransaction();
  const { mutate: deleteTx } = useDeleteTransaction();
  const { mutate: updateTx } = useUpdateTransaction();

  const [ loading, setLoading] = useState(false);

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Something went wrong</Text>;

  const handleAddTransaction = () => {
    
    setLoading(true)
    mutate({ title: 'Test Expense', amount: -10, date: '2026-09-10' });
    return setLoading(false)
  };

  const handleUpdate = (id: string) => {
    updateTx({
      id: id,
      title: 'Updated Title',
      amount: -45.2,
      date: '2026-09-08',
    });
  };

  return (
    <LinearGradient
      colors={['#090E1A', '#012F84']}
      className="flex-1 justify-start px-6 py-12"
    >
      <View className="p-sm">
        <View className="mb-md">
          <Text className="text-white text-lg text-center font-bold">
            Transactions
          </Text>
        </View>
        {data?.length === 0 && (
          <Text className="text-white">
            No transactions yet. Add your first one!
          </Text>
        )}
        {data?.map((t) => (
          <View key={t.id} className="mb-md">
            <Card>
              <View className="flex-row justify-between items-center">
                <Card.Header>
                  <Text className="text-white">{t.title}</Text>
                </Card.Header>
                <Card.Body>
                  <Text className="text-white">{t.amount}</Text>
                </Card.Body>
              </View>
              <Card.Footer className="flex-row justify-end gap-2">
                <Button
                  label="Delete"
                  variant="danger"
                  onPress={() => deleteTx(t.id)}
                />

                <Button
                  label="Update"
                  variant="primary"
                  onPress={() => handleUpdate(t.id)}
                />
              </Card.Footer>
            </Card>
          </View>
        ))}
        <View>
          <Button label="Add Transaction" onPress={handleAddTransaction}  loading={loading}/>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
