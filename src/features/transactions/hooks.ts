import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { addTransactions, deleteTransaction, fetchTransactions, Transaction, updateTransaction } from './api';
import { checkBudgetThreshold } from '@/src/lib/notifications';

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
    staleTime: 1000 * 60,
  });
}

export function useAddTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTransactions,
    onMutate: async (newTx) => {
      await queryClient.cancelQueries({ queryKey: ['transactions'] });

      const previousTransaction = queryClient.getQueryData<Transaction[]>([
        'transactions',
      ]);

      queryClient.setQueryData<Transaction[]>(['transactions'], (old) => [
        ...(old ?? []),
        { ...newTx, id: 'temp-' + Math.random() },
      ]);
      return { previousTransaction };
    },
    onError: (_err, _newTx, context) => {
      if (context?.previousTransaction) {
        queryClient.setQueryData(
          ['transactions'],
          context?.previousTransaction
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });

  checkBudgetThreshold(95, 100);
    },
  });
}

export function useDeleteTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTransaction,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['transactions'] });

      const previousTransaction = queryClient.getQueryData<Transaction[]>([
        'transactions',
      ]);

      queryClient.setQueryData<Transaction[]>(['transactions'], (old) => 
       old?.filter((t) => t.id !== id ) ?? []
      );
      return { previousTransaction };
    },
    onError: (_err, _id, context) => {
      if (context?.previousTransaction) {
        queryClient.setQueryData(
          ['transactions'],
          context?.previousTransaction
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
}

export function useUpdateTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTransaction,
    onMutate: async (updatedTx : Transaction) => {
      await queryClient.cancelQueries({ queryKey: ['transactions'] });

      const previousTransaction = queryClient.getQueryData<Transaction[]>([
        'transactions',
      ]);

      queryClient.setQueryData<Transaction[]>(['transactions'], (old) => 
       old?.map((t)=> (t.id === updatedTx.id ? updatedTx : t)) ?? []
      );
      return { previousTransaction };
    },
    onError: (_err, _updatedTx, context) => {
      if (context?.previousTransaction) {
        queryClient.setQueryData(
          ['transactions'],
          context?.previousTransaction
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
}