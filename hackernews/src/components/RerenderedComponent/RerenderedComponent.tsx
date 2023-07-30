//Компонент нужен, чтобы поставить на него setInterval, чтобы страница обновлялась раз в минуту
//И при принудительной перезагрузке таймер setInterval сбрасывался
//Чтобы не было ситуации, когда пользователь спустя 55 секунд принудительно перезагрузил страницу
//И после этого у него через 5 секунд страница ещё раз обновилась

import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { RerenderedAlert } from '../../UI/Alert/Alert.styled';

//Без any, ругается
const RerenderedComponent: React.FC<{ callback: () => Promise<void> }> = ({ callback }): any => {
  const [fetchAlert, setFetchAlert] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(callback, 60 * 1000);
    const fetchAlertTimeout = setTimeout(() => {
      setFetchAlert(true);
    }, 54.5 * 1000);

    return () => {
      clearTimeout(fetchAlertTimeout);
      clearTimeout(intervalId);
    };
  }, [callback, fetchAlert]);

  return fetchAlert && <RerenderedAlert>Update after 5 second</RerenderedAlert>;
};

export default React.memo(RerenderedComponent);
