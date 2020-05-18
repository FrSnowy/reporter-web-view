import dayjs from 'dayjs';
import _ from 'lodash';

export const getDates = (list = []) => {
  if (!list) return null;
  const maxDate = dayjs(list[0].server_fired_at.split('T')[0]);
  const arr = _.range(7).map(i => maxDate.add(-i, 'day')).reverse();
  return {
    labels: arr.map(date => date.format('DD.MM')),
    values: arr,
  }
}

export const getErrorsData = (list = [], datesArray = []) => {
  if (!list) return null;
  const dataByDates = { };

  datesArray.forEach(date => dataByDates[date.format('DD.MM.YYYY')] = 0);
  list
    .map(error => dayjs(error.server_fired_at.split('T')[0]))
    .forEach(date => {
      const formattedDate = date.format('DD.MM.YYYY');
      if (dataByDates[formattedDate] || dataByDates[formattedDate] === 0) dataByDates[formattedDate] += 1;
    });

  return Object.keys(dataByDates).map(key => dataByDates[key]);
}

export const getUsersData = (list = [], datesArray = []) => {
  if (!list) return null;
  const dataByDates = { };

  datesArray.forEach(date => dataByDates[date.format('DD.MM.YYYY')] = 0);
  list
    .map(user => dayjs(user.session_start.split('T')[0]))
    .forEach(date => {
      const formattedDate = date.format('DD.MM.YYYY');
      if (dataByDates[formattedDate] || dataByDates[formattedDate] === 0) dataByDates[formattedDate] += 1;
    });

  return Object.keys(dataByDates).map(key => dataByDates[key]);
}