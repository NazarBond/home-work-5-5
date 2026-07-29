import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 16px;
`;

export const Time = styled.p`
  margin: 0;
  font-weight: 600;
`;
