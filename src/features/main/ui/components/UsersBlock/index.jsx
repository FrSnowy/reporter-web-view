import React from 'react';
import Card from '../../../../shared/Card';
import generateName from './generateUserName';

console.log(generateName());

const UserBlock = ({ pending }) => {
  if (pending) return null;

  return (
    <Card stretch title = 'Лента посетителей'/>
  );
}
export default UserBlock;