import { styled } from 'styled-components';

export const HackerNewsItemWrapper = styled.div`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const HackerNewsItemTitle = styled.div`
  font-family:
    Andale Mono,
    monospace;
  font-size: 16px;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    color: #ff8c00;
  }
`;
export const HackerNewsItemOther = styled.div`
  font-family:
    Andale Mono,
    monospace;
  font-size: 12px;
  font-weight: 200;
`;
