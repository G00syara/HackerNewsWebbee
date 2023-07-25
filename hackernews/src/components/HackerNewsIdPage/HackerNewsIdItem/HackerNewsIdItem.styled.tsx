import { styled } from 'styled-components';

export const HackerNewsItemIdWrapper = styled.div`
  padding: 15px;
`;

export const HackerNewsItemIdContent = styled.div`
  border-radius: 5px;
  font-size: 14px;
`;
export const HackerNewsItemIdUserTime = styled.div`
  padding-top: 5px;
  margin-left: 3px;
  font-family:
    Andale Mono,
    monospace;
  font-size: 12px;
  font-weight: 400;
`;

export const HackerNewsItemIdCountComments = styled.div`
  padding-top: 5px;
  margin-left: 3px;
  font-family:
    Andale Mono,
    monospace;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #ff8c00;
  }
`;
