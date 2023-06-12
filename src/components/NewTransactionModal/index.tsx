import * as Dialog from "@radix-ui/react-dialog";
import { CloseBtn, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { IoMdClose } from "react-icons/io";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
        <Overlay />
        <Content>
            <CloseBtn>
              <IoMdClose size={30} />
            </CloseBtn>
            <Dialog.Title>Nova Transação</Dialog.Title>

            <form action="">
                <input type="text" placeholder="Descrição" required />
                <input type="number" placeholder="Valor" required />
                <input type="text" placeholder="Categoria" required />
                <TransactionType>
                  <TransactionTypeButton variant='income' value='income'>
                    <AiOutlineArrowUp size={24} />Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant='outcome' value='outcome' >
                    <AiOutlineArrowDown size={24} />Saída
                  </TransactionTypeButton >
                </TransactionType>
                <button type="submit">Cadastrar</button>
            </form>
        </Content>
    </Dialog.Portal>
  )
}