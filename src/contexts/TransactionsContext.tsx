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
    getTransactions: (query?: string) => void
    CreateTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionContextProps);

interface TransactionProviderProps {
    children: ReactNode
}
export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])
    const localStorageName = '@ICYou_Meuguito:TransactionStates-v1.0.0'
    const storedStateAsJson = localStorage.getItem(localStorageName)
    
    function getTransactions(query?: string) {
        if(storedStateAsJson){
            const dataStorage = JSON.parse(storedStateAsJson)
            if(query){
                return setTransactions(
                    dataStorage.filter((transaction: TransactionsProps) => (
                        transaction.description.toLowerCase().includes(query.toLowerCase()) ||
                        transaction.type.toLowerCase().includes(query.toLowerCase()) ||
                        transaction.category.toLowerCase().includes(query.toLowerCase()) ||
                        transaction.price.toString().includes(query.toLowerCase())
                    )
                    ))
            }
            setTransactions(dataStorage)
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
        setTransactions((state) => {
            const newState = [...state, newTransactionData]
            localStorage.setItem(localStorageName, JSON.stringify(newState))
            return newState
        })
        /*JSON-API
        const response = await api.post('/transactions', newTransactionData,
        })
        setTransactions((state) => [response.data, ...state])
        */
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