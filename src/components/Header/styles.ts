import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${ props => props.theme["grey-900"]};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NewTransactionButton = styled.button`
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
