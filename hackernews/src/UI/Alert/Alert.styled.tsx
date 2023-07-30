import { styled } from 'styled-components';

export const RerenderedAlert = styled.div`
  position: fixed;
  right: 45%;
  top: 9px;
  background-color: #ed9121;
  z-index: 9999;
  border: 2px outset #a0a0a0;
  color: #353535;
  border-radius: 25px;
  font-size: 16px;
  padding: 5px 20px;
  font-size: 16px;

  animation: non-invisibility 0.5s;

  @keyframes non-invisibility {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
