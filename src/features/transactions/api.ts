export type Transaction = {
    id:string,
    title:string,
    amount: number,
    date: string
}

const MOCK_TRANSACTIONS: Transaction[] = [
    {id:'1',title: 'Grociers', amount: -45.2, date: ' 2026-09-08'},
    {id:'2',title: 'Salary', amount: 2500, date: ' 2026-09-01'},
    {id:'3',title: 'Coffee', amount: -4.5, date: ' 2026-09-09'},
]

export async function fetchTransactions(): Promise<Transaction[]>{
    console.log('fetching...');
    
    await new Promise ((resolve) => setTimeout(resolve, 800))
    return MOCK_TRANSACTIONS
}

export async function addTransactions(newTx: Omit<Transaction,'id'>): Promise<Transaction>{
    console.log('adding transaction..');

    await new Promise ((resolve) => setTimeout(resolve,800))
    // throw new Error('Simulated failure');
    const created: Transaction = {...newTx, id:Math.random().toString()}
    MOCK_TRANSACTIONS.push(created)
    return created  
} 

export async function deleteTransaction(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800));
//    throw new Error('Simulated failure');
  const index = MOCK_TRANSACTIONS.findIndex((t) => t.id === id);
  if (index !== -1) MOCK_TRANSACTIONS.splice(index, 1);
}

export async function updateTransaction(updated: Transaction): Promise<Transaction> {
  await new Promise((resolve) => setTimeout(resolve, 800));
    //  throw new Error('Simulated failure');
  const index = MOCK_TRANSACTIONS.findIndex((t) => t.id === updated.id);
  if (index !== -1) MOCK_TRANSACTIONS[index] = updated;
  return updated;
}