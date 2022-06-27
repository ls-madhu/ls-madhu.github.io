import styled from "styled-components";

export const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

export const SkillHeading = styled.h3`
  color: var(--tertiery-text-color);
  margin-bottom: 1rem;
`;

export const SkillRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const SkillTooltip = styled.span`
  position: absolute;
  font-size: 1rem;
  color: var(--secondary-text-color);
  left: 50%;
  top: -2rem;
  transform: translateX(-50%);
  color: var(--background-color);
  background-color: #fff;
  font-weight: 700;
  padding: 2px 5px;
  border-radius: 0.2rem;
  display: none;
  white-space: nowrap;

  &::after {
    content: "";
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.1rem;
    background-color: #fff;
    position: absolute;
    bottom: -0.25rem;
    left: 40%;
    transform: translateX(-50%);
    transform: rotate(45deg);
  }
`;

export const SkillIcon = styled.span`
  font-size: 2rem;
  padding: 0.8rem;
  border-radius: 0.2rem;
  background-color: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  position: relative;

  &:hover ${SkillTooltip} {
    display: inline;
  }
`;

export default SkillRow;
