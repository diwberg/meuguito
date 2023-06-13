import { useContext } from "react";
import { SearchForm } from "./searchForm";
import { PriceHighlight, TableTransactionContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { dateFromatter, priceFormatter } from "../../../../utils/formatter";



export function TableTransactions () {
    const { transactions } = useContext(TransactionsContext);
    return (
        <>
        <TableTransactionContainer>
        <SearchForm />
            <TransactionsTable>
            <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.description}</td>
                        <td>
                            <PriceHighlight variant={transaction.type}>
                                {transaction.type === 'outcome' && '- '}
                              {priceFormatter.format(transaction.price)}
                            </PriceHighlight>
                        </td>
                        <td>{transaction.category}</td>
                        <td>{dateFromatter.format(new Date(transaction.created_at))}</td>
                    </tr>
                ))}
            </tbody>
            </TransactionsTable>
        </TableTransactionContainer>
        </>
    )
}