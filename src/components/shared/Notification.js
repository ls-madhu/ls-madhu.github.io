import React from "react";
import styled from "styled-components";

const StyledNotification = styled.div`
  background-color: ${({ type }) =>
    type === "success" ? "#198754" : "#dc3545"};
  color: "#fff";
  font-weight: 700;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
`;

const Notification = ({ children, type }) => {
  return <StyledNotification type={type}>{children}</StyledNotification>;
};

export default Notification;
