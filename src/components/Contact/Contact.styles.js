import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & label {
    display: flex;
    flex-direction: column;

    &:focus-within {
      color: var(--accent-color);
    }
  }

  & input,
  & textarea,
  & button {
    font-size: 1rem;
    padding: 0.3rem;
    margin-top: 0.5rem;
    background-color: transparent;
    color: var(--secondary-text-color);
    border: 0.1rem solid var(--tertiery-text-color);
    margin-bottom: 0.5rem;
  }

  & textarea {
    resize: none;
  }

  & button {
    background-color: var(--tertiery-text-color);
    color: var(--background-color);
    font-weight: 700;
    cursor: pointer;
    border-color: #9f8e8f;
  }
`;
