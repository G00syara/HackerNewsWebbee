//Компонент нужен, чтобы поставить на него setInterval, чтобы страница обновлялась раз в минуту
//И при принудительной перезагрузке таймер setInterval сбрасывался
//Чтобы не было ситуации, когда пользователь спустя 55 секунд принудительно перезагрузил страницу
//И после этого у него через 5 секунд страница ещё раз обновилась

import { render } from '@testing-library/react';
import React, { useEffect, useCallback } from 'react';

//Без any, ругается
const RerenderedComponent: React.FC<{ callback: () => Promise<void> }> = ({ callback }): any => {
  useEffect(() => {
    const intervalId = setInterval(callback, 60 * 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [callback]);

  return;
};

export default React.memo(RerenderedComponent);
