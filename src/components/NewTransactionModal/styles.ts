import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const NewTransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 50px;
  border: 0;
  padding: 0 1.25rem;
  background: ${ props => props.theme["purple-500"]};
  color: ${ props => props.theme["grey-100"]};
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${ props => props.theme["purple-300"]};
    color: ${ props => props.theme["white"]};
  }

`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 8px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme["grey-700"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        border-radius: 8px;
        border: 0;
        background-color: ${props => props.theme["grey-900"]};
        color: ${props => props.theme["grey-100"]};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["grey-300"]};
        }

        &:focus {
            box-shadow: 0 0 0 2px ${props => props.theme["purple-500"]};
        }
    }
    
    button[type="submit"] {
        height: 58px;
        border: 0;
        background-color: ${props => props.theme["purple-500"]};
        color: ${props => props.theme["white"]};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 8px;
        margin-top: 1rem;
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        &:not(:disabled):hover {
            background-color: ${props => props.theme["purple-300"]};
            transition: background 0.3s;
        }
    }
  }
`

export const CloseBtn = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme["grey-500"]};
  font-weight: bold;
    
    &:hover {
      color: ${props => props.theme["purple-500"]};
    }
`
export const Title = styled(Dialog.Title)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
interface TransactionTypeButtonProps {
  variant?: 'income' | 'outcome'
}
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background-color: ${props => props.theme["grey-800"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  border: 0;
  color: ${props => props.theme["grey-300"]};
  transition: background-color 0.3s, color 0.3s;

  svg {
    color: ${props => props.variant === 'income'? props.theme["green-500"] : props.theme["red-500"]};
  }

   &:hover {
    background-color: ${props => props.variant === 'income'? props.theme["green-700"] : props.theme["red-700"]};
    color: ${props => props.theme.white};
    svg {
      color: ${props => props.theme.white};
    }
   }

   &[data-state='checked'] {
    background-color: ${props => props.variant === 'income'? props.theme["green-700"] : props.theme["red-700"]};
    box-shadow: 0 0 3px 1px ${props => props.theme["grey-800"]};
    color: ${props => props.theme.white};
    svg {
      color: ${props => props.theme.white};
    }
    font-weight: bold;
   }
`

