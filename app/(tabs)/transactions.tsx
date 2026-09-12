import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  useAddTransaction,
  useDeleteTransaction,
  useTransactions,
  useUpdateTransaction,
} from '@/src/features/transactions/hooks';

const Transactions = () => {
  const { data, isLoading, error } = useTransactions();
  const { mutate } = useAddTransaction();
  const { mutate: deleteTx } = useDeleteTransaction();
  const {mutate: updateTx} = useUpdateTransaction()

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Something went wrong</Text>;

  const handleAddTransaction = () => {
    mutate({ title: 'Test Expense', amount: -10, date: '2026-09-10' });
  };
  
  const handleUpdate = (id:string) => {
    updateTx({ id: id, title: 'Updated Title', amount: -45.2, date: '2026-09-08' });
  }

  return (
    <View style={styles.container}>
      {data?.length === 0 && <Text>No transactions yet. Add your first one!</Text>}
      {data?.map((t) => (
        <View key={t.id} style={{flexDirection:'row', justifyContent:'flex-start', gap:'12'}}>
          <Text >
            {t.title}: {t.amount}
          </Text>
          <Pressable onPress={() => deleteTx(t.id)}>
            <Text>Delete</Text>
          </Pressable>
          <Pressable onPress={() => handleUpdate(t.id)}>
            <Text>Update</Text>
          </Pressable>
        </View>
      ))}
      <View>
        <Pressable onPress={handleAddTransaction}>
          <Text>Add Transaction</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1}
});
