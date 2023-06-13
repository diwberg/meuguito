import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";


export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
            <img src={logoImg} title="ICYou Company" />
            <NewTransactionModal />
            </HeaderContent>
        </HeaderContainer>
    )
}