import styled from "styled-components";

export const Icon = styled.span`
  background-image: linear-gradient(to top left, #a855f7cc, #fb7185cc);
  padding: 0.3rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
`;

export const Text = styled.span`
  position: relative;
  left: 0;
  transition: all 0.2s ease-in;
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Link = styled.a`
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--primary-text-color);
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    color: var(--primary-text-color);
    text-decoration: none;

    & ${Text} {
      left: 0.2rem;
    }

    & ${Icon} {
      transform: scale(1.1);
      border-radius: 0.6rem;
      box-shadow: 0 6px 15px -3px #a0a0a080, 0 4px 6px -4px #a0a0a080;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;

  @media screen and (max-width: 640px) {
    margin-top: 6rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.125rem;
  color: var(--secondary-text-color);
  margin-bottom: 2.5rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
`;
