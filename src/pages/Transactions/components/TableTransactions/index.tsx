import { SearchForm } from "./searchFarm";
import { PriceHighlight, TableTransactionContainer, TransactionsTable } from "./styles";

export function TableTransactions () {
    return (
        <>
        <TableTransactionContainer>
        <SearchForm />
            <TransactionsTable>
            <tbody>
                <tr>
                    <td>Desenvolvimento de site</td>
                    <td><PriceHighlight variant="income">€ 900</PriceHighlight></td>
                    <td>Venda</td>
                    <td>13/04/2023</td>
                </tr>
                <tr>
                    <td>Hospedagem</td>
                    <td><PriceHighlight variant="outcome">€ 100</PriceHighlight></td>
                    <td>Recorrência</td>
                    <td>15/05/2023</td>
                </tr>
                <tr>
                    <td>Deslocamento</td>
                    <td><PriceHighlight variant="outcome">€ 95</PriceHighlight></td>
                    <td>Custos</td>
                    <td>03/05/2023</td>
                </tr>
            </tbody>
            </TransactionsTable>
        </TableTransactionContainer>
        </>
    )
}