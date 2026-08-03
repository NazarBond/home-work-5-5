import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  gap: 20px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 24px;
`;

export const Description = styled.p`
  margin: 0 0 15px;
  color: #555;
`;
