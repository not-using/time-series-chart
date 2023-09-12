import { styled } from 'styled-components';

export const FlexCenter = styled.div<{ $direction?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction ?? 'column'};
  justify-content: center;
  align-items: center;
`;
