import styled from "styled-components";

export const Card = styled.li`
  background: white;
  border-radius: 15px;
  padding: 20px;

  width: 320px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.$hard &&
    `
border:3px solid red;
transform:scale(1.03);
`}
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;

  object-fit: cover;

  border-radius: 12px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 15px 0;
`;

export const Description = styled.p`
  color: #666;
`;

export const Time = styled.p`
  font-weight: bold;
`;
