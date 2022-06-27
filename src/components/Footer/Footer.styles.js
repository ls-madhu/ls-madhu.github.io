import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  color: var(--tertiery-text-color);
  padding: 2rem 0;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
