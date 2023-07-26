import styled from 'styled-components';

export const ButtonScrollUp = styled.button`
  position: fixed;
  z-index: 99999;
  background-color: #cc8400;
  right: 20px;
  bottom: 20px;
  border-radius: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 46px;
  &:hover {
    background-color: lightgray;
  }
`;

export const ButtonRefreshDataAPI = styled.button`
  position: fixed;
  z-index: 99999;
  background-color: #cc8400;
  right: 70px;
  bottom: 20px;
  border-radius: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 32px;
  &:hover {
    background-color: lightgray;
  }
`;
