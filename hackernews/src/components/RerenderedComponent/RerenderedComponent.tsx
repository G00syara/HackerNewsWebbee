//Компонент нужен, чтобы поставить на него setInterval, чтобы страница обновлялась раз в минуту
//И при принудительной перезагрузке таймер setInterval сбрасывался
//Чтобы не было ситуации, когда пользователь спустя 55 секунд принудительно перезагрузил страницу
//И после этого у него через 5 секунд страница ещё раз обновилась
import React, { useEffect, useState } from 'react';
import { RerenderedAlert } from '../../UI/Alert/Alert.styled';

//Без any, ругается
const RerenderedComponent: React.FC<{ callback: () => Promise<void> }> = ({ callback }): any => {
  const [fetchAlert, setFetchAlert] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(callback, 60 * 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [callback]);

  useEffect(() => {
    const AlertTimeoutId = setTimeout(() => {
      setFetchAlert(true);
    }, 54.5 * 1000);

    return () => {
      clearTimeout(AlertTimeoutId);
    };
  }, [fetchAlert]);

  return fetchAlert && <RerenderedAlert>Update after 5 second</RerenderedAlert>;
};

export default React.memo(RerenderedComponent);
