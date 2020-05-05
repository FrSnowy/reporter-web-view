import dayjs from 'dayjs';

export const errorBlock = state => {
  const { errors = { } } = state.main;
  const { pending = false, list = null, error = null } = errors;

  let listLast = null;
  let listAll = null;

  if (list && list.length) {
    listAll = list;
    listLast = list.filter(error => {
      const dateOfFire = dayjs(error.server_fired_at);
      const currentDate = dayjs();

      return dateOfFire.isAfter(currentDate.add(-8, 'day'), 'day') && dateOfFire.isBefore(currentDate.add(1, 'day'), 'day');
    });
  }

  return { pending, listLast, listAll, error };
};