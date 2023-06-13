import { ReactNode, createContext, useEffect, useState } from "react";
//import { api } from "../lib/axios";

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
    const [transactions, setTransactions] = useState<TransactionsProps[]>([{
        id: 1,
        description: 'test',
        type: 'income',
        price: 100,
        category: 'test',
        created_at: '2020-01-01T00:00:00.000Z'
    }])
    const localStorageName = '@ICYou_Meuguito:TransactionStates-v1.0.0'
    const storedStateAsJson = localStorage.getItem(localStorageName)
    
    async function getTransactions() {
        if(storedStateAsJson){
            setTransactions(JSON.parse(storedStateAsJson))
        }else {
            setTransactions([])
            localStorage.setItem(localStorageName, JSON.stringify(transactions))    
        }
        /*JSON-API
        const response = await api.get('/transactions', { 
            params: { 
                _sort: 'created_at',
                _order: 'desc',
                q: query 
            },
        })
        setTransactions(response.data)
        */
    }

    useEffect(() => {
        getTransactions();
    }, [])
    
    async function CreateTransaction(data: CreateTransactionInput) {
        const newTransactionData = {
            id: transactions.length+1,
            description: data.description,
            price: data.price,
            type: data.type,
            category: data.category,
            created_at: new Date().toISOString()
        }
        setTransactions((state) => ([...state, newTransactionData]))
        /*JSON-API
        const response = await api.post('/transactions', newTransactionData,
        })
        setTransactions((state) => [response.data, ...state])
        */
    }
localStorage.setItem(localStorageName, JSON.stringify(transactions))
  
    return (
    <TransactionsContext.Provider value={{ 
        transactions, 
        getTransactions,
        CreateTransaction, }}>
      {children}
    </TransactionsContext.Provider>
  );
}