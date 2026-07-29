import styled from "styled-components";

export const Badge = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 700;
  width: fit-content;

  background-color: ${({ $level }) =>
    $level === 3 ? "#ff6b6b" : $level === 1 ? "#ffd93d" : "#6bcB77"};
`;
