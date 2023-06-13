import { SearchFarmContainer } from "./styles"
import { GiMagnifyingGlass } from 'react-icons/gi'
import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react";
import { TransactionsContext } from "../../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { getTransactions } = useContext(TransactionsContext)
    const { 
        register, 
        handleSubmit, 
        formState: {
            isSubmitting,
        } } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await getTransactions(data.query)}
        
    return (
        <div>
            <SearchFarmContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
            type="text" 
            placeholder="Busque por transações" 
            {...register('query')} 
            />

            <button type="submit" disabled={isSubmitting}><GiMagnifyingGlass size={20} /> Buscar</button>
            </SearchFarmContainer>
        </div>
    )
}