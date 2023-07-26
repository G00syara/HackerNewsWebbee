import styled from 'styled-components';

export const StyledLoader = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid orange; /* Light grey */
  border-top: 10px solid #f3f3f3; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  position: absolute;
  left: 45%;
  top: 45%;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
