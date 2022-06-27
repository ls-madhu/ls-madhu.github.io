import styled from "styled-components";

export const HeaderGradient = styled.div`
  background-image: linear-gradient(90deg, #fb7185cc, #d846ef91, #6555f7cc);
  box-shadow: 0 6px 15px -3px #fb7185cc, 0 4px 6px -4px #6555f7cc;
  filter: blur(64px);
  height: 40px;
  margin-bottom: 8rem;
  width: 768px;
  position: relative;
  bottom: 1rem;
  right: calc(768px - 640px - 1rem);

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
