import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface CreateTransactionInput {
    description: string;
    price: number;
    type: 'income' | 'outcome';
    category: string;
}

export interface TransactionsProps {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    created_at: string
}

interface TransactionContextProps {
    transactions: TransactionsProps[];
    getTransactions: (query?: string) => Promise<void>
    CreateTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionContextProps);

interface TransactionProviderProps {
    children: ReactNode
}
export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])

    async function getTransactions(query?: string) {
        const response = await api.get('/transactions', { 
            params: { 
                _sort: 'created_at',
                _order: 'desc',
                q: query 
            },
        })
        setTransactions(response.data)
    }
    useEffect(() => {
        getTransactions();
    }, [])

    async function CreateTransaction(data: CreateTransactionInput) {
    const response = await api.post('/transactions', {
        description: data.description,
        price: data.price,
        category: data.category,
        type: data.type,
        created_at: new Date().toISOString(),
        })
    setTransactions((state) => [response.data, ...state])
    }
  
    return (
    <TransactionsContext.Provider value={{ 
        transactions, 
        getTransactions,
        CreateTransaction, }}>
      {children}
    </TransactionsContext.Provider>
  );
}