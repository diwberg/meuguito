import styled from "styled-components";

export const SearchFarmContainer = styled.form`
  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;
    border-radius: 8px;
    border: 0;
    background: ${props => props.theme["grey-900"]};
    color: ${props => props.theme["grey-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["grey-500"]};
    }
    &:focus {
      box-shadow: 0 0 0 2px ${props => props.theme["purple-500"]};
    }
  }
  button {
    border-radius: 8px;
    display: flex;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${props => props.theme["purple-500"]};
    color: ${props => props.theme["purple-500"]};
    font-weight: bold;
    border-radius: 8px;

    &:hover {
        background-color: ${props => props.theme["purple-500"]};
        border-color: ${props => props.theme["purple-500"]};
        color: ${props => props.theme.white};
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }
  }
`