import styled from "styled-components";

export const Badge = styled.span`
  padding: 8px 15px;
  border-radius: 20px;
  color: white;
  font-weight: bold;

  background-color: ${(props) => props.level === 0 && "green"};

  ${(props) => props.level === 1 && "orange"};

  ${(props) => props.level === 3 && "red"};
`;
