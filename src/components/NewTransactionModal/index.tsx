import * as Dialog from "@radix-ui/react-dialog";
import { CloseBtn, Content, NewTransactionButton, Overlay, Title, TransactionType, TransactionTypeButton } from "./styles";
import { IoMdClose } from "react-icons/io";
import { FaCashRegister } from "react-icons/fa";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInput = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { 
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<NewTransactionFormInput>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    }
  })

  const { CreateTransaction } = useContext(TransactionsContext)
  const [open, setOpen] = useState(false)

  async function handleCreateNewTransaction(data: NewTransactionFormInput) {
    await CreateTransaction(data)
    reset()
    setOpen(false)
  }
  return ( 
  <>
    <Dialog.Root open={open} onOpenChange={setOpen} >

      <Dialog.Trigger asChild>
        <NewTransactionButton >
          <FaCashRegister size={20} />Nova Transação
        </NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content >
            <CloseBtn>
              <IoMdClose size={30} />
            </CloseBtn>
            <Title><FaCashRegister size={24} />Nova Transação</Title>

            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                <input {...register('description', {
                  required: true,
                })} type="text" placeholder="Descrição" required />

                <input {...register('price', {
                  required: true,
                  valueAsNumber: true,
                })} type="number" placeholder="Valor" required />

                <input {...register('category', {
                  required: true,
                })} type="text" placeholder="Categoria" required />
                <Controller
                  control={control}
                  name="type"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TransactionType 
                      onValueChange={field.onChange}
                      value={field.value}
                      >
                        
                    <TransactionTypeButton variant='income' value='income'>
                      <AiOutlineArrowUp size={24} />Entrada
                    </TransactionTypeButton>
  
                    <TransactionTypeButton variant='outcome' value='outcome' >
                      <AiOutlineArrowDown size={24} />Saída
                    </TransactionTypeButton >
                  
                  </TransactionType>
                  )}
                />
                <button type="submit" disabled={isSubmitting} >Cadastrar</button>
            </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>



    
  </>
  )
}