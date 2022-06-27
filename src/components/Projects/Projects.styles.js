import styled from "styled-components";

export const ProjectsContainer = styled.div``;

export const Project = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 1.5rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 1rem;
  box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent,
    inset 0.25px 1px 1px 0 hsl(48deg 97% 77% / 2%),
    0.3px 0.5px 0.7px 0 rgb(3 2 2 / 20%),
    0.4px 0.8px 1px -1.2px rgb(3 2 2 / 20%),
    1px 2px 2.5px -2.5px rgb(3 2 2 / 20%);
  display: flex;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent,
      inset 0.25px 1px 1px 0 hsl(48deg 97% 77% / 3%),
      0.3px 0.5px 0.7px 0 rgb(3 2 2 / 10%),
      0.8px 1.6px 2px -0.8px rgb(3 2 2 / 10%),
      2.1px 4.1px 5.2px -1.7px rgb(3 2 2 / 10%),
      5px 10px 12.6px -2.5px rgb(3 2 2 / 10%);
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const ProjectIcon = styled.div`
  font-size: 5rem;

  & svg {
    max-width: none;
  }
`;

export const ProjectInfo = styled.div``;

export const ProjectHeading = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.6rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0.6rem;
  color: var(--tertiery-text-color);
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ProjectLink = styled.a`
  border: 0.1rem solid var(--link-color);
  padding: 0.1rem 0.4rem;
  border-radius: 0.2rem;
  transition: all 0.1s ease-in;

  &:hover {
    text-decoration: none;
    border-color: currentColor;
  }
`;
