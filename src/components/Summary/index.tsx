import { SummaryCard, SummaryContainer } from "./styles";
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { BsCurrencyEuro } from 'react-icons/bs'
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/summary";

export function Summary() {
    const summary = useSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <AiOutlineArrowUp size={32} color="#00b37e" />
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <AiOutlineArrowDown size={32} color="#f75a68" />
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <BsCurrencyEuro size={32} color="#fff" />
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}