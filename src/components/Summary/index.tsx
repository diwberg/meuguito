import { SummaryCard, SummaryContainer } from "./styles";
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { BsCurrencyEuro } from 'react-icons/bs'
export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <AiOutlineArrowUp size={32} color="#00b37e" />
                </header>
                <strong>€ 5.300</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <AiOutlineArrowDown size={32} color="#f75a68" />
                </header>
                <strong>€ 2.300</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <BsCurrencyEuro size={32} color="#fff" />
                </header>
                <strong>€ 3.000</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}