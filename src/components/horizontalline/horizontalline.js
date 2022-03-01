import styled from "styled-components";

export const HorizontalLine = styled.div`
  background: ${({ color }) => color} 0% 0% no-repeat padding-box;
  border-radius: 2px;
  width: ${({ width }) => width};
  height: 4px;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};
`;
