import { styled } from 'styled-components';

export const HackerNewsIdFormWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #f6f7f6;
  height: 100%;
`;

export const HackerNewsIdFormContainer = styled.div`
  padding: 10px;
  background-color: #f6f7f6;
`;

export const HackerNewsIdFormTitle = styled.h1`
  font-family:
    Andale Mono,
    monospace;
  font-size: 16px;
  font-weight: 700;
`;

export const HackerNewsIdFormUrl = styled.a`
  text-decoration: none;
  color: black;
  font-family:
    Andale Mono,
    cursive;
  font-size: 12px;
  &:hover {
    color: orange;
  }
`;

export const HackerNewsIdFormOther = styled.p`
  font-family:
    Andale Mono,
    monospace;
  font-size: 12px;
  font-weight: 100;
`;
