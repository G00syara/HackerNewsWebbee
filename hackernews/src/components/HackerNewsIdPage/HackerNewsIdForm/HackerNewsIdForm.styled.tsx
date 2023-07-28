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

export const HackerNewsIdFormError = styled.h1`
  left: 25%;
  top: 40%;
  position: absolute;

  background: linear-gradient(to right, #7953cd 20%, #00affa 30%, #0190cd 70%, #764ada 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate;
  @keyframes textShine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;
