//Компонент нужен, чтобы поставить на него setInterval, чтобы страница обновлялась раз в минуту
//И при принудительной перезагрузке таймер setInterval сбрасывался
//Чтобы не было ситуации, когда пользователь спустя 55 секунд принудительно перезагрузил страницу
//И после этого у него через 5 секунд страница ещё раз обновилась

import React from 'react';
import useRerenderedComponent from '../../hooks/useRerenderedComponent';

//Без any, ругается
const RerenderedComponent: React.FC<{ callback: () => Promise<void> }> = ({ callback }): any => {
  const rerender: void = useRerenderedComponent(callback);
  console.log('rerender');

  return rerender;
};

export default React.memo(RerenderedComponent);
