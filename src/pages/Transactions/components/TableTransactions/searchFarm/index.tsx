import { SearchFarmContainer } from "./styles"
import { GiMagnifyingGlass } from 'react-icons/gi'
export function SearchForm() {
    return (
        <div>
            <SearchFarmContainer action="">
            <input type="text" placeholder="Busque por transações" />
            <button type="submit"><GiMagnifyingGlass size={20} /> Buscar</button>
            </SearchFarmContainer>
        </div>
    )
}